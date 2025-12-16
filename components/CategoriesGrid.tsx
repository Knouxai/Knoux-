import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../constants';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const CategoriesGrid: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();

  return (
    <section className="py-20 px-4 bg-white dark:bg-knoux-900 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t.categories.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.categories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const catKey = category.id as keyof typeof t.categories.items;
            const name = t.categories.items[catKey] || category.id;
            const desc = t.categories.descriptions[catKey] || "";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="glass-panel p-6 rounded-xl cursor-pointer group bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="bg-knoux-600/10 dark:bg-knoux-400/20 text-knoux-600 dark:text-knoux-400 px-3 py-1 rounded-full text-sm font-medium border border-knoux-600/20 dark:border-knoux-400/20">
                    {category.count} {t.categories.projectCount}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-knoux-600 dark:group-hover:text-knoux-400 transition-colors">
                  {name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
