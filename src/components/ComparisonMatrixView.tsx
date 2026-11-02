/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Scale, 
  Filter, 
  ArrowRight, 
  BookOpen, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GlossaryTerm, ComparisonDetail } from '../types/glossary';

interface ComparisonMatrixViewProps {
  terms: GlossaryTerm[];
  onSelectTerm: (term: GlossaryTerm) => void;
}

export const ComparisonMatrixView: React.FC<ComparisonMatrixViewProps> = ({
  terms,
  onSelectTerm
}) => {
  const [selectedFramework, setSelectedFramework] = useState<string>('all');
  const [selectedTermId, setSelectedTermId] = useState<string>('all');

  // Extract all unique frameworks
  const availableFrameworks = useMemo(() => {
    const set = new Set<string>();
    terms.forEach(t => {
      t.comparisons.forEach(c => set.add(c.framework));
    });
    return Array.from(set).sort();
  }, [terms]);

  // Flatten comparisons with their parent term
  const flattenedComparisons = useMemo(() => {
    const list: { term: GlossaryTerm; comparison: ComparisonDetail }[] = [];
    terms.forEach(term => {
      if (selectedTermId !== 'all' && term.id !== selectedTermId) return;

      term.comparisons.forEach(comparison => {
        if (selectedFramework !== 'all' && comparison.framework !== selectedFramework) return;
        list.push({ term, comparison });
      });
    });
    return list;
  }, [terms, selectedFramework, selectedTermId]);

  return (
    <div className="space-y-5 pb-20">
      {/* View Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-semibold tracking-wider uppercase">
          <Scale className="w-4 h-4 text-[#f59e0b]" />
          <span>Cross-Ideological Dialectic Matrix</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel'] tracking-wide">
          Philosophical Comparisons
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Direct head-to-head contrasts between Sarkar’s Proutist/Neohumanist definitions and orthodox schools of thought.
        </p>
      </div>

      {/* Filter Controls (Segmented Buttons) */}
      <div className="p-3.5 rounded-xl bg-[#091326] border border-[#1b3260] space-y-3">
        {/* Framework Selector */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Target Opposing Framework / Tradition:</span>
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => setSelectedFramework('all')}
              className={`min-h-[36px] px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                selectedFramework === 'all'
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-[#060d1c] text-slate-400 border border-[#1b3260] hover:text-slate-200'
              }`}
            >
              All Frameworks ({availableFrameworks.length})
            </button>
            {availableFrameworks.map(fw => (
              <button
                key={fw}
                onClick={() => setSelectedFramework(fw)}
                className={`min-h-[36px] px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  selectedFramework === fw
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-[#060d1c] text-slate-400 border border-[#1b3260] hover:text-slate-200'
                }`}
              >
                {fw.split('/')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Concept Selector Dropdown */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Filter by Specific Sarkar Concept:
          </span>
          <select
            value={selectedTermId}
            onChange={(e) => setSelectedTermId(e.target.value)}
            className="w-full p-2.5 rounded-lg bg-[#060d1c] border border-[#1b3260] text-xs text-slate-100 focus:border-[#38bdf8] focus:outline-none"
          >
            <option value="all">All Concepts ({terms.length})</option>
            {terms.map(t => (
              <option key={t.id} value={t.id}>
                {t.term}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparisons Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing {flattenedComparisons.length} Comparative Analysis Nodes
        </span>
        <span className="text-[#38bdf8] font-mono text-[11px]">
          Dialectic Contrast View
        </span>
      </div>

      {/* Comparison Cards Grid */}
      <div className="space-y-4">
        {flattenedComparisons.map(({ term, comparison }, idx) => (
          <div
            key={`${term.id}-${idx}`}
            className="rounded-2xl bg-[#081224] border border-[#1b3260] overflow-hidden shadow-lg hover:border-[#38bdf8]/40 transition-colors"
          >
            {/* Header: Concept & Framework */}
            <div className="p-3.5 bg-gradient-to-r from-[#0c1a36] to-[#081224] border-b border-[#1b3260] flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => onSelectTerm(term)}
                className="text-left group flex items-center gap-2 hover:text-[#38bdf8] transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-[#38bdf8]">
                  {term.term}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#16274a] text-[#f59e0b] border border-[#f59e0b]/20">
                vs. {comparison.framework}
              </span>
            </div>

            {/* Quick Contrast One-Liner */}
            <div className="px-4 py-2 bg-[#060d1c] border-b border-[#1b3260]/50 text-xs font-medium text-slate-200">
              <span className="text-[#f43f5e] font-bold">Key Contrast: </span>
              {comparison.keyContrastPoint}
            </div>

            {/* 2-Column Side-by-Side Comparison on larger screens */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Orthodox Framework */}
              <div className="space-y-1.5 p-3 rounded-xl bg-[#060d1c]/60 border border-[#1b3260]/40">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  {comparison.framework} Position:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {comparison.perspective}
                </p>
              </div>

              {/* Sarkar's Divergence */}
              <div className="space-y-1.5 p-3 rounded-xl bg-[#0b1c3d]/60 border border-[#2563eb]/40">
                <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                  <span>Sarkar’s Departure &amp; Radical Critique:</span>
                </span>
                <p className="text-xs text-slate-100 leading-relaxed font-medium">
                  {comparison.sarkarDivergence}
                </p>
              </div>
            </div>

            {/* Footer with view full term action */}
            <div className="px-4 py-2.5 bg-[#050b16] border-t border-[#1b3260]/60 flex items-center justify-between text-xs text-slate-400">
              <span className="truncate max-w-[240px]">
                Source: {term.canonicalSource}
              </span>
              <button
                onClick={() => onSelectTerm(term)}
                className="text-[#38bdf8] hover:text-white flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Read Full Term &amp; Axioms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {flattenedComparisons.length === 0 && (
          <div className="p-8 rounded-2xl bg-[#081224] border border-[#1b3260] text-center space-y-2">
            <h4 className="text-base font-bold text-slate-200">No comparisons match these filters</h4>
            <p className="text-xs text-slate-400">
              Try resetting the target framework or concept filter.
            </p>
            <button
              onClick={() => {
                setSelectedFramework('all');
                setSelectedTermId('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#2563eb] text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
