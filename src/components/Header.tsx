/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Search, Smartphone, Monitor, Watch } from 'lucide-react';

export type ViewportMode = 'desktop' | 'mobile' | 'watch';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  viewportMode: ViewportMode;
  setViewportMode: (mode: ViewportMode) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  viewportMode,
  setViewportMode,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-30 h-14 bg-[#050b16]/95 backdrop-blur-md border-b border-[#1b3260]/60 px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
      {/* Zone 1: Wordmark */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#0284c7] flex items-center justify-center shadow-sm shadow-[#2563eb]/30 border border-[#38bdf8]/30 shrink-0">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-100 uppercase font-['Cinzel'] leading-tight truncate">
            Sarkar Glossary
          </span>
          <span className="text-[9px] sm:text-[10px] text-[#38bdf8] font-medium tracking-wide truncate hidden xs:inline">
            PROUT · Neohumanism · Governance
          </span>
        </div>
      </div>

      {/* Zone 2: Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
        <button
          onClick={() => {
            setActiveTab('glossary');
            if (viewportMode === 'watch') setViewportMode('desktop');
          }}
          className={`whitespace-nowrap transition-colors hover:text-[#38bdf8] py-1 ${
            activeTab === 'glossary' && viewportMode !== 'watch' ? 'text-[#38bdf8] font-semibold border-b-2 border-[#38bdf8]' : 'text-slate-400'
          }`}
        >
          Glossary (A–Z)
        </button>
        <button
          onClick={() => {
            setActiveTab('search');
            if (viewportMode === 'watch') setViewportMode('desktop');
          }}
          className={`whitespace-nowrap transition-colors hover:text-[#38bdf8] py-1 ${
            activeTab === 'search' && viewportMode !== 'watch' ? 'text-[#38bdf8] font-semibold border-b-2 border-[#38bdf8]' : 'text-slate-400'
          }`}
        >
          Fuzzy Search
        </button>
        <button
          onClick={() => {
            setActiveTab('governance');
            if (viewportMode === 'watch') setViewportMode('desktop');
          }}
          className={`whitespace-nowrap transition-colors hover:text-[#38bdf8] py-1 ${
            activeTab === 'governance' && viewportMode !== 'watch' ? 'text-[#38bdf8] font-semibold border-b-2 border-[#38bdf8]' : 'text-slate-400'
          }`}
        >
          Governance Checklists
        </button>
        <button
          onClick={() => {
            setActiveTab('comparison');
            if (viewportMode === 'watch') setViewportMode('desktop');
          }}
          className={`whitespace-nowrap transition-colors hover:text-[#38bdf8] py-1 ${
            activeTab === 'comparison' && viewportMode !== 'watch' ? 'text-[#38bdf8] font-semibold border-b-2 border-[#38bdf8]' : 'text-slate-400'
          }`}
        >
          Comparative Matrix
        </button>
        <button
          onClick={() => {
            setActiveTab('about');
            if (viewportMode === 'watch') setViewportMode('desktop');
          }}
          className={`whitespace-nowrap transition-colors hover:text-[#38bdf8] py-1 ${
            activeTab === 'about' && viewportMode !== 'watch' ? 'text-[#38bdf8] font-semibold border-b-2 border-[#38bdf8]' : 'text-slate-400'
          }`}
        >
          Scholarship &amp; Sources
        </button>
      </nav>

      {/* Zone 3: Device Form-Factor Switcher (Desktop, iPhone, iWatch) */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          onClick={onOpenSearch}
          aria-label="Quick Search"
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-300 hover:text-white rounded-lg active:bg-[#0f1d38]"
        >
          <Search className="w-5 h-5 text-[#38bdf8]" />
        </button>

        {/* Device Switcher Segmented Control */}
        <div className="flex items-center p-0.5 rounded-lg bg-[#0a1428] border border-[#1e3a6d]">
          <button
            onClick={() => setViewportMode('desktop')}
            title="Desktop Wide Workspace View"
            className={`px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
              viewportMode === 'desktop'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => setViewportMode('mobile')}
            title="Mobile Phone View"
            className={`px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
              viewportMode === 'mobile'
                ? 'bg-[#2563eb] text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Mobile</span>
          </button>

          <button
            onClick={() => setViewportMode('watch')}
            title="Apple Watch / Wearable View"
            className={`px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
              viewportMode === 'watch'
                ? 'bg-[#f43f5e] text-white shadow-sm'
                : 'text-slate-400 hover:text-[#f43f5e]'
            }`}
          >
            <Watch className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">iWatch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
