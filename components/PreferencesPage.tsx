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

  const preferencesSections = language === 'ar' ? [
    {
      title: 'الإعدادات العامة',
      icon: <Settings className="w-6 h-6" />,
      description: 'تخصيص إعدادات حسابك وتجربتك العامة'
    },
    {
      title: 'الإشعارات',
      icon: <Bell className="w-6 h-6" />,
      description: 'إدارة كيفية تلقي الإشعارات والتواصل معك'
    },
    {
      title: 'الخصوصية والأمان',
      icon: <Shield className="w-6 h-6" />,
      description: 'التحكم في من يمكنه رؤية معلوماتك ونشاطك'
    },
    {
      title: 'اللغة والإمكانية',
      icon: <Globe className="w-6 h-6" />,
      description: 'تخصيص لغة العرض وإعدادات الوصول'
    }
  ] : [
    {
      title: 'General Settings',
      icon: <Settings className="w-6 h-6" />,
      description: 'Customize your account settings and overall experience'
    },
    {
      title: 'Notifications',
      icon: <Bell className="w-6 h-6" />,
      description: 'Manage how you receive notifications and communications'
    },
    {
      title: 'Privacy & Security',
      icon: <Shield className="w-6 h-6" />,
      description: 'Control who can see your information and activity'
    },
    {
      title: 'Language & Accessibility',
      icon: <Globe className="w-6 h-6" />,
      description: 'Customize display language and accessibility settings'
    }
  ];

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
                <div className="p-4 bg-gray-50 dark:bg-black/20 rounded