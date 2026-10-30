import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Building, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {project.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Fermer la modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Visual Image Banner */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>

            {/* Title & Client */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                {project.client && (
                  <span className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Organisation : {project.client}</span>
                  </span>
                )}
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Rôle : {project.role}</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Contexte & Présentation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Réalisations Clés & Fonctionnalités
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-400" />
                <span>Technologies & Environnement</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Fermer
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <span>Visiter la plateforme en direct</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
