'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-30 opacity-40"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(59, 130, 246, 0.15), transparent 80%)`,
      } as any}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          // Use CSS variables for the radial gradient center
          // @ts-ignore
          '--x': smoothX.get() + 'px',
          // @ts-ignore
          '--y': smoothY.get() + 'px',
        } as any}
      />
    </motion.div>
  );
};

export default MouseGlow;
