import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap, Shield, Eye } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { AudioVisualizer } from './AudioVisualizer';

export const InteractiveDemo: React.FC = () => {
  const { language } = useThemeLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState('security');

  const features = language === 'ar' ? [
    { id: 'security', name: 'الأمان', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
    { id: 'performance', name: 'الأداء', icon: <Zap className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'monitoring', name: 'المراقبة', icon: <Eye className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' }
  ] : [
    { id: 'security', name: 'Security', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
    { id: 'performance', name: 'Performance', icon: <Zap className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'monitoring', name: 'Monitoring', icon: <Eye className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-knoux-900 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-knoux-600/5 to-knoux-accent/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            {language === 'ar' ? 'تجربة تفاعلية حية' : 'Live Interactive Demo'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {language === 'ar' 
              ? 'شاهد كيف تعمل حلول Knoux في الوقت الفعلي' 
              : 'See how Knoux solutions work in real-time'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8 bg-white/60 dark:bg-white/5"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'مراقب الأمن السيبراني' : 'Cybersecurity Monitor'}
              </h3>
              
              <div className="flex space-x-4 rtl:space-x-reverse mb-6">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`flex-1 py-3 rounded-lg transition-all duration-300 flex flex-col items-center border ${
                      activeFeature === feature.id
                        ? `bg-gradient-to-r ${feature.color} text-white border-transparent shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {feature.icon}
                    <span className="text-sm mt-1 font-medium">{feature.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="bg-gray-100 dark:bg-black/40 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg">
                      {features.find(f => f.id === activeFeature)?.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {activeFeature === 'security' && (language === 'ar' ? 'نظام الحماية نشط' : 'Protection system active')}
                      {activeFeature === 'performance' && (language === 'ar' ? 'أداء ممتاز' : 'Excellent performance')}
                      {activeFeature === 'monitoring' && (language === 'ar' ? 'مراقبة مستمرة' : 'Continuous monitoring')}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    activeFeature === 'security' ? 'bg-green-500' :
                    activeFeature === 'performance' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-white/5 rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">99.9%</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'وقت التشغيل' : 'Uptime'}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-white/5 rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">&lt; 5ms</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {language === 'ar' ? 'وقت الاستجابة' : 'Latency'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center bg-knoux-600 hover:bg-knoux-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-knoux-600/20"
              >
                {isPlaying ? <Pause className="w-5 h-5 mr-2 rtl:ml-2" /> : <Play className="w-5 h-5 mr-2 rtl:ml-2" />}
                {isPlaying ? (language === 'ar' ? 'إيقاف' : 'Pause') : (language === 'ar' ? 'تشغيل' : 'Play')}
              </button>
              <button className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8 bg-white/60 dark:bg-white/5"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'ar' ? 'التحليلات الحية' : 'Live Analytics'}
            </h3>
            
            <div className="mb-6 bg-black/5 dark:bg-black/40 rounded-lg p-4">
              <AudioVisualizer />
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-knoux-600 dark:bg-knoux-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                      {language === 'ar' 
                        ? `نشاط أمني ${item}` 
                        : `Security Activity ${item}`}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded">
                    {language === 'ar' ? 'آمن' : 'SECURE'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-knoux-600/10 to-knoux-accent/10 rounded-lg border border-knoux-600/20">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 rtl:ml-3 animate-pulse"></div>
                <span className="text-knoux-900 dark:text-white text-sm font-semibold">
                  {language === 'ar' ? 'جميع الأنظمة تعمل بشكل طبيعي' : 'All systems operating normally'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};