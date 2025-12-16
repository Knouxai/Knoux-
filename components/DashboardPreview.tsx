import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

const data = [
  { name: 'Mon', traffic: 4000, security: 2400 },
  { name: 'Tue', traffic: 3000, security: 1398 },
  { name: 'Wed', traffic: 2000, security: 9800 },
  { name: 'Thu', traffic: 2780, security: 3908 },
  { name: 'Fri', traffic: 1890, security: 4800 },
  { name: 'Sat', traffic: 2390, security: 3800 },
  { name: 'Sun', traffic: 3490, security: 4300 },
];

const barData = [
  { name: 'Critical', value: 4, color: '#ef4444' },
  { name: 'Warning', value: 12, color: '#f59e0b' },
  { name: 'Info', value: 45, color: '#3b82f6' },
  { name: 'Clean', value: 120, color: '#10b981' },
];

export const DashboardPreview: React.FC = () => {
  const { t, theme } = useThemeLanguage();

  return (
    <section id="security" className="py-24 bg-gray-50 dark:bg-black/40 relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
            {t.dashboard.title} <span className="text-emerald-600 dark:text-emerald-400">{t.dashboard.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t.dashboard.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-gray-200 dark:border-white/5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-knoux-600 dark:bg-knoux-accent animate-pulse"></div>
              {t.dashboard.chartTitle}
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSecurity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? "#333" : "#e5e7eb"} />
                  <XAxis dataKey="name" stroke={theme === 'dark' ? "#666" : "#9ca3af"} />
                  <YAxis stroke={theme === 'dark' ? "#666" : "#9ca3af"} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme === 'dark' ? '#1a0b2e' : '#fff', 
                      borderColor: theme === 'dark' ? '#2d1b4e' : '#e5e7eb',
                      color: theme === 'dark' ? '#fff' : '#000'
                    }}
                    itemStyle={{ color: theme === 'dark' ? '#fff' : '#374151' }}
                  />
                  <Area type="monotone" dataKey="traffic" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTraffic)" />
                  <Area type="monotone" dataKey="security" stroke="#00f0ff" fillOpacity={1} fill="url(#colorSecurity)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-white/5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-4">{t.dashboard.systemStatus}</h3>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={barData} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" stroke={theme === 'dark' ? "#999" : "#6b7280"} width={60} />
                      <Tooltip 
                        cursor={{fill: 'transparent'}} 
                        contentStyle={{ 
                          backgroundColor: theme === 'dark' ? '#1a0b2e' : '#fff',
                          borderColor: theme === 'dark' ? '#2d1b4e' : '#e5e7eb'
                        }} 
                      />
                      <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]}>
                        {barData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                   </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-gray-200 dark:border-white/5 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{t.dashboard.activeNodes}</p>
                <p className="text-3xl font-display font-bold text-gray-900 dark:text-white">1,402</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
