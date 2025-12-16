import React, { useEffect, useRef } from 'react';

export const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight || 128;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Visualizer settings
    const bars = 60;
    
    let animationId: number;

    // Generate fake audio data
    const generateAudioData = () => {
      return Array.from({ length: bars }, () => Math.random() * 100);
    };

    const draw = () => {
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = width / bars;

      ctx.clearRect(0, 0, width, height);
      
      const dataArray = generateAudioData();
      
      for (let i = 0; i < bars; i++) {
        const barHeight = (dataArray[i] / 100) * height * 0.8;
        const x = i * barWidth;
        const y = height - barHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height);
        gradient.addColorStop(0, '#8B5CF6'); // Purple
        gradient.addColorStop(1, '#2dd4bf'); // Teal
        
        ctx.fillStyle = gradient;
        // Rounded top bars simulation
        ctx.beginPath();
        ctx.roundRect(x + 1, y, barWidth - 2, barHeight, 4);
        ctx.fill();
      }
      
      // Slow down animation slightly
      setTimeout(() => {
        animationId = requestAnimationFrame(draw);
      }, 50);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-32 rounded-lg"
    />
  );
};