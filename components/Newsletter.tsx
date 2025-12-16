import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const Newsletter: React.FC = () => {
  const { language } = useThemeLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 md:p-12 text-center bg-white/80 dark:bg-knoux-900/80 shadow-2xl border border-gray-200 dark:border-white/10"
        >
          <div className="w-16 h-16 bg-knoux-600/10 dark:bg-knoux-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-knoux-600 dark:text-knoux-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {language === 'ar' ? 'ابق على اطلاع' : 'Stay Updated'}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اشترك في نشرتنا البريدية لتستلم آخر الأخبار والتحديثات حول منتجاتنا وحلولنا الأمنية' 
              : 'Subscribe to our newsletter to receive the latest news and updates about our products and security solutions'}
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-6"
            >
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                {language === 'ar' 
                  ? 'شكرًا لاشتراكك! سنرسل لك آخر المستجدات' 
                  : 'Thank you for subscribing! We\'ll send you the latest updates'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email address'}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-knoux-600 hover:bg-knoux-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-knoux-600/25"
                >
                  <Send className="w-4 h-4 rtl:ml-2 ltr:mr-2" />
                  {language === 'ar' ? 'اشتراك' : 'Subscribe'}
                </button>
              </div>
            </form>
          )}

          <p className="text-gray-500 dark:text-gray-400 text-xs mt-6">
            {language === 'ar' 
              ? 'لن نقوم بإرسال رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.' 
              : 'We won\'t send spam. Unsubscribe at any time.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};