import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, PieChart, TrendingUp, Users, Download, Eye, Settings, Bell, Search, ArrowLeft, LayoutDashboard, FileText, Shield, LogOut } from 'lucide-react'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DashboardPageProps {
  onBack: () => void;
}

const data = [
  { name: 'Mon', traffic: 4000, security: 2400 },
  { name: 'Tue', traffic: 3000, security: 1398 },
  { name: 'Wed', traffic: 2000, security: 9800 },
  { name: 'Thu', traffic: 2780, security: 3908 },
  { name: 'Fri', traffic: 1890, security: 4800 },
  { name: 'Sat', traffic: 2390, security: 3800 },
  { name: 'Sun', traffic: 3490, security: 4300 },
];

export const DashboardPage: React.FC<DashboardPageProps> = ({ onBack }) => {
  const { t, language, theme } = useThemeLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: t.dashboard.totalProjects, value: '32', icon: <BarChart className="w-6 h-6" />, change: '+12%' },
    { title: t.dashboard.activeUsers, value: '1,247', icon: <Users className="w-6 h-6" />, change: '+8%' },
    { title: t.dashboard.downloads, value: '89,432', icon: <Download className="w-6 h-6" />, change: '+15%' },
    { title: t.dashboard.pageViews, value: '2.4M', icon: <Eye className="w-6 h-6" />, change: '+5%' }
  ]

  const projects = [
    { name: 'Almubeen CMS', status: language === 'ar' ? 'نشط' : 'Active', progress: 95, users: 456 },
    { name: 'UltraEncrypt Pro', status: language === 'ar' ? 'نشط' : 'Active', progress: 100, users: 1200 },
    { name: 'Sentinel Core', status: language === 'ar' ? 'تجريبي' : 'Beta', progress: 78, users: 342 },
    { name: 'KnouxGuard', status: language === 'ar' ? 'نشط' : 'Active', progress: 88, users: 678 }
  ]

  const activities = [
    { action: t.dashboard.updates.projectUpdated, project: 'Almubeen CMS', time: language === 'ar' ? '2 دقيقة' : '2m ago' },
    { action: t.dashboard.updates.userCreated, project: 'Sentinel Core', time: language === 'ar' ? '15 دقيقة' : '15m ago' },
    { action: t.dashboard.updates.downloaded, project: 'UltraEncrypt Pro', time: language === 'ar' ? '1 ساعة' : '1h ago' },
    { action: t.dashboard.updates.alert, project: 'KnouxGuard', time: language === 'ar' ? '3 ساعة' : '3h ago' }
  ];

  const menuItems = [
    { id: 'overview', label: t.dashboard.tabs.overview, icon: LayoutDashboard },
    { id: 'analytics', label: t.dashboard.tabs.analytics, icon: TrendingUp },
    { id: 'reports', label: t.dashboard.tabs.reports, icon: FileText },
    { id: 'settings', label: t.dashboard.tabs.settings, icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-knoux-900 flex transition-colors duration-500 overflow-hidden">
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-20 lg:w-64 bg-white dark:bg-black/40 border-r border-gray-200 dark:border-white/5 flex flex-col z-20"
      >
        <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-gray-200 dark:border-white/5">
           <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg lg:hidden">
             <ArrowLeft className="w-6 h-6 text-gray-500" />
           </button>
           <button onClick={onBack} className="hidden lg:flex items-center gap-2 text-gray-500 hover:text-knoux-600 dark:hover:text-white transition-colors font-bold">
             <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
             <span>{t.common.home}</span>
           </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-knoux-600 text-white shadow-lg shadow-knoux-600/20'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="hidden lg:block font-medium">{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="activeTab" className="absolute left-0 w-1 h-8 bg-white rounded-r-full hidden lg:block" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-white/5">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="hidden lg:block font-medium">{t.common.signin}</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-6 z-10">
           <h2 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
             {menuItems.find(i => i.id === activeTab)?.label}
           </h2>
           
           <div className="flex items-center gap-4">
             <div className="relative hidden md:block">
               <Search className="absolute left-3 rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
               <input 
                 type="text" 
                 placeholder={language === 'ar' ? 'بحث سريع...' : 'Quick search...'}
                 className="pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-sm border-none focus:ring-2 focus:ring-knoux-600 w-64 text-gray-900 dark:text-white"
               />
             </div>
             <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg">
               <Bell className="w-5 h-5" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
             </button>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-knoux-600 to-cyan-500 border-2 border-white dark:border-gray-800"></div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <AnimatePresence mode="wait">
            
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="glass-panel p-6 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-knoux-50 dark:bg-white/5 text-knoux-600 dark:text-knoux-400">
                          {stat.icon}
                        </div>
                        <span className="px-2 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">{stat.change}</span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.title}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                   <div className="lg:col-span-2 glass-panel p-6 rounded-xl bg-white dark:bg-white/5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{t.dashboard.chartTitle}</h3>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data}>
                            <defs>
                              <linearGradient id="colorTraffic2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? "#333" : "#eee"} vertical={false} />
                            <XAxis dataKey="name" stroke="#888" tickLine={false} axisLine={false} />
                            <YAxis stroke="#888" tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#111' : '#fff', borderRadius: '8px', border: 'none' }} />
                            <Area type="monotone" dataKey="traffic" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic2)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                   </div>

                   <div className="glass-panel p-6 rounded-xl bg-white dark:bg-white/5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{t.dashboard.recentActivity}</h3>
                      <div className="space-y-6">
                        {activities.map((act, i) => (
                          <div key={i} className="flex gap-4 relative">
                             {i !== activities.length - 1 && <div className="absolute left-2.5 top-8 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-800"></div>}
                             <div className="w-5 h-5 rounded-full bg-knoux-600 border-4 border-white dark:border-gray-900 shrink-0 z-10"></div>
                             <div>
                               <div className="text-sm font-medium text-gray-900 dark:text-white">{act.action}</div>
                               <div className="text-xs text-gray-500">{act.project} • {act.time}</div>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
               <motion.div 
                key="analytics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-full text-center p-12"
               >
                  <div className="max-w-md">
                    <TrendingUp className="w-24 h-24 text-knoux-200 dark:text-knoux-900 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.dashboard.tabs.analytics}</h3>
                    <p className="text-gray-500">Advanced analytics module integration in progress. Check back for real-time data streams.</p>
                  </div>
               </motion.div>
            )}
            
            {activeTab === 'reports' && (
               <motion.div 
                key="reports"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-full text-center p-12"
               >
                  <div className="max-w-md">
                    <FileText className="w-24 h-24 text-knoux-200 dark:text-knoux-900 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.dashboard.tabs.reports}</h3>
                    <p className="text-gray-500">System generated reports will appear here. PDF export functionality enabled.</p>
                  </div>
               </motion.div>
            )}

            {activeTab === 'settings' && (
               <motion.div 
                key="settings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl mx-auto space-y-8"
               >
                 <div className="glass-panel p-8 rounded-xl bg-white dark:bg-white/5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-white/5">{t.dashboard.settings.profile}</h3>
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-knoux-600 to-cyan-500"></div>
                       <div>
                         <button className="px-4 py-2 bg-knoux-600 text-white rounded-lg text-sm font-medium">Change Avatar</button>
                         <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                       </div>
                    </div>
                    <div className="grid gap-6">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                            <input type="text" defaultValue="Admin" className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 dark:text-white" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                            <input type="text" defaultValue="User" className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 dark:text-white" />
                          </div>
                       </div>
                       <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                            <input type="email" defaultValue="admin@knoux-nexus.com" className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 dark:text-white" />
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-end gap-4">
                    <button className="px-6 py-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5">Cancel</button>
                    <button className="px-6 py-2 rounded-lg bg-knoux-600 text-white font-medium shadow-lg hover:bg-knoux-500">{t.dashboard.settings.save}</button>
                 </div>
               </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}