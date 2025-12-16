import React, { useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Calculator, Briefcase, Building2, ChevronRight, Lock, CheckCircle, Video, Landmark, Building, ShieldCheck, FileText } from 'lucide-react';
import { DemoRequestForm } from './DemoRequestForm';
import { CaseStudyCard } from './CaseStudyCard';

export const EnterpriseSection: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'calculator' | 'portal' | 'demo' | 'cases'>('cases');

  // Calculator State
  const [users, setUsers] = useState(50);
  const [storage, setStorage] = useState(1);
  const [securityTier, setSecurityTier] = useState(1);

  const calculateCost = () => {
    return (users * 12) + (storage * 50) + (securityTier * 200);
  };

  const tabs = [
    { id: 'cases', label: t.enterprise.tabs.cases, icon: Building2 },
    { id: 'calculator', label: t.enterprise.tabs.calculator, icon: Calculator },
    { id: 'portal', label: t.enterprise.tabs.portal, icon: Lock },
    { id: 'demo', label: t.enterprise.tabs.demo, icon: FileText },
  ];

  return (
    <section id="enterprise" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-knoux-900 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
            {t.enterprise.title} <span className="text-knoux-600 dark:text-knoux-400">{t.enterprise.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.enterprise.subtitle}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-knoux-600 text-white shadow-lg scale-105'
                  : 'glass-panel text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl min-h-[500px] flex items-center justify-center relative bg-white/40 dark:bg-white/5">
          
          {/* Case Studies */}
          {activeTab === 'cases' && (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-float">
               <CaseStudyCard 
                 title="Global Banking Security Overhaul"
                 company="InterContinental Finance"
                 industry="Finance"
                 challenge="Securing 50k+ endpoints against APTs using advanced threat analysis."
                 solution="Deployed Knoux Sentinel Core with real-time AI heuristics."
                 results="99.9% threat block rate"
                 logo={<Landmark className="w-6 h-6" />}
               />
               <CaseStudyCard 
                 title="Healthcare Data Privacy"
                 company="MediSecure Systems"
                 industry="Healthcare"
                 challenge="Compliance with HIPAA for 10M patient records and secure data transmission."
                 solution="Knoux UltraEncrypt Pro integration."
                 results="Zero data leaks in 2 years"
                 logo={<ShieldCheck className="w-6 h-6" />}
               />
               <CaseStudyCard 
                 title="Government Infrastructure"
                 company="Dept. of Digital Affairs"
                 industry="Government"
                 challenge="Legacy system migration to secure cloud environment with strict access control."
                 solution="Knoux X Enterprise Platform deployment."
                 results="40% reduction in IT costs"
                 logo={<Building className="w-6 h-6" />}
               />
            </div>
          )}

          {/* Calculator */}
          {activeTab === 'calculator' && (
            <div className="w-full max-w-3xl flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.enterprise.calculator.users}: {users}</label>
                  <input 
                    type="range" min="10" max="1000" value={users} onChange={(e) => setUsers(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-knoux-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.enterprise.calculator.storage}: {storage} TB</label>
                  <input 
                    type="range" min="1" max="50" value={storage} onChange={(e) => setStorage(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-knoux-600"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.enterprise.calculator.securityLevel}</label>
                   <div className="flex gap-4">
                     {[1, 2, 3].map(level => (
                       <button 
                        key={level}
                        onClick={() => setSecurityTier(level)}
                        className={`flex-1 py-3 rounded-lg border transition-all ${securityTier === level ? 'bg-knoux-600 text-white border-knoux-600 shadow-md' : 'border-gray-300 dark:border-white/10 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                       >
                         Tier {level}
                       </button>
                     ))}
                   </div>
                </div>
              </div>
              
              <div className="w-full md:w-80 bg-white dark:bg-black/40 rounded-2xl p-8 border border-gray-200 dark:border-white/10 flex flex-col justify-between shadow-xl">
                 <div>
                   <h4 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">{t.enterprise.calculator.estimated}</h4>
                   <div className="text-4xl font-display font-bold text-gray-900 dark:text-white mt-2">
                     ${calculateCost().toLocaleString()}
                   </div>
                   <div className="text-xs text-gray-500 mt-1">/ month billed annually</div>
                 </div>
                 <button className="w-full py-3 bg-knoux-600 hover:bg-knoux-500 text-white font-bold rounded-lg transition-colors mt-6 shadow-lg">
                   {t.enterprise.calculator.contactSales}
                 </button>
              </div>
            </div>
          )}

          {/* Client Portal Mockup */}
          {activeTab === 'portal' && (
             <div className="w-full max-w-md mx-auto animate-float">
               <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10">
                 <div className="flex justify-center mb-6">
                   <div className="p-4 bg-knoux-600/10 rounded-full">
                     <Lock className="w-8 h-8 text-knoux-600" />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">{t.enterprise.portal.login}</h3>
                 <div className="space-y-4">
                   <div>
                     <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{t.enterprise.portal.email}</label>
                     <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-knoux-600 focus:outline-none dark:text-white" />
                   </div>
                   <div>
                     <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{t.enterprise.portal.password}</label>
                     <input type="password" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-knoux-600 focus:outline-none dark:text-white" />
                   </div>
                   <button className="w-full py-3 bg-knoux-600 text-white font-bold rounded-lg hover:bg-knoux-700 transition-colors shadow-md">
                     {t.enterprise.portal.access}
                   </button>
                 </div>
               </div>
             </div>
          )}

          {/* Demo / Sales Deck Form */}
          {activeTab === 'demo' && (
            <DemoRequestForm />
          )}

        </div>

      </div>
    </section>
  );
};