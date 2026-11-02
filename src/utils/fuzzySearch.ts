/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GlossaryTerm, FuzzySearchResult } from '../types/glossary';

/**
 * Calculates Damerau-Levenshtein distance between two strings
 * Handles insertions, deletions, substitutions, and adjacent transpositions.
 */
export function damerauLevenshteinDistance(source: string, target: string): number {
  const src = source.toLowerCase().trim();
  const tgt = target.toLowerCase().trim();

  const srcLen = src.length;
  const tgtLen = tgt.length;

  if (srcLen === 0) return tgtLen;
  if (tgtLen === 0) return srcLen;

  // Initialize matrix
  const matrix: number[][] = Array.from({ length: srcLen + 1 }, () => 
    new Array(tgtLen + 1).fill(0)
  );

  for (let i = 0; i <= srcLen; i++) matrix[i][0] = i;
  for (let j = 0; j <= tgtLen; j++) matrix[0][j] = j;

  for (let i = 1; i <= srcLen; i++) {
    for (let j = 1; j <= tgtLen; j++) {
      const cost = src[i - 1] === tgt[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,       // deletion
        matrix[i][j - 1] + 1,       // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );

      // Transposition check
      if (
        i > 1 &&
        j > 1 &&
        src[i - 1] === tgt[j - 2] &&
        src[i - 2] === tgt[j - 1]
      ) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
      }
    }
  }

  return matrix[srcLen][tgtLen];
}

/**
 * Normalizes similarity between 0 and 100 based on Levenshtein distance
 */
export function stringSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();
  if (s1 === s2) return 100;
  if (!s1 || !s2) return 0;

  const maxLen = Math.max(s1.length, s2.length);
  const distance = damerauLevenshteinDistance(s1, s2);
  const ratio = (maxLen - distance) / maxLen;
  return Math.max(0, Math.round(ratio * 100));
}

/**
 * Searches terms using multi-layered fuzzy matching:
 * 1. Exact string containment (highest boost)
 * 2. Word prefix and token intersection (high boost)
 * 3. Damerau-Levenshtein edit distance for typo tolerance
 * 4. Tag and canonical source matching
 */
export function searchGlossaryTerms(
  query: string,
  terms: GlossaryTerm[]
): FuzzySearchResult[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) {
    return terms.map(term => ({
      term,
      score: 100,
      matchedField: 'term'
    }));
  }

  const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);
  const results: FuzzySearchResult[] = [];

  for (const term of terms) {
    const termClean = term.term.toLowerCase();
    const sanskritClean = (term.sanskritOrBengali || '').toLowerCase();
    const phoneticClean = (term.phonetic || '').toLowerCase();
    const shortDefClean = term.shortDefinition.toLowerCase();
    const fullDefClean = term.sarkarExactDefinition.toLowerCase();
    const tagsClean = term.tags.map(t => t.toLowerCase());

    let maxScore = 0;
    let matchedField: FuzzySearchResult['matchedField'] = 'term';
    let highlightSnippet = '';

    // 1. Check Exact Match in Term Name
    if (termClean === cleanQuery) {
      maxScore = 100;
      matchedField = 'term';
    } else if (termClean.startsWith(cleanQuery)) {
      maxScore = 95;
      matchedField = 'term';
    } else if (termClean.includes(cleanQuery)) {
      maxScore = 90;
      matchedField = 'term';
    } else {
      // Fuzzy match on Term Name
      const termSim = stringSimilarity(cleanQuery, termClean.split('(')[0].trim());
      if (termSim > 55) {
        maxScore = Math.max(maxScore, termSim);
        matchedField = 'term';
      }

      // Check Sanskrit / Phonetic
      if (sanskritClean.includes(cleanQuery) || phoneticClean.includes(cleanQuery)) {
        maxScore = Math.max(maxScore, 88);
        matchedField = 'sanskrit';
      } else {
        const sanskritSim = stringSimilarity(cleanQuery, phoneticClean);
        if (sanskritSim > 60) {
          maxScore = Math.max(maxScore, sanskritSim * 0.9);
          matchedField = 'sanskrit';
        }
      }
    }

    // 2. Check Tags
    for (const tag of tagsClean) {
      if (tag === cleanQuery) {
        if (maxScore < 85) {
          maxScore = 85;
          matchedField = 'tags';
        }
      } else if (tag.includes(cleanQuery)) {
        if (maxScore < 80) {
          maxScore = 80;
          matchedField = 'tags';
        }
      } else {
        const tagSim = stringSimilarity(cleanQuery, tag);
        if (tagSim > 70 && maxScore < tagSim * 0.8) {
          maxScore = tagSim * 0.8;
          matchedField = 'tags';
        }
      }
    }

    // 3. Check Definitions (Token matching and containment)
    const allQueryTokensInShortDef = queryTokens.every(tok => shortDefClean.includes(tok));
    if (allQueryTokensInShortDef && queryTokens.length > 0) {
      if (maxScore < 78) {
        maxScore = 78;
        matchedField = 'shortDefinition';
        highlightSnippet = extractSnippet(term.shortDefinition, cleanQuery);
      }
    } else if (shortDefClean.includes(cleanQuery)) {
      if (maxScore < 75) {
        maxScore = 75;
        matchedField = 'shortDefinition';
        highlightSnippet = extractSnippet(term.shortDefinition, cleanQuery);
      }
    }

    // 4. Exact Definition / Source Check
    if (fullDefClean.includes(cleanQuery) && maxScore < 70) {
      maxScore = 70;
      matchedField = 'sarkarExactDefinition';
      highlightSnippet = extractSnippet(term.sarkarExactDefinition, cleanQuery);
    }

    // 5. Comparison Frameworks Check
    for (const comp of term.comparisons) {
      const frameworkText = `${comp.framework} ${comp.perspective} ${comp.sarkarDivergence}`.toLowerCase();
      if (frameworkText.includes(cleanQuery)) {
        if (maxScore < 65) {
          maxScore = 65;
          matchedField = 'comparisons';
          highlightSnippet = `${comp.framework}: ${extractSnippet(comp.sarkarDivergence, cleanQuery)}`;
        }
        break;
      }
    }

    // 6. Multi-token partial score
    if (maxScore === 0 && queryTokens.length > 1) {
      let matchedTokensCount = 0;
      for (const tok of queryTokens) {
        if (termClean.includes(tok) || shortDefClean.includes(tok) || tagsClean.some(t => t.includes(tok))) {
          matchedTokensCount++;
        }
      }
      if (matchedTokensCount > 0) {
        maxScore = Math.round((matchedTokensCount / queryTokens.length) * 60);
        matchedField = 'shortDefinition';
      }
    }

    if (maxScore >= 40) {
      results.push({
        term,
        score: Math.min(100, Math.round(maxScore)),
        matchedField,
        highlightText: highlightSnippet || term.shortDefinition
      });
    }
  }

  // Sort descending by score, then alphabetically
  return results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.term.term.localeCompare(b.term.term);
  });
}

