'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Real-time Sign Language Translator",
    tech: ["Android", "Kotlin", "Java", "Deep Learning", "Computer Vision"],
    summary: "Android app that captures sign language gestures through the camera and translates them into text and speech using a custom deep learning model trained on a dataset I collected and labeled myself.",
    impact: "Trained custom model on 2k+ labeled gesture images",
    index: "01"
  },
  {
    title: "IoT Weather Station (ESP32)",
    tech: ["ESP32", "DHT22", "IoT", "HTML", "CSS"],
    summary: "Autonomous weather station using ESP32 and DHT22, serving a responsive web interface directly from the microcontroller for real-time environmental data visualization over Wi‑Fi.",
    impact: "Full-stack IoT solution with live web dashboard",
    index: "02"
  },
  {
    title: "DC Motor Speed Control with Feedback",
    tech: ["Arduino", "PWM", "Control", "Sensors", "C++"],
    summary: "Closed-loop DC motor speed control system using PWM and a speed sensor on Arduino, maintaining constant speed under varying loads and illustrating the full chain from sensors to control to actuator.",
    impact: "Achieved ±5% speed accuracy under varying loads",
    index: "03"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Featured Projects</h2>
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
