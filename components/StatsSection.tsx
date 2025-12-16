import React from 'react';
import { motion } from 'framer-motion';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const StatsSection: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();

  const stats = [
    { number: '30+', label: t.statsSection.activeProjects },
    { number: '100K+', label: t.statsSection.secureUsers },
    { number: '99.9%', label: t.statsSection.uptime },
    { number: '24/7', label: t.statsSection.monitoring }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-knoux-600 dark:text-knoux-400 mb-2 font-display">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
