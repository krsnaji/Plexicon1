/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Header, ViewportMode } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { GlossaryList } from './components/GlossaryList';
import { FuzzySearchView } from './components/FuzzySearchView';
import { GovernanceView } from './components/GovernanceView';
import { ComparisonMatrixView } from './components/ComparisonMatrixView';
import { AboutView } from './components/AboutView';
import { TermDetailModal } from './components/TermDetailModal';
import { WatchModeView } from './components/WatchModeView';
import { GLOSSARY_TERMS } from './data/terms';
import { GlossaryTerm } from './types/glossary';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('glossary');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [targetChecklistId, setTargetChecklistId] = useState<string | null>(null);
  const [viewportMode, setViewportMode] = useState<ViewportMode>('desktop');
  const [isNativeSmartwatch, setIsNativeSmartwatch] = useState<boolean>(false);

  // Auto-detect real smartwatch / ultra-compact display (< 300px)
  useEffect(() => {
    const checkViewport = () => {
      if (window.innerWidth <= 300) {
        setIsNativeSmartwatch(true);
      } else {
        setIsNativeSmartwatch(false);
      }
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Alphabetically sorted terms (A to Z)
  const sortedTerms = useMemo(() => {
    return [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  }, []);

  const handleSelectTerm = (term: GlossaryTerm) => {
    setSelectedTerm(term);
  };

  const handleNavigateToGovernance = (checklistId: string) => {
    setSelectedTerm(null);
    setTargetChecklistId(checklistId);
    setActiveTab('governance');
  };

  const handleOpenSearch = () => {
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If running directly on a real smartwatch (e.g. Apple Watch native browser)
  if (isNativeSmartwatch) {
    return (
      <div className="w-full min-h-screen bg-black text-white">
        <WatchModeView
          terms={sortedTerms}
          onSelectTerm={handleSelectTerm}
          isStandalone={true}
        />
        {/* Modal if tapped */}
        <TermDetailModal
          term={selectedTerm}
          allTerms={sortedTerms}
          onClose={() => setSelectedTerm(null)}
          onSelectTerm={handleSelectTerm}
          onNavigateToGovernanceChecklist={handleNavigateToGovernance}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 flex flex-col selection:bg-[#2563eb] selection:text-white">
      {/* 1. Apple Watch / iWatch Simulator Mode */}
      {viewportMode === 'watch' && (
        <div className="min-h-screen flex flex-col bg-[#02050c]">
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            viewportMode={viewportMode}
            setViewportMode={setViewportMode}
            onOpenSearch={handleOpenSearch}
          />

          <main className="flex-1 flex items-center justify-center p-2 sm:p-4">
            <WatchModeView
              terms={sortedTerms}
              onSelectTerm={handleSelectTerm}
              isStandalone={false}
              onExitWatchMode={() => setViewportMode('desktop')}
            />
          </main>
        </div>
      )}

      {/* 2. Mobile Phone Chassis Mode */}
      {viewportMode === 'mobile' && (
        <div className="min-h-screen py-6 px-3 sm:px-4 flex flex-col items-center justify-center bg-[#02050c]">
          <div className="text-center mb-3 text-xs text-slate-400 flex items-center gap-2">
            <span>iPhone 16 Pro Simulation (420px Canvas) · </span>
            <button 
              onClick={() => setViewportMode('desktop')}
              className="text-[#38bdf8] hover:underline font-semibold"
            >
              Switch to Desktop Wide
            </button>
            <span aria-hidden="true">·</span>
            <button 
              onClick={() => setViewportMode('watch')}
              className="text-[#f43f5e] hover:underline font-semibold"
            >
              Test iWatch
            </button>
          </div>

          <div className="w-full max-w-[420px] h-[860px] rounded-[48px] bg-[#050b16] border-[6px] border-[#1e293b] shadow-2xl shadow-[#0284c7]/20 flex flex-col overflow-hidden relative">
            {/* Phone Dynamic Island / Speaker */}
            <div className="w-28 h-4 bg-[#0a0f1d] rounded-b-xl mx-auto z-40 shrink-0 flex items-center justify-center">
              <div className="w-10 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Inner Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
              <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                viewportMode={viewportMode}
                setViewportMode={setViewportMode}
                onOpenSearch={handleOpenSearch}
              />

              <main className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar">
                {activeTab === 'glossary' && (
                  <GlossaryList
                    terms={sortedTerms}
                    onSelectTerm={handleSelectTerm}
                    onOpenSearch={handleOpenSearch}
                    isDesktopWide={false}
                    onNavigateToGovernance={handleNavigateToGovernance}
                  />
                )}

                {activeTab === 'search' && (
                  <FuzzySearchView
                    terms={sortedTerms}
                    onSelectTerm={handleSelectTerm}
                  />
                )}

                {activeTab === 'governance' && (
                  <GovernanceView
                    terms={sortedTerms}
                    onSelectTerm={handleSelectTerm}
                    targetChecklistId={targetChecklistId}
                  />
                )}

                {activeTab === 'comparison' && (
                  <ComparisonMatrixView
                    terms={sortedTerms}
                    onSelectTerm={handleSelectTerm}
                  />
                )}

                {activeTab === 'about' && (
                  <AboutView />
                )}
              </main>

              <BottomNav
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. Full Desktop Workspace Mode (and default responsive mode) */}
      {viewportMode === 'desktop' && (
        <div className="flex-1 flex flex-col w-full">
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            viewportMode={viewportMode}
            setViewportMode={setViewportMode}
            onOpenSearch={handleOpenSearch}
          />

          <main className="flex-1 px-3 sm:px-6 lg:px-8 py-5 max-w-7xl w-full mx-auto">
            {activeTab === 'glossary' && (
              <GlossaryList
                terms={sortedTerms}
                onSelectTerm={handleSelectTerm}
                onOpenSearch={handleOpenSearch}
                isDesktopWide={true}
                onNavigateToGovernance={handleNavigateToGovernance}
              />
            )}

            {activeTab === 'search' && (
              <FuzzySearchView
                terms={sortedTerms}
                onSelectTerm={handleSelectTerm}
              />
            )}

            {activeTab === 'governance' && (
              <GovernanceView
                terms={sortedTerms}
                onSelectTerm={handleSelectTerm}
                targetChecklistId={targetChecklistId}
              />
            )}

            {activeTab === 'comparison' && (
              <ComparisonMatrixView
                terms={sortedTerms}
                onSelectTerm={handleSelectTerm}
              />
            )}

            {activeTab === 'about' && (
              <AboutView />
            )}
          </main>

          <BottomNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}

      {/* Global Term Detail Bottom Sheet / Modal */}
      <TermDetailModal
        term={selectedTerm}
        allTerms={sortedTerms}
        onClose={() => setSelectedTerm(null)}
        onSelectTerm={handleSelectTerm}
        onNavigateToGovernanceChecklist={handleNavigateToGovernance}
      />
    </div>
  );
}
