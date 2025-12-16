import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating cubes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] left-[5%] w-16 h-16 bg-knoux-600/10 dark:bg-knoux-600/20 rounded-xl backdrop-blur-sm border border-knoux-600/20"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[25%] right-[10%] w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-500/20"
      />
      
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[20%] left-[15%] w-20 h-20 bg-knoux-accent/10 dark:bg-knoux-accent/20 rounded-xl backdrop-blur-sm border border-knoux-accent/20"
      />
      
      {/* Floating lines */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 0
        }}
        className="absolute top-[40%] w-64 h-[1px] bg-gradient-to-r from-transparent via-knoux-600/50 to-transparent opacity-30"
      />
      
      <motion.div
        animate={{
          x: ['200%', '-100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute top-[70%] right-0 w-96 h-[1px] bg-gradient-to-r from-transparent via-knoux-accent/50 to-transparent opacity-30"
      />
    </div>
  );
};