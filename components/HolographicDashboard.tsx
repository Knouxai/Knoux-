import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Globe, Zap, BarChart3, X } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const HolographicDashboard: React.FC = () => {
  const { language } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('network');

  // Auto-show logic (optional, removed for better UX, user clicks to open)
  // useEffect(() => { ... }, []);

  const tabs = [
    { id: 'network', label: language === 'ar' ? 'الشبكة' : 'Network', icon: Globe },
    { id: 'security', label: language === 'ar' ? 'الأمان' : 'Security', icon: Shield },
    { id: 'performance', label: language === 'ar' ? 'الأداء' : 'Performance', icon: Zap }
  ];

  const networkData = [
    { name: 'Firewall-01', status: 'secure', latency: '12ms', packets: '1.2M' },
    { name: 'Router-Core', status: 'secure', latency: '8ms', packets: '2.4M' },
    { name: 'Switch-Edge', status: 'warning', latency: '45ms', packets: '800K' },
    { name: 'VPN-Gateway', status: 'secure', latency: '22ms', packets: '500K' }
  ];

  const securityEvents = [
    { type: 'login', user: 'admin@company.com', time: '2 min ago', status: 'success' },
    { type: 'file_access', user: 'dev-team', time: '5 min ago', status: 'blocked' },
    { type: 'malware_scan', user: 'system', time: '10 min ago', status: 'clean' },
    { type: 'password_reset', user: 'user@example.com', time: '15 min ago', status: 'success' }
  ];

  const performanceMetrics = [
    { name: 'CPU Usage', value: 45, color: 'from-blue-500 to-cyan-500' },
    { name: 'Memory', value: 68, color: 'from-purple-500 to-pink-500' },
    { name: 'Disk I/O', value: 32, color: 'from-green-500 to-emerald-500' },
    { name: 'Network', value: 78, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-[60] w-14 h-14 bg-black/40 backdrop-blur-md rounded-full border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center hover:bg-black/60 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 group"
        aria-label="Holographic Dashboard"
      >
        <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -100, y: 100 }}
            className="fixed bottom-24 left-6 z-[60] w-[90vw] sm:w-96 glass-panel-heavy rounded-2xl border border-cyan-500/30 p-6 shadow-[0_0_50px_rgba(34,211,238,0.15)] bg-gray-900/95 backdrop-blur-xl text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.8) 100%)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider uppercase">HoloDash</h3>
                  <p className="text-[10px] text-cyan-400 uppercase tracking-widest">Real-time Analytics</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-green-400 uppercase">LIVE</span>
                <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-white ml-2 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 rtl:space-x-reverse mb-6 bg-gray-800/50 rounded-lg p-1 border border-white/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse py-2 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-400 shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-3 h-3" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="h-64 overflow-y-auto scrollbar-hide pr-1">
              {activeTab === 'network' && (
                <div className="space-y-3">
                  {networkData.map((device, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className={`w-2 h-2 rounded-full ${
                          device.status === 'secure' ? 'bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]' : 'bg-yellow-400'
                        }`}></div>
                        <div>
                          <p className="text-white text-xs font-bold uppercase">{device.name}</p>
                          <p className="text-[10px] text-gray-400 font-mono">{device.latency}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-cyan-400 text-xs font-mono font-bold">{device.packets}</p>
                        <p className="text-[10px] text-gray-500 uppercase">packets</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-3">
                  {securityEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-white/5"
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          event.status === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                        }`}>
                          {event.status === 'success' ? <Shield className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-white text-xs font-bold uppercase">
                            {event.type.replace('_', ' ')}
                          </p>
                          <p className="text-[10px] text-gray-400">{event.user}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-[10px] font-bold uppercase ${
                          event.status === 'success' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {event.status}
                        </p>
                        <p className="text-[10px] text-gray-500">{event.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="space-y-4 pt-2">
                  {performanceMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-xs font-bold uppercase tracking-wide">{metric.name}</span>
                        <span className="text-cyan-400 text-xs font-bold font-mono">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-mono">
                LAST_SYNC: {new Date().toLocaleTimeString()}
              </span>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};