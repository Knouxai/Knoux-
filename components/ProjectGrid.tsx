import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { Search, Filter } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface ProjectGridProps {
  onOpenProject: (p: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onOpenProject }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { t, isRTL } = useThemeLanguage();

  const filters = ['all', 'platform', 'security', 'ai', 'tools', 'web'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      let matchesFilter = false;
      
      if (filter === 'all') {
        matchesFilter = true;
      } else {
        const filterKey = filter.toLowerCase();
        // Handle singular/plural mismatch (e.g., tool/tools)
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
    <section id="showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
              {t.showcase.title} <span className="text-knoux-600 dark:text-knoux-400">{t.showcase.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{t.showcase.subtitle}</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-knoux-600 dark:group-focus-within:text-knoux-400 transition-colors" />
              </div>
              <input
                type="text"
                className={`glass-panel w-full sm:w-64 ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 rounded-lg text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-knoux-600 dark:focus:border-knoux-400 transition-colors bg-white/50 dark:bg-white/5`}
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap border ${
                    filter === f 
                    ? 'bg-knoux-600 border-knoux-600 text-white shadow-lg' 
                    : 'glass-panel border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {(t.showcase.filters as any)[f]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-[400px]">
              <ProjectCard project={project} onOpen={onOpenProject} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">{t.showcase.noProjects}</h3>
            <p className="text-gray-500">Try adjusting your search filters.</p>
          </div>
        )}
        
      </div>
    </section>
  );
};