import React, { useState } from 'react';
import { Menu, X, Shield, Globe, Moon, Sun, Lock } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDashboard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t, isRTL } = useThemeLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel-heavy border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-knoux-600 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Shield className="relative h-8 w-8 text-knoux-900 dark:text-white" />
            </div>
            <span className="text-2xl font-display font-bold tracking-wider text-gray-900 dark:text-white">
              KNOUX<span className="text-knoux-600 dark:text-knoux-400">NEXUS</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className={`flex items-baseline space-x-8 ${isRTL ? 'space-x-reverse' : ''} mx-10`}>
              {['home', 'showcase', 'enterprise', 'resources', 'security'].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 relative group"
                >
                  {(t.nav as any)[key]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-knoux-600 dark:bg-knoux-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition flex items-center gap-1 font-sans font-bold"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs uppercase">{language}</span>
            </button>

            <button 
              onClick={onOpenDashboard}
              className="bg-knoux-600 hover:bg-knoux-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(91,33,182,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 border border-transparent dark:border-white/10 flex items-center gap-2"
            >
              <Lock className="w-3 h-3" />
              {t.nav.accessConsole}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'showcase', 'enterprise', 'resources', 'security'].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  {(t.nav as any)[key]}
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenDashboard && onOpenDashboard();
                  setIsOpen(false);
                }}
                className="block w-full text-left rtl:text-right px-3 py-2 rounded-md text-base font-medium text-knoux-600 dark:text-knoux-400 font-bold"
              >
                {t.nav.accessConsole}
              </button>
              <button 
                onClick={() => { toggleLanguage(); setIsOpen(false); }}
                className="w-full text-left rtl:text-right px-3 py-2 text-gray-600 dark:text-gray-300 font-bold flex items-center gap-2"
              >
                 <Globe className="w-4 h-4" />
                 {language === 'en' ? 'Switch to Arabic' : 'تبديل للإنجليزية'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};