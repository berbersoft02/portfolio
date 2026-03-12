'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Instagram, X, ExternalLink, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('berbersoft@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/said-ahrikenchikh-366a03259/',
      color: 'hover:text-blue-400',
      label: 'Professional Profile'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: '#',
      color: 'hover:text-white',
      label: 'Coming Soon'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/said_ahriken/',
      color: 'hover:text-pink-500',
      label: 'Creative Work'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100] cursor-none"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10 p-2 hover:bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
                  <p className="text-slate-400 font-light">Open for collaborations and new opportunities.</p>
                </div>

                <div className="space-y-6">
                  {/* Email Section */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur" />
                    <div className="relative flex items-center justify-between p-5 bg-slate-950/50 border border-white/5 rounded-2xl">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                          <p className="text-white font-medium">berbersoft@gmail.com</p>
                        </div>
                      </div>
                      <button 
                        onClick={copyEmail}
                        className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-5 bg-slate-950/30 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/5 transition-all duration-300"
                      >
                        <div className={`mb-3 text-slate-400 transition-colors duration-300 ${link.color}`}>
                          {link.icon}
                        </div>
                        <span className="text-white font-bold text-sm">{link.name}</span>
                        <span className="text-[10px] text-slate-500 mt-1">{link.label}</span>
                        <ExternalLink size={12} className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity" />
                      </a>
                    ))}
                  </div>

                  {/* Location Info */}
                  <div className="flex items-center space-x-3 px-2 pt-4 text-slate-500">
                    <MapPin size={16} />
                    <span className="text-xs font-medium uppercase tracking-widest">Tizi Ouzou, Algeria</span>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
