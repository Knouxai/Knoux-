import React, { useState, useMemo, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Box, Layers, Zap } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface ProjectGridProps {
  onOpenProject: (p: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onOpenProject }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { t, isRTL, theme } = useThemeLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Tracking Logic for 3D Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax Transformations
  const layer1RotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const layer1RotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  
  const shard1X = useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]);
  const shard1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-100, 100]);
  
  const shard2X = useTransform(smoothMouseX, [-0.5, 0.5], [150, -150]);
  const shard2Y = useTransform(smoothMouseY, [-0.5, 0.5], [150, -150]);

  const filters = ['all', 'platform', 'security', 'ai', 'tools', 'web'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      let matchesFilter = false;
      if (filter === 'all') {
        matchesFilter = true;
      } else {
        const filterKey = filter.toLowerCase();
        const normalize = (str: string) => str.toLowerCase().replace(/s$/, '');
        const typeMatch = normalize(p.type).includes(normalize(filterKey));
        const tagMatch = p.tags.some(tag => normalize(tag).includes(normalize(filterKey)));
        matchesFilter = typeMatch || tagMatch;
      }
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section 
      id="showcase" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-32 relative overflow-hidden transition-colors duration-700 bg-slate-50 dark:bg-[#030014]"
    >
      {/* --- Dynamic 3D Background Layers --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Digital Grid Warp */}
        <motion.div 
          style={{ rotateX: layer1RotateX, rotateY: layer1RotateY, scale: 1.1 }}
          className="absolute inset-0 opacity-20 dark:opacity-40"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </motion.div>

        {/* Layer 2: Interactive Floating Shards */}
        <motion.div 
          style={{ x: shard1X, y: shard1Y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-knoux-600/10 dark:bg-knoux-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          style={{ x: shard2X, y: shard2Y }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-knoux-accent/10 dark:bg-knoux-accent/20 blur-[150px] rounded-full"
        />

        {/* Floating Geometric Elements (Glass Shards) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              x: useTransform(smoothMouseX, [-0.5, 0.5], [-(20 * (i + 1)), 20 * (i + 1)]),
              y: useTransform(smoothMouseY, [-0.5, 0.5], [-(20 * (i + 1)), 20 * (i + 1)]),
              rotate: i * 45,
            }}
            className="absolute w-24 h-24 border border-white/10 dark:border-white/5 bg-white/5 backdrop-blur-sm rounded-xl transform-gpu"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-knoux-600/10 rounded-lg">
                 <Box className="w-5 h-5 text-knoux-600 dark:text-knoux-400" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-knoux-600 dark:text-knoux-accent">Archive // 01</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
              {t.showcase.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-knoux-600 to-knoux-pink">{t.showcase.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">{t.showcase.subtitle}</p>
          </motion.div>

          {/* Search & Filter UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <div className="relative group">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-knoux-600 transition-colors" />
              </div>
              <input
                type="text"
                className={`glass-panel w-full sm:w-80 ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-xl text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-knoux-600/50 transition-all bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10`}
                placeholder={t.showcase.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                    filter === f 
                    ? 'bg-knoux-600 border-knoux-600 text-white shadow-xl shadow-knoux-600/20 scale-105' 
                    : 'glass-panel border-gray-200 dark:border-white/10 text-gray-500 hover:text-knoux-600 dark:hover:text-white'
                  }`}
                >
                  {(t.showcase.filters as any)[f]}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Grid with Staggered Entrance */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-[420px]"
              >
                <ProjectCard project={project} onOpen={onOpenProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 glass-panel rounded-3xl border-dashed border-2"
          >
            <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.showcase.noProjects}</h3>
            <p className="text-gray-500 max-w-sm mx-auto">No protocols match your current filter parameters. Try expanding your search criteria.</p>
            <button 
              onClick={() => { setFilter('all'); setSearch(''); }}
              className="mt-8 text-knoux-600 dark:text-knoux-accent font-bold uppercase tracking-widest flex items-center gap-2 mx-auto hover:gap-3 transition-all"
            >
              <Zap className="w-4 h-4" /> Reset Filters
            </button>
          </motion.div>
        )}
        
      </div>
      
      {/* Subtle Bottom Section Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-200/50 dark:from-knoux-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
};