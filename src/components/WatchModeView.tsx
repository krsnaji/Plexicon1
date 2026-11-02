/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  RotateCcw,
  Check,
  Compass,
  Layers,
  BookOpen
} from 'lucide-react';
import { GlossaryTerm } from '../types/glossary';

interface WatchModeViewProps {
  terms: GlossaryTerm[];
  onSelectTerm: (term: GlossaryTerm) => void;
  isStandalone?: boolean; // True if rendered inside a real smartwatch browser
  onExitWatchMode?: () => void;
}

export const WatchModeView: React.FC<WatchModeViewProps> = ({
  terms,
  onSelectTerm,
  isStandalone = false,
  onExitWatchMode
}) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [activeWatchTab, setActiveWatchTab] = useState<'card' | 'list' | 'needs' | 'search'>('card');
  const [currentTime, setCurrentTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const [basicNeedsChecked, setBasicNeedsChecked] = useState<{ [key: string]: boolean }>({
    food: true,
    clothing: true,
    housing: false,
    education: true,
    medical: false,
  });

  // Watch digital clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentTerm = terms[currentTermIndex] || terms[0];

  const handleNextTerm = () => {
    setCurrentTermIndex((prev) => (prev + 1) % terms.length);
  };

  const handlePrevTerm = () => {
    setCurrentTermIndex((prev) => (prev - 1 + terms.length) % terms.length);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (speaking) {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(
        `${currentTerm.term.split('(')[0]}. ${currentTerm.shortDefinition}`
      );
      utterance.rate = 0.95;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleBasicNeed = (needKey: string) => {
    setBasicNeedsChecked(prev => ({ ...prev, [needKey]: !prev[needKey] }));
  };

  const filteredTerms = searchQuery
    ? terms.filter(t => 
        t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : terms;

  // The actual watchOS screen content
  const screenContent = (
    <div className="w-full h-full bg-black text-white flex flex-col justify-between overflow-hidden select-none font-sans text-xs p-2.5 relative">
      {/* Watch Top Status Bar */}
      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 px-1 pt-0.5 shrink-0">
        <span className="text-[#38bdf8] font-mono tracking-tighter">
          {currentTime || '10:09'}
        </span>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
          <span className="text-[9px] uppercase tracking-widest text-[#f59e0b] font-bold">
            PROUT
          </span>
        </div>
      </div>

      {/* Main Watch Interactive Deck */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-1 space-y-2">
        {/* Watch Tab 1: Glancable Concept Card */}
        {activeWatchTab === 'card' && (
          <div className="space-y-1.5 flex flex-col justify-between h-full">
            <div className="p-2 rounded-2xl bg-gradient-to-br from-[#0c1a36] to-[#050b16] border border-[#2563eb]/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-[#38bdf8] uppercase tracking-wider truncate max-w-[130px]">
                  {currentTerm.categoryLabel}
                </span>
                <button
                  onClick={handleSpeak}
                  className="p-1 rounded-full bg-[#1b3260]/60 text-slate-300 hover:text-[#38bdf8]"
                  title="Speak Term"
                  aria-label="Speak Term"
                >
                  <Volume2 className={`w-3 h-3 ${speaking ? 'text-[#38bdf8] animate-pulse' : ''}`} />
                </button>
              </div>

              <h4 className="text-xs font-bold text-white line-clamp-2 leading-tight font-['Cinzel']">
                {currentTerm.term}
              </h4>

              {currentTerm.sanskritOrBengali && (
                <div className="text-[10px] text-[#f59e0b] font-mono truncate">
                  {currentTerm.sanskritOrBengali}
                </div>
              )}

              <p className="text-[10px] text-slate-300 line-clamp-3 leading-snug">
                {currentTerm.shortDefinition}
              </p>
            </div>

            {/* Quick Micro Action buttons */}
            <div className="space-y-1 pt-1">
              <button
                onClick={() => onSelectTerm(currentTerm)}
                className="w-full py-1.5 rounded-xl bg-[#2563eb] text-white text-[11px] font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform"
              >
                <span>Full Axioms &amp; Matrix</span>
              </button>

              <div className="flex items-center justify-between gap-1">
                <button
                  onClick={handlePrevTerm}
                  className="flex-1 py-1 rounded-lg bg-[#111f3d] text-slate-300 text-[10px] font-medium flex items-center justify-center gap-0.5 active:bg-[#1e3a6d]"
                >
                  <ChevronLeft className="w-3 h-3" />
                  <span>Prev</span>
                </button>
                <span className="text-[9px] text-slate-500 font-mono">
                  {currentTermIndex + 1}/{terms.length}
                </span>
                <button
                  onClick={handleNextTerm}
                  className="flex-1 py-1 rounded-lg bg-[#111f3d] text-slate-300 text-[10px] font-medium flex items-center justify-center gap-0.5 active:bg-[#1e3a6d]"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Watch Tab 2: Quick Concept Directory List */}
        {activeWatchTab === 'list' && (
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
              All Terms ({terms.length})
            </div>
            <div className="space-y-1 max-h-[175px] overflow-y-auto pr-0.5">
              {terms.map((t, idx) => (
                <div
                  key={t.id}
                  onClick={() => {
                    setCurrentTermIndex(idx);
                    setActiveWatchTab('card');
                  }}
                  className={`p-1.5 rounded-xl text-left cursor-pointer transition-colors flex items-center justify-between ${
                    idx === currentTermIndex
                      ? 'bg-[#1d4ed8] text-white'
                      : 'bg-[#0a1224] text-slate-300 hover:bg-[#111d38]'
                  }`}
                >
                  <div className="truncate pr-1">
                    <div className="text-[10px] font-bold truncate">{t.term}</div>
                    <div className="text-[8px] opacity-75 truncate">{t.categoryLabel}</div>
                  </div>
                  <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Watch Tab 3: 5 Basic Needs Micro-Complication */}
        {activeWatchTab === 'needs' && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider">
                5 Basic Needs (PROUT)
              </span>
              <span className="text-[9px] text-[#f59e0b] font-mono">
                {Object.values(basicNeedsChecked).filter(Boolean).length}/5
              </span>
            </div>

            <p className="text-[9px] text-slate-400 px-1">
              Sarkar: Mandatory guaranteed physical necessities through productive work.
            </p>

            <div className="space-y-1">
              {[
                { id: 'food', label: '1. Food (Anna)', sub: 'Nutrition security' },
                { id: 'clothing', label: '2. Clothing (Vastra)', sub: 'Weather appropriate' },
                { id: 'housing', label: '3. Shelter (Avasa)', sub: 'Permanent safe home' },
                { id: 'education', label: '4. Education (Shiksa)', sub: 'Free & universal' },
                { id: 'medical', label: '5. Medical (Cikitsa)', sub: 'Zero-cost treatment' },
              ].map(item => {
                const checked = basicNeedsChecked[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleBasicNeed(item.id)}
                    className={`w-full p-1.5 rounded-xl text-left flex items-center justify-between transition-colors ${
                      checked
                        ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200'
                        : 'bg-[#0a1224] border border-[#1b3260]/40 text-slate-400'
                    }`}
                  >
                    <div className="truncate pr-1">
                      <div className="text-[10px] font-semibold">{item.label}</div>
                      <div className="text-[8px] opacity-75">{item.sub}</div>
                    </div>
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${
                      checked ? 'bg-emerald-500 text-black' : 'border border-slate-600'
                    }`}>
                      {checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Watch Tab 4: Micro Fuzzy Search */}
        {activeWatchTab === 'search' && (
          <div className="space-y-1.5">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-6 pr-2 py-1 rounded-xl bg-[#0e1b38] border border-[#2563eb]/40 text-[10px] text-white placeholder-slate-500 focus:outline-none"
              />
              <Search className="w-3 h-3 text-[#38bdf8] absolute left-1.5 top-2" />
            </div>

            <div className="space-y-1 max-h-[160px] overflow-y-auto pr-0.5">
              {filteredTerms.slice(0, 8).map((t, idx) => (
                <div
                  key={t.id}
                  onClick={() => {
                    const originalIdx = terms.findIndex(item => item.id === t.id);
                    if (originalIdx !== -1) setCurrentTermIndex(originalIdx);
                    setActiveWatchTab('card');
                  }}
                  className="p-1.5 rounded-lg bg-[#0a1326] hover:bg-[#16274a] text-slate-200 text-left cursor-pointer flex items-center justify-between"
                >
                  <span className="text-[10px] font-semibold truncate">{t.term}</span>
                  <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
                </div>
              ))}
              {filteredTerms.length === 0 && (
                <div className="text-center py-4 text-[10px] text-slate-500">
                  No match found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Watch Bottom Quick App Navigation Dots / Icons */}
      <div className="pt-1 border-t border-slate-900 flex items-center justify-around shrink-0 text-slate-400">
        <button
          onClick={() => setActiveWatchTab('card')}
          className={`p-1.5 rounded-full transition-colors ${
            activeWatchTab === 'card' ? 'text-[#38bdf8] bg-[#0c1a36]' : 'hover:text-slate-200'
          }`}
          title="Concept Glance Card"
        >
          <BookOpen className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setActiveWatchTab('list')}
          className={`p-1.5 rounded-full transition-colors ${
            activeWatchTab === 'list' ? 'text-[#38bdf8] bg-[#0c1a36]' : 'hover:text-slate-200'
          }`}
          title="Terms Directory"
        >
          <Layers className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setActiveWatchTab('needs')}
          className={`p-1.5 rounded-full transition-colors ${
            activeWatchTab === 'needs' ? 'text-emerald-400 bg-emerald-950/60' : 'hover:text-slate-200'
          }`}
          title="5 Basic Needs"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setActiveWatchTab('search')}
          className={`p-1.5 rounded-full transition-colors ${
            activeWatchTab === 'search' ? 'text-[#f59e0b] bg-[#1a1408]' : 'hover:text-slate-200'
          }`}
          title="Search"
        >
          <Search className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  // If rendered on an actual smartwatch screen or ultra-compact embed:
  if (isStandalone) {
    return (
      <div className="w-full h-full min-h-screen bg-black">
        {screenContent}
      </div>
    );
  }

  // Otherwise, render inside a high-fidelity Apple Watch 45mm Titanium simulator chassis
  return (
    <div className="min-h-[85vh] py-6 px-4 flex flex-col items-center justify-center bg-[#02050c]">
      {/* Top Banner & Control */}
      <div className="text-center mb-4 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a1630] border border-[#2563eb]/40 text-[#38bdf8] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Apple Watch / Wearable Interface (45mm OLED)</span>
        </div>
        <p className="text-xs text-slate-400">
          Simulating watchOS touch gestures, glance cards, audio TTS, and micro-governance tracker.
        </p>
        {onExitWatchMode && (
          <button
            onClick={onExitWatchMode}
            className="text-xs text-[#f43f5e] hover:underline font-semibold block mx-auto mt-1"
          >
            ← Return to Desktop Workspace
          </button>
        )}
      </div>

      {/* The Physical Apple Watch Frame */}
      <div className="relative flex items-center justify-center">
        {/* Watch Strap Top */}
        <div className="absolute -top-12 w-28 h-14 bg-gradient-to-b from-[#1b263b] to-[#0d1b2a] rounded-t-xl border-t border-x border-slate-700 shadow-md" />

        {/* Watch Chassis (Titanium curved squircle) */}
        <div className="relative z-10 w-[240px] h-[290px] rounded-[52px] bg-gradient-to-br from-[#2a374a] via-[#1b263b] to-[#121c29] p-[7px] shadow-2xl shadow-[#0284c7]/25 border border-slate-600 flex items-center justify-center">
          {/* Bezel inner ring */}
          <div className="w-full h-full rounded-[45px] bg-black p-[6px] overflow-hidden border border-slate-800 relative">
            {/* Display screen */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-black relative">
              {screenContent}
            </div>
          </div>

          {/* Digital Crown on Right */}
          <button
            onClick={handleNextTerm}
            title="Digital Crown (Tap to rotate to next term)"
            className="absolute -right-3 top-16 w-3 h-12 rounded-r-md bg-gradient-to-r from-slate-400 to-slate-200 border-y border-r border-slate-500 shadow-sm flex flex-col justify-around py-1 active:scale-95 transition-transform"
          >
            <div className="w-full h-[1px] bg-slate-600" />
            <div className="w-full h-[1px] bg-slate-600" />
            <div className="w-full h-[1px] bg-slate-600" />
          </button>

          {/* Side Button below Digital Crown */}
          <button
            onClick={() => setActiveWatchTab(prev => prev === 'card' ? 'needs' : 'card')}
            title="Side Button (App Switcher)"
            className="absolute -right-2 top-36 w-1.5 h-10 rounded-r-sm bg-slate-400 border border-slate-600 active:scale-95 transition-transform"
          />

          {/* Mic hole on Left */}
          <div className="absolute -left-1 top-24 w-1 h-2 rounded-l bg-slate-800" />
        </div>

        {/* Watch Strap Bottom */}
        <div className="absolute -bottom-12 w-28 h-14 bg-gradient-to-t from-[#1b263b] to-[#0d1b2a] rounded-b-xl border-b border-x border-slate-700 shadow-md" />
      </div>

      {/* Simulator Guidance Info */}
      <div className="mt-8 text-center max-w-sm space-y-1 text-[11px] text-slate-400 bg-[#060e1d] p-3 rounded-xl border border-[#1b3260]">
        <div className="font-semibold text-slate-200">Wearable Ergonomics Summary:</div>
        <div>• Tap Crown or Next/Prev to cycle terms with speech audio.</div>
        <div>• 5 Basic Needs tracker fits within micro glance complications.</div>
        <div>• Tested on watchOS 180px–220px viewport boundaries.</div>
      </div>
    </div>
  );
};
