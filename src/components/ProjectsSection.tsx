'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      ...t('projects.items')[0],
      tech: ["Android", "Kotlin", "Java", "Deep Learning", "Computer Vision"],
      index: "01"
    },
    {
      ...t('projects.items')[1],
      tech: ["ESP32", "DHT22", "IoT", "HTML", "CSS"],
      index: "02"
    },
    {
      ...t('projects.items')[2],
      tech: ["Arduino", "PWM", "Control", "Sensors", "C++"],
      index: "03"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">{t('projects.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">{t('projects.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.index} {...project} />
          ))}
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full translate-x-1/2 -z-10" />
    </section>
  );
};

export default ProjectsSection;
