import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { Github, Star, GitFork, ExternalLink, ShieldCheck, Download, BookOpen } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { t } = useThemeLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3; // Reduced rotation for subtlety
    const rotateY = ((x - centerX) / centerX) * 3;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative perspective-1000 group h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="h-full relative transform-gpu transition-all duration-300 ease-out rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-knoux-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:shadow-knoux-600/20 dark:group-hover:shadow-knoux-600/40 group-hover:-translate-y-2"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        }}
      >
        {/* Neumorphic/Glow Border Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-knoux-600/30 dark:group-hover:border-knoux-400/30 transition-colors duration-300 pointer-events-none z-20"></div>

        {/* Image Placeholder / Banner */}
        <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-knoux-600/5 dark:bg-knoux-600/10 mix-blend-overlay"></div>
          
          {/* Simulated content preview */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
             <div className="text-6xl font-display font-bold text-gray-300 dark:text-white/5 select-none transition-transform duration-500 group-hover:scale-110">
               {project.name.substring(0,2).toUpperCase()}
             </div>
          </div>
          
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-knoux-600/90 text-white text-xs font-bold uppercase tracking-wider rounded backdrop-blur-md shadow-lg z-10">
              Featured
            </div>
          )}
          
          {/* Type Badge */}
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            <span className="px-2 py-1 bg-white/80 dark:bg-black/60 border border-slate-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs rounded uppercase tracking-wide backdrop-blur-sm shadow-sm">
              {project.type}
            </span>
             <span className="px-2 py-1 bg-white/80 dark:bg-black/60 border border-slate-200 dark:border-white/10 text-knoux-600 dark:text-knoux-400 text-xs rounded uppercase tracking-wide backdrop-blur-sm shadow-sm">
              {project.language}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white group-hover:text-knoux-600 dark:group-hover:text-knoux-accent transition-colors truncate pr-4">
              {project.name}
            </h3>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button 
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-knoux-600/10 dark:bg-knoux-600/20 text-knoux-700 dark:text-knoux-300 text-xs font-bold uppercase tracking-wider hover:bg-knoux-600 hover:text-white dark:hover:bg-knoux-500 transition-all duration-300 group/btn"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Story Mode
            </button>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 dark:border-white/10 text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wider hover:border-knoux-600 hover:text-knoux-600 dark:hover:text-white dark:hover:border-white transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          </div>

          {/* Stats Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>{project.stats?.stars || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3 text-blue-400" />
                <span>{project.stats?.forks || 0}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>Score: {project.stats?.securityScore || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};