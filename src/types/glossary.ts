/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DomainCategory = 
  | 'prout' 
  | 'neohumanism' 
  | 'governance' 
  | 'psycho-spirituality';

export interface ComparisonDetail {
  framework: string; // e.g. "Capitalism / Neoliberalism", "Marxism / State Socialism", etc.
  perspective: string; // How that framework views or handles the concept
  sarkarDivergence: string; // Sarkar's explicit critique or fundamental departure
  keyContrastPoint: string; // Summary 1-liner distinction
}

export interface GovernanceLink {
  domainId: string;
  checklistId: string;
  rationale: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  sanskritOrBengali?: string;
  phonetic?: string;
  domain: DomainCategory;
  categoryLabel: string;
  shortDefinition: string;
  sarkarExactDefinition: string;
  canonicalSource: string; // e.g. "Idea and Ideology (1959)", "The Liberation of Intellect: Neohumanism (1982)"
  semanticAxioms: string[];
  governanceImplication: string;
  comparisons: ComparisonDetail[];
  relatedTermIds: string[];
  governanceLinks: GovernanceLink[];
  tags: string[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  directive: string;
  riskOfOmission: string;
  verificationAudit: string[];
  sarkarWarning: string;
}

export interface GovernanceDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sarkarPrinciple: string;
  relatedTermIds: string[];
  items: ChecklistItem[];
}

export type ChecklistItemStatus = 'unreviewed' | 'in_progress' | 'compliant' | 'flagged';

export interface UserChecklistState {
  [itemId: string]: {
    status: ChecklistItemStatus;
    notes: string;
    updatedAt: string;
  };
}

export interface FuzzySearchResult {
  term: GlossaryTerm;
  score: number; // 0 to 100
  matchedField: 'term' | 'shortDefinition' | 'sarkarExactDefinition' | 'tags' | 'sanskrit' | 'comparisons';
  highlightText?: string;
}
