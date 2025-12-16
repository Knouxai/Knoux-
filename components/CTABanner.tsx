import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const CTABanner: React.FC = () => {
  const { language } = useThemeLanguage();

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-50 dark:bg-knoux-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-knoux-900 to-knoux-800 border-none shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-64 h-64 bg-knoux-600 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-knoux-accent rounded-full blur-[100px] opacity-30"></div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {language === 'ar' 
                ? 'هل أنت مستعد لمستقبل الأمن السيبراني؟' 
                : 'Ready for the Future of Cybersecurity?'}
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'انضم إلى آلاف المؤسسات التي تثق بحلول Knoux لحماية أنظمتها وبياناتها' 
                : 'Join thousands of organizations trusting Knoux solutions to protect their systems and data'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-knoux-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2 rtl:ml-2" />
                {language === 'ar' ? 'ابدأ الآن مجاناً' : 'Start Free Trial'}
              </button>
              <button className="border-2 border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                {language === 'ar' ? 'جدولة استشارة' : 'Schedule Consultation'}
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-8">
              {language === 'ar' 
                ? 'لا حاجة لبطاقة ائتمان • إلغاء في أي وقت' 
                : 'No credit card required • Cancel anytime'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};