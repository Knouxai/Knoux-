import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Palette, Bell, Globe, Shield, Moon, Sun, ArrowLeft } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface PreferencesPageProps {
  onBack: () => void;
}

export const PreferencesPage: React.FC<PreferencesPageProps> = ({ onBack }) => {
  const { language, toggleLanguage, theme, toggleTheme } = useThemeLanguage();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    activityPublic: false,
    dataSharing: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyChange = (key: keyof typeof privacy) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-knoux-900 pt-20 transition-colors duration-500">
      <nav className="fixed top-0 left-0 w-full z-50 glass-panel-heavy px-4 sm:px-8 py-4 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-knoux-600 dark:hover:text-knoux-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
          {language === 'ar' ? 'العودة' : 'Back'}
        </button>
      </nav>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-knoux-600/10 dark:bg-white/5 rounded-2xl mb-6 text-knoux-600 dark:text-knoux-400">
              <Settings className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'التفضيلات' : 'Preferences'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تخصيص تجربتك وضبط إعداداتك الشخصية' 
                : 'Customize your experience and adjust your personal settings'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* General Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel rounded-2xl p-6 bg-white dark:bg-white/5"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Palette className="w-6 h-6 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
                {language === 'ar' ? 'الإعدادات العامة' : 'General Settings'}
              </h2>
              
              <div className="space-y-6">
                {/* Theme */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-black/20 rounded-lg border border-gray-100 dark:border-white/5">
                  <div className="flex items-center">
                    {theme === 'dark' ? <Moon className="w-5 h-5 text-knoux-600 dark:text-knoux-400 mr-3 rtl:ml-3" /> : <Sun className="w-5 h-5 text-knoux-600 dark:text-knoux-400 mr-3 rtl:ml-3" />}
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium">
                        {language === 'ar' ? 'الوضع الليلي' : 'Dark Mode'}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {language === 'ar' ? 'تفعيل الوضع الليلي للواجهة' : 'Enable dark mode interface'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      theme === 'dark' ? 'bg-knoux-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5 left-0.5 ${
                      theme === 'dark' ? 'transform translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>

                {/* Language */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-black/20 rounded-lg border border-gray-100 dark:border-white/5">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-knoux-600 dark:text-knoux-400 mr-3 rtl:ml-3" />
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium">
                        {language === 'ar' ? 'لغة العرض' : 'Display Language'}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {language === 'ar' ? 'العربية' : 'English'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium hover:border-knoux-600 dark:hover:border-knoux-400 transition-colors dark:text-white"
                  >
                    {language === 'ar' ? 'Switch to English' : 'تغيير للعربية'}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Notifications & Privacy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
               {/* Notifications */}
               <div className="glass-panel rounded-2xl p-6 bg-white dark:bg-white/5">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Bell className="w-6 h-6 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
                    {language === 'ar' ? 'الإشعارات' : 'Notifications'}
                 </h2>
                 <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                         <span className="capitalize text-gray-700 dark:text-gray-300">{key} Notifications</span>
                         <button 
                           onClick={() => handleNotificationChange(key as any)}
                           className={`w-12 h-6 rounded-full transition-colors relative ${value ? 'bg-knoux-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                         >
                           <div className={`w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5 left-0.5 ${value ? 'transform translate-x-6' : 'translate-x-0'}`}></div>
                         </button>
                      </div>
                    ))}
                 </div>
               </div>

               {/* Privacy */}
               <div className="glass-panel rounded-2xl p-6 bg-white dark:bg-white/5">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
                    {language === 'ar' ? 'الخصوصية' : 'Privacy'}
                 </h2>
                 <div className="space-y-4">
                    {Object.entries(privacy).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                         <span className="capitalize text-gray-700 dark:text-gray-300">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                         <button 
                           onClick={() => handlePrivacyChange(key as any)}
                           className={`w-12 h-6 rounded-full transition-colors relative ${value ? 'bg-knoux-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                         >
                           <div className={`w-5 h-5 bg-white rounded-full transition-transform absolute top-0.5 left-0.5 ${value ? 'transform translate-x-6' : 'translate-x-0'}`}></div>
                         </button>
                      </div>
                    ))}
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};