import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const Testimonials: React.FC = () => {
  const { language } = useThemeLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = language === 'ar' ? [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مدير أمن المعلومات',
      company: 'شركة التقنية المتقدمة',
      content: 'منصة Knoux غيرت طريقة عملنا في مجال الأمن السيبراني. الحلول المتقدمة والدعم الفني الممتاز جعلوا حياتنا أسهل بكثير.',
      avatar: 'AM'
    },
    {
      id: 2,
      name: 'سارة عبدالله',
      role: 'مديرة تقنية المعلومات',
      company: 'مؤسسة الابتكار الرقمي',
      content: 'التكامل السلس مع أنظمتنا الحالية والأداء الممتاز جعلوا Knoux الخيار الأمثل لشركتنا. نتائج مذهلة!',
      avatar: 'SA'
    },
    {
      id: 3,
      name: 'محمد علي',
      role: 'مدير الأمن السيبراني',
      company: 'بنك المستقبل',
      content: 'الحماية التي توفرها حلول Knoux غير مسبوقة. الأمان والثقة هما ما نبحث عنه، وقد وجدناهما هنا.',
      avatar: 'MA'
    }
  ] : [
    {
      id: 1,
      name: 'Ahmed Mohamed',
      role: 'CISO',
      company: 'Advanced Technology Co.',
      content: 'Knoux platform has transformed how we work in cybersecurity. The advanced solutions and excellent technical support have made our lives much easier.',
      avatar: 'AM'
    },
    {
      id: 2,
      name: 'Sarah Abdullah',
      role: 'IT Director',
      company: 'Digital Innovation Foundation',
      content: 'Seamless integration with our existing systems and excellent performance made Knoux the perfect choice for our company. Amazing results!',
      avatar: 'SA'
    },
    {
      id: 3,
      name: 'Mohamed Ali',
      role: 'Cybersecurity Director',
      company: 'Future Bank',
      content: 'The protection provided by Knoux solutions is unprecedented. Security and trust are what we were looking for, and we found them here.',
      avatar: 'MA'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/20 border-t border-gray-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            {language === 'ar' ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
          </motion.h2>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-8 md:p-12 rounded-2xl bg-white dark:bg-white/5 max-w-3xl mx-auto relative"
                >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-knoux-600/10 dark:text-knoux-400/10 transform rotate-180" />
                <Quote className="absolute bottom-6 right-6 w-12 h-12 text-knoux-600/10 dark:text-knoux-400/10" />
                
                <div className="mb-8 relative z-10">
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{testimonials[currentIndex].content}"
                    </p>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-tr from-knoux-600 to-knoux-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-lg">
                    {testimonials[currentIndex].avatar}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500 dark:text-knoux-400">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevTestimonial}
                className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 hover:bg-knoux-600 dark:hover:bg-knoux-600 hover:text-white rounded-full shadow-lg text-gray-400 transition-all z-20"
                aria-label={language === 'ar' ? 'السابق' : 'Previous'}
            >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
            </button>
            
            <button
                onClick={nextTestimonial}
                className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 hover:bg-knoux-600 dark:hover:bg-knoux-600 hover:text-white rounded-full shadow-lg text-gray-400 transition-all z-20"
                aria-label={language === 'ar' ? 'التالي' : 'Next'}
            >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
            </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentIndex 
                        ? 'bg-knoux-600 w-8' 
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-knoux-400'
                    }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};