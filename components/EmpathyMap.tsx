import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Brain, 
  Heart, 
  Ear, 
  Eye,
  Lightbulb,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ArrowLeft
} from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface EmpathyMapProps {
  onBack?: () => void;
}

export const EmpathyMap: React.FC<EmpathyMapProps> = ({ onBack }) => {
  const { language } = useThemeLanguage();
  const [activePersona, setActivePersona] = useState('ciso');

  const personas = language === 'ar' ? [
    {
      id: 'ciso',
      name: 'أحمد محمد',
      role: 'مدير أمن المعلومات',
      age: '42 سنة',
      avatar: 'أ',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'developer',
      name: 'سارة عبدالله',
      role: 'مطور برامج',
      age: '28 سنة',
      avatar: 'س',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'it-director',
      name: 'محمد علي',
      role: 'مدير تقنية المعلومات',
      age: '38 سنة',
      avatar: 'م',
      color: 'from-green-500 to-teal-600'
    }
  ] : [
    {
      id: 'ciso',
      name: 'Ahmed Mohamed',
      role: 'Chief Information Security Officer',
      age: '42 years old',
      avatar: 'A',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'developer',
      name: 'Sarah Abdullah',
      role: 'Software Developer',
      age: '28 years old',
      avatar: 'S',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'it-director',
      name: 'Mohamed Ali',
      role: 'IT Director',
      age: '38 years old',
      avatar: 'M',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const empathyData = language === 'ar' ? {
    ciso: {
      thinks: [
        'كيف أحمي بيانات العملاء من التهديدات المتقدمة؟',
        'هل حلولنا تتوافق مع لوائح البنك المركزي؟',
        'ما هي العواقب المالية لخرق أمني؟',
        'هل فريقي لديه المهارات اللازمة؟',
        'كيف أقنع الإدارة العليا بالاستثمار في الأمان؟'
      ],
      feels: [
        { text: 'قلق مستمر بشأن الأمان السيبراني', icon: <Frown className="w-4 h-4" /> },
        { text: 'ضغط لإثبات قيمة الاستثمار في الأمان', icon: <Meh className="w-4 h-4" /> },
        { text: 'إحباط من التعقيد التقني للحلول', icon: <Frown className="w-4 h-4" /> },
        { text: 'فخر عندما تنجح عمليات الأمان', icon: <Smile className="w-4 h-4" /> },
        { text: 'شعور بالمسؤولية الثقيلة', icon: <Meh className="w-4 h-4" /> }
      ],
      hears: [
        'البنك يحتاج لحماية أفضل',
        'المنافسون يستخدمون تقنيات أحدث',
        'اللوائح الحكومية أصبحت أكثر صرامة',
        'العملاء يفقدون الثقة بعد الحوادث',
        'التكلفة مرتفعة جداً'
      ],
      sees: [
        'تقارير إنفاق ضخم على الأمان دون نتائج واضحة',
        'فريق عمل مرهق ومتردد في اتخاذ القرارات',
        'تهديدات سيبرانية جديدة يومياً',
        'ضغوط من الإدارة العليا للمتاجرة بالأمان',
        'نجاحات المنافسين في السوق'
      ]
    },
    developer: {
      thinks: [
        'كيف أدمج الأمان دون التأثير على الأداء؟',
        'هل هذه المكتبة آمنة فعلاً؟',
        'ما هي أفضل الممارسات للكود الآمن؟',
        'كيف أواكب التطورات السريعة في المجال؟',
        'هل تطبيقي مقاوم لهجمات XSS وSQL Injection؟'
      ],
      feels: [
        { text: 'إثارة عند اكتشاف أدوات جديدة', icon: <Smile className="w-4 h-4" /> },
        { text: 'إحباط من تعقيد وثائق الأمان', icon: <Frown className="w-4 h-4" /> },
        { text: 'ضغط لإنهاء المشاريع في الوقت المحدد', icon: <Meh className="w-4 h-4" /> },
        { text: 'فخر بكتابة كود آمن وفعال', icon: <Smile className="w-4 h-4" /> },
        { text: 'قلق من الثغرات المحتملة', icon: <Frown className="w-4 h-4" /> }
      ],
      hears: [
        'الأمان مهم لكنه يبطئ التطوير',
        'العميل يريد ميزات جديدة وليس أمان',
        'المنافسون يستخدمون تقنيات أسرع',
        'الإدارة لا تقدر جهود الأمان',
        'هناك ثغرة جديدة تم اكتشافها'
      ],
      sees: [
        'مستندات تقنية معقدة وصعبة الفهم',
        'أدوات أمان متعددة لكن غير متكاملة',
        'زملاء يتجاهلون أفضل ممارسات الأمان',
        'ضغوط من المدراء لتسريع التطوير',
        'أمثلة على اختراقات مشابهة'
      ]
    },
    'it-director': {
      thinks: [
        'كيف أحمي الأنظمة التشغيلية الحيوية؟',
        'هل الاستثمار في الأمان يوفر عائد؟',
        'ما هي التكاليف المخفية للحلول؟',
        'كيف أضمن استمرارية العمل؟',
        'هل فريقي مدرب بشكل كافٍ؟'
      ],
      feels: [
        { text: 'ضغط مالي لإدارة الميزانية', icon: <Meh className="w-4 h-4" /> },
        { text: 'قلق بشأن أي توقف في الإنتاج', icon: <Frown className="w-4 h-4" /> },
        { text: 'إحباط من التعقيدات التقنية', icon: <Frown className="w-4 h-4" /> },
        { text: 'رضا عندما تعمل الأنظمة بسلاسة', icon: <Smile className="w-4 h-4" /> },
        { text: 'تحدي في الموازنة بين التكلفة والأداء', icon: <Meh className="w-4 h-4" /> }
      ],
      hears: [
        'الصيانة مكلفة جداً',
        'الموظفون يشتكون من التعقيد',
        'المنافسون يقدمون حلولاً أرخص',
        'الإدارة хочет تقليل التكاليف',
        'هناك مشكلة في النظام الأساسي'
      ],
      sees: [
        'تقارير إنفاق مرتفعة على الصيانة',
        'موظفون يطلبون المساعدة باستمرار',
        'أجهزة قديمة تحتاج لتحديث',
        'ضغوط من الإدارة لتقليل التكاليف',
        'فرص تحسين العمليات والكفاءة'
      ]
    }
  } : {
    ciso: {
      thinks: [
        'How do I protect customer data from advanced threats?',
        'Are our solutions compliant with central bank regulations?',
        'What are the financial consequences of a security breach?',
        'Does my team have the necessary skills?',
        'How do I convince senior management to invest in security?'
      ],
      feels: [
        { text: 'Constant anxiety about cybersecurity', icon: <Frown className="w-4 h-4" /> },
        { text: 'Pressure to prove security investment value', icon: <Meh className="w-4 h-4" /> },
        { text: 'Frustration with technical complexity', icon: <Frown className="w-4 h-4" /> },
        { text: 'Pride when security operations succeed', icon: <Smile className="w-4 h-4" /> },
        { text: 'Heavy sense of responsibility', icon: <Meh className="w-4 h-4" /> }
      ],
      hears: [
        'The bank needs better protection',
        'Competitors are using newer technologies',
        'Government regulations have become stricter',
        'Customers lose trust after incidents',
        'The cost is extremely high'
      ],
      sees: [
        'Massive spending reports on security with unclear results',
        'Overworked team hesitant in decision-making',
        'New cyber threats daily',
        'Pressure from upper management to compromise on security',
        'Competitors\' successes in the market'
      ]
    },
    developer: {
      thinks: [
        'How do I integrate security without affecting performance?',
        'Is this library really secure?',
        'What are the best practices for secure coding?',
        'How do I keep up with rapid field developments?',
        'Is my application resistant to XSS and SQL injection attacks?'
      ],
      feels: [
        { text: 'Excitement when discovering new tools', icon: <Smile className="w-4 h-4" /> },
        { text: 'Frustration with complex security documentation', icon: <Frown className="w-4 h-4" /> },
        { text: 'Pressure to finish projects on time', icon: <Meh className="w-4 h-4" /> },
        { text: 'Pride in writing secure and efficient code', icon: <Smile className="w-4 h-4" /> },
        { text: 'Concern about potential vulnerabilities', icon: <Frown className="w-4 h-4" /> }
      ],
      hears: [
        'Security is important but slows development',
        'Clients want new features, not security',
        'Competitors use faster technologies',
        'Management doesn\'t appreciate security efforts',
        'There\'s a new vulnerability discovered'
      ],
      sees: [
        'Complex and difficult-to-understand technical documents',
        'Multiple security tools but not integrated',
        'Colleagues ignoring security best practices',
        'Pressure from managers to speed up development',
        'Examples of similar breaches'
      ]
    },
    'it-director': {
      thinks: [
        'How do I protect critical operational systems?',
        'Does security investment provide ROI?',
        'What are the hidden costs of solutions?',
        'How do I ensure business continuity?',
        'Is my team adequately trained?'
      ],
      feels: [
        { text: 'Financial pressure to manage budget', icon: <Meh className="w-4 h-4" /> },
        { text: 'Anxiety about any production downtime', icon: <Frown className="w-4 h-4" /> },
        { text: 'Frustration with technical complexities', icon: <Frown className="w-4 h-4" /> },
        { text: 'Satisfaction when systems run smoothly', icon: <Smile className="w-4 h-4" /> },
        { text: 'Challenge in balancing cost and performance', icon: <Meh className="w-4 h-4" /> }
      ],
      hears: [
        'Maintenance is very expensive',
        'Employees complain about complexity',
        'Competitors offer cheaper solutions',
        'Management wants to reduce costs',
        'There\'s an issue with the core system'
      ],
      sees: [
        'High spending reports on maintenance',
        'Employees constantly asking for help',
        'Old equipment needing upgrades',
        'Pressure from management to cut costs',
        'Opportunities to improve processes and efficiency'
      ]
    }
  };

  const currentData = empathyData[activePersona as keyof typeof empathyData];

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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-knoux-600 to-knoux-pink rounded-2xl mb-6 shadow-xl"
          >
            <User className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            {language === 'ar' ? 'خريطة التعاطف' : 'Empathy Map'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نفهم احتياجاتك ومشاعرك لتصميم تجربة استثنائية' 
              : 'We understand your needs and feelings to design an exceptional experience'}
          </p>
        </div>

        {/* Persona Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {personas.map((persona) => (
            <motion.button
              key={persona.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePersona(persona.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activePersona === persona.id
                  ? `bg-gradient-to-r ${persona.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activePersona === persona.id ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                <span className="font-bold">{persona.avatar}</span>
              </div>
              <div className="text-left rtl:text-right">
                <div className="font-bold">{persona.name}</div>
                <div className="text-sm opacity-80">{persona.role}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Empathy Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Thinks & Feels */}
          <div className="grid grid-cols-1 gap-8">
            {/* Thinks */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-knoux-600/30 bg-white/50 dark:bg-white/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-knoux-600/20 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                  <Brain className="w-5 h-5 text-knoux-600 dark:text-knoux-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'ar' ? 'ماذا يفكر به' : 'What they think'}
                </h3>
              </div>
              <div className="space-y-4">
                {currentData.thinks.map((thought, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-white/50 dark:bg-gray-800/30 rounded-lg"
                  >
                    <Lightbulb className="w-4 h-4 text-knoux-600 dark:text-knoux-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{thought}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Feels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-knoux-pink/30 bg-white/50 dark:bg-white/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-knoux-pink/20 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                  <Heart className="w-5 h-5 text-knoux-pink" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'ar' ? 'ماذا يشعر به' : 'What they feel'}
                </h3>
              </div>
              <div className="space-y-4">
                {currentData.feels.map((feeling, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-white/50 dark:bg-gray-800/30 rounded-lg"
                  >
                    <div className="mt-0.5 text-knoux-pink">
                      {feeling.icon}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{feeling.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hears & Sees */}
          <div className="grid grid-cols-1 gap-8">
            {/* Hears */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-white/50 dark:bg-white/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                  <Ear className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'ar' ? 'ماذا يسمع' : 'What they hear'}
                </h3>
              </div>
              <div className="space-y-4">
                {currentData.hears.map((hearing, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-white/50 dark:bg-gray-800/30 rounded-lg"
                  >
                    <Ear className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{hearing}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sees */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-white/50 dark:bg-white/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                  <Eye className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {language === 'ar' ? 'ماذا يرى' : 'What they see'}
                </h3>
              </div>
              <div className="space-y-4">
                {currentData.sees.map((seeing, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-white/50 dark:bg-gray-800/30 rounded-lg"
                  >
                    <Eye className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{seeing}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-8 rounded-3xl border border-knoux-600/30 bg-white/50 dark:bg-white/5"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-knoux-600 to-knoux-pink rounded-xl flex items-center justify-center mr-4 rtl:ml-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'رؤى التصميم' : 'Design Insights'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {language === 'ar' 
                  ? 'كيف نستخدم هذه المعرفة لتصميم تجربة استثنائية' 
                  : 'How we use this knowledge to design an exceptional experience'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(language === 'ar' ? [
              {
                title: 'البساطة والقوة',
                description: 'تصميم بصري جذاب مع وظائف متقدمة',
                icon: <ThumbsUp className="w-5 h-5" />
              },
              {
                title: 'التكامل السلس',
                description: 'ربط جميع الأدوات في منصة واحدة',
                icon: <ThumbsUp className="w-5 h-5" />
              },
              {
                title: 'الرؤية الشاملة',
                description: 'لوحة تحكم مركزية لإدارة كل شيء',
                icon: <ThumbsUp className="w-5 h-5" />
              }
            ] : [
              {
                title: 'Simplicity & Power',
                description: 'Visually appealing design with advanced functionality',
                icon: <ThumbsUp className="w-5 h-5" />
              },
              {
                title: 'Seamless Integration',
                description: 'Connecting all tools in one platform',
                icon: <ThumbsUp className="w-5 h-5" />
              },
              {
                title: 'Holistic View',
                description: 'Central dashboard to manage everything',
                icon: <ThumbsUp className="w-5 h-5" />
              }
            ]).map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-5 bg-white/50 dark:bg-gray-800/30 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-knoux-600/20 rounded-lg flex items-center justify-center mr-3 rtl:ml-3 text-knoux-600 dark:text-knoux-400">
                    {insight.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{insight.title}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};