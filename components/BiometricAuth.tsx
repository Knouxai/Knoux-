import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Unlock, Lock, AlertTriangle } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface BiometricAuthProps {
  onSuccess: () => void;
  onClose: () => void;
}

export const BiometricAuth: React.FC<BiometricAuthProps> = ({ onSuccess, onClose }) => {
  const { language } = useThemeLanguage();
  const [status, setStatus] = useState<'scanning' | 'success' | 'failed'>('scanning');
  const [scanProgress, setScanProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setStatus('success');
        setTimeout(() => {
          onSuccess();
        }, 1000);
      }
    }, 40); // 2 seconds scan

    return () => clearInterval(interval);
  }, [onSuccess]);

  // Face Scan Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 60;

      // Color based on status
      let color = '#8b5cf6'; // knoux-600
      if (status === 'success') color = '#10b981'; // emerald-500
      if (status === 'failed') color = '#ef4444'; // red-500

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      
      // Face circle (dashed for sci-fi effect)
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); // Reset

      // Target Corners
      const cornerSize = 20;
      const offset = radius + 20;
      ctx.lineWidth = 3;
      
      // TL
      ctx.beginPath();
      ctx.moveTo(centerX - offset, centerY - offset + cornerSize);
      ctx.lineTo(centerX - offset, centerY - offset);
      ctx.lineTo(centerX - offset + cornerSize, centerY - offset);
      ctx.stroke();

      // TR
      ctx.beginPath();
      ctx.moveTo(centerX + offset - cornerSize, centerY - offset);
      ctx.lineTo(centerX + offset, centerY - offset);
      ctx.lineTo(centerX + offset, centerY - offset + cornerSize);
      ctx.stroke();

      // BL
      ctx.beginPath();
      ctx.moveTo(centerX - offset, centerY + offset - cornerSize);
      ctx.lineTo(centerX - offset, centerY + offset);
      ctx.lineTo(centerX - offset + cornerSize, centerY + offset);
      ctx.stroke();

      // BR
      ctx.beginPath();
      ctx.moveTo(centerX + offset - cornerSize, centerY + offset);
      ctx.lineTo(centerX + offset, centerY + offset);
      ctx.lineTo(centerX + offset, centerY + offset - cornerSize);
      ctx.stroke();

      // Scanning line
      if (status === 'scanning') {
        const scanHeight = 140;
        const scanY = centerY - scanHeight / 2 + (scanProgress / 100) * scanHeight;
        
        ctx.strokeStyle = '#ec4899'; // pink
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ec4899';
        
        ctx.beginPath();
        ctx.moveTo(centerX - radius - 10, scanY);
        ctx.lineTo(centerX + radius + 10, scanY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, [scanProgress, status]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl"
      >
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-widest">
            {language === 'ar' ? 'التحقق البيومتري' : 'Identity Verification'}
          </h3>
          <p className="text-xs text-gray-500 mb-8 uppercase tracking-widest font-mono">Knoux Secure Gateway</p>

          <div className="relative w-[240px] h-[240px] mx-auto mb-8 flex items-center justify-center">
             <canvas ref={canvasRef} width={240} height={240} className="absolute inset-0" />
             
             <div className="relative z-10 p-6 bg-black/50 rounded-full backdrop-blur-sm border border-white/5">
               {status === 'scanning' && <ScanFace className="w-16 h-16 text-knoux-400 animate-pulse" />}
               {status === 'success' && <Unlock className="w-16 h-16 text-emerald-400" />}
               {status === 'failed' && <AlertTriangle className="w-16 h-16 text-red-400" />}
             </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-gray-300 font-mono text-xs uppercase tracking-wider mb-2">
                {status === 'scanning' && (language === 'ar' ? 'جاري مسح الهوية...' : 'Scanning Facial Geometry...')}
                {status === 'success' && (language === 'ar' ? 'تم التحقق بنجاح' : 'Access Granted')}
                {status === 'failed' && (language === 'ar' ? 'فشل التحقق' : 'Access Denied')}
              </p>
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${status === 'success' ? 'bg-emerald-500' : 'bg-knoux-600'}`}
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>

            <button 
              onClick={onClose}
              className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-widest hover:underline"
            >
              {language === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};