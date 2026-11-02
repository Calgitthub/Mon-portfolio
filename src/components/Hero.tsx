import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-blue-500/10 via-sky-500/10 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              <span>Webmaster & Graphiste</span>
              <span aria-hidden="true">·</span>
              <span>Bénin</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Concevoir des applications web robustes, pérennes et centrées sur l’utilisateur.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Je suis <span className="font-semibold text-slate-900 dark:text-white">Calleb ADIBO</span>, développeur Full-Stack (React, Node.js, PHP, Python) diplômé de l’IUT de Parakou et certifié en Développement Web No-Code (EIG-Bénin). Participant à la onception de solutions critiques pour l’<span className="font-medium text-slate-900 dark:text-white">Agence Nationale de Météorologie (METEO-BENIN)</span> et Webmaster du portail international d’informations <span className="font-medium text-slate-900 dark:text-white">Prime News Monde</span>.
            </p>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-mono">
                <Phone className="w-3.5 h-3.5" />
                <span>+229 01 94 83 88 93</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap"
              >
                <span>Explorer Mes Réalisations</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCVModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Consulter le CV (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Prendre contact
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait & Verified Credentials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Background accent ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl rotate-1 opacity-20 filter blur-xs" />

              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-lg">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Calleb ADIBO - Ingénieur Logiciel & Webmaster"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  
                  {/* Subtle lower photo metadata */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-semibold">Calleb ADIBO</div>
                    <div className="text-[11px] text-slate-200 font-mono">
                      Photo officielle du CV · IUT Parakou (Licence)
                    </div>
                  </div>
                </div>

                {/* Status card below image */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-medium">Disponible pour opportunités</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">Bénin / Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quantitative Rigor Row Below Split */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
