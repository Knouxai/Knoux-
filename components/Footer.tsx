import React from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Github, Twitter, Linkedin, Mail, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const links = {
    products: [
      { name: t.footer.sections.securitySuite, href: '#' },
      { name: t.footer.sections.aiPlatform, href: '#' },
      { name: t.footer.sections.enterprise, href: '#' },
      { name: t.footer.sections.devTools, href: '#' }
    ],
    company: [
      { name: t.footer.sections.about, href: '#' },
      { name: t.footer.sections.careers, href: '#' },
      { name: t.footer.sections.press, href: '#' },
      { name: t.footer.sections.contact, href: '#' }
    ],
    resources: [
      { name: t.footer.sections.docs, href: '#' },
      { name: t.footer.sections.blog, href: '#' },
      { name: t.footer.sections.support, href: '#' },
      { name: t.footer.sections.status, href: '#' }
    ]
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <Shield className="w-8 h-8 text-knoux-600 dark:text-knoux-400" />
               <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                 KNOUX<span className="text-knoux-600 dark:text-knoux-400">NEXUS</span>
               </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              {t.hero.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-knoux-600 dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-knoux-600 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-knoux-600 dark:hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-knoux-600 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.products}
            </h3>
            <ul className="space-y-2">
              {links.products.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2">
              {links.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t.footer.resources}
            </h3>
            <ul className="space-y-2">
              {links.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-knoux-600 dark:hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-knoux-600 dark:hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-knoux-600 dark:hover:text-white transition-colors">{t.footer.preferences}</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400 font-mono opacity-50" dir="ltr">
            {t.footer.systemId}
        </div>
      </div>
    </footer>
  );
};