/**
 * Returns the closest semantic or textual concepts for a given query,
 * especially useful when user makes a typo or searches a concept.
 */
export function getClosestConcepts(
  query: string,
  terms: GlossaryTerm[],
  topN: number = 4
): { term: GlossaryTerm; similarity: number; reason: string }[] {
  const clean = query.toLowerCase().trim();
  if (!clean) {
    // If empty query, return prominent foundational concepts
    const foundational = terms.filter(t => 
      ['economic-democracy', 'neohumanism', 'sadvipra', 'five-fundamental-principles'].includes(t.id)
    );
    return foundational.map(t => ({
      term: t,
      similarity: 100,
      reason: 'Foundational Proutist / Neohumanist Pillar'
    }));
  }

  const scored = terms.map(term => {
    const rawName = term.term.split('(')[0].trim().toLowerCase();
    const englishName = term.term.toLowerCase();
    const phonetic = (term.phonetic || '').toLowerCase();
    const tags = term.tags.map(t => t.toLowerCase());

    const simName = stringSimilarity(clean, rawName);
    const simFull = stringSimilarity(clean, englishName);
    const simPhonetic = stringSimilarity(clean, phonetic);
    const maxTagSim = Math.max(0, ...tags.map(t => stringSimilarity(clean, t)));

    const bestSim = Math.max(simName, simFull, simPhonetic, maxTagSim);

    let reason = 'Closest match to input';
    if (simPhonetic === bestSim && simPhonetic > 60) {
      reason = 'Phonetic & pronunciation closeness';
    } else if (maxTagSim === bestSim && maxTagSim > 60) {
      reason = 'Topical & conceptual tag similarity';
    } else if (bestSim > 75) {
      reason = 'Close spelling & semantic affinity';
    } else {
      reason = 'Nearest conceptual neighbor';
    }

    return {
      term,
      similarity: bestSim,
      reason
    };
  });

  // Sort descending by similarity
  scored.sort((a, b) => b.similarity - a.similarity);

  return scored.slice(0, topN);
}

/**
 * Extracts a concise snippet centered around the matching query keyword
 */
function extractSnippet(fullText: string, keyword: string, radius: number = 55): string {
  const lower = fullText.toLowerCase();
  const index = lower.indexOf(keyword.toLowerCase());
  if (index === -1) {
    return fullText.slice(0, radius * 2) + (fullText.length > radius * 2 ? '...' : '');
  }

  const start = Math.max(0, index - radius);
  const end = Math.min(fullText.length, index + keyword.length + radius);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < fullText.length ? '...' : '';

  return `${prefix}${fullText.substring(start, end)}${suffix}`;
}
