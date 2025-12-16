import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Zap, Settings, Sparkles, Mic, Volume2, X, Brain } from 'lucide-react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';

export const AIAssistant: React.FC = () => {
  const { language } = useThemeLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'ai', timestamp: Date}>>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user' as const,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = language === 'ar' ? [
        'أفهم استفسارك حول الأمان السيبراني. دعني أساعدك في ذلك.',
        'هذا سؤال ممتاز! الحل المقترح هو تطبيق تقنيات التشفير المتقدمة.',
        'بناءً على تحليل البيانات، أنصحك بتحديث بروتوكولات الأمان الخاصة بك.',
        'يمكنني تقديم تقرير مفصل حول هذا الموضوع. هل ترغب بذلك؟',
        'لدي عدة حلول مقترحة لهذه المشكلة. أي منها تفضل مناقشته أولاً؟'
      ] : [
        'I understand your cybersecurity inquiry. Let me help you with that.',
        'That\'s an excellent question! The suggested solution is to implement advanced encryption techniques.',
        'Based on data analysis, I recommend updating your security protocols.',
        'I can provide a detailed report on this topic. Would you like that?',
        'I have several proposed solutions for this problem. Which would you prefer to discuss first?'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const newAiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'ai' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setInputText(language === 'ar' ? 'كيف يمكنني تحسين أمن شبكتي؟' : 'How can I improve my network security?');
      setIsListening(false);
    }, 2000);
  };

  const quickQuestions = language === 'ar' ? [
    'كيف أحمي بياناتي؟',
    'ما هي أفضل ممارسات الأمان؟',
    'هل أنظمتي آمنة؟'
  ] : [
    'How do I protect my data?',
    'What are the best security practices?',
    'Is my system secure?'
  ];

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-gradient-to-r from-knoux-600 to-knoux-accent rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-knoux-600/25 transition-all duration-300 border border-white/10"
        aria-label={language === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}
      >
        <div className="relative">
          {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}
          {!isOpen && (
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
            />
          )}
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-[60] w-[90vw] sm:w-96 h-[500px] glass-panel-heavy rounded-2xl border border-gray-200 dark:border-white/10 flex flex-col shadow-2xl bg-white/90 dark:bg-knoux-900/90"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-r from-knoux-600 to-knoux-accent rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold">KnouxAI</h3>
                  <p className="text-xs text-emerald-500 flex items-center font-bold">
                    <Zap className="w-3 h-3 mr-1" />
                    {language === 'ar' ? 'متصل' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
                  <Settings className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-knoux-600/20 to-knoux-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-knoux-600 dark:text-knoux-400" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-bold mb-2">
                    {language === 'ar' ? 'مرحباً! أنا مساعدك الذكي' : 'Hi! I\'m your AI Assistant'}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    {language === 'ar' 
                      ? 'اسألني أي شيء عن الأمن السيبراني والحلول التقنية' 
                      : 'Ask me anything about cybersecurity and technical solutions'}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {language === 'ar' ? 'أسئلة سريعة' : 'Quick Questions'}
                    </p>
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInputText(question)}
                        className="block w-full text-left rtl:text-right p-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg text-gray-700 dark:text-gray-300 text-sm transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                        message.sender === 'user'
                          ? 'bg-knoux-600 text-white rounded-br-none'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-bl-none'
                      }`}>
                        <p>{message.text}</p>
                        <p className="text-[10px] opacity-70 mt-1 text-right">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none">
                        <div className="flex space-x-1 rtl:space-x-reverse">
                          <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-knoux-900 rounded-b-2xl">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleVoiceInput}
                  disabled={isListening}
                  className={`p-2.5 rounded-full transition-all ${
                    isListening 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-knoux-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
                >
                  {isListening ? <Volume2 className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-black/40 border border-transparent focus:border-knoux-600 rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>
                
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="p-2.5 bg-knoux-600 hover:bg-knoux-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-5 h-5 rtl:mr-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};