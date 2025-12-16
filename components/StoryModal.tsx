import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Terminal, Shield, Play, Download, Image, FileCode, Monitor } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface StoryModalProps {
  project: Project | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ project, onClose }) => {
  const { t } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'media' | 'downloads'>('overview');

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/80 dark:bg-black/80 backdrop-blur-xl transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-knoux-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200 dark:border-white/10 animate-float text-left rtl:text-right">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-200 dark:bg-black/50 hover:bg-knoux-600 text-gray-800 dark:text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Visuals/Preview */}
        <div className="w-full md:w-1/2 h-1/3 md:h-full bg-gray-100 dark:bg-black relative flex flex-col border-r border-gray-200 dark:border-white/5">
           {/* Header Overlay */}
           <div className="absolute top-0 left-0 w-full p-6 z-10 bg-gradient-to-b from-gray-900/80 to-transparent pointer-events-none">
             <div className="flex gap-2 mb-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold text-knoux-400 dark:text-knoux-accent uppercase tracking-wider">{tag}</span>
                ))}
             </div>
             <h2 className="text-3xl font-display font-bold text-white">{project.name}</h2>
           </div>

           {/* Media / Visual Area */}
           <div className="flex-1 relative overflow-hidden group bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-knoux-900/20"></div>
              
              {/* Abstract code visualizer */}
              <div className="absolute inset-0 p-8 font-mono text-xs text-green-500/50 overflow-hidden opacity-50 select-none pointer-events-none ltr:text-left rtl:text-left">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i}>{`> initiating protocol ${project.id}_v${i}.0... [OK]`}</div>
                ))}
                <div className="mt-4 text-blue-400/50">
                  {`// ${project.description}`}
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-20 h-20 bg-white/10 hover:bg-knoux-600/80 backdrop-blur rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                 </button>
              </div>
           </div>

           {/* Sandbox Bar */}
           <div className="h-14 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 flex items-center px-4 justify-between">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Terminal className="w-4 h-4" />
                <span>{t.modal.liveSandbox}</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
           </div>
        </div>

        {/* Right Side: Details & Tabs */}
        <div className="w-full md:w-1/2 h-2/3 md:h-full bg-white dark:bg-knoux-900/50 backdrop-blur-3xl flex flex-col">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-white/10">
             {[
               { id: 'overview', label: t.modal.tabs.overview },
               { id: 'media', label: t.modal.tabs.media },
               { id: 'downloads', label: t.modal.tabs.downloads }
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as any)}
                 className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                   activeTab === tab.id 
                     ? 'text-knoux-600 dark:text-knoux-400 border-b-2 border-knoux-600 dark:border-knoux-400' 
                     : 'text-gray-500 hover:text-gray-800 dark:hover:text-white'
                 }`}
               >
                 {tab.label}
               </button>
             ))}
          </div>

          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
            
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Stats Overview */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.stats?.stars}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{t.modal.stars}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{project.stats?.forks}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{t.modal.forks}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-center">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{project.stats?.securityScore}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{t.modal.score}</div>
                  </div>
                </div>

                {/* Story Sections */}
                <section className="space-y-4">
                  <h3 className="text-lg font-bold text-knoux-600 dark:text-knoux-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t.modal.challenge}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    In an era where digital threats evolve daily, standard solutions often fall short. {project.name} was conceived to bridge the gap between usability and military-grade security for {project.type.toLowerCase()} environments.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-lg font-bold text-knoux-600 dark:text-knoux-accent flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    {t.modal.solution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Utilizing {project.language}, this project implements a decentralized approach to data handling. It ensures that no single point of failure exists, leveraging custom algorithms like those found in Knoux UltraEncrypt.
                  </p>
                </section>

                {/* Main Actions */}
                <div className="pt-4 flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-4 bg-knoux-600 hover:bg-knoux-500 text-white rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t.modal.viewGithub}
                  </a>
                  <button className="px-6 py-4 border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-800 dark:text-white rounded-lg font-bold transition-all">
                    {t.modal.documentation}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
               <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-4">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="aspect-video bg-gray-200 dark:bg-black/40 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                       <Image className="w-8 h-8 text-gray-400" />
                     </div>
                   ))}
                 </div>
                 <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Monitor className="w-5 h-5 text-knoux-500" />
                      <h4 className="font-bold text-gray-900 dark:text-white">Live Demo Reel</h4>
                    </div>
                    <div className="aspect-video bg-black rounded-lg w-full relative group cursor-pointer overflow-hidden">
                       <div className="absolute inset-0 bg-knoux-900/40 group-hover:bg-transparent transition"></div>
                       <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 opacity-80 group-hover:scale-110 transition" />
                    </div>
                 </div>
               </div>
            )}

            {activeTab === 'downloads' && (
               <div className="space-y-4">
                 {[
                   { ver: 'v2.4.0 (Stable)', date: 'Oct 24, 2024', size: '45MB' },
                   { ver: 'v2.5.0-beta', date: 'Nov 01, 2024', size: '48MB' }
                 ].map((build, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-knoux-100 dark:bg-knoux-900 rounded-lg">
                         <FileCode className="w-5 h-5 text-knoux-600 dark:text-knoux-400" />
                       </div>
                       <div>
                         <div className="font-bold text-gray-900 dark:text-white">{build.ver}</div>
                         <div className="text-xs text-gray-500">{build.date} • {build.size}</div>
                       </div>
                     </div>
                     <button className="p-2 text-gray-500 hover:text-knoux-600 dark:hover:text-white transition">
                       <Download className="w-5 h-5" />
                     </button>
                   </div>
                 ))}
                 
                 <div className="mt-8 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm">
                   All builds are cryptographically signed. Verify hash before execution.
                 </div>
               </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
