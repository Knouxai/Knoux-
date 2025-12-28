import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Code2, Star, Zap, Globe } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();
  const featuredProject = PROJECTS.find(p => p.id === 'knoux-ai-ultra-pro-max') || PROJECTS[0];

  // Mouse tracking for 3D Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  // Transform layers for different depths
  const bg1X = useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]);
  const bg1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-50, 50]);
  
  const bg2X = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const bg2Y = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  const gridRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const gridRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <div 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-500 bg-[#030014]"
    >
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none perspective-1000">
        {/* Deep Space Gradients with Parallax */}
        <motion.div 
          style={{ x: bg1X, y: bg1Y }}
          className="absolute top-[-20%] left-[20%] w-[700px] h-[700px] bg-[#5b21b6] rounded-full blur-[160px] opacity-40 animate-pulse-slow"
        ></motion.div>
        
        <motion.div 
          style={{ x: bg2X, y: bg2Y }}
          className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[#2e1065] rounded-full blur-[180px] opacity-40 animate-pulse-slow delay-1000"
        ></motion.div>
        
        <motion.div 
          style={{ scale: 1.1, rotateX: gridRotateX, rotateY: gridRotateY }}
          className="absolute inset-0 z-0"
        >
          {/* Interactive Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] transition-transform duration-1000"></div>
          
          {/* Animated Noise */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-float shadow-lg shadow-knoux-600/10 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 tracking-widest uppercase">{t.hero.systemOperational} <span className="text-gray-600 mx-2">|</span> V.4.0.1</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white mb-8 leading-[1.1]"
            >
              {t.hero.mainTitleLine1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#2dd4bf] to-[#a78bfa] bg-300% animate-gradient">
                {t.hero.mainTitleLine2}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 max-w-2xl text-xl text-gray-400 font-light leading-relaxed mx-auto lg:mx-0"
            >
              <span className="text-white font-semibold italic">"{t.hero.subtitle}"</span>
              <br className="mb-4 block" />
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <div className={`mt-10 flex flex-col sm:flex-row justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} gap-6`}>
              <button className="group relative px-8 py-4 bg-white text-black rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                <div className="relative flex items-center justify-center font-bold tracking-wide gap-2">
                  {t.hero.explore}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </div>
              </button>
              
              <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold transition-all hover:bg-white/10 hover:border-white/30 flex items-center justify-center gap-2 backdrop-blur-sm">
                <Globe className="w-5 h-5 text-knoux-400" />
                {t.hero.viewSource}
              </button>
            </div>
          </div>

          {/* 3D Card Showcase (Desktop Only) */}
          <div className="hidden lg:block relative perspective-1000 z-20">
             <motion.div 
               style={{ rotateX: gridRotateX, rotateY: gridRotateY }}
               className="relative w-full max-w-md mx-auto"
             >
                <div className="absolute -inset-10 bg-knoux-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-knoux-accent/20 rounded-full blur-2xl animate-float"></div>
                
                {/* Floating UI Elements */}
                <div className="absolute -top-4 -right-12 z-30 animate-float" style={{ animationDelay: '1s' }}>
                   <div className="glass-panel-heavy p-3 rounded-lg shadow-2xl flex items-center gap-3 bg-[#0d0c18]/90 border border-white/10 backdrop-blur-xl">
                      <div className="p-1.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-md shadow-lg shadow-orange-500/20">
                         <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Top Rated</div>
                        <div className="text-xs font-bold text-white">Enterprise Ready</div>
                      </div>
                   </div>
                </div>

                <div className="h-[420px] w-full transform transition-all duration-700 hover:scale-105">
                  <ProjectCard project={featuredProject} onOpen={() => {}} />
                </div>

                <div className="absolute bottom-8 -left-12 z-30 animate-float" style={{ animationDelay: '2s' }}>
                   <div className="glass-panel-heavy p-3 rounded-lg shadow-2xl flex items-center gap-3 bg-[#0d0c18]/90 border border-white/10 backdrop-blur-xl">
                      <div className="relative p-1.5 bg-emerald-500/10 rounded-md">
                         <Zap className="w-4 h-4 text-emerald-400" />
                         <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Live Activity</div>
                        <div className="text-xs font-bold text-white font-mono">1,204 req/s</div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Floating Metrics Bar */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: ShieldCheck, label: t.hero.stats.securityScore, value: "99.9%", sub: "System Integrity" },
            { icon: Cpu, label: t.hero.stats.aiModels, value: "12", sub: "Neural Networks" },
            { icon: Code2, label: t.hero.stats.projects, value: "30+", sub: "Open Source" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (idx * 0.1) }}
              className="relative group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-knoux-600/0 via-knoux-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-5">
                <div className="p-3 rounded-xl bg-[#1a0b2e] border border-white/10 text-knoux-400 group-hover:text-knoux-accent group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold font-display text-white">{stat.value}</div>
                  <div className="text-[10px] text-knoux-400 mt-1 font-mono">{stat.sub}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Decorative Floor Glow */}
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-[#5b21b6]/20 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>
    </div>
  );
};
