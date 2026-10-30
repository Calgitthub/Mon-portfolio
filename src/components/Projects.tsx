import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight, Code, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'Plateforme Étatique', label: 'Météorologie & État' },
    { id: 'Media & CMS', label: 'Média & Webmaster' },
    { id: 'Full-Stack', label: 'Applications Full-Stack' },
    { id: 'E-Commerce', label: 'E-Commerce' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projets" className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              <span>Portfolio Technique</span>
              <span aria-hidden="true">·</span>
              <span>Réalisations Concrètes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Projets phares conçus pour des institutions nationales et entreprises.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Chaque projet reflète une exigence stricte de fiabilité, d'optimisation des performances et d'adéquation aux besoins métiers des utilisateurs.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional buttons as per frontend-design guidelines) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === cat.id
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-blue-400/80 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Top Right Quick Action */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors shadow-2xs"
                        title="Ouvrir le site en ligne"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                      {project.client && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="truncate max-w-[150px]">{project.client}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / summary */}
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.subtitle}
                    </p>

                    {/* Description preview */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed pt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer of Card: Tags & Interactive Trigger */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Tags preview */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[11px] font-mono text-slate-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Detail Trigger Button */}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group/btn shrink-0"
                    >
                      <span>Fiche technique</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
