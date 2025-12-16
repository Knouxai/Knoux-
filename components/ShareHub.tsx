import React, { useState } from 'react';
import { Copy, Share2, QrCode, Link, Check, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

interface ShareHubProps {
  projectId: string;
  projectName: string;
}

export const ShareHub: React.FC<ShareHubProps> = ({ projectId, projectName }) => {
  const { language } = useThemeLanguage();
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://knoux-nexus.com/projects/${projectId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel rounded-xl p-6 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Share2 className="w-5 h-5 mr-2 rtl:ml-2 text-knoux-600 dark:text-knoux-400" />
        {language === 'ar' ? 'مشاركة المشروع' : 'Share Project'}
      </h3>

      <div className="space-y-4">
        {/* Direct Link */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
            {language === 'ar' ? 'الرابط المباشر' : 'Direct Link'}
          </label>
          <div className="flex shadow-sm">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg text-gray-600 dark:text-gray-300 text-sm truncate focus:outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="px-3 py-2 bg-knoux-600 hover:bg-knoux-500 text-white rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg transition-colors flex items-center justify-center w-12"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="grid grid-cols-2 gap-3">
          <button
            className="flex flex-col items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors border border-transparent hover:border-knoux-600/30"
          >
            <QrCode className="w-5 h-5 text-knoux-600 dark:text-knoux-400 mb-2" />
            <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {language === 'ar' ? 'رمز QR' : 'QR Code'}
            </span>
          </button>
          
          <button className="flex flex-col items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors border border-transparent hover:border-knoux-600/30">
            <Link className="w-5 h-5 text-knoux-600 dark:text-knoux-400 mb-2" />
            <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {language === 'ar' ? 'تضمين' : 'Embed'}
            </span>
          </button>
        </div>

        {/* Social Sharing */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">
            {language === 'ar' ? 'مشاركة على' : 'Share on'}
          </p>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <button className="flex-1 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 rounded-lg transition-colors flex justify-center">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="flex-1 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 rounded-lg transition-colors flex justify-center">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="flex-1 py-2 bg-blue-700/10 hover:bg-blue-700/20 text-blue-700 rounded-lg transition-colors flex justify-center">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};