"use client"
import React, { useEffect, useState, memo } from 'react';
import { 
  FileCode, Code2, Atom, Server, Wind, 
  Layout, Cpu, Terminal, Coffee, GitBranch, 
  Brain, Image, Video, Microchip, Layers
} from 'lucide-react';

// --- Type Definitions ---
type IconType = 
  | 'html' | 'css' | 'javascript' | 'react' | 'node' | 'tailwind' 
  | 'nextjs' | 'typescript' | 'cpp' | 'python' | 'java' | 'git' 
  | 'arduino' | 'ai' | 'photoshop' | 'aftereffects' | 'esp32';

type GlowColor = 'cyan' | 'purple' | 'blue';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Icons Mapping ---
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

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const Icon = iconComponents[type]?.component;
  const color = iconComponents[type]?.color;
  return Icon ? <Icon size="100%" color={color} /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit - Core Web (Radius: 100)
  { id: 'react', orbitRadius: 100, size: 40, speed: 0.8, iconType: 'react', phaseShift: 0, glowColor: 'cyan', label: 'React' },
  { id: 'nextjs', orbitRadius: 100, size: 40, speed: 0.8, iconType: 'nextjs', phaseShift: (2 * Math.PI) / 4, glowColor: 'cyan', label: 'Next.js' },
  { id: 'tailwind', orbitRadius: 100, size: 35, speed: 0.8, iconType: 'tailwind', phaseShift: (4 * Math.PI) / 4, glowColor: 'cyan', label: 'Tailwind' },
  { id: 'typescript', orbitRadius: 100, size: 35, speed: 0.8, iconType: 'typescript', phaseShift: (6 * Math.PI) / 4, glowColor: 'cyan', label: 'TypeScript' },
  
  // Middle Orbit - Tools & Languages (Radius: 180)
  { id: 'node', orbitRadius: 180, size: 45, speed: -0.5, iconType: 'node', phaseShift: 0, glowColor: 'blue', label: 'Node.js' },
  { id: 'python', orbitRadius: 180, size: 40, speed: -0.5, iconType: 'python', phaseShift: (2 * Math.PI) / 5, glowColor: 'blue', label: 'Python' },
  { id: 'cpp', orbitRadius: 180, size: 40, speed: -0.5, iconType: 'cpp', phaseShift: (4 * Math.PI) / 5, glowColor: 'blue', label: 'C++' },
  { id: 'java', orbitRadius: 180, size: 40, speed: -0.5, iconType: 'java', phaseShift: (6 * Math.PI) / 5, glowColor: 'blue', label: 'Java' },
  { id: 'git', orbitRadius: 180, size: 40, speed: -0.5, iconType: 'git', phaseShift: (8 * Math.PI) / 5, glowColor: 'blue', label: 'Git' },

  // Outer Orbit - Specialized (Radius: 260)
  { id: 'arduino', orbitRadius: 260, size: 50, speed: 0.3, iconType: 'arduino', phaseShift: 0, glowColor: 'purple', label: 'Arduino' },
  { id: 'ai', orbitRadius: 260, size: 50, speed: 0.3, iconType: 'ai', phaseShift: (2 * Math.PI) / 5, glowColor: 'purple', label: 'AI/ML' },
  { id: 'photoshop', orbitRadius: 260, size: 45, speed: 0.3, iconType: 'photoshop', phaseShift: (4 * Math.PI) / 5, glowColor: 'purple', label: 'Photoshop' },
  { id: 'aftereffects', orbitRadius: 260, size: 45, speed: 0.3, iconType: 'aftereffects', phaseShift: (6 * Math.PI) / 5, glowColor: 'purple', label: 'After Effects' },
  { id: 'esp32', orbitRadius: 260, size: 45, speed: 0.3, iconType: 'esp32', phaseShift: (8 * Math.PI) / 5, glowColor: 'purple', label: 'ESP32' },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-slate-900/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border border-slate-700
          ${isHovered ? 'scale-125 shadow-2xl border-cyan-500/50' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-white whitespace-nowrap pointer-events-none z-50">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.1)',
      border: 'rgba(6, 182, 212, 0.2)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.1)',
      border: 'rgba(147, 51, 234, 0.2)'
    },
    blue: {
        primary: 'rgba(59, 130, 246, 0.4)',
        secondary: 'rgba(59, 130, 246, 0.1)',
        border: 'rgba(59, 130, 246, 0.2)'
      }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 75%, ${colors.secondary} 90%, ${colors.primary} 100%)`,
          boxShadow: `inset 0 0 30px ${colors.secondary}`,
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    console.log("OrbitingSkills mounted and running");
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'blue', delay: 1 },
    { radius: 260, glowColor: 'purple', delay: 2 }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center border border-dashed border-white/5 pointer-events-none">
      <div 
        className="relative w-[800px] h-[800px] flex items-center justify-center scale-[0.7] sm:scale-80 md:scale-95 lg:scale-105 pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central Core - High visibility for debugging */}
        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center z-50 relative border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div className="relative z-10 text-cyan-400">
            <Layout size={32} strokeWidth={2.5} />
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </div>
  );
}
