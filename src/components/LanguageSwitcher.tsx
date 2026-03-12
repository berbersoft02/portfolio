'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-lg">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
            : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
          language === 'fr'
            ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
            : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
