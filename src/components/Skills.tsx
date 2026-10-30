import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Globe, Cpu, Languages, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS, LANGUAGES, INTERESTS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const icons = [Code2, Server, Globe, Cpu];

  return (
    <section id="competences" className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            <span>Expertise & Savoir-Faire</span>
            <span aria-hidden="true">·</span>
            <span>Stack Technique</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Compétences techniques éprouvées sur le terrain.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Du développement applicatif en <span className="font-semibold text-slate-900 dark:text-white">Python</span>, <span className="font-semibold text-slate-900 dark:text-white">PHP</span>, <span className="font-semibold text-slate-900 dark:text-white">React.js</span> et <span className="font-semibold text-slate-900 dark:text-white">Node.js</span> à l'intégration avancée de CMS, en passant par l'administration des systèmes et bases de données.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Code2;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-500/60 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    Module 0{idx + 1}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 md:p-8 mb-12 shadow-xs">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {SKILL_CATEGORIES[activeCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {SKILL_CATEGORIES[activeCategoryIndex].description}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {SKILL_CATEGORIES[activeCategoryIndex].skills.length} compétences répertoriées
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    {skill.isPrimary && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 dark:text-blue-400 font-medium">
                        (Majeure)
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    <span>{skill.experienceYear}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar with smooth width */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Grid: Behavioral Skills, Languages & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Soft Skills */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <HeartHandshake className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Compétences Comportementales</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aptitudes professionnelles cultivées lors des stages en milieu hospitalier et météorologique.
            </p>
            <ul className="space-y-2 pt-2">
              {SOFT_SKILLS.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Compétences Linguistiques</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Communication fluide dans les contextes professionnels francophones et internationaux.
              </p>
              <div className="space-y-3 pt-2">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">{lang.name}</span>
                      <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">
                        {lang.written ? 'Écrit & Parlé' : 'Parlé'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote / Certification statement */}
            <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200/40 dark:border-blue-900/40 text-[11px] text-slate-600 dark:text-slate-300 italic">
              "Je me tiens à votre disposition pour des compléments d'informations et de justifications."
            </div>
          </div>

          {/* Interests & Continuous Learning */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Centres d'Intérêt & Veille</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pratiques quotidiennes d'apprentissage continu et d'équilibre de vie.
            </p>
            <div className="space-y-2.5 pt-2">
              {INTERESTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
