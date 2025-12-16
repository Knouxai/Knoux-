import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Code, Rocket, Atom, CircuitBoard } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { HolographicCard } from './HolographicCard';

export const InnovationLab: React.FC = () => {
  const { language } = useThemeLanguage();

  const innovations = language === 'ar' ? [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'الذكاء الاصطناعي الأمني',
      description: 'نظام ذكاء اصطناعي متقدم للكشف عن التهديدات السيبرانية'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'معالجة البيانات الفورية',
      description: 'تحليل البيانات في الوقت الحقيقي للكشف عن الأنماط'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'الحوسبة الكمومية',
      description: 'استخدام تقنيات الحوسبة الكمومية لتحسين الأمان'
    }
  ] : [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Security AI',
      description: 'Advanced AI system for detecting cybersecurity threats'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Data Processing',
      description: 'Real-time data analysis for pattern detection'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Using quantum computing techniques to enhance security'
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white dark:bg-knoux-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-knoux-600/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            {language === 'ar' ? 'مختبر الابتكار' : 'Innovation Lab'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {language === 'ar' 
              ? 'نستكشف أحدث التقنيات لتطوير حلول أمنية مبتكرة' 
              : 'We explore cutting-edge technologies to develop innovative security solutions'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <HolographicCard key={index} className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-knoux-600/10 to-knoux-accent/10 rounded-2xl mb-6 text-knoux-600 dark:text-knoux-400">
                {innovation.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{innovation.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{innovation.description}</p>
            </HolographicCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-12 text-center bg-slate-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[Code, Rocket, CircuitBoard, Brain, Zap, Atom].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="w-16 h-16 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10"
              >
                <Icon className="w-8 h-8 text-knoux-600 dark:text-knoux-400" />
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'ar' ? 'البحث والتطوير المستمر' : 'Continuous R&D'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            {language === 'ar' 
              ? 'فريقنا من الخبراء يعمل على تطوير تقنيات جديدة لمواجهة التهديدات المستقبلية' 
              : 'Our team of experts works on developing new technologies to combat future threats'}
          </p>
          <button className="bg-knoux-600 hover:bg-knoux-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-knoux-600/30">
            {language === 'ar' ? 'تعرف على مشاريعنا' : 'Learn About Our Projects'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};