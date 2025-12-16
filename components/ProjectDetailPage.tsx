import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, ExternalLink, Github, Download, Play, Terminal, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { SandboxDemo } from './SandboxDemo';
import { ShareHub } from './ShareHub';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  const { t, theme } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'story' | 'gallery' | 'download'>('story');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen bg-slate-50 dark:bg-knoux-900 text-slate-900 dark:text-white relative z-40 transition-colors duration-500"
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-panel-heavy px-4 sm:px-8 py-4 flex justify-between items-center transition-all duration-300">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-knoux-600 dark:hover:text-knoux-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Nexus
        </button>
        <div className="flex gap-4">
           {['story', 'gallery', 'download'].map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`text-sm font-semibold uppercase tracking-wide px-3 py-1 rounded-full transition-all duration-300 ${
                 activeTab === tab 
                   ? 'bg-knoux-600 text-white shadow-lg shadow-knoux-600/20' 
                   : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-end justify-start pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-knoux-900 z-0">
           {/* Abstract Background Animation */}
           <div className="absolute inset-0 opacity-40">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]"></div>
             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-knoux-accent/20 blur-[100px] rounded-full animate-pulse-slow"></div>
             <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-knoux-pink/20 blur-[80px] rounded-full animate-float"></div>
           </div>
           {/* Grid Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl w-full mx-auto">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="flex gap-3 mb-4"
          >
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded backdrop-blur-md">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl"
          >
            {project.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 text-gray-300"
          >
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-emerald-400" />
               <span>Security Score: <strong className="text-white">{project.stats?.securityScore}/100</strong></span>
             </div>
             <div className="flex items-center gap-2">
               <Cpu className="w-5 h-5 text-knoux-400" />
               <span>Language: <strong className="text-white">{project.language}</strong></span>
             </div>
             <div className="flex items-center gap-2">
               <Layers className="w-5 h-5 text-knoux-accent" />
               <span>Type: <strong className="text-white">{project.type}</strong></span>
             </div>
          </motion.div>
        </div>
        
        {/* Gradient fade to body content */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-knoux-900 to-transparent z-10 transition-colors duration-500"></div>
      </header>

      {/* Main Content: Split Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
        
        <AnimatePresence mode="wait">
          {activeTab === 'story' && (
            <motion.div 
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Left Column: Interactive Sandbox (Sticky) */}
              <div className="relative">
                <div className="sticky top-28 space-y-8">
                   <SandboxDemo projectId={project.id} projectName={project.name} />
                   <ShareHub projectId={project.id} projectName={project.name} />
                </div>
              </div>

              {/* Right Column: Narrative Content */}
              <div className="space-y-20 pt-8 pb-20">
                
                <section>
                  <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-knoux-600 pl-4">The Challenge</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    In the rapidly evolving landscape of digital security, <span className="text-gray-900 dark:text-white font-semibold">{project.name}</span> addresses the critical need for robust {project.tags[0]?.toLowerCase() || 'security'} solutions. Traditional methods often fail to scale effectively in enterprise environments, leaving gaps that sophisticated threats can exploit.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    The core problem was identifying a way to maintain high-throughput performance without compromising on cryptographic integrity.
                  </p>
                </section>

                <section>
                   <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-knoux-accent pl-4">The Solution</h2>
                   <div className="glass-panel p-6 rounded-xl border border-gray-200 dark:border-white/10 mb-6 bg-white/50 dark:bg-white/5 shadow-sm">
                      <code className="text-sm font-mono text-knoux-700 dark:text-knoux-400 block overflow-x-auto">
                        {`// Core Implementation Logic`} <br/>
                        {`const secureNode = new Sentinel({`} <br/>
                        {`  encryption: 'AES-256-GCM',`} <br/>
                        {`  latency: 'ultra-low',`} <br/>
                        {`  ai_model: 'Knoux-v4'`} <br/>
                        {`});`}
                      </code>
                   </div>
                   <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                     We engineered a custom architecture using {project.language} that leverages distributed node analysis. This allows {project.name} to process data streams in real-time, applying AI-driven threat detection heuristics instantly.
                   </p>
                </section>

                <section>
                   <h2 className="text-3xl font-display font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-emerald-500 pl-4">Impact & Stats</h2>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-white dark:bg-white/5 rounded-xl text-center shadow-sm border border-gray-100 dark:border-white/5">
                         <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{project.stats?.stars}</div>
                         <div className="text-sm text-gray-500 uppercase tracking-wider">GitHub Stars</div>
                      </div>
                      <div className="p-6 bg-white dark:bg-white/5 rounded-xl text-center shadow-sm border border-gray-100 dark:border-white/5">
                         <div className="text-4xl font-bold text-emerald-500 mb-1">100%</div>
                         <div className="text-sm text-gray-500 uppercase tracking-wider">Uptime</div>
                      </div>
                   </div>
                </section>

                <div className="flex gap-4 pt-8">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold text-center transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-gray-900/20 dark:shadow-white/10"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                  <button 
                    onClick={() => setActiveTab('download')}
                    className="flex-1 py-4 border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-lg font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Get Latest Build
                  </button>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Video Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-white/10">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Play className="w-8 h-8 text-white ml-1" />
                       </div>
                     </div>
                     <div className="absolute bottom-0 left-0 p-6">
                       <h3 className="text-white font-bold text-lg">Feature Demo 0{i}</h3>
                       <p className="text-gray-300 text-sm">Walkthrough of key security protocols.</p>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'download' && (
             <motion.div
               key="download"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="max-w-3xl mx-auto"
             >
                <div className="glass-panel p-10 rounded-3xl border border-gray-200 dark:border-white/10 text-center space-y-8 bg-white/60 dark:bg-white/5 shadow-2xl">
                   <div className="w-20 h-20 bg-knoux-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download className="w-10 h-10 text-knoux-600 dark:text-knoux-400" />
                   </div>
                   <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Download {project.name}</h2>
                   <p className="text-gray-600 dark:text-gray-300">
                     Select the version appropriate for your system. All builds are signed with our enterprise key.
                   </p>
                   
                   <div className="grid gap-4 text-left">
                     {[
                       { v: 'v2.4.0', type: 'Stable', size: '145 MB', date: 'Oct 24, 2024' },
                       { v: 'v2.5.0-beta', type: 'Beta', size: '150 MB', date: 'Nov 1, 2024' }
                     ].map((build, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-knoux-400 transition-colors cursor-pointer group shadow-sm">
                          <div className="flex items-center gap-4">
                             <div className="p-3 bg-gray-50 dark:bg-black rounded-lg border border-gray-100 dark:border-white/5">
                               <ShieldCheck className="w-6 h-6 text-emerald-500" />
                             </div>
                             <div>
                               <div className="flex items-center gap-3">
                                 <span className="font-bold text-lg text-gray-900 dark:text-white">{build.v}</span>
                                 <span className={`text-xs px-2 py-0.5 rounded uppercase font-bold ${build.type === 'Stable' ? 'bg-emerald-500/20 text-emerald-600' : 'bg-yellow-500/20 text-yellow-500'}`}>{build.type}</span>
                               </div>
                               <div className="text-sm text-gray-500">{build.date} • {build.size}</div>
                             </div>
                          </div>
                          <button className="px-6 py-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold rounded-lg group-hover:bg-knoux-600 group-hover:text-white transition-colors">
                            Download
                          </button>
                       </div>
                     ))}
                   </div>
                </div>
             </motion.div>
          )}

        </AnimatePresence>
      </main>

    </motion.div>
  );
};