import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Wifi, Server, X, TrendingUp, Lock, Zap, Eye, AlertTriangle } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const RealtimeMonitor: React.FC = () => {
  const { language } = useThemeLanguage();
  const [metrics, setMetrics] = useState({
    activeThreats: 0,
    protectedSystems: 1240,
    uptime: 99.99,
    responseTime: 12,
    dataProcessed: 4500
  });
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeThreats: Math.max(0, prev.activeThreats + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0)),
        protectedSystems: Math.min(9999, Math.max(1000, prev.protectedSystems + Math.floor(Math.random() * 10) - 5)),
        uptime: Math.min(100, Math.max(99.5, parseFloat((prev.uptime + (Math.random() * 0.01 - 0.005)).toFixed(3)))),
        responseTime: Math.max(1, prev.responseTime + (Math.random() * 2 - 1)),
        dataProcessed: prev.dataProcessed + Math.floor(Math.random() * 100)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statusIndicators = [
    { 
      icon: <Shield className="w-4 h-4" />, 
      label: language === 'ar' ? 'نظام الحماية' : 'Protection',
      value: language === 'ar' ? 'آمن' : 'Secure'
    },
    { 
      icon: <Wifi className="w-4 h-4" />, 
      label: language === 'ar' ? 'الاتصال' : 'Connection',
      value: language === 'ar' ? 'متصل' : 'Online'
    },
    { 
      icon: <Server className="w-4 h-4" />, 
      label: language === 'ar' ? 'الخوادم' : 'Servers',
      value: language === 'ar' ? 'يعمل' : 'Operational'
    }
  ];

  const metricCards = [
    { 
      icon: <AlertTriangle className="w-5 h-5" />, 
      label: language === 'ar' ? 'التهديدات النشطة' : 'Active Threats',
      value: metrics.activeThreats,
      color: metrics.activeThreats > 0 ? 'text-red-500' : 'text-emerald-500',
      trend: metrics.activeThreats > 0 ? 'up' : 'down'
    },
    { 
      icon: <Lock className="w-5 h-5" />, 
      label: language === 'ar' ? 'الأنظمة المحمية' : 'Protected Sys',
      value: metrics.protectedSystems.toLocaleString(),
      color: 'text-blue-500',
      trend: 'up'
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      label: language === 'ar' ? 'وقت التشغيل' : 'Uptime',
      value: `${metrics.uptime}%`,
      color: 'text-emerald-500',
      trend: 'up'
    },
    { 
      icon: <Eye className="w-5 h-5" />, 
      label: language === 'ar' ? 'وقت الاستجابة' : 'Response Time',
      value: `${metrics.responseTime.toFixed(1)}ms`,
      color: metrics.responseTime > 20 ? 'text-amber-500' : 'text-emerald-500',
      trend: metrics.responseTime > 20 ? 'up' : 'down'
    }
  ];

  if (minimized) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setMinimized(false)}
        className="fixed top-24 right-4 z-40 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/10 text-emerald-400 hover:bg-black/80 transition-colors shadow-lg shadow-emerald-500/20"
        aria-label="Expand Monitor"
      >
        <Activity className="w-6 h-6 animate-pulse" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed top-24 right-4 z-40 w-80 glass-panel-heavy rounded-2xl border border-gray-200 dark:border-white/10 p-4 shadow-2xl hidden lg:block bg-white/90 dark:bg-black/80"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="w-8 h-8 bg-gradient-to-r from-knoux-600 to-knoux-accent rounded-lg flex items-center justify-center shadow-lg">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-sm">{language === 'ar' ? 'مراقب الوقت الفعلي' : 'Real-time Monitor'}</h3>
            <p className="text-[10px] text-emerald-500 flex items-center font-bold">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1 rtl:ml-1 animate-pulse"></span>
              {language === 'ar' ? 'متصل' : 'Connected'}
            </p>
          </div>
        </div>
        <button onClick={() => setMinimized(true)} className="text-gray-400 hover:text-knoux-600 dark:hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Status Indicators */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {statusIndicators.map((indicator, index) => (
          <div key={index} className="bg-gray-100 dark:bg-white/5 rounded-lg p-2 text-center border border-gray-200 dark:border-white/5">
            <div className="flex justify-center mb-1 text-gray-500 dark:text-gray-400">
              {indicator.icon}
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-0.5">{indicator.label}</p>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{indicator.value}</p>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        {metricCards.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-2.5 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5"
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={`p-1.5 rounded-md ${metric.color.replace('text-', 'bg-').replace('-500', '-500/10')} ${metric.color}`}>
                {metric.icon}
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-200 text-xs font-bold">{metric.label}</p>
                <p className={`text-[10px] ${metric.color} flex items-center`}>
                  {metric.trend === 'up' ? '↗' : '↘'} {language === 'ar' ? 'المؤشر' : 'Trend'}
                </p>
              </div>
            </div>
            <div className={`text-right ${metric.color}`}>
              <p className="text-sm font-bold font-mono">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Processed */}
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            {language === 'ar' ? 'البيانات المُعالجة' : 'Data Processed'}
          </span>
          <span className="text-gray-900 dark:text-white font-bold text-xs font-mono">
            {(metrics.dataProcessed / 1000).toFixed(1)}K {language === 'ar' ? 'سجل' : 'Recs'}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (metrics.dataProcessed % 10000) / 100)}%` }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-knoux-600 to-knoux-accent h-full rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};