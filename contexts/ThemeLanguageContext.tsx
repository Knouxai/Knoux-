import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'ar';
type Theme = 'dark' | 'light';

interface ThemeLanguageContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: typeof translations.en;
  isRTL: boolean;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('knoux-lang') as Language;
    if (savedLang) setLanguage(savedLang);
    
    const savedTheme = localStorage.getItem('knoux-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Handle HTML dir attribute for RTL
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, mounted]);

  useEffect(() => {
    if (!mounted) return;
    // Handle Tailwind Dark Mode
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('knoux-lang', newLang);
      return newLang;
    });
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('knoux-theme', newTheme);
      return newTheme;
    });
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  if (!mounted) return null;

  return (
    <ThemeLanguageContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t, isRTL }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
};