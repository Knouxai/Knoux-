import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2, RotateCcw, Settings, Terminal } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { LoadingSpinner } from './LoadingSpinner';

interface SandboxDemoProps {
  projectId: string;
  projectName: string;
}

export const SandboxDemo: React.FC<SandboxDemoProps> = ({ projectId, projectName }) => {
  const { language } = useThemeLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('console');

  const handleReload = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className={`relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-2xl flex flex-col transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-[100] rounded-none' : 'h-[500px]'}`}>
      
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700 shrink-0">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="flex gap-1.5">
             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-xs font-mono ml-4 rtl:mr-4 flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            root@knoux:~/projects/{projectId}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <button 
            onClick={handleReload}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title={language === 'ar' ? 'إعادة تحميل' : 'Reload'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title={isFullscreen ? (language === 'ar' ? 'تصغير' : 'Minimize') : (language === 'ar' ? 'تكبير' : 'Maximize')}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Demo Content */}
      <div className="relative flex-1 bg-black/90 font-mono text-sm overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 z-20 backdrop-blur-sm">
             <LoadingSpinner />
             <p className="text-knoux-400 mt-4 animate-pulse">
               {language === 'ar' ? 'جاري تهيئة البيئة...' : 'Initializing environment...'}
             </p>
          </div>
        ) : (
          <div className="h-full flex flex-col">
             <div className="p-4 text-green-400 space-y-2 overflow-y-auto">
                <div>{`> connecting to ${projectName} daemon...`}</div>
                <div className="text-gray-500">{`[OK] Connection established (24ms)`}</div>
                <div>{`> loading modules...`}</div>
                <div className="text-blue-400">{`[INFO] Security protocols active`}</div>
                <div className="text-blue-400">{`[INFO] AI heuristics engine online`}</div>
                <div className="mt-4">{`$ _`}</div>
                
                {/* Simulated Interactive UI */}
                <div className="mt-8 border border-gray-800 rounded-lg p-6 bg-gray-900/50 max-w-md mx-auto text-center">
                    <div className="w-16 h-16 bg-knoux-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-knoux-500/30">
                      <Settings className="w-8 h-8 text-knoux-400 animate-spin-slow" />
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">
                      {projectName} Interface
                    </h3>
                    <p className="text-gray-400 text-xs mb-6">
                      System is ready to accept commands. Secure channel verified.
                    </p>
                    <button 
                      onClick={() => handleReload()}
                      className="bg-knoux-600 hover:bg-knoux-500 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      {language === 'ar' ? 'تشغيل التشخيص' : 'Run Diagnostics'}
                    </button>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Fullscreen overlay backdrop (if needed for z-index issues, but fixed positioning handles it) */}
      {isFullscreen && (
        <div className="absolute top-4 right-4 z-[101]">
           <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded shadow-lg animate-pulse">
              LIVE SESSION
           </div>
        </div>
      )}
    </div>
  );
};