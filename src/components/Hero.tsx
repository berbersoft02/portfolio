'use client';

import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { MapPin, Mail, Download, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useLanguage } from '@/context/LanguageContext';
import OrbitingSkills from './ui/orbiting-skills';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Background Animation - Guaranteed Positioning and Visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none z-0">
        <OrbitingSkills />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full w-fit backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs font-bold tracking-[0.2em] uppercase">{t('hero.available')}</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] tracking-tighter">
              Said <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Ahrikenchikh
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-cyan-100/80 tracking-wide h-[40px]">
              <TypewriterText key={language} texts={t('hero.roles')} />
            </h2>
          </div>

          <p className="max-w-xl text-slate-400 text-lg leading-relaxed font-light border-l-2 border-blue-500/30 pl-4">
            {t('hero.tagline')}
          </p>

          <div className="flex items-center space-x-2 text-slate-400">
            <MapPin size={18} className="text-cyan-400" />
            <span className="text-sm font-medium tracking-wide">Tizi Ouzou, Algeria</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 no-print">
            <MagneticButton>
              <button
                onClick={onOpenContact}
                className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wider uppercase text-sm rounded-xl transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] flex items-center space-x-3 overflow-hidden cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Mail size={18} />
                <span>{t('hero.contact')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            
            <div className="flex gap-2">
              <MagneticButton>
                <a
                  href="/cvFR (3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold tracking-wider uppercase text-xs rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all flex items-center space-x-2 backdrop-blur-md cursor-none"
                >
                  <Download size={14} />
                  <span>{t('hero.cvFr')}</span>
                </a>
              </MagneticButton>
              
              <MagneticButton>
                <a
                  href="/cv (Anglais) (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold tracking-wider uppercase text-xs rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all flex items-center space-x-2 backdrop-blur-md cursor-none"
                >
                  <Download size={14} />
                  <span>{t('hero.cvEn')}</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Right Side: 3D Tilt Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative perspective-1000 flex justify-center lg:justify-end"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            gyroscope={true}
            className="w-full max-w-md cursor-none"
          >
            <div className="relative group">
              {/* Card Background Blur */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 group-hover:bg-blue-500/30 transition-colors duration-500 rounded-3xl" />
              
              {/* The Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t('hero.cardTitle')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['ESP32', 'Arduino', 'Python', 'Next.js', 'Java', 'MATLAB', 'Deep Learning', 'Photoshop', 'After Effects', 'Proteus', 'Apps & Websites', 'Others...'].map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800 text-cyan-400 rounded-md border border-slate-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('hero.projectFocus')}</p>
                      <p className="text-slate-300 text-sm font-medium">{t('hero.visionIot')}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64 -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -ml-64 -mb-64 -z-10" />
    </section>
  );
};

export default Hero;
