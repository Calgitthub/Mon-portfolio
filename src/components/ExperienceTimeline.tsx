import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { EXPERIENCES, EDUCATION_LIST } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiences' | 'education'>('experiences');

  return (
    <section id="parcours" className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              <span>Carrière & Éducation</span>
              <span aria-hidden="true">·</span>
              <span>Chronologie</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Un parcours alliant rigueur académique et immersion pratique.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Des stages stratégiques dans des institutions de référence (Météo nationale, CHU) et une formation universitaire complète en informatique de gestion.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('experiences')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'experiences'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Expériences ({EXPERIENCES.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Parcours Académique ({EDUCATION_LIST.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experiences' ? (
            <motion.div
              key="experiences"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {EXPERIENCES.map((exp, index) => (
                <div
                  key={exp.id}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-400/80 dark:hover:border-blue-500/50 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      {/* Clean unboxed metadata */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {exp.duration}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white pt-1">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-md self-start border border-slate-100 dark:border-slate-800">
                      Étape 0{index + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                      Missions accomplies :
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-1.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-medium text-slate-500 mr-2">Technologies :</span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-400/80 dark:hover:border-blue-500/50 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {edu.institution}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Diplôme Officiel</span>
                    <span>Niveau {idx === 0 ? 'Expert No-Code' : idx === 1 ? 'BAC+3 Universitaire' : 'Secondaire'}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
