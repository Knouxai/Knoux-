import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { DashboardPreview } from './components/DashboardPreview';
import { EnterpriseSection } from './components/EnterpriseSection';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { CategoriesGrid } from './components/CategoriesGrid';
import { Project } from './types';
import { ThemeLanguageProvider } from './contexts/ThemeLanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { DashboardPage } from './components/DashboardPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { PreferencesPage } from './components/PreferencesPage';
import { AnimatePresence, motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { ResourcesSection } from './components/ResourcesSection';

type ViewState = 'home' | 'dashboard' | 'privacy' | 'terms' | 'preferences';

const MainContent: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    setView('home');
  };

  const handleNavigate = (target: ViewState) => {
    setView(target);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-knoux-900 flex items-center justify-center transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 border-4 border-knoux-600 dark:border-knoux-400 border-t-transparent rounded-full mx-auto mb-6"
          />
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white tracking-wider">
            KNOUX<span className="text-knoux-600 dark:text-knoux-400">NEXUS</span>
          </h1>
          <p className="text-knoux-600 dark:text-knoux-400 mt-2 font-mono text-sm tracking-widest">INITIALIZING SYSTEM...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      
      <div className="min-h-screen bg-slate-50 dark:bg-knoux-900 text-slate-900 dark:text-white selection:bg-knoux-600 selection:text-white transition-colors duration-300">
        <ParticleBackground />
        
        <AnimatePresence mode="wait">
          {view === 'dashboard' ? (
             <DashboardPage key="dashboard" onBack={handleBackToHome} />
          ) : view === 'privacy' ? (
             <PrivacyPage key="privacy" onBack={handleBackToHome} />
          ) : view === 'terms' ? (
             <TermsPage key="terms" onBack={handleBackToHome} />
          ) : view === 'preferences' ? (
             <PreferencesPage key="preferences" onBack={handleBackToHome} />
          ) : selectedProject ? (
            <ProjectDetailPage 
              key="detail-page" 
              project={selectedProject} 
              onBack={handleBackToHome} 
            />
          ) : (
            <motion.div 
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar onOpenDashboard={() => handleNavigate('dashboard')} />
              
              <main>
                <Hero />
                
                <StatsSection />
                
                <div className="relative z-10">
                  <ProjectGrid onOpenProject={handleOpenProject} />
                </div>

                <CategoriesGrid />
                
                <EnterpriseSection />

                <ResourcesSection />

                <Testimonials />
                
                <DashboardPreview />

                <Newsletter />
              </main>

              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeLanguageProvider>
      <MainContent />
    </ThemeLanguageProvider>
  );
};

export default App;