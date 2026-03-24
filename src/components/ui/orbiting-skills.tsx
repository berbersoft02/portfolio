"use client"
import React, { memo } from 'react';
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

const iconComponents: Record<IconType, { component: React.ElementType; color: string; label: string }> = {
  html: { component: FileCode, color: '#E34F26', label: 'HTML5' },
  css: { component: Layers, color: '#1572B6', label: 'CSS3' },
  javascript: { component: Code2, color: '#F7DF1E', label: 'JavaScript' },
  react: { component: Atom, color: '#61DAFB', label: 'React' },
  node: { component: Server, color: '#339933', label: 'Node.js' },
  tailwind: { component: Wind, color: '#06B6D4', label: 'Tailwind' },
  nextjs: { component: Layout, color: '#FFFFFF', label: 'Next.js' },
  typescript: { component: Code2, color: '#3178C6', label: 'TypeScript' },
  cpp: { component: Cpu, color: '#00599C', label: 'C++' },
  python: { component: Terminal, color: '#3776AB', label: 'Python' },
  java: { component: Coffee, color: '#007396', label: 'Java' },
  git: { component: GitBranch, color: '#F05032', label: 'Git' },
  arduino: { component: Microchip, color: '#00979D', label: 'Arduino' },
  ai: { component: Brain, color: '#FF00FF', label: 'AI/ML' },
  photoshop: { component: Image, color: '#31A8FF', label: 'Photoshop' },
  aftereffects: { component: Video, color: '#CF96FD', label: 'After Effects' },
  esp32: { component: Cpu, color: '#E7352C', label: 'ESP32' },
};

const Orbit = ({ radius, speed, icons, reverse = false }: { radius: number; speed: number; icons: IconType[]; reverse?: boolean }) => {
  return (
    <motion.div
      className="absolute border border-white/10 rounded-full"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {icons.map((type, i) => {
        const angle = (i / icons.length) * (Math.PI * 2);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = iconComponents[type].component;

        return (
          <div
            key={type}
            className="absolute flex items-center justify-center bg-slate-900 border border-slate-700 rounded-full shadow-lg p-2"
            style={{
              width: 40,
              height: 40,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Icon size={20} color={iconComponents[type].color} />
          </div>
        );
      })}
    </motion.div>
  );
};

export default function OrbitingSkills() {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-50 sm:scale-75 md:scale-100">
      {/* Central Core */}
      <div className="relative z-50 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)] border-2 border-white/20">
        <Layout size={32} className="text-white" />
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl animate-pulse opacity-50" />
      </div>

      {/* Inner Orbit */}
      <Orbit radius={80} speed={20} icons={['react', 'nextjs', 'tailwind', 'typescript']} />
      
      {/* Middle Orbit */}
      <Orbit radius={160} speed={35} icons={['node', 'python', 'cpp', 'java', 'git']} reverse />
      
      {/* Outer Orbit */}
      <Orbit radius={240} speed={50} icons={['arduino', 'ai', 'photoshop', 'aftereffects', 'esp32']} />
    </div>
  );
}
