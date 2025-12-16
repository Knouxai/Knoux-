import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, Scale, ArrowLeft } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  const { language } = useThemeLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsSections = language === 'ar' ? [
    {
      title: 'قبول الشروط',
      icon: <CheckCircle className="w-6 h-6" />,
      content: 'باستخدامك لخدمات Knoux Nexus، فإنك توافق على الالتزام بهذه الشروط والأحكام.'
    },
    {
      title: 'استخدام الخدمة',
      icon: <Scale className="w-6 h-6" />,
      content: 'يجب أن تستخدم خدماتنا فقط للأغراض المشروعة وفي الامتثال للقوانين المعمول بها.'
    },
    {
      title: 'المسؤولية',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: 'أنت المسؤول الوحيد عن محتوى تنشئه أو تنشره باستخدام خدماتنا.'
    }
  ] : [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6" />,
      content: 'By using Knoux Nexus services, you agree to be bound by these terms and conditions.'
    },
    {
      title: 'Service Use',
      icon: <Scale className="w-6 h-6" />,
      content: 'You must use our services only for legitimate purposes and in compliance with applicable laws.'
    },
    {
      title: 'Responsibility',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: 'You are solely responsible for content you create or publish using our services.'
    }
  ];

  const additionalTerms = language === 'ar' ? [
    {
      title: 'الملكية الفكرية',
      content: 'جميع حقوق الملكية الفكرية المتعلقة بمحتوى موقعنا وخدماتنا مملوكة لنا أو مرخصة لنا.'
    },
    {
      title: 'تعديل الخدمات',
      content: 'نحتفظ بالحق في تعديل أو إيقاف خدماتنا في أي وقت دون إشعار مسبق.'
    },
    {
      title: 'المسؤولية القانونية',
      content: 'لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية ناتجة عن استخدام خدماتنا.'
    },
    {
      title: 'القانون الحاكم',
      content: 'تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة.'
    }
  ] : [
    {
      title: 'Intellectual Property',
      content: 'All intellectual property rights related to our website content and services are owned by us or licensed to us.'
    },
    {
      title: 'Service Modifications',
      content: 'We reserve the right to modify or discontinue our services at any time without prior notice.'
    },
    {
      title: 'Legal Liability',
      content: 'We will not be liable for any indirect or incidental damages resulting from using our services.'
    },
    {
      title: 'Governing Law',
      content: 'These terms are governed by the laws of the United Arab Emirates.'
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'القواعد والإرشادات لاستخدام خدمات Knoux Nexus' 
                : 'Rules and guidelines for using Knoux Nexus services'}
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
                  ? 'مرحباً بك في Knoux Nexus. هذه الشروط والأحكام تحدد القواعد والإرشادات لاستخدام موقعنا وخدماتنا.' 
                  : 'Welcome to Knoux Nexus. These Terms and Conditions outline the rules and regulations for using our website and services.'}
              </p>
              
              <div className="bg-knoux-600/5 dark:bg-knoux-400/10 rounded-xl p-6 mb-8 border border-knoux-600/10 dark:border-knoux-400/10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Scale className="w-5 h-5 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
                  {language === 'ar' ? 'تاريخ التفعيل' : 'Effective Date'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'ar' 
                    ? '15 يناير 2024' 
                    : 'January 15, 2024'}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8 mb-12">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel p-8 rounded-2xl bg-white/50 dark:bg-white/5"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'أحكام إضافية' : 'Additional Terms'}
            </h2>
            
            <div className="space-y-6">
              {additionalTerms.map((term, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{term.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{term.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};