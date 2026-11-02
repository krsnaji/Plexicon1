/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Download, 
  Check, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { GovernanceDomain, ChecklistItemStatus, UserChecklistState, GlossaryTerm } from '../types/glossary';
import { GOVERNANCE_DOMAINS } from '../data/governanceChecklists';

interface GovernanceViewProps {
  terms: GlossaryTerm[];
  onSelectTerm: (term: GlossaryTerm) => void;
  targetChecklistId?: string | null;
}

const STORAGE_KEY = 'sarkar_governance_checklist_state_v1';

export const GovernanceView: React.FC<GovernanceViewProps> = ({
  terms,
  onSelectTerm,
  targetChecklistId
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<{ [id: string]: boolean }>({});
  const [checklistState, setChecklistState] = useState<UserChecklistState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copiedReport, setCopiedReport] = useState(false);

  // Auto-expand target checklist item if navigated from a term
  useEffect(() => {
    if (targetChecklistId) {
      setExpandedItems(prev => ({ ...prev, [targetChecklistId]: true }));
      // Also switch domain if needed
      const foundDomain = GOVERNANCE_DOMAINS.find(d => 
        d.items.some(i => i.id === targetChecklistId)
      );
      if (foundDomain) {
        setSelectedDomainId(foundDomain.id);
      }
    }
  }, [targetChecklistId]);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistState));
    } catch {
      // storage quota or private mode
    }
  }, [checklistState]);

  // Toggle item expansion
  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Update item status
  const setItemStatus = (itemId: string, status: ChecklistItemStatus) => {
    setChecklistState(prev => ({
      ...prev,
      [itemId]: {
        status,
        notes: prev[itemId]?.notes || '',
        updatedAt: new Date().toISOString()
      }
    }));
  };

  // Update item notes
  const setItemNotes = (itemId: string, notes: string) => {
    setChecklistState(prev => ({
      ...prev,
      [itemId]: {
        status: prev[itemId]?.status || 'unreviewed',
        notes,
        updatedAt: new Date().toISOString()
      }
    }));
  };

  // Compute aggregate audit score
  const allItems = GOVERNANCE_DOMAINS.flatMap(d => d.items);
  const totalCount = allItems.length;
  const compliantCount = allItems.filter(i => checklistState[i.id]?.status === 'compliant').length;
  const inProgressCount = allItems.filter(i => checklistState[i.id]?.status === 'in_progress').length;
  const flaggedCount = allItems.filter(i => checklistState[i.id]?.status === 'flagged').length;
  const unreviewedCount = totalCount - compliantCount - inProgressCount - flaggedCount;

  const scorePercentage = Math.round((compliantCount / totalCount) * 100);

  // Filtered domains and items
  const filteredDomains = GOVERNANCE_DOMAINS.filter(domain => {
    if (selectedDomainId !== 'all' && domain.id !== selectedDomainId) return false;
    return true;
  });

  const handleExportReport = () => {
    let report = `# SARKAR PROUTIST & NEOHUMANIST GOVERNANCE AUDIT REPORT\n`;
    report += `Generated: ${new Date().toLocaleDateString()}\n`;
    report += `Overall Compliance Score: ${scorePercentage}% (${compliantCount}/${totalCount} Verified Compliant)\n`;
    report += `Flagged Concerns: ${flaggedCount} | In Progress: ${inProgressCount} | Unreviewed: ${unreviewedCount}\n\n`;

    GOVERNANCE_DOMAINS.forEach(domain => {
      report += `## ${domain.title}\n`;
      report += `Principle: ${domain.sarkarPrinciple}\n\n`;
      domain.items.forEach(item => {
        const state = checklistState[item.id] || { status: 'unreviewed', notes: '' };
        report += `### [${state.status.toUpperCase()}] ${item.title}\n`;
        report += `Directive: ${item.directive}\n`;
        report += `Risk of Omission: ${item.riskOfOmission}\n`;
        if (state.notes) report += `Auditor Notes: ${state.notes}\n`;
        report += `\n`;
      });
      report += `----------------------------------------------------\n\n`;
    });

    navigator.clipboard.writeText(report);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="space-y-5 pb-24">
      {/* Header & Principle */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-semibold tracking-wider uppercase">
          <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
          <span>Governance Architecture &amp; Systemic Checklists</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel'] tracking-wide">
          Proutist Implementation Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Actionable checklists derived from Sarkar's economic treatises, ensuring nothing is missed in constitutional design, local block planning, and ethical oversight.
        </p>
      </div>

      {/* Audit Readiness Scoreboard */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0d1c3a] to-[#071021] border border-[#2563eb]/40 shadow-lg space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Governance Design Readiness Score
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl font-extrabold text-white font-mono">{scorePercentage}%</span>
              <span className="text-xs text-slate-400">
                ({compliantCount} of {totalCount} directives verified compliant)
              </span>
            </div>
          </div>

          <button
            onClick={handleExportReport}
            className="min-h-[42px] px-3.5 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shrink-0 shadow-sm"
          >
            {copiedReport ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Audit Report Copied!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Copy Full Audit Report</span>
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#050b16] overflow-hidden flex">
          <div style={{ width: `${(compliantCount / totalCount) * 100}%` }} className="bg-emerald-500" title="Compliant" />
          <div style={{ width: `${(inProgressCount / totalCount) * 100}%` }} className="bg-[#f59e0b]" title="In Progress" />
          <div style={{ width: `${(flaggedCount / totalCount) * 100}%` }} className="bg-[#f43f5e]" title="Flagged Concern" />
        </div>

        {/* Status Metrics (Clean unboxed text §1.A) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 pt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{compliantCount} Compliant</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span>{inProgressCount} In Progress</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#f43f5e]" />
            <span>{flaggedCount} Flagged Concerns</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            <span>{unreviewedCount} Unreviewed</span>
          </span>
        </div>
      </div>

      {/* Domain Selectors (Segmented Buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setSelectedDomainId('all')}
          className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
            selectedDomainId === 'all'
              ? 'bg-[#2563eb] text-white'
              : 'bg-[#0a1428] text-slate-400 border border-[#1b3260] hover:text-slate-200'
          }`}
        >
          All 6 Domains
        </button>
        {GOVERNANCE_DOMAINS.map(domain => (
          <button
            key={domain.id}
            onClick={() => setSelectedDomainId(domain.id)}
            className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              selectedDomainId === domain.id
                ? 'bg-[#2563eb] text-white'
                : 'bg-[#0a1428] text-slate-400 border border-[#1b3260] hover:text-slate-200'
            }`}
          >
            {domain.title.split('&')[0].trim()}
          </button>
        ))}
      </div>

      {/* Filter by Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span className="font-semibold text-slate-300">Filter Directives by Status:</span>
        <div className="flex items-center gap-1">
          {['all', 'compliant', 'in_progress', 'flagged', 'unreviewed'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2 py-0.5 rounded text-[11px] capitalize transition-colors ${
                statusFilter === st 
                  ? 'bg-[#38bdf8] text-[#040814] font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Sections & Checklists */}
      <div className="space-y-6">
        {filteredDomains.map(domain => {
          // Filter items within domain by statusFilter
          const domainItems = domain.items.filter(item => {
            if (statusFilter === 'all') return true;
            const currentStatus = checklistState[item.id]?.status || 'unreviewed';
            return currentStatus === statusFilter;
          });

          if (domainItems.length === 0) return null;

          return (
            <div key={domain.id} className="rounded-2xl bg-[#081224] border border-[#1b3260] overflow-hidden shadow-md">
              {/* Domain Header */}
              <div className="p-4 bg-gradient-to-r from-[#0c1a36] to-[#081224] border-b border-[#1b3260]/70 space-y-1">
                <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider">
                  Governance Domain
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-400 italic">
                  "{domain.sarkarPrinciple}"
                </p>

                {/* Related Terms links */}
                <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                  <span className="text-slate-500 font-medium">Underpinning Concepts:</span>
                  {domain.relatedTermIds.map((tid, i) => {
                    const linkedTerm = terms.find(t => t.id === tid);
                    if (!linkedTerm) return null;
                    return (
                      <React.Fragment key={tid}>
                        <button
                          onClick={() => onSelectTerm(linkedTerm)}
                          className="text-[#38bdf8] hover:underline"
                        >
                          {linkedTerm.term.split('(')[0].trim()}
                        </button>
                        {i < domain.relatedTermIds.length - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Items in Domain */}
              <div className="divide-y divide-[#1b3260]/40">
                {domainItems.map(item => {
                  const itemState = checklistState[item.id] || { status: 'unreviewed', notes: '' };
                  const isExpanded = expandedItems[item.id] ?? false;

                  const getStatusBadge = (status: ChecklistItemStatus) => {
                    switch (status) {
                      case 'compliant':
                        return (
                          <span className="flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verified Compliant</span>
                          </span>
                        );
                      case 'in_progress':
                        return (
                          <span className="flex items-center gap-1 text-[#f59e0b] font-semibold text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            <span>In Progress</span>
                          </span>
                        );
                      case 'flagged':
                        return (
                          <span className="flex items-center gap-1 text-[#f43f5e] font-semibold text-xs">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Flagged Concern</span>
                          </span>
                        );
                      default:
                        return (
                          <span className="flex items-center gap-1 text-slate-400 text-xs">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Unreviewed</span>
                          </span>
                        );
                    }
                  };

                  return (
                    <div key={item.id} className="p-4 space-y-3 hover:bg-[#0b172e]/50 transition-colors">
                      {/* Item Main Row */}
                      <div className="flex items-start justify-between gap-3 cursor-pointer select-none" onClick={() => toggleExpand(item.id)}>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            {getStatusBadge(itemState.status)}
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-100">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.directive}
                          </p>
                        </div>

                        <button
                          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-white"
                          aria-label={isExpanded ? 'Collapse item' : 'Expand item'}
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      {/* Expanded Audit Details & Action Controls */}
                      {isExpanded && (
                        <div className="pt-2 space-y-4 border-t border-[#1b3260]/60 animate-in fade-in duration-150">
                          {/* Risk of Omission Warning */}
                          <div className="p-3 rounded-lg bg-[#140b17] border border-[#f43f5e]/30 space-y-1">
                            <span className="text-[10px] font-bold text-[#f43f5e] uppercase tracking-wider flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Critical Risk If Omitted in Implementation</span>
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {item.riskOfOmission}
                            </p>
                          </div>

                          {/* Verification Audit Questions */}
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold text-[#38bdf8] uppercase tracking-wider">
                              Constitutional &amp; Policy Verification Points:
                            </span>
                            <div className="space-y-1.5">
                              {item.verificationAudit.map((q, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded bg-[#060d1c] border border-[#1b3260]/50">
                                  <span className="text-[#38bdf8] font-mono font-bold mt-0.5">✓</span>
                                  <span>{q}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Sarkar Architectural Warning */}
                          <div className="p-3 rounded-lg bg-[#0c1830] border border-[#2563eb]/30 text-xs italic text-slate-200">
                            <span className="text-[#f59e0b] font-bold not-italic block mb-0.5">Sarkar's Directive:</span>
                            "{item.sarkarWarning}"
                          </div>

                          {/* Status Selection Buttons */}
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Update Implementation Status:
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                              <button
                                onClick={() => setItemStatus(item.id, 'unreviewed')}
                                className={`min-h-[40px] px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                  itemState.status === 'unreviewed'
                                    ? 'bg-slate-700 text-white border-slate-500'
                                    : 'bg-[#060d1c] text-slate-400 border-[#1b3260] hover:text-slate-200'
                                }`}
                              >
                                Unreviewed
                              </button>
                              <button
                                onClick={() => setItemStatus(item.id, 'in_progress')}
                                className={`min-h-[40px] px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                  itemState.status === 'in_progress'
                                    ? 'bg-[#f59e0b] text-slate-950 font-bold border-[#f59e0b]'
                                    : 'bg-[#060d1c] text-slate-400 border-[#1b3260] hover:text-slate-200'
                                }`}
                              >
                                In Progress
                              </button>
                              <button
                                onClick={() => setItemStatus(item.id, 'compliant')}
                                className={`min-h-[40px] px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                  itemState.status === 'compliant'
                                    ? 'bg-emerald-600 text-white font-bold border-emerald-500'
                                    : 'bg-[#060d1c] text-slate-400 border-[#1b3260] hover:text-slate-200'
                                }`}
                              >
                                Compliant
                              </button>
                              <button
                                onClick={() => setItemStatus(item.id, 'flagged')}
                                className={`min-h-[40px] px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                  itemState.status === 'flagged'
                                    ? 'bg-[#f43f5e] text-white font-bold border-[#f43f5e]'
                                    : 'bg-[#060d1c] text-slate-400 border-[#1b3260] hover:text-slate-200'
                                }`}
                              >
                                Flagged Concern
                              </button>
                            </div>
                          </div>

                          {/* Auditor Notes Textarea */}
                          <div className="space-y-1">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                              Auditor / Policy Designer Notes (Auto-saved locally):
                            </label>
                            <textarea
                              value={itemState.notes}
                              onChange={(e) => setItemNotes(item.id, e.target.value)}
                              placeholder="Document implementation gaps, statutory references, regional challenges..."
                              rows={2}
                              className="w-full p-2.5 rounded-lg bg-[#060d1c] border border-[#1b3260] text-xs text-slate-100 placeholder-slate-500 focus:border-[#38bdf8] focus:outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
