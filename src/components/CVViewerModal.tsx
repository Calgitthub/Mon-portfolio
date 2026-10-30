import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + PERSONAL_INFO.cvPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 flex flex-col h-[88vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  Curriculum Vitae — Calleb ADIBO
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Document officiel certifié · Mis à jour
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
                title="Copier le lien direct vers le CV"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Lien copié' : 'Copier lien'}</span>
              </button>

              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Calleb_ADIBO.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-2"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 overflow-hidden flex flex-col">
            <iframe
              src={`${PERSONAL_INFO.cvPath}#toolbar=0`}
              title="CV Calleb ADIBO PDF Preview"
              className="w-full h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white"
            />
          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Fait à Cotonou, Bénin</span>
            <a
              href={PERSONAL_INFO.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span>Ouvrir dans un nouvel onglet</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
