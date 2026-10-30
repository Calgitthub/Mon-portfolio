import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Terminal, ExternalLink, Github, Globe } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activePlatform, setActivePlatform] = useState<'vercel' | 'github'>('vercel');

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isOpen) return null;

  const vercelSteps = [
    {
      title: '1. Préparer le code et tester le build',
      cmd: 'npm run build',
      desc: 'Vérifie que la compilation TypeScript et Vite s’exécute sans erreur dans le dossier dist/.',
    },
    {
      title: '2. Déployer en 1 clic avec le CLI Vercel',
      cmd: 'npx vercel',
      desc: 'Vercel détecte automatiquement Vite + React et configure le routage statique avec certificat SSL gratuit.',
    },
    {
      title: '3. Ou importer via GitHub sur vercel.com',
      desc: 'Poussez le projet sur votre dépôt GitHub, connectez-vous sur Vercel.com, cliquez sur "Add New Project" et sélectionnez votre dépôt. Le déploiement continu (CI/CD) sera automatique à chaque push.',
    },
  ];

  const githubSteps = [
    {
      title: '1. Installer gh-pages (dépendance optionnelle)',
      cmd: 'npm install -D gh-pages',
      desc: 'Permet de pousser automatiquement le contenu du dossier de build dist/ sur la branche gh-pages.',
    },
    {
      title: '2. Ajouter les scripts dans package.json',
      cmd: '"predeploy": "npm run build",\n"deploy": "gh-pages -d dist"',
      desc: 'Ces scripts exécutent le build puis publient directement les fichiers sur GitHub Pages.',
    },
    {
      title: '3. Lancer le déploiement',
      cmd: 'npm run deploy',
      desc: 'Votre portfolio sera accessible en ligne sur https://<votre-pseudo>.github.io/<nom-du-repo>/',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Guide d’Exportation & Déploiement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ce portfolio est 100% prêt à être hébergé sur Vercel ou GitHub Pages.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Platform Switcher */}
          <div className="px-6 pt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setActivePlatform('vercel')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                activePlatform === 'vercel'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Déploiement sur Vercel (Recommandé)</span>
            </button>
            <button
              type="button"
              onClick={() => setActivePlatform('github')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                activePlatform === 'github'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Déploiement GitHub Pages</span>
            </button>
          </div>

          {/* Steps Body */}
          <div className="p-6 space-y-4">
            {(activePlatform === 'vercel' ? vercelSteps : githubSteps).map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {step.title}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {step.desc}
                </p>
                {step.cmd && (
                  <div className="relative mt-2">
                    <pre className="p-2.5 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto pr-10">
                      <code>{step.cmd}</code>
                    </pre>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(step.cmd, idx)}
                      className="absolute right-2 top-2 p-1 text-slate-400 hover:text-white transition-colors"
                      title="Copier"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-slate-100/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Framework: React 19 + Vite 8 + Tailwind CSS v4</span>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              Compris
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
