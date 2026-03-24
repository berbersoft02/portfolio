"use client"
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Server, Wind, 
  Layout, Cpu, Terminal, Coffee, GitBranch, 
  Brain, Image, Video, Microchip, Layers
} from 'lucide-react';

// --- Type Definitions ---
type IconType = 
  | 'html' | 'css' | 'javascript' | 'react' | 'node' | 'tailwind' 
  | 'nextjs' | 'typescript' | 'cpp' | 'python' | 'java' | 'git' 
  | 'arduino' | 'ai' | 'photoshop' | 'aftereffects' | 'esp32';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number; // Initial position offset (0 to 1)
  reverse?: boolean;
}

// --- Custom SVGs ---
const BrandIcons: Record<string, React.FC<any>> = {
  html: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
    </svg>
  ),
  css: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
    </svg>
  ),
  javascript: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 0h24v24H0z" fill="#F7DF1E"/><path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
    </svg>
  ),
};

const iconComponents: Record<IconType, { component: React.ElementType; color: string }> = {
  html: { component: BrandIcons.html, color: '#E34F26' },
  css: { component: BrandIcons.css, color: '#1572B6' },
  javascript: { component: BrandIcons.javascript, color: '#F7DF1E' },
  react: { component: Atom, color: '#61DAFB' },
  node: { component: Server, color: '#339933' },
  tailwind: { component: Wind, color: '#06B6D4' },
  nextjs: { component: Layout, color: '#FFFFFF' },
  typescript: { component: Layers, color: '#3178C6' },
  cpp: { component: Terminal, color: '#00599C' },
  python: { component: Terminal, color: '#3776AB' },
  java: { component: Coffee, color: '#007396' },
  git: { component: GitBranch, color: '#F05032' },
  arduino: { component: Microchip, color: '#00979D' },
  ai: { component: Brain, color: '#FF00FF' },
  photoshop: { component: Image, color: '#31A8FF' },
  aftereffects: { component: Video, color: '#CF96FD' },
  esp32: { component: Cpu, color: '#E7352C' },
};

const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { id: 'react', orbitRadius: 80, size: 40, speed: 20, iconType: 'react', phaseShift: 0 },
  { id: 'nextjs', orbitRadius: 80, size: 40, speed: 20, iconType: 'nextjs', phaseShift: 0.25 },
  { id: 'tailwind', orbitRadius: 80, size: 40, speed: 20, iconType: 'tailwind', phaseShift: 0.5 },
  { id: 'javascript', orbitRadius: 80, size: 40, speed: 20, iconType: 'javascript', phaseShift: 0.75 },
  
  // Middle Orbit - Reverse
  { id: 'node', orbitRadius: 160, size: 40, speed: 30, iconType: 'node', phaseShift: 0, reverse: true },
  { id: 'python', orbitRadius: 160, size: 40, speed: 30, iconType: 'python', phaseShift: 0.25, reverse: true },
  { id: 'cpp', orbitRadius: 160, size: 40, speed: 30, iconType: 'cpp', phaseShift: 0.5, reverse: true },
  { id: 'git', orbitRadius: 160, size: 40, speed: 30, iconType: 'git', phaseShift: 0.75, reverse: true },

  // Outer Orbit
  { id: 'arduino', orbitRadius: 240, size: 40, speed: 40, iconType: 'arduino', phaseShift: 0 },
  { id: 'ai', orbitRadius: 240, size: 40, speed: 40, iconType: 'ai', phaseShift: 0.2 },
  { id: 'photoshop', orbitRadius: 240, size: 40, speed: 40, iconType: 'photoshop', phaseShift: 0.4 },
  { id: 'aftereffects', orbitRadius: 240, size: 40, speed: 40, iconType: 'aftereffects', phaseShift: 0.6 },
  { id: 'esp32', orbitRadius: 240, size: 40, speed: 40, iconType: 'esp32', phaseShift: 0.8 },
];

const OrbitingCircle = ({ 
  radius, 
  duration, 
  delay = 0, 
  reverse = false, 
  children 
}: { 
  radius: number; 
  duration: number; 
  delay?: number; 
  reverse?: boolean; 
  children: React.ReactNode 
}) => {
  return (
    <>
      <div 
        className="absolute rounded-full border border-white/10 pointer-events-none"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      <motion.div
        initial={{ rotate: reverse ? 360 : 0 }}
        animate={{ rotate: reverse ? 0 : 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: -(delay * duration)
        }}
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        <div 
          className="absolute pointer-events-auto"
          style={{ transform: `translateX(${radius}px)` }}
        >
          <motion.div
            initial={{ rotate: reverse ? -360 : 0 }}
            animate={{ rotate: reverse ? 0 : -360 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay: -(delay * duration)
            }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const SkillItem = ({ type }: { type: IconType }) => {
  const Icon = iconComponents[type].component;
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 shadow-lg hover:border-blue-500/50 transition-colors">
      <Icon size={20} color={iconComponents[type].color} className="drop-shadow-sm" />
    </div>
  );
};

export default function OrbitingSkills() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-75 md:scale-100 lg:scale-110">
      <div className="relative z-50 w-20 h-20 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20">
        <Layout size={32} className="text-blue-400" />
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse" />
      </div>

      {skillsConfig.map((skill) => (
        <OrbitingCircle 
          key={skill.id} 
          radius={skill.orbitRadius} 
          duration={skill.speed} 
          delay={skill.phaseShift}
          reverse={skill.reverse}
        >
          <SkillItem type={skill.iconType} />
        </OrbitingCircle>
      ))}
    </div>
  );
}
