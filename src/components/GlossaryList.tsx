/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { 
  ChevronRight, 
  ArrowUpDown, 
  Scale, 
  ShieldCheck, 
  BookMarked,
  Quote,
  Volume2,
  Copy,
  Check,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GlossaryTerm, DomainCategory } from '../types/glossary';

interface GlossaryListProps {
  terms: GlossaryTerm[];
  onSelectTerm: (term: GlossaryTerm) => void;
  onOpenSearch: () => void;
  isDesktopWide?: boolean;
  onNavigateToGovernance?: (checklistId: string) => void;
}

export const GlossaryList: React.FC<GlossaryListProps> = ({
  terms,
  onSelectTerm,
  onOpenSearch,
  isDesktopWide = false,
  onNavigateToGovernance
}) => {
  const [selectedDomain, setSelectedDomain] = useState<DomainCategory | 'all'>('all');
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [activeDesktopTermId, setActiveDesktopTermId] = useState<string>(terms[0]?.id || '');
  const [activeComparisonIdx, setActiveComparisonIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const letterRefs = useRef<{ [letter: string]: HTMLDivElement | null }>({});

  // Filter by domain
  const filteredTerms = useMemo(() => {
    let result = terms;
    if (selectedDomain !== 'all') {
      result = result.filter(t => t.domain === selectedDomain);
    }
    return [...result].sort((a, b) => {
      const comparison = a.term.localeCompare(b.term);
      return sortAscending ? comparison : -comparison;
    });
  }, [terms, selectedDomain, sortAscending]);

  // Group by first letter
  const groupedTerms = useMemo(() => {
    const groups: { [letter: string]: GlossaryTerm[] } = {};
    for (const term of filteredTerms) {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    }
    return groups;
  }, [filteredTerms]);

  const activeLetters = Object.keys(groupedTerms).sort();
  const allAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const scrollToLetter = (letter: string) => {
    const el = letterRefs.current[letter];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Currently active term for desktop right pane inspector
  const activeDesktopTerm = useMemo(() => {
    return terms.find(t => t.id === activeDesktopTermId) || filteredTerms[0] || terms[0];
  }, [terms, activeDesktopTermId, filteredTerms]);

  const handleCopyCitation = (term: GlossaryTerm) => {
    const textToCopy = `"${term.sarkarExactDefinition}" — Prabhat Ranjan Sarkar (${term.canonicalSource})\nTerm: ${term.term}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (speaking) {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Santorini Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-[#1e3a6d] bg-[#070e1d] shadow-lg">
        <div className="relative h-36 sm:h-48 lg:h-52 w-full overflow-hidden">
          <img 
            src="/src/assets/images/santorini_caldera_night_1793558485134.jpg" 
            alt="Santorini Caldera Night Skyline"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d] via-[#070e1d]/60 to-transparent" />
          
          <div className="absolute bottom-3 left-4 right-4 space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-medium tracking-wider">
              <span>PRABHAT RANJAN SARKAR</span>
              <span aria-hidden="true">·</span>
              <span>1959–1990 CANON</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-white font-['Cinzel'] tracking-wide">
              Proutist &amp; Neo-Humanist Semantic Lexicon
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl line-clamp-2">
              Philosophical definitions, multi-framework ideological comparisons, and governance checklists in the nocturnal palette of Santorini.
            </p>
          </div>
        </div>

        {/* Quick Filter Bar (Segmented Controls) */}
        <div className="p-2 sm:p-3 bg-[#0a1428] border-t border-[#1b3260] flex flex-wrap items-center justify-between gap-2">
          {/* Segmented Domain Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'all', label: 'All Terms' },
              { id: 'prout', label: 'PROUT' },
              { id: 'neohumanism', label: 'Neohumanism' },
              { id: 'governance', label: 'Governance' },
              { id: 'psycho-spirituality', label: 'Psycho-Spiritual' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id as any)}
                className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  selectedDomain === tab.id
                    ? 'bg-[#2563eb] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1f3d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort Order Toggle */}
          <button
            onClick={() => setSortAscending(!sortAscending)}
            className="min-h-[38px] px-3 py-1.5 rounded-lg bg-[#0f1f3d] hover:bg-[#162d59] border border-[#1e3a6d] text-xs text-slate-300 flex items-center gap-1.5 transition-colors shrink-0"
            title="Toggle sort direction"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{sortAscending ? 'A → Z' : 'Z → A'}</span>
          </button>
        </div>
      </div>

      {/* Alphabet Scrubber Rail (Sticky horizontal letter strip) */}
      <div className="sticky top-14 z-20 py-2 px-1 bg-[#040814]/95 backdrop-blur-md border-y border-[#1b3260]/60 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 shrink-0">
          Jump:
        </span>
        <div className="flex items-center gap-1 shrink-0 pr-2">
          {allAlphabet.map(letter => {
            const hasTerms = activeLetters.includes(letter);
            return (
              <button
                key={letter}
                disabled={!hasTerms}
                onClick={() => scrollToLetter(letter)}
                className={`w-7 h-7 rounded text-xs font-semibold flex items-center justify-center transition-colors ${
                  hasTerms
                    ? 'text-white hover:bg-[#2563eb] hover:text-white bg-[#0e1d3b] border border-[#1b3260]'
                    : 'text-slate-600 opacity-40 cursor-not-allowed'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms Counter (Clean unboxed metadata §1.A) */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">{filteredTerms.length}</span>
          <span>Sarkar Concepts Indexed</span>
          <span aria-hidden="true">·</span>
          <span>Alphabetical Order</span>
        </div>
        <button
          onClick={onOpenSearch}
          className="text-[#38bdf8] hover:text-[#7dd3fc] text-xs font-medium"
        >
          Try Fuzzy Search →
        </button>
      </div>

      {/* Main Layout: Master-Detail on Desktop Wide View, or Single/Grid on Mobile */}
      <div className={isDesktopWide ? "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" : "space-y-6"}>
        {/* Left Master List */}
        <div className={isDesktopWide ? "lg:col-span-7 space-y-6" : "space-y-6"}>
          {activeLetters.map(letter => (
            <div 
              key={letter}
              ref={el => { letterRefs.current[letter] = el; }}
              className="space-y-2.5 pt-1"
            >
              {/* Letter Header */}
              <div className="flex items-center gap-3 px-1">
                <span className="text-xl font-black text-[#38bdf8] font-['Cinzel'] tracking-wider">
                  {letter}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1e3a6d] to-transparent" />
                <span className="text-[11px] text-slate-400 font-mono">
                  {groupedTerms[letter].length} {groupedTerms[letter].length === 1 ? 'concept' : 'concepts'}
                </span>
              </div>

              {/* Terms in this letter */}
              <div className={`grid gap-3 ${isDesktopWide ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                {groupedTerms[letter].map(term => {
                  const isDesktopSelected = isDesktopWide && activeDesktopTerm?.id === term.id;

                  return (
                    <div
                      key={term.id}
                      onClick={() => {
                        setActiveDesktopTermId(term.id);
                        if (!isDesktopWide) {
                          onSelectTerm(term);
                        }
                      }}
                      className={`santorini-card santorini-card-hover rounded-xl p-4 cursor-pointer text-left flex flex-col justify-between group transition-all ${
                        isDesktopSelected ? 'ring-2 ring-[#38bdf8] bg-[#0d1d3d] border-[#38bdf8]' : ''
                      }`}
                    >
                      <div className="space-y-2">
                        {/* Unboxed Metadata Header (§1.A) */}
                        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-semibold text-[#38bdf8] uppercase tracking-wider">
                              {term.categoryLabel}
                            </span>
                            {term.sanskritOrBengali && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="text-[#f59e0b] font-medium truncate">
                                  {term.sanskritOrBengali}
                                </span>
                              </>
                            )}
                          </div>
                          <ChevronRight className={`w-4 h-4 transition-all shrink-0 ${
                            isDesktopSelected ? 'text-[#38bdf8] translate-x-1' : 'text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5'
                          }`} />
                        </div>

                        {/* Term Title */}
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-[#38bdf8] transition-colors leading-snug">
                          {term.term}
                        </h3>

                        {/* Concise Summary */}
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {term.shortDefinition}
                        </p>
                      </div>

                      {/* Card Footer Badges / Features (Clean unboxed separators) */}
                      <div className="mt-3.5 pt-2.5 border-t border-[#1b3260]/60 flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Scale className="w-3.5 h-3.5 text-[#f59e0b]" />
                            <span>{term.comparisons.length} Comparisons</span>
                          </span>
                          {term.governanceLinks.length > 0 && (
                            <span className="flex items-center gap-1 text-[#38bdf8]">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Governance Ready</span>
                            </span>
                          )}
                        </div>
                        <span className="text-[#38bdf8] group-hover:underline text-xs font-medium">
                          {isDesktopWide ? (isDesktopSelected ? 'Viewing →' : 'Inspect →') : 'Examine →'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="p-8 rounded-2xl bg-[#081224] border border-[#1b3260] text-center space-y-3">
              <BookMarked className="w-8 h-8 text-slate-500 mx-auto" />
              <h4 className="text-base font-bold text-slate-200">No concepts found in this filter</h4>
              <p className="text-xs text-slate-400">
                Try switching domain categories or use our fuzzy search to find closest concepts.
              </p>
              <button
                onClick={() => setSelectedDomain('all')}
                className="px-4 py-2 rounded-lg bg-[#2563eb] text-white text-xs font-medium"
              >
                Reset to All Concepts
              </button>
            </div>
          )}
        </div>

        {/* Right Desktop Detail Inspector Pane (Sticky Workbench for 1440px desktop) */}
        {isDesktopWide && activeDesktopTerm && (
          <div className="hidden lg:block lg:col-span-5 sticky top-20 rounded-2xl bg-[#081329] border border-[#1e3a6d] shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar">
            {/* Inspector Top Bar */}
            <div className="space-y-1 border-b border-[#1b3260] pb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
                  {activeDesktopTerm.categoryLabel}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleSpeak(activeDesktopTerm.sarkarExactDefinition)}
                    title="Read definition aloud"
                    className="p-1.5 rounded-lg bg-[#112248] text-slate-300 hover:text-[#38bdf8] hover:bg-[#1a336e] transition-colors"
                  >
                    <Volume2 className={`w-4 h-4 ${speaking ? 'text-[#38bdf8] animate-pulse' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleCopyCitation(activeDesktopTerm)}
                    title="Copy Citation"
                    className="p-1.5 rounded-lg bg-[#112248] text-slate-300 hover:text-white hover:bg-[#1a336e] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => onSelectTerm(activeDesktopTerm)}
                    title="Expand into full modal view"
                    className="px-2.5 py-1 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center gap-1"
                  >
                    <span>Modal</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <h2 className="text-xl font-extrabold text-white font-['Cinzel'] leading-tight">
                {activeDesktopTerm.term}
              </h2>

              {activeDesktopTerm.sanskritOrBengali && (
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-[#f59e0b] font-medium">{activeDesktopTerm.sanskritOrBengali}</span>
                  {activeDesktopTerm.phonetic && (
                    <span className="text-slate-400 italic">[{activeDesktopTerm.phonetic}]</span>
                  )}
                </div>
              )}
            </div>

            {/* Sarkar Canonical Definition */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#0c1830] to-[#071021] border border-[#2563eb]/40 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#38bdf8]">
                <Quote className="w-4 h-4 text-[#38bdf8]" />
                <span>CANONICAL SARKAR DEFINITION</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-100 font-serif leading-relaxed italic">
                "{activeDesktopTerm.sarkarExactDefinition}"
              </blockquote>
              <div className="text-[11px] text-[#f59e0b] font-mono pt-1 border-t border-[#1b3260]/40">
                Source: {activeDesktopTerm.canonicalSource}
              </div>
            </div>

            {/* 3 Semantic Axioms */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Layers className="w-3.5 h-3.5 text-[#f43f5e]" />
                <span>Semantic Axioms</span>
              </div>
              <div className="space-y-1.5">
                {activeDesktopTerm.semanticAxioms.map((axiom, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#060e1d] border border-[#1b3260]/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-[#38bdf8] font-bold mt-0.5">{idx + 1}.</span>
                    <span>{axiom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Philosophical Comparison selector in inspector */}
            <div className="space-y-2 pt-1 border-t border-[#1b3260]/60">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Ideological Contrast</span>
                </span>
                <span className="text-[10px] text-[#f59e0b] font-mono">
                  {activeDesktopTerm.comparisons.length} Views
                </span>
              </div>

              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                {activeDesktopTerm.comparisons.map((c, i) => (
                  <button
                    key={c.framework}
                    onClick={() => setActiveComparisonIdx(i)}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                      activeComparisonIdx === i
                        ? 'bg-[#1d4ed8] text-white'
                        : 'bg-[#060d1c] text-slate-400 hover:text-slate-200 border border-[#1b3260]'
                    }`}
                  >
                    {c.framework.split('/')[0].trim()}
                  </button>
                ))}
              </div>

              {activeDesktopTerm.comparisons[activeComparisonIdx] && (
                <div className="p-3 rounded-lg bg-[#060e1d] border border-[#1b3260] space-y-2 text-xs">
                  <div className="text-[11px] text-[#f43f5e] font-semibold">
                    Contrast: {activeDesktopTerm.comparisons[activeComparisonIdx].keyContrastPoint}
                  </div>
                  <div className="text-slate-400 text-[11px] line-clamp-2">
                    <strong className="text-slate-300">{activeDesktopTerm.comparisons[activeComparisonIdx].framework}: </strong>
                    {activeDesktopTerm.comparisons[activeComparisonIdx].perspective}
                  </div>
                  <div className="text-slate-200 text-[11px] bg-[#0c1a36] p-2 rounded border border-[#2563eb]/30">
                    <strong className="text-[#38bdf8]">Sarkar Departure: </strong>
                    {activeDesktopTerm.comparisons[activeComparisonIdx].sarkarDivergence}
                  </div>
                </div>
              )}
            </div>

            {/* Governance Link */}
            {activeDesktopTerm.governanceLinks.length > 0 && onNavigateToGovernance && (
              <div className="p-3 rounded-xl bg-[#09152e] border border-[#2563eb]/40 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-200 block">Governance Directive</span>
                  <span className="text-slate-400 text-[11px]">Audit in implementation matrix</span>
                </div>
                <button
                  onClick={() => onNavigateToGovernance(activeDesktopTerm.governanceLinks[0].checklistId)}
                  className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white font-semibold text-xs flex items-center gap-1 hover:bg-[#1d4ed8] transition-colors"
                >
                  <span>Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
