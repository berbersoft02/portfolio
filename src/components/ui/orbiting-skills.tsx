"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode, Code2, Atom, Server, Wind, 
  Layout, Cpu, Terminal, Coffee, GitBranch, 
  Brain, Image, Video, Microchip, Layers
} from 'lucide-react';

type IconType = 
  | 'html' | 'css' | 'javascript' | 'react' | 'node' | 'tailwind' 
  | 'nextjs' | 'typescript' | 'cpp' | 'python' | 'java' | 'git' 
  | 'arduino' | 'ai' | 'photoshop' | 'aftereffects' | 'esp32';

const iconComponents: Record<IconType, { component: React.ElementType; color: string }> = {
  html: { component: FileCode, color: '#E34F26' },
  css: { component: Layers, color: '#1572B6' },
  javascript: { component: Code2, color: '#F7DF1E' },
  react: { component: Atom, color: '#61DAFB' },
  node: { component: Server, color: '#339933' },
  tailwind: { component: Wind, color: '#06B6D4' },
  nextjs: { component: Layout, color: '#FFFFFF' },
  typescript: { component: Code2, color: '#3178C6' },
  cpp: { component: Cpu, color: '#00599C' },
  python: { component: Terminal, color: '#3776AB' },
  java: { component: Coffee, color: '#007396' },
  git: { component: GitBranch, color: '#F05032' },
  arduino: { component: Microchip, color: '#00979D' },
  ai: { component: Brain, color: '#FF00FF' },
  photoshop: { component: Image, color: '#31A8FF' },
  aftereffects: { component: Video, color: '#CF96FD' },
  esp32: { component: Cpu, color: '#E7352C' },
};

const SkillIcon = ({ type, radius, speed, reverse = false, index, total }: { type: IconType; radius: number; speed: number; reverse?: boolean; index: number; total: number }) => {
  const Icon = iconComponents[type].component;
  const initialRotation = (index / total) * 360;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      initial={{ rotate: initialRotation }}
      animate={{ rotate: initialRotation + (reverse ? -360 : 360) }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-slate-800 border-2 border-slate-700 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] p-2"
        style={{ width: 44, height: 44 }}
      >
        <motion.div
           animate={{ rotate: initialRotation + (reverse ? -360 : 360) }}
           transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
           style={{ rotate: -(initialRotation + (reverse ? -360 : 360)) }}
        >
          <Icon size={24} color={iconComponents[type].color} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function OrbitingSkills() {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 opacity-100">
      {/* Central Core */}
      <div className="relative z-50 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.4)] border-4 border-white/20">
        <Layout size={40} className="text-white drop-shadow-lg" />
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl animate-pulse opacity-40" />
      </div>

      {/* Orbit Rings */}
      <div className="absolute w-[160px] h-[160px] border border-white/5 rounded-full" />
      <div className="absolute w-[320px] h-[320px] border border-white/5 rounded-full" />
      <div className="absolute w-[480px] h-[480px] border border-white/5 rounded-full" />

      {/* Skills Orbits */}
      <SkillIcon type="react" radius={80} speed={20} index={0} total={4} />
      <SkillIcon type="nextjs" radius={80} speed={20} index={1} total={4} />
      <SkillIcon type="tailwind" radius={80} speed={20} index={2} total={4} />
      <SkillIcon type="typescript" radius={80} speed={20} index={3} total={4} />

      <SkillIcon type="node" radius={160} speed={30} index={0} total={5} reverse />
      <SkillIcon type="python" radius={160} speed={30} index={1} total={5} reverse />
      <SkillIcon type="cpp" radius={160} speed={30} index={2} total={5} reverse />
      <SkillIcon type="java" radius={160} speed={30} index={3} total={5} reverse />
      <SkillIcon type="git" radius={160} speed={30} index={4} total={5} reverse />

      <SkillIcon type="arduino" radius={240} speed={50} index={0} total={5} />
      <SkillIcon type="ai" radius={240} speed={50} index={1} total={5} />
      <SkillIcon type="photoshop" radius={240} speed={50} index={2} total={5} />
      <SkillIcon type="aftereffects" radius={240} speed={50} index={3} total={5} />
      <SkillIcon type="esp32" radius={240} speed={50} index={4} total={5} />
    </div>
  );
}
