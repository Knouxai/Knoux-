import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const DemoRequestForm: React.FC = () => {
  const { t, isRTL } = useThemeLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit logic would go here
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t.enterprise.demo.title}</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.enterprise.demo.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t.enterprise.demo.placeholders.name}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.enterprise.demo.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.enterprise.demo.placeholders.email}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.enterprise.demo.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                placeholder={t.enterprise.demo.placeholders.company}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.enterprise.demo.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t.enterprise.demo.placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.enterprise.demo.interest}
            </label>
            <select
              id="project"
              name="project"
              required
              value={formData.project}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
            >
              <option value="">Select...</option>
              <option value="security-suite">{t.footer.sections.securitySuite}</option>
              <option value="ai-platform">{t.footer.sections.aiPlatform}</option>
              <option value="enterprise-solutions">{t.footer.sections.enterprise}</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.enterprise.demo.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t.enterprise.demo.placeholders.message}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-knoux-600 dark:focus:ring-knoux-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-knoux-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
          >
            {t.enterprise.demo.submit}
          </motion.button>
        </form>
      </div>
    </div>
  );
};
