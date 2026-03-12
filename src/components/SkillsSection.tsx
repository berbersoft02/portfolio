'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Layout, Terminal, Palette, Video } from 'lucide-react';

const skillGroups = [
  {
    title: "Embedded systems & hardware",
    icon: <Cpu className="text-blue-400" size={24} />,
    description: "Arduino, ESP32, VHDL, microcontrollers, sensors (DHT22, speed sensors), PWM motor control, feedback loops."
  },
  {
    title: "AI & data / signal processing",
    icon: <Brain className="text-cyan-400" size={24} />,
    description: "Machine learning and deep learning, gesture recognition, data collection, labeling and evaluation, basic image and signal processing."
  },
  {
    title: "Web & mobile development",
    icon: <Layout className="text-blue-500" size={24} />,
    description: "Next.js, React, TypeScript, Tailwind CSS, CSS3, HTML5, Java, Android (Kotlin), Cloudinary, Vercel."
  },
  {
    title: "Programming & tools",
    icon: <Terminal className="text-cyan-500" size={24} />,
    description: "C++, Python, Java, MATLAB, Git, Simulink, Proteus, Visual Studio, Node.js."
  },
  {
    title: "Multimedia & Creative",
    icon: <Palette className="text-blue-400" size={24} />,
    description: "Adobe Photoshop, After Effects, Premiere Pro. Professional image editing, motion graphics, and video production."
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Skills & Expertise</h2>
          <p className="text-slate-500 text-sm mt-4 font-medium tracking-wide uppercase italic">Master’s-level projects in embedded systems and AI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{group.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm font-light relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
