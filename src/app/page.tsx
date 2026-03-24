'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import MouseGlow from '@/components/MouseGlow';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import OrbitingSkills from '@/components/ui/orbiting-skills';
import ScrollProgress from '@/components/ScrollProgress';
import ContactModal from '@/components/ContactModal';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <div className="bg-noise"></div>
      <ScrollProgress />
      <SmoothScroll />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Background Layer with Parallax Orbs and Orbiting Skills */}
      <div className="bg-gradient-mesh">
        <ParticleBackground />
        
        {/* Orbiting Skills Background Animation */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] opacity-30 pointer-events-none z-0">
          <OrbitingSkills />
        </div>

        <motion.div 
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="orb-1 bg-glow-orb" 
        />
        <motion.div 
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="orb-2 bg-glow-orb" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="orb-3 bg-glow-orb" 
        />
      </div>

      {/* Global Interactive Elements */}
      <CustomCursor />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <MouseGlow />

      {/* Main Content Sections */}
      <div className="relative z-0">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        
        {/* Simple Footer */}
        <footer className="py-12 px-6 text-center border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm">
          <p className="text-slate-600 text-sm tracking-widest font-bold uppercase">
            {t('footer')}
          </p>
        </footer>
      </div>
    </main>
  );
}
