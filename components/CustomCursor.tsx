import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useThemeLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Attach listeners to interactive elements
    const updateListeners = () => {
      const interactives = document.querySelectorAll('a, button, .cursor-pointer, input, select, textarea');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateListeners();
    
    // Observer to attach listeners to new elements (like modals)
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const interactives = document.querySelectorAll('a, button, .cursor-pointer, input, select, textarea');
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Glowing Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-knoux-600 dark:border-knoux-accent z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered 
            ? (theme === 'dark' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(91, 33, 182, 0.1)') 
            : 'transparent',
          borderColor: isHovered 
            ? 'transparent' 
            : (theme === 'dark' ? 'rgba(0, 240, 255, 0.5)' : 'rgba(91, 33, 182, 0.5)'),
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Particle Trail Effect (Simplified as a blur glow) */}
        <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${isHovered ? 'bg-knoux-accent' : 'bg-knoux-600'}`}></div>
      </motion.div>
    </div>
  );
};
