import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay, X, Wifi, Battery, Cpu, Activity, Radio, ScanLine } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const CyberpunkPreview: React.FC = () => {
  const { language } = useThemeLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 5) + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-24 z-[55] w-14 h-14 bg-black/80 backdrop-blur-md rounded-xl border border-yellow-400/50 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group overflow-hidden"
        aria-label="Cyber Mode"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <MonitorPlay className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black text-white font-mono overflow-hidden"
          >
            {/* Background Video */}
            <div className="absolute inset-0 z-0 opacity-40">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                src="https://procreator-site.sgp1.cdn.digitaloceanspaces.com/Services_Banner_Showreel.mp4"
              />
              {/* Scanlines Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,black_100%)] z-10"></div>
            </div>

            {/* HUD Content */}
            <div className="relative z-20 h-full flex flex-col p-4 md:p-8">
              
              {/* Top Bar */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Activity className="w-5 h-5 animate-pulse" />
                    <span className="font-bold tracking-[0.2em] text-sm">SYSTEM_OVERRIDE // V.9.0</span>
                  </div>
                  <div className="text-[10px] text-gray-400">ID: KNOUX-NEXUS-PROTO</div>
                </div>

                <div className="flex gap-8">
                   <div className="hidden md:flex items-center gap-4 text-xs font-bold text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded bg-cyan-900/20">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4" /> 5G_UPLINK
                      </div>
                      <div className="w-px h-4 bg-cyan-500/50"></div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4" /> 32_CORE
                      </div>
                      <div className="w-px h-4 bg-cyan-500/50"></div>
                      <div className="flex items-center gap-2">
                        <Battery className="w-4 h-4" /> 100%
                      </div>
                   </div>
                   <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-lg group"
                   >
                     <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                   </button>
                </div>
              </div>

              {/* Center Content */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-4xl text-center relative">
                  
                  {/* Decorative Brackets */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-yellow-400 opacity-50"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-yellow-400 opacity-50"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-yellow-400 opacity-50"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-yellow-400 opacity-50"></div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-white tracking-tighter mb-4" style={{ textShadow: '2px 2px 0px #0ea5e9, -2px -2px 0px #f43f5e' }}>
                      NEXUS
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="h-px w-20 bg-yellow-400"></div>
                      <p className="text-yellow-400 text-lg tracking-[0.3em] uppercase font-bold">
                        {language === 'ar' ? 'البوابة السيبرانية' : 'Cyber Gateway'}
                      </p>
                      <div className="h-px w-20 bg-yellow-400"></div>
                    </div>

                    {/* Loading Bar */}
                    <div className="max-w-md mx-auto mb-8">
                      <div className="flex justify-between text-xs text-cyan-400 mb-1 font-mono">
                        <span>LOADING_ASSETS</span>
                        <span>{loadingProgress}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 w-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          style={{ width: `${loadingProgress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center gap-6">
                      <button className="px-8 py-3 bg-yellow-400 text-black font-bold uppercase tracking-wider hover:bg-white transition-colors clip-path-polygon">
                        {language === 'ar' ? 'بدء المهمة' : 'Initialize'}
                      </button>
                      <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider hover:bg-cyan-400/10 transition-colors">
                        {language === 'ar' ? 'تحليل البيانات' : 'Analyze Data'}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end text-xs text-gray-500 font-mono">
                <div className="hidden md:block">
                  <div className="mb-1 text-red-500 flex items-center gap-2">
                    <Radio className="w-4 h-4 animate-pulse" /> REC_MODE
                  </div>
                  <div>COORD: 45.922 / -12.004</div>
                  <div>ENC: AES-256-GCM</div>
                </div>
                
                <div className="text-center text-white/30">
                  <ScanLine className="w-8 h-8 mx-auto animate-bounce opacity-50" />
                  <div>SYSTEM SCANNING...</div>
                </div>

                <div className="text-right hidden md:block">
                  <div className="grid grid-cols-4 gap-1 mb-2 justify-end">
                    {Array.from({length: 12}).map((_, i) => (
                      <div key={i} className={`w-1 h-4 ${Math.random() > 0.5 ? 'bg-cyan-500' : 'bg-gray-800'}`}></div>
                    ))}
                  </div>
                  <div>MEMORY_HEAP: 4092MB</div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
