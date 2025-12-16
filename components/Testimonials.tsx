import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const Testimonials: React.FC = () => {
  const { language } = useThemeLanguage();

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

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/20 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            {language === 'ar' ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'تجارب وآراء عملائنا الذين استفادوا من حلولنا الأمنية المتقدمة' 
              : 'Experiences and opinions from our clients who benefited from our advanced security solutions'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-xl relative bg-white dark:bg-white/5"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-knoux-600/20 dark:text-knoux-400/20" />
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-knoux-600 to-knoux-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};