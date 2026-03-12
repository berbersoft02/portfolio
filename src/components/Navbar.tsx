'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="group flex items-center space-x-3 cursor-none">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <div className="relative bg-slate-950 w-full h-full rounded-xl flex items-center justify-center border border-white/10">
              <span className="text-white text-base font-black tracking-tighter">SA</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-lg group-hover:text-cyan-400 transition-colors">Said Ahrikenchikh</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-none">Engineer</span>
          </div>
        </a>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-none"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-none"
            >
              {t('nav.contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={onOpenContact}
              className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all cursor-none"
            >
              {t('nav.hire')}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
