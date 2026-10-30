import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVViewerModal } from './components/CVViewerModal';
import { DeploymentModal } from './components/DeploymentModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <ExperienceTimeline />
        <ContactSection onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CVViewerModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <DeploymentModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
