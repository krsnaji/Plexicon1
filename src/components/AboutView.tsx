/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BookOpen, 
  Palette, 
  Scroll, 
  ExternalLink,
  Shield, 
  Heart, 
  Globe2 
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const bibliography = [
    { title: "Idea and Ideology", year: "1959", description: "Foundational exposition of the Five Fundamental Principles of PROUT, Sadvipra leadership, and the Cosmic order." },
    { title: "The Liberation of Intellect: Neohumanism", year: "1982", description: "Revolutionary expansion of humanism to include animals, plants, and universal cosmic devotion; dissection of geo- and socio-sentiments." },
    { title: "Human Society Parts 1 & 2", year: "1959–1967", description: "Sarkar’s historical sociology detailing the Social Cycle (Samaja Cakra) and collective psychic eras." },
    { title: "Prout in a Nutshell (Volumes 1–21)", year: "1987–1991", description: "Comprehensive economic treatise detailing block-level planning, economic democracy, purchasing capacity, and cooperative systems." },
    { title: "Problem of the Day", year: "1958", description: "Early socio-economic essays establishing the unconditional guarantee of minimum physical necessities." },
    { title: "A Few Problems Solved (Parts 1–9)", year: "1987", description: "In-depth treatment of decentralized planning, agro-industries, and regional self-reliance." },
    { title: "Bio-Psychology & Yoga Psychology", year: "1987", description: "Scientific mapping of 50 mental propensities (vrttis) and endocrine glands/cakras in social behavior." }
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-[#38bdf8] font-semibold tracking-wider uppercase">
          <BookOpen className="w-4 h-4 text-[#38bdf8]" />
          <span>Philosophical Foundations &amp; Bibliography</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Cinzel'] tracking-wide">
          Prabhat Ranjan Sarkar (1921–1990)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Philosopher, spiritual master, socio-economic theorist, and humanitarian founder of PROUT and Neohumanism.
        </p>
      </div>

      {/* Cosmic Mandala Showcase */}
      <div className="rounded-2xl bg-[#081224] border border-[#1e3a6d] overflow-hidden p-5 flex flex-col md:flex-row items-center gap-5 shadow-xl">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border border-[#38bdf8]/40 shadow-lg shadow-[#0284c7]/20 bg-[#040814]">
          <img
            src="/src/assets/images/neohumanist_cosmic_mandala_1793558484426.jpg"
            alt="Neohumanist Universal Emblem"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#f59e0b] font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Universal Benevolence (Nava Manavatavada)</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-['Cinzel']">
            "When the underlying spirit of humanism is extended to everything, animate and inanimate... that is Neohumanism."
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
            Sarkar transcended narrow anthropocentrism, proving that true civilization can never flourish while humans torture non-human creatures or reduce the living Earth to passive raw material for industrial exploitation.
          </p>
        </div>
      </div>

      {/* The Two Great Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PROUT */}
        <div className="p-4 rounded-xl bg-[#091429] border border-[#1b3260] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
            <Globe2 className="w-4 h-4 text-[#2563eb]" />
            <span>PROUT (Progressive Utilization Theory)</span>
          </div>
          <h4 className="text-base font-bold text-slate-100">
            A Balanced Socio-Economic Alternative
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Propounded in 1959 as a dynamic third path transcending both rapacious unregulated capitalism and totalitarian state communism. PROUT organizes economic life around decentralized ecological blocks, guaranteed purchasing capacity, worker cooperatives, and moral leadership (Sadvipras).
          </p>
        </div>

        {/* Neohumanism */}
        <div className="p-4 rounded-xl bg-[#091429] border border-[#1b3260] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#f43f5e] uppercase tracking-wider">
            <Shield className="w-4 h-4 text-[#f43f5e]" />
            <span>Neohumanism (The Liberation of Intellect)</span>
          </div>
          <h4 className="text-base font-bold text-slate-100">
            Universal Love &amp; Awakened Conscience
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Propounded in 1982 to emancipate human intellect from the mental chains of nationalism (geo-sentiment) and group chauvinism (socio-sentiment). Neohumanism establishes an ecological jurisprudence honoring the existential rights of flora, fauna, and the cosmic continuum.
          </p>
        </div>
      </div>

      {/* Santorini Nocturne Palette Story */}
      <div className="p-4 rounded-xl bg-[#070e1d] border border-[#1e3a6d] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
          <Palette className="w-4 h-4 text-[#38bdf8]" />
          <span>Aesthetic Architecture: The Colors of Santorini by Night</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          This mobile app's dark mode visual system is inspired by the iconic volcanic island of Santorini (Thira) under Mediterranean twilight:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-[#040814] border border-[#1b3260] space-y-1">
            <div className="w-5 h-5 rounded-full bg-[#040814] border border-slate-700 mx-auto" />
            <span className="font-bold text-slate-200 block text-[11px]">Caldera Abyss</span>
            <span className="text-[10px] text-slate-500 font-mono">#040814</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0c1830] border border-[#1b3260] space-y-1">
            <div className="w-5 h-5 rounded-full bg-[#0c1830] border border-slate-700 mx-auto" />
            <span className="font-bold text-slate-200 block text-[11px]">Volcanic Cliff</span>
            <span className="text-[10px] text-slate-500 font-mono">#0C1830</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#091429] border border-[#1b3260] space-y-1">
            <div className="w-5 h-5 rounded-full bg-[#2563eb] mx-auto shadow-sm shadow-[#2563eb]/40" />
            <span className="font-bold text-slate-200 block text-[11px]">Aegean Cobalt</span>
            <span className="text-[10px] text-slate-500 font-mono">#2563EB</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#091429] border border-[#1b3260] space-y-1">
            <div className="w-5 h-5 rounded-full bg-[#f43f5e] mx-auto shadow-sm shadow-[#f43f5e]/40" />
            <span className="font-bold text-slate-200 block text-[11px]">Bougainvillea</span>
            <span className="text-[10px] text-slate-500 font-mono">#F43F5E</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#091429] border border-[#1b3260] space-y-1 col-span-2 sm:col-span-1">
            <div className="w-5 h-5 rounded-full bg-[#f59e0b] mx-auto shadow-sm shadow-[#f59e0b]/40" />
            <span className="font-bold text-slate-200 block text-[11px]">Oia Sunset Gold</span>
            <span className="text-[10px] text-slate-500 font-mono">#F59E0B</span>
          </div>
        </div>
      </div>

      {/* Primary Canonical Bibliography */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <Scroll className="w-4 h-4 text-[#f59e0b]" />
          <span>Canonical Bibliography &amp; Primary Treatises</span>
        </div>

        <div className="space-y-2">
          {bibliography.map((book) => (
            <div 
              key={book.title}
              className="p-3.5 rounded-xl bg-[#091224] border border-[#1b3260] space-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-100 text-sm">
                  {book.title}
                </span>
                <span className="font-mono text-[#f59e0b] text-[11px]">
                  {book.year}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
