'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Quote Mark */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-6 text-9xl text-blue-500/10 font-serif select-none pointer-events-none"
          >“</motion.div>
          
          <div className="relative p-10 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -ml-32 -mb-32 pointer-events-none" />
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light italic relative z-10">
              “I'm an embedded systems engineer from Algeria with a Master’s degree in Integrated Electronic Systems. I build apps and websites, and enjoy building systems that combine microcontrollers, sensors, control and AI and I complement my technical expertise with creative skills in image and video editing to deliver complete, polished solutions.”
            </p>
            
            <p className="mt-8 text-slate-400 text-lg leading-relaxed relative z-10 font-light">
              I’m currently applying to Master’s programs in embedded systems and AI, and I’m open to collaborations on ambitious, hands-on projects.
            </p>

            <div className="mt-12 flex justify-center flex-wrap gap-8 md:gap-16 relative z-10">
               <div className="text-center group cursor-default">
                  <p className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Master's</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 group-hover:text-cyan-600 transition-colors">Education</p>
               </div>
               <div className="text-center group cursor-default">
                  <p className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Real-world</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 group-hover:text-blue-600 transition-colors">Focus</p>
               </div>
               <div className="text-center group cursor-default">
                  <p className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Algeria</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-2 group-hover:text-cyan-600 transition-colors">Location</p>
               </div>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-6 text-9xl text-blue-500/10 font-serif select-none rotate-180 pointer-events-none"
          >“</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
