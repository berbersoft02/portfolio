'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs">Reach Out</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Get In Touch</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Open to Master internships, research collaborations and freelance projects around embedded systems, AI and control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email Card */}
          <motion.a
            href="mailto:berbersoft@gmail.com"
            whileHover={{ y: -5 }}
            className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-4 bg-slate-950 rounded-2xl text-blue-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
              <Mail size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
              <p className="text-white mt-2 group-hover:text-blue-400 transition-colors font-medium">berbersoft@gmail.com</p>
            </div>
            <ExternalLink size={14} className="text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4" />
          </motion.a>

          {/* Location Card */}
          <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-4 group overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="p-4 bg-slate-950 rounded-2xl text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 relative z-10">
              <MapPin size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</p>
              <p className="text-white mt-2 font-medium">Tizi Ouzou, Algeria</p>
            </div>
          </div>

          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/said_ahriken/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-pink-500/50 transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-4 bg-slate-950 rounded-2xl text-slate-400 group-hover:text-pink-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 relative z-10">
              <Instagram size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Instagram</p>
              <p className="text-slate-400 mt-2 font-medium group-hover:text-white transition-colors">@said_ahriken</p>
            </div>
            <ExternalLink size={14} className="text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4" />
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/said-ahrikenchikh-366a03259/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-400/50 transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-4 bg-slate-950 rounded-2xl text-slate-400 group-hover:text-blue-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
              <Linkedin size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">LinkedIn</p>
              <p className="text-slate-400 mt-2 font-medium group-hover:text-white transition-colors">Said Ahrikenchikh</p>
            </div>
            <ExternalLink size={14} className="text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
