import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Search, 
  Eye, 
  MousePointerClick,
  Smile,
  Frown,
  Meh,
  Zap,
  Brain,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface UserJourneyMapProps {
  onBack?: () => void;
}

export const UserJourneyMap: React.FC<UserJourneyMapProps> = ({ onBack }) => {
  const { language } = useThemeLanguage();
  const [activeStage, setActiveStage] = useState(0);

  const journeyStages = language === 'ar' ? [
    {
      id: 'awareness',
      title: 'الوعي',
      icon: <Eye className="w-6 h-6" />,
      description: 'يكتشف المستخدم وجود منصة Knoux Nexus',
      emotions: [
        { type: 'curiosity', icon: <Brain className="w-4 h-4" />, text: 'فضول' },
        { type: 'confusion', icon: <Meh className="w-4 h-4" />, text: 'حيرة' }
      ],
      actions: ['زيارة الموقع', 'قراءة المقالات', 'مشاهدة الفيديوهات'],
      painPoints: ['عدم وضوح الفوائد', 'كثرة الخيارات'],
      opportunities: ['محتوى تعريفي قوي', 'فيديو ترويجي']
    },
    {
      id: 'interest',
      title: 'الاهتمام',
      icon: <Search className="w-6 h-6" />,
      description: 'يبدأ المستخدم في استكشاف المنصة والحلول',
      emotions: [
        { type: 'interest', icon: <Brain className="w-4 h-4" />, text: 'اهتمام' },
        { type: 'skepticism', icon: <Meh className="w-4 h-4" />, text: 'شك' }
      ],
      actions: ['تصفح المشاريع', 'قراءة التوثيق', 'مقارنة الحلول'],
      painPoints: ['تعقيد المعلومات', 'عدم وضوح التسعير'],
      opportunities: ['واجهة مستخدم بسيطة', 'مقارنات واضحة']
    },
    {
      id: 'consideration',
      title: 'التأمل',
      icon: <Zap className="w-6 h-6" />,
      description: 'يقيم المستخدم الحلول مقابل احتياجاته',
      emotions: [
        { type: 'hope', icon: <Smile className="w-4 h-4" />, text: 'أمل' },
        { type: 'anxiety', icon: <Frown className="w-4 h-4" />, text: 'قلق' }
      ],
      actions: ['طلب عرض أسعار', 'jadwal استشارة', 'تجربة تجريبية'],
      painPoints: ['مدة اتخاذ القرار', 'التكاليف المحتملة'],
      opportunities: ['عرض تجريبي مجاني', 'دعم متخصص']
    },
    {
      id: 'decision',
      title: 'اتخاذ القرار',
      icon: <MousePointerClick className="w-6 h-6" />,
      description: 'يقرر المستخدم الاستثمار في الحل',
      emotions: [
        { type: 'confidence', icon: <Smile className="w-4 h-4" />, text: 'ثقة' },
        { type: 'relief', icon: <Smile className="w-4 h-4" />, text: 'راحة' }
      ],
      actions: ['الاشتراك', 'دفع التكلفة', 'بدء التنفيذ'],
      painPoints: ['عملية الدفع المعقدة', 'البدء الصعب'],
      opportunities: ['عملية تسجيل سلسة', 'مرشد بدء الاستخدام']
    },
    {
      id: 'advocacy',
      title: 'الدعوة',
      icon: <User className="w-6 h-6" />,
      description: 'يصبح المستخدم مناصراً للمنصة',
      emotions: [
        { type: 'satisfaction', icon: <Smile className="w-4 h-4" />, text: 'رضا' },
        { type: 'pride', icon: <Smile className="w-4 h-4" />, text: 'فخر' }
      ],
      actions: ['مشاركة التجربة', 'توصية الآخرين', 'مراجعة المنتج'],
      painPoints: ['عدم وجود منصة مشاركة', 'صعوبة التوصية'],
      opportunities: ['برنامج إحالة', 'مجتمع مستخدمين']
    }
  ] : [
    {
      id: 'awareness',
      title: 'Awareness',
      icon: <Eye className="w-6 h-6" />,
      description: 'User discovers Knoux Nexus platform exists',
      emotions: [
        { type: 'curiosity', icon: <Brain className="w-4 h-4" />, text: 'Curiosity' },
        { type: 'confusion', icon: <Meh className="w-4 h-4" />, text: 'Confusion' }
      ],
      actions: ['Visit website', 'Read articles', 'Watch videos'],
      painPoints: ['Unclear benefits', 'Too many options'],
      opportunities: ['Strong introductory content', 'Promotional video']
    },
    {
      id: 'interest',
      title: 'Interest',
      icon: <Search className="w-6 h-6" />,
      description: 'User begins exploring the platform and solutions',
      emotions: [
        { type: 'interest', icon: <Brain className="w-4 h-4" />, text: 'Interest' },
        { type: 'skepticism', icon: <Meh className="w-4 h-4" />, text: 'Skepticism' }
      ],
      actions: ['Browse projects', 'Read documentation', 'Compare solutions'],
      painPoints: ['Information complexity', 'Unclear pricing'],
      opportunities: ['Simple user interface', 'Clear comparisons']
    },
    {
      id: 'consideration',
      title: 'Consideration',
      icon: <Zap className="w-6 h-6" />,
      description: 'User evaluates solutions against their needs',
      emotions: [
        { type: 'hope', icon: <Smile className="w-4 h-4" />, text: 'Hope' },
        { type: 'anxiety', icon: <Frown className="w-4 h-4" />, text: 'Anxiety' }
      ],
      actions: ['Request quote', 'Schedule consultation', 'Try demo'],
      painPoints: ['Decision timeline', 'Potential costs'],
      opportunities: ['Free demo', 'Specialized support']
    },
    {
      id: 'decision',
      title: 'Decision',
      icon: <MousePointerClick className="w-6 h-6" />,
      description: 'User decides to invest in the solution',
      emotions: [
        { type: 'confidence', icon: <Smile className="w-4 h-4" />, text: 'Confidence' },
        { type: 'relief', icon: <Smile className="w-4 h-4" />, text: 'Relief' }
      ],
      actions: ['Subscribe', 'Pay cost', 'Begin implementation'],
      painPoints: ['Complex payment process', 'Difficult start'],
      opportunities: ['Smooth registration process', 'Getting started guide']
    },
    {
      id: 'advocacy',
      title: 'Advocacy',
      icon: <User className="w-6 h-6" />,
      description: 'User becomes an advocate for the platform',
      emotions: [
        { type: 'satisfaction', icon: <Smile className="w-4 h-4" />, text: 'Satisfaction' },
        { type: 'pride', icon: <Smile className="w-4 h-4" />, text: 'Pride' }
      ],
      actions: ['Share experience', 'Recommend to others', 'Product review'],
      painPoints: ['No sharing platform', 'Difficulty recommending'],
      opportunities: ['Referral program', 'User community']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-knoux-900 pt-20 pb-20 transition-colors duration-500">
      {onBack && (
        <nav className="fixed top-0 left-0 w-full z-50 glass-panel-heavy px-4 sm:px-8 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-knoux-600 dark:hover:text-knoux-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            {language === 'ar' ? 'العودة' : 'Back'}
          </button>
        </nav>
      )}

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-knoux-600 rounded-2xl mb-6 shadow-xl"
          >
            <User className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            {language === 'ar' ? 'خريطة رحلة المستخدم' : 'User Journey Map'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'تتبع تجربة المستخدم من الاكتشاف إلى المناصرة' 
              : 'Tracking user experience from discovery to advocacy'}
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16 px-4">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {journeyStages.map((stage, index) => (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`relative flex flex-col items-center group w-full md:w-auto ${
                  activeStage === index ? 'scale-110' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  activeStage === index 
                    ? 'bg-knoux-600 text-white shadow-lg shadow-knoux-600/30' 
                    : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-700'
                }`}>
                  {stage.icon}
                </div>
                <span className={`text-sm font-bold ${
                  activeStage === index ? 'text-knoux-600 dark:text-knoux-400' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {stage.title}
                </span>
                
                {/* Active Indicator */}
                {activeStage === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 w-2 h-2 bg-knoux-600 rounded-full hidden md:block"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5"
        >
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Info */}
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-knoux-600/10 text-knoux-600 dark:text-knoux-400 font-bold text-sm mb-6">
                <span>{language === 'ar' ? 'المرحلة' : 'Stage'} {activeStage + 1}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                <span>{journeyStages[activeStage].title}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {journeyStages[activeStage].description}
              </h3>
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">{language === 'ar' ? 'المشاعر' : 'Emotions'}</h4>
                <div className="flex gap-4">
                  {journeyStages[activeStage].emotions.map((emotion, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <span className="text-xl">{emotion.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{emotion.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Actions */}
              <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h4 className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 mb-4">
                  <MousePointerClick className="w-5 h-5" />
                  {language === 'ar' ? 'الإجراءات' : 'Actions'}
                </h4>
                <ul className="space-y-2">
                  {journeyStages[activeStage].actions.map((action, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pain Points */}
              <div className="p-5 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                <h4 className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400 mb-4">
                  <Frown className="w-5 h-5" />
                  {language === 'ar' ? 'نقاط الألم' : 'Pain Points'}
                </h4>
                <ul className="space-y-2">
                  {journeyStages[activeStage].painPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="md:col-span-2 p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                <h4 className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                  <Zap className="w-5 h-5" />
                  {language === 'ar' ? 'الفرص' : 'Opportunities'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {journeyStages[activeStage].opportunities.map((opp, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                      {opp}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            {language === 'ar' ? 'السابق' : 'Previous'}
          </button>
          
          <button
            onClick={() => setActiveStage(Math.min(journeyStages.length - 1, activeStage + 1))}
            disabled={activeStage === journeyStages.length - 1}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-knoux-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-knoux-500 transition-colors shadow-lg shadow-knoux-600/20"
          >
            {language === 'ar' ? 'التالي' : 'Next'}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};