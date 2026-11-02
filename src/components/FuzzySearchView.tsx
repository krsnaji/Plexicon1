/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  Compass, 
  ChevronRight, 
  Scale, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { GlossaryTerm, FuzzySearchResult } from '../types/glossary';
import { searchGlossaryTerms, getClosestConcepts } from '../utils/fuzzySearch';

interface FuzzySearchViewProps {
  terms: GlossaryTerm[];
  onSelectTerm: (term: GlossaryTerm) => void;
}

export const FuzzySearchView: React.FC<FuzzySearchViewProps> = ({
  terms,
  onSelectTerm
}) => {
  const [query, setQuery] = useState('');

  // Sample quick tests for fuzzy tolerance and conceptual discovery
  const sampleQueries = [
    { label: "sadvpra (typo for Sadvipra)", query: "sadvpra" },
    { label: "democrazy (typo)", query: "democrazy" },
    { label: "chakras & hormones", query: "chakras" },
    { label: "surplus wealth cap", query: "surplus wealth" },
    { label: "animal rights", query: "animal rights" },
    { label: "geo sentiment", query: "geo sentiment" }
  ];

  // Search results
  const searchResults = useMemo<FuzzySearchResult[]>(() => {
    return searchGlossaryTerms(query, terms);
  }, [query, terms]);

  // Closest concepts generator
  const closestConcepts = useMemo(() => {
    return getClosestConcepts(query, terms, 4);
  }, [query, terms]);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="space-y-5 pb-20">
      {/* Header Info */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-[#38bdf8]" />
          <span>Intelligent Semantic &amp; Fuzzy Search</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel'] tracking-wide">
          Concept Discovery &amp; Fuzzy Match
        </h2>
        <p className="text-xs text-slate-300">
          Tolerates misspellings, transliterations, Sanskrit root variants, and returns closest conceptual neighbors.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-[#38bdf8]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms, typos (e.g. 'sadvpra'), definitions, or tags..."
          className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#081329] border border-[#1e3a6d] focus:border-[#38bdf8] text-sm text-slate-100 placeholder-slate-500 focus:outline-none shadow-lg shadow-[#040814]"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Test Chips for Fuzzy Search Demonstration */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Try Typo &amp; Concept Queries:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {sampleQueries.map((sample) => (
            <button
              key={sample.label}
              onClick={() => setQuery(sample.query)}
              className="text-xs px-2.5 py-1 rounded-md bg-[#0c1830] hover:bg-[#152a55] border border-[#1b3260] text-slate-300 transition-colors"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>

      {/* Output of Closest Concepts (Prominent requirement) */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0c1a36] to-[#071021] border border-[#2563eb]/50 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#38bdf8]" />
            <span>Output of Closest Concepts &amp; Nearest Neighbors</span>
          </div>
          <span className="text-[11px] font-mono text-[#f59e0b]">
            {query ? `Relative to "${query}"` : 'Foundational Core'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {closestConcepts.map(({ term, similarity, reason }) => (
            <div
              key={term.id}
              onClick={() => onSelectTerm(term)}
              className="p-3 rounded-xl bg-[#060d1c]/80 hover:bg-[#0c1a36] border border-[#1b3260] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1 text-[11px]">
                  <span className="text-[#38bdf8] font-semibold uppercase tracking-wider truncate">
                    {term.categoryLabel}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 shrink-0">
                    {similarity}% Match
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-100 group-hover:text-[#38bdf8] transition-colors">
                  {term.term}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-1">
                  {term.shortDefinition}
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-[#1b3260]/40 flex items-center justify-between text-[10px] text-slate-400">
                <span className="italic truncate text-slate-400">{reason}</span>
                <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform flex items-center">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Search Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} {query && `for "${query}"`}
        </span>
        {query && (
          <span className="text-[11px] text-[#f43f5e] font-medium">
            Fuzzy Ranked by Match Strength
          </span>
        )}
      </div>

      {/* Main Fuzzy Search Result Cards */}
      <div className="space-y-2.5">
        {searchResults.map(({ term, score, matchedField, highlightText }) => (
          <div
            key={term.id}
            onClick={() => onSelectTerm(term)}
            className="santorini-card santorini-card-hover rounded-xl p-4 cursor-pointer text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="font-semibold text-[#38bdf8] uppercase tracking-wider">
                  {term.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-mono font-bold">
                  {score}% Relevance
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 capitalize">
                  Matched via {matchedField.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 group-hover:text-[#38bdf8] transition-colors">
                {term.term}
              </h3>

              {highlightText && (
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 bg-[#060e1d] p-2 rounded border border-[#1b3260]/40">
                  {highlightText}
                </p>
              )}

              {/* Zero-Pill tags */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-400 pt-0.5">
                {term.tags.slice(0, 4).map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < Math.min(term.tags.length, 4) - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-[#1b3260]/60 pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>{term.comparisons.length}</span>
                </span>
                {term.governanceLinks.length > 0 && (
                  <span className="flex items-center gap-1 text-[#38bdf8]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Gov</span>
                  </span>
                )}
              </div>
              <span className="text-xs text-[#38bdf8] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                <span>Details</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}

        {searchResults.length === 0 && (
          <div className="p-8 rounded-2xl bg-[#081224] border border-[#1e3a6d] text-center space-y-3">
            <TrendingUp className="w-8 h-8 text-[#f43f5e] mx-auto" />
            <h4 className="text-base font-bold text-slate-200">No Direct Results for "{query}"</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our semantic proximity engine suggests reviewing the closest concepts above, or try searching for core keywords like "wealth", "democracy", "sadvipra", or "ecology".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
