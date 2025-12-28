import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { Github, Star, GitFork, ShieldCheck, BookOpen, MonitorPlay, Zap } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useThemeLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      className="relative perspective-1000 group h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="h-full relative transform-gpu transition-all duration-300 ease-out rounded-2xl overflow-hidden bg-white dark:bg-[#0c0a1f]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-[0_20px_50px_rgba(91,33,182,0.3)] group-hover:-translate-y-2"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        }}
      >
        {/* Dynamic Glow Overlay - Adapted for theme */}
        <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-knoux-600/0 via-transparent to-knoux-accent/0 group-hover:from-knoux-600/10 group-hover:to-knoux-accent/10 opacity-100' 
            : 'bg-gradient-to-br from-knoux-600/5 via-transparent to-knoux-accent/5 opacity-0 group-hover:opacity-100'
        }`}></div>
        
        <div className="absolute -inset-1 bg-gradient-to-r from-knoux-600 to-knoux-pink opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

        {/* Project Banner Area */}
        <div className="h-48 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] to-[#000000]"></div>
          
          <div className="absolute inset-0 opacity-20 bg-[size:30px_30px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>
          
          {/* Neural Visualization Element */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-knoux-600/30 to-knoux-accent/30 blur-3xl rounded-full animate-pulse-slow"></div>
          </div>
          
          {/* Logo Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-7xl font-display font-bold text-white/10 group-hover:text-white/20 select-none transition-all duration-500 group-hover:scale-110 group-hover:tracking-widest">
               {project.name.substring(0,2).toUpperCase()}
             </div>
          </div>
          
          {/* Live Preview Button (Hover Only) */}
          <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <button 
                onClick={(e) => { e.stopPropagation(); onOpen(project); }}
                className="px-6 py-2 bg-knoux-600 hover:bg-knoux-500 text-white rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
             >
               <MonitorPlay className="w-4 h-4" />
               Live Preview
             </button>
          </div>
          
          {project.featured && (
            <div className="absolute top-4 right-4 flex gap-2">
                <div className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-500 text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md shadow-lg z-10 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
            </div>
          )}
          
          {/* Category Badges */}
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            <span className="px-2 py-1 bg-white/10 border border-white/10 text-gray-200 text-[10px] font-bold rounded uppercase tracking-wide backdrop-blur-md">
              {project.type}
            </span>
             <span className="px-2 py-1 bg-knoux-600/30 border border-knoux-600/30 text-knoux-300 text-[10px] font-bold rounded uppercase tracking-wide backdrop-blur-md">
              {project.language}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-10 flex flex-col h-[calc(100%-192px)] justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-knoux-600 dark:group-hover:text-knoux-accent transition-colors truncate pr-4">
                {project.name}
              </h3>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-knoux-600 dark:hover:text-white transition-colors p-1 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full">
                <Github className="w-4 h-4" />
              </a>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="mt-auto">
            {/* CTA Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button 
                onClick={(e) => { e.stopPropagation(); onOpen(project); }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-knoux-600/10 dark:bg-knoux-600/20 text-knoux-700 dark:text-knoux-300 text-[10px] font-bold uppercase tracking-wider hover:bg-knoux-600 hover:text-white dark:hover:bg-knoux-500 transition-all duration-300 group/btn border border-transparent hover:border-knoux-400"
              >
                <BookOpen className="w-3 h-3" />
                Story Mode
              </button>
              <button 
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-transparent hover:border-emerald-400"
              >
                <Zap className="w-3 h-3" />
                Sandbox
              </button>
            </div>

            {/* Footer Stats - Consistent Contrast */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 group/stat">
                  <Star className="w-3 h-3 text-slate-400 group-hover/stat:text-yellow-500 transition-colors" />
                  <span className="group-hover/stat:text-slate-900 dark:group-hover/stat:text-slate-300 transition-colors">{project.stats?.stars || 0}</span>
                </div>
                <div className="flex items-center gap-1 group/stat">
                  <GitFork className="w-3 h-3 text-slate-400 group-hover/stat:text-blue-500 transition-colors" />
                  <span className="group-hover/stat:text-slate-900 dark:group-hover/stat:text-slate-300 transition-colors">{project.stats?.forks || 0}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                <ShieldCheck className="w-3 h-3" />
                <span>Score: {project.stats?.securityScore || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};