import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Users, FileText, PlayCircle, HelpCircle, ArrowRight, Wrench, Newspaper, MessageSquare } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const ResourcesSection: React.FC = () => {
  const { t } = useThemeLanguage();

  const resources = [
    { id: 'docs', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'tutorials', icon: PlayCircle, color: 'text-red-500', bg: 'bg-red-500/10' },
    { id: 'support', icon: Wrench, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { id: 'community', icon: MessageSquare, color: 'text-green-500', bg: 'bg-green-500/10' },
    { id: 'blog', icon: Newspaper, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'api', icon: Code, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <section id="resources" className="py-24 bg-white dark:bg-knoux-900 border-t border-gray-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.resourcesSection.title} <span className="text-knoux-600 dark:text-knoux-400">{t.resourcesSection.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t.resourcesSection.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => {
            const cardData = t.resourcesSection.cards[item.id as keyof typeof t.resourcesSection.cards];
            return (
              <motion.a
                key={item.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative glass-panel p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-knoux-400 dark:hover:border-knoux-400 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3.5 rounded-xl ${item.bg} ${item.color} shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-knoux-600 dark:group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-knoux-600 dark:group-hover:text-knoux-400 transition-colors">
                  {cardData.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cardData.desc}
                </p>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};