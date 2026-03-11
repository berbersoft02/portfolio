'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string[];
  index: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, tech, index }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="h-full relative group"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur group-hover:duration-200" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative h-full bg-slate-900 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 transition-all duration-300 overflow-hidden flex flex-col justify-between z-10"
      >
        {/* Index Number */}
        <div className="absolute top-6 right-8">
          <span className="text-5xl font-black text-slate-800/50 group-hover:text-cyan-500/10 transition-colors duration-300 select-none">
            {index}
          </span>
        </div>

        <div className="relative z-10">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
            {summary}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-950 text-slate-300 rounded-md border border-slate-800 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-300 shadow-inner"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent blur-2xl group-hover:from-cyan-500/20 transition-all duration-500 rounded-full translate-x-8 translate-y-8" />
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
