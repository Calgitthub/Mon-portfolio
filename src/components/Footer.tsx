import React from 'react';
import { ArrowUp, Heart, FileText, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCVModal: () => void;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal, onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Développeur Full-Stack & Webmaster · {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#projets" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projets
            </a>
            <a href="#competences" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Compétences
            </a>
            <a href="#parcours" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Parcours
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenCVModal}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Curriculum Vitae</span>
            </button>
            <button
              onClick={onOpenExportModal}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <Rocket className="w-3 h-3" />
              <span>Déploiement Vercel / GitHub</span>
            </button>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Retour en haut"
            title="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & legal note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Calleb ADIBO. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            <span>Fait à Cotonou, Bénin</span>
            <span aria-hidden="true">·</span>
            <span>React · Tailwind CSS · Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
