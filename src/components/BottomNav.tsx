/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Search, CheckSquare, Columns, Info } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  governanceFlaggedCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  governanceFlaggedCount = 0
}) => {
  const tabs = [
    { id: 'glossary', label: 'Glossary', icon: BookOpen },
    { id: 'search', label: 'Fuzzy Search', icon: Search },
    { id: 'governance', label: 'Checklists', icon: CheckSquare, badge: governanceFlaggedCount > 0 ? governanceFlaggedCount : undefined },
    { id: 'comparison', label: 'Matrix', icon: Columns },
    { id: 'about', label: 'Sources', icon: Info },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#040814]/95 backdrop-blur-md border-t border-[#1b3260]/80 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
    >
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[48px] min-w-[44px] flex flex-col items-center justify-center relative transition-all duration-200 select-none ${
                isActive ? 'text-[#38bdf8]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.2] text-[#38bdf8]' : 'stroke-[1.7]'
                  }`} 
                />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-[#f43f5e] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-sm">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span 
                className={`text-[10px] tracking-tight mt-1 whitespace-nowrap truncate max-w-[64px] ${
                  isActive ? 'font-semibold text-slate-100' : 'font-normal text-slate-400'
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
