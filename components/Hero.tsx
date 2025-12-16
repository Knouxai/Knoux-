import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, Star, Zap } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Hero: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();
  const featuredProject = PROJECTS.find(p => p.id === 'x') || PROJECTS[0];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-500">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mode Blobs (Subtle) / Dark Mode Blobs (Neon) */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-knoux-600/10 dark:bg-knoux-600/30 rounded-full blur-[120px] animate-pulse-slow mix-blend-multiply dark:mix-blend-normal"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-300/20 dark:bg-indigo-900/40 rounded-full blur-[120px] animate-pulse-slow delay-1000 mix-blend-multiply dark:mix-blend-normal"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[400px] bg-white/60 dark:bg-knoux-900/50 blur-[100px]"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-8 animate-float shadow-sm dark:shadow-none ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-knoux-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-knoux-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">{t.hero.systemOperational} • V.4.0.1</span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-gray-200 dark:to-gray-500 mb-6 drop-shadow-sm dark:drop-shadow-2xl">
              {t.hero.mainTitleLine1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-knoux-600 to-knoux-400 dark:from-knoux-400 dark:to-knoux-accent neon-text">
                {t.hero.mainTitleLine2}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mx-auto lg:mx-0">
              {t.hero.subtitle.split(',')[0]}, <span className="text-gray-900 dark:text-white font-semibold">{t.hero.subtitle.split(',')[1]}</span><br />
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className={`mt-10 flex flex-col sm:flex-row justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} gap-6`}>
              <button className="group relative px-8 py-4 bg-knoux-600 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(91,33,182,0.4)] shadow-lg shadow-knoux-600/30">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                <div className="relative flex items-center justify-center font-bold text-white tracking-wide gap-2">
                  {t.hero.explore}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </div>
              </button>
              
              <button className="px-8 py-4 rounded-lg glass-panel hover:bg-white/50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                <Code2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                {t.hero.viewSource}
              </button>
            </div>
          </div>

          {/* 3D Card Showcase (Desktop Only) */}
          <div className="hidden lg:block relative perspective-1000">
             <div className="relative w-full max-w-md mx-auto transform transition-transform duration-700 hover:scale-105" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-10deg) rotateX(5deg)' }}>
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-knoux-600/10 dark:bg-knoux-600/30 rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>
                
                {/* Featured Badge */}
                <div className="absolute -top-6 -right-6 z-20 animate-float" style={{ animationDelay: '1s' }}>
                   <div className="glass-panel-heavy p-4 rounded-xl shadow-xl flex items-center gap-3 bg-white/80 dark:bg-[#0d0c18]/80">
                      <div className="p-2 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full">
                         <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase">Top Project</div>
                        <div className="font-bold text-gray-900 dark:text-white">Enterprise Ready</div>
                      </div>
                   </div>
                </div>

                <div className="h-[450px]">
                  <ProjectCard project={featuredProject} onOpen={() => {}} />
                </div>

                {/* Live Activity indicator */}
                <div className="absolute -bottom-6 -left-6 z-20 animate-float" style={{ animationDelay: '2s' }}>
                   <div className="glass-panel-heavy p-4 rounded-xl shadow-xl flex items-center gap-3 bg-white/80 dark:bg-[#0d0c18]/80">
                      <div className="p-2 bg-green-500/10 dark:bg-green-500/20 rounded-full">
                         <Zap className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase">Live Activity</div>
                        <div className="font-bold text-gray-900 dark:text-white">1.2k req/sec</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Floating Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, label: t.hero.stats.securityScore, value: "99.9%" },
            { icon: Cpu, label: t.hero.stats.aiModels, value: "12" },
            { icon: Code2, label: t.hero.stats.projects, value: "30+" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl flex items-center gap-4 hover:border-knoux-400/50 transition-colors group bg-white/60 dark:bg-white/5 shadow-sm hover:shadow-md">
              <div className="p-3 rounded-lg bg-knoux-100 dark:bg-knoux-900/50 text-knoux-600 dark:text-knoux-400 group-hover:text-knoux-700 dark:group-hover:text-knoux-accent transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-${isRTL ? 'right' : 'left'}`}>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                <div className="text-2xl font-bold font-display text-gray-900 dark:text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Decorative Floor */}
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-slate-50 dark:from-knoux-900 via-transparent to-transparent opacity-80 z-0"></div>
    </div>
  );
};
