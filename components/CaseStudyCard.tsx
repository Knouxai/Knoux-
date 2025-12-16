import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface CaseStudyCardProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  logo: React.ReactNode;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  logo
}) => {
  const { language } = useThemeLanguage();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-panel rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-knoux-600 dark:hover:border-knoux-500 transition-all duration-300 shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300">
            {logo}
          </div>
          <span className="text-xs font-bold bg-knoux-600/10 text-knoux-600 dark:text-knoux-400 px-2 py-1 rounded-full uppercase tracking-wide">
            {industry}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{company}</p>
        
        <div className="space-y-4 mb-6 border-t border-gray-100 dark:border-gray-700 pt-4">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">
              {language === 'ar' ? 'التحدي' : 'Challenge'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{challenge}</p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">
              {language === 'ar' ? 'الحل' : 'Solution'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{solution}</p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">
              {language === 'ar' ? 'النتائج' : 'Results'}
            </h4>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{results}</p>
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center py-2.5 bg-gray-100 dark:bg-gray-700/50 hover:bg-knoux-600 hover:text-white dark:hover:bg-knoux-600 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-lg transition-colors group">
          {language === 'ar' ? 'قراءة الدراسة الكاملة' : 'Read Full Case Study'}
          <ChevronRight className="w-4 h-4 ml-1 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};