import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-xl cursor-pointer group ${className}
      `}
    >
      {/* Holographic effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-knoux-600/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
      </div>
      
      {/* Glowing border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-knoux-600/0 group-hover:border-knoux-600/30 transition-colors duration-300 pointer-events-none"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};