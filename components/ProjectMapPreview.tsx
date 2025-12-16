import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Shield, Brain, Globe, Database, Code, Monitor, Star, Download, Share2, X, Activity } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const ProjectMapPreview: React.FC = () => {
  const { language } = useThemeLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredProject, setHoveredProject] = useState<any>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // Map Projects to include simple category from tags for the map visualization
  const projects = PROJECTS.map(p => ({
    ...p,
    category: p.tags[0]?.toLowerCase() || 'other',
    status: 'active' // Assuming active for visualization
  }));

  // Get unique categories for ring rendering
  const categories = [...new Set(projects.map(p => p.category))];

  // Icon mapping
  const getProjectIcon = (category: string) => {
    const iconMap: any = {
      'security': Shield,
      'ai': Brain,
      'web': Globe,
      'platform': Monitor,
      'blockchain': Database,
      'devops': Code,
      'other': Zap
    };
    
    // Simple matching logic
    const matchedKey = Object.keys(iconMap).find(k => category.includes(k)) || 'other';
    const IconComponent = iconMap[matchedKey];
    return <IconComponent className="w-5 h-5" />;
  };

  // Position projects on map
  const positionProjects = () => {
    if (!mapRef.current) return [];
    
    const mapWidth = mapRef.current.clientWidth;
    const mapHeight = mapRef.current.clientHeight;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const radius = Math.min(mapWidth, mapHeight) * 0.35;
    
    return projects.map((project, index) => {
      const angle = (index / projects.length) * 2 * Math.PI;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      return {
        ...project,
        x,
        y
      };
    });
  };

  const [positionedProjects, setPositionedProjects] = useState<any[]>([]);

  useEffect(() => {
    if (isMapVisible) {
      setTimeout(() => {
        setPositionedProjects(positionProjects());
      }, 100);
    }
  }, [isMapVisible]);

  useEffect(() => {
    const handleResize = () => setPositionedProjects(positionProjects());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Category connections (simple logic: connect adjacent projects)
  const connections = positionedProjects.map((p, i) => {
    const next = positionedProjects[(i + 1) % positionedProjects.length];
    return { from: p, to: next };
  });

  return (
    <>
      {/* Map Preview Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsMapVisible(true)}
        className="fixed bottom-24 left-6 z-[60] w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-600/30 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label={language === 'ar' ? 'خريطة المشاريع' : 'Project Map'}
      >
        <MapPin className="w-6 h-6" />
      </motion.button>

      {/* Project Map Modal */}
      <AnimatePresence>
        {isMapVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl h-[85vh] bg-gray-900 rounded-3xl border border-purple-500/20 overflow-hidden relative flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900 z-20">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white tracking-wide">
                      {language === 'ar' ? 'خريطة النظام البيئي' : 'ECOSYSTEM MAP'}
                    </h2>
                    <p className="text-xs text-purple-400 font-mono uppercase tracking-widest">
                      {language === 'ar' ? 'تصور تفاعلي للمشاريع' : 'Interactive Project Visualization'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMapVisible(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Map Container */}
              <div className="flex-1 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
                <div 
                  ref={mapRef}
                  className="w-full h-full relative"
                >
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                  {/* Connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {connections.map((conn, index) => (
                      <motion.line
                        key={index}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.05) }}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="#a855f7"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>

                  {/* Project Nodes */}
                  {positionedProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.05 }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ left: project.x, top: project.y }}
                    >
                      <button
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => setSelectedProject(project)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative group ${
                          selectedProject?.id === project.id
                            ? 'bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.6)] scale-125 z-20'
                            : hoveredProject?.id === project.id
                            ? 'bg-gray-700 scale-110 z-20'
                            : 'bg-gray-800 border border-gray-700 hover:border-purple-500'
                        }`}
                      >
                        <div className="text-white relative z-10">
                          {getProjectIcon(project.category)}
                        </div>
                        
                        {/* Ripple Effect */}
                        {selectedProject?.id === project.id && (
                          <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/30"></div>
                        )}
                      </button>
                      
                      {/* Label on Hover */}
                      <AnimatePresence>
                        {hoveredProject?.id === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/10 pointer-events-none z-30"
                          >
                            {project.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {/* Center Hub */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-900/50 rounded-full border border-purple-500/30 flex items-center justify-center backdrop-blur-sm z-0"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-900 to-black rounded-full flex items-center justify-center border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-purple-400 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-white tracking-widest">NEXUS</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Project Details Sidebar Overlay */}
              <AnimatePresence>
                {selectedProject && (
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute top-0 right-0 w-80 sm:w-96 h-full bg-gray-900/95 backdrop-blur-xl border-l border-white/10 p-6 overflow-y-auto z-30 shadow-2xl"
                  >
                    <div className="flex justify-end mb-6">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-purple-900/50 to-gray-800/50 rounded-2xl p-6 border border-white/10">
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                          {getProjectIcon(selectedProject.category)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{selectedProject.name}</h3>
                        <div className="flex gap-2 mb-4">
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded uppercase font-bold">{selectedProject.type}</span>
                          <span className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded uppercase font-bold">{selectedProject.language}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                          <div className="flex items-center gap-2 mb-1 text-gray-400 text-xs uppercase tracking-wider">
                            <Star className="w-3 h-3" /> Stars
                          </div>
                          <div className="text-xl font-bold text-white">{selectedProject.stats?.stars || 0}</div>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                          <div className="flex items-center gap-2 mb-1 text-gray-400 text-xs uppercase tracking-wider">
                            <Shield className="w-3 h-3" /> Score
                          </div>
                          <div className="text-xl font-bold text-emerald-400">{selectedProject.stats?.securityScore || 0}</div>
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          {language === 'ar' ? 'تحميل' : 'Download'}
                        </button>
                        <button className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-white/10">
                          <Share2 className="w-4 h-4" />
                          {language === 'ar' ? 'مشاركة' : 'Share'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};