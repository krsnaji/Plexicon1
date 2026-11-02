/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  BookMarked, 
  Quote, 
  Layers, 
  Scale, 
  ShieldAlert, 
  ArrowRight, 
  Check, 
  Copy, 
  Volume2
} from 'lucide-react';
import { GlossaryTerm } from '../types/glossary';

interface TermDetailModalProps {
  term: GlossaryTerm | null;
  allTerms: GlossaryTerm[];
  onClose: () => void;
  onSelectTerm: (term: GlossaryTerm) => void;
  onNavigateToGovernanceChecklist?: (checklistId: string) => void;
}

export const TermDetailModal: React.FC<TermDetailModalProps> = ({
  term,
  allTerms,
  onClose,
  onSelectTerm,
  onNavigateToGovernanceChecklist
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparisons' | 'governance'>('overview');
  const [selectedComparisonIdx, setSelectedComparisonIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  if (!term) return null;

  const handleCopyCitation = () => {
    const textToCopy = `"${term.sarkarExactDefinition}" — Prabhat Ranjan Sarkar (${term.canonicalSource})\nTerm: ${term.term}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (speaking) {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(term.term.split('(')[0]);
      utterance.rate = 0.9;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Find related terms
  const relatedTerms = allTerms.filter(t => term.relatedTermIds.includes(t.id));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full sm:max-w-2xl bg-[#091224] border border-[#1e3a6d] sm:rounded-2xl rounded-t-3xl max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl shadow-[#040814] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle affordance */}
        <div className="w-12 h-1 bg-[#1e3a6d] rounded-full mx-auto my-2.5 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="px-5 pt-3 pb-4 border-b border-[#1b3260]/80 flex items-start justify-between gap-4 bg-gradient-to-b from-[#0f1d38] to-[#091224] shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#38bdf8]">
              <span className="font-semibold uppercase tracking-wider">{term.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{term.canonicalSource}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-['Cinzel'] tracking-wide">
              {term.term}
            </h2>
            {term.sanskritOrBengali && (
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="text-[#f59e0b] font-medium">{term.sanskritOrBengali}</span>
                {term.phonetic && (
                  <>
                    <span aria-hidden="true" className="text-slate-500">/</span>
                    <span className="text-slate-400 italic">[{term.phonetic}]</span>
                  </>
                )}
                <button
                  onClick={handleSpeak}
                  className="ml-1 p-1 rounded hover:bg-[#1b3260] text-slate-400 hover:text-[#38bdf8] transition-colors"
                  title="Pronounce term"
                  aria-label="Pronounce term"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${speaking ? 'text-[#38bdf8] animate-pulse' : ''}`} />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyCitation}
              title="Copy definition citation"
              className="min-h-[40px] min-w-[40px] rounded-lg text-slate-400 hover:text-white hover:bg-[#16274a] flex items-center justify-center transition-colors"
              aria-label="Copy citation"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="min-h-[40px] min-w-[40px] rounded-lg text-slate-400 hover:text-white hover:bg-[#16274a] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Segmented Tab Controls (Buttons with working handlers) */}
        <div className="flex items-center gap-1 px-4 py-2 bg-[#060e1d] border-b border-[#1b3260]/60 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'overview'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1d38]'
            }`}
          >
            Sarkar Definition &amp; Axioms
          </button>
          <button
            onClick={() => setActiveTab('comparisons')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
              activeTab === 'comparisons'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1d38]'
            }`}
          >
            <span>Philosophical Comparisons</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#0b172e] text-[#38bdf8]">
              {term.comparisons.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('governance')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'governance'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-[#0f1d38]'
            }`}
          >
            Governance &amp; Checklist
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Sarkar Exact Canonical Definition Callout */}
              <div className="rounded-xl p-4 bg-gradient-to-br from-[#0c1830] to-[#071021] border border-[#2563eb]/40 shadow-inner">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#38bdf8]">
                  <Quote className="w-4 h-4 text-[#38bdf8]" />
                  <span>SARKAR’S CANONICAL DEFINITION</span>
                </div>
                <blockquote className="text-sm sm:text-base text-slate-100 font-serif leading-relaxed italic">
                  "{term.sarkarExactDefinition}"
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-[#1b3260]/40 pt-2">
                  <span className="text-[#f59e0b] font-medium">Source: {term.canonicalSource}</span>
                  <button
                    onClick={handleCopyCitation}
                    className="hover:text-slate-200 flex items-center gap-1"
                  >
                    {copied ? 'Copied to clipboard' : 'Copy quote'}
                  </button>
                </div>
              </div>

              {/* Semantic Core Axioms */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-[#f43f5e]" />
                  <span>Semantic Axioms &amp; Systemic Dynamics</span>
                </div>
                <div className="space-y-2">
                  {term.semanticAxioms.map((axiom, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-[#0c1830]/70 border border-[#1b3260]/50 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-[#38bdf8] font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}.
                      </span>
                      <span>{axiom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governance Brief */}
              <div className="p-3.5 rounded-xl bg-[#0d1c3a]/50 border border-[#1e3a6d]/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Governance Reality &amp; Institutional Rule</span>
                  </div>
                  {onNavigateToGovernanceChecklist && term.governanceLinks.length > 0 && (
                    <button
                      onClick={() => onNavigateToGovernanceChecklist(term.governanceLinks[0].checklistId)}
                      className="text-xs text-[#f43f5e] hover:text-[#fb7185] flex items-center gap-1 font-semibold"
                    >
                      <span>Open Checklist</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {term.governanceImplication}
                </p>
              </div>

              {/* Tags Clean Metadata (Zero-Pill discipline §1.A) */}
              <div className="pt-2 border-t border-[#1b3260]/40 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Semantic Tags:</span>
                {term.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="text-[#38bdf8]">{tag}</span>
                    {i < term.tags.length - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          {activeTab === 'comparisons' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-300 leading-relaxed bg-[#0b172e] p-3 rounded-lg border border-[#1b3260]">
                How Sarkar’s formulation fundamentally diverges from orthodox philosophies, political economies, and psychologies:
              </div>

              {/* Selector for comparison frameworks */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {term.comparisons.map((comp, idx) => (
                  <button
                    key={comp.framework}
                    onClick={() => setSelectedComparisonIdx(idx)}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                      selectedComparisonIdx === idx
                        ? 'bg-[#1d4ed8] text-white border border-[#38bdf8]/40 shadow-sm'
                        : 'bg-[#0c1830] text-slate-400 border border-[#1b3260] hover:text-slate-200'
                    }`}
                  >
                    {comp.framework.split('/')[0].trim()}
                  </button>
                ))}
              </div>

              {/* Active Comparison Deep-Dive */}
              {term.comparisons[selectedComparisonIdx] && (
                <div className="rounded-xl bg-[#0c1830] border border-[#1e3a6d] p-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1b3260] pb-2.5">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#f59e0b]" />
                      <h4 className="text-sm font-bold text-slate-100">
                        {term.comparisons[selectedComparisonIdx].framework}
                      </h4>
                    </div>
                    <span className="text-[11px] font-semibold text-[#f59e0b] px-2 py-0.5 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                      Contrast {selectedComparisonIdx + 1} of {term.comparisons.length}
                    </span>
                  </div>

                  {/* Summary 1-Liner Distinction */}
                  <div className="p-2.5 rounded-lg bg-[#071021] border border-[#1b3260]/60 text-xs font-medium text-slate-200">
                    <span className="text-[#f43f5e] font-bold">Key Distinction: </span>
                    {term.comparisons[selectedComparisonIdx].keyContrastPoint}
                  </div>

                  {/* Orthodox Framework Position */}
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Orthodox / Conventional Perspective
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#081329] p-3 rounded-lg border border-[#16274a]">
                      {term.comparisons[selectedComparisonIdx].perspective}
                    </p>
                  </div>

                  {/* Sarkar's Explicit Divergence */}
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                      Sarkar's Departure &amp; Radical Critique
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-100 leading-relaxed bg-[#0b1c3d] p-3 rounded-lg border border-[#2563eb]/30">
                      {term.comparisons[selectedComparisonIdx].sarkarDivergence}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#0c1830] border border-[#1e3a6d] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#f43f5e] uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Constitutional Policy Mandate</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {term.governanceImplication}
                </p>
              </div>

              {term.governanceLinks.length > 0 ? (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Associated Governance Checklists
                  </h4>
                  {term.governanceLinks.map((link, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#091326] border border-[#1b3260] flex items-center justify-between gap-3 hover:border-[#38bdf8]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-200">
                          Domain: {link.domainId.replace(/-/g, ' ').toUpperCase()}
                        </span>
                        <p className="text-xs text-slate-400">
                          {link.rationale}
                        </p>
                      </div>
                      {onNavigateToGovernanceChecklist && (
                        <button
                          onClick={() => onNavigateToGovernanceChecklist(link.checklistId)}
                          className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-medium hover:bg-[#1d4ed8] shrink-0 flex items-center gap-1 transition-colors"
                        >
                          <span>Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-slate-400 p-3 bg-[#0b172e] rounded-lg">
                  This concept applies across general socio-economic planning and cultural ethics.
                </div>
              )}
            </div>
          )}

          {/* Related Concepts (Network Cross-links) */}
          {relatedTerms.length > 0 && (
            <div className="pt-4 border-t border-[#1b3260]/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookMarked className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Related Conceptual Links (Tap to Explore)</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {relatedTerms.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      onSelectTerm(rel);
                      setActiveTab('overview');
                    }}
                    className="p-2.5 rounded-lg bg-[#081224] hover:bg-[#0f1f3d] border border-[#1b3260] text-left transition-all group flex items-center justify-between min-h-[44px]"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-[#38bdf8] transition-colors">
                        {rel.term}
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">
                        {rel.shortDefinition}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#38bdf8] shrink-0 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#1b3260] bg-[#060e1d] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span className="text-slate-300 font-mono text-[11px]">Sarkar Canon 1959–1990</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#16274a] hover:bg-[#1f3768] text-white text-xs font-medium transition-colors"
          >
            Close Term
          </button>
        </div>
      </div>
    </div>
  );
};
