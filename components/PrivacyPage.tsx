import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  const { language } = useThemeLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacySections = language === 'ar' ? [
    {
      title: 'جمع المعلومات',
      icon: <FileText className="w-6 h-6" />,
      content: 'نقوم بجمع معلومات محدودة ضرورية لتقديم خدماتنا، بما في ذلك معلومات الحساب والبيانات التقنية.'
    },
    {
      title: 'استخدام المعلومات',
      icon: <Eye className="w-6 h-6" />,
      content: 'نستخدم المعلومات لتحسين خدماتنا وتقديم تجربة شخصية آمنة لمستخدمينا.'
    },
    {
      title: 'حماية البيانات',
      icon: <Lock className="w-6 h-6" />,
      content: 'نطبق أعلى معايير الأمان لحماية بياناتك باستخدام تشفير متقدم وتقنيات أمنية متطورة.'
    },
    {
      title: 'مشاركة المعلومات',
      icon: <Shield className="w-6 h-6" />,
      content: 'لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. نشارك المعلومات فقط عند الضرورة القانونية.'
    }
  ] : [
    {
      title: 'Information Collection',
      icon: <FileText className="w-6 h-6" />,
      content: 'We collect limited information necessary to provide our services, including account information and technical data.'
    },
    {
      title: 'Use of Information',
      icon: <Eye className="w-6 h-6" />,
      content: 'We use information to improve our services and provide a safe, personalized experience for our users.'
    },
    {
      title: 'Data Protection',
      icon: <Lock className="w-6 h-6" />,
      content: 'We apply the highest security standards to protect your data using advanced encryption and security technologies.'
    },
    {
      title: 'Information Sharing',
      icon: <Shield className="w-6 h-6" />,
      content: 'We do not sell or rent your personal information to third parties. We only share information when legally required.'
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
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'التزامنا بحماية خصوصيتك وأمان بياناتك' 
                : 'Our commitment to protecting your privacy and data security'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 mb-12 rounded-2xl bg-white/50 dark:bg-white/5"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {language === 'ar' 
                  ? 'في Knoux Nexus، نحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك. هذه السياسة توضح كيف نجمع ونستخدم ونحمي معلوماتك الشخصية.' 
                  : 'At Knoux Nexus, we are committed to protecting your privacy and ensuring the security of your data. This policy explains how we collect, use, and protect your personal information.'}
              </p>
              
              <div className="bg-knoux-600/5 dark:bg-knoux-400/10 rounded-xl p-6 mb-8 border border-knoux-600/10 dark:border-knoux-400/10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Lock className="w-5 h-5 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
                  {language === 'ar' ? 'آخر تحديث' : 'Last Updated'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'ar' 
                    ? '15 يناير 2024' 
                    : 'January 15, 2024'}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-xl bg-white dark:bg-white/5"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-knoux-600/10 dark:bg-white/10 rounded-lg flex items-center justify-center mr-4 rtl:ml-4 text-knoux-600 dark:text-knoux-400">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};