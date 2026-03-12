'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load preference from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang === 'en' || savedLang === 'fr') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const translations: any = {
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        hire: 'Hire Me'
      },
      hero: {
        available: 'Available for work',
        roles: [
          "Embedded Systems Engineer",
          "AI & Deep Learning Specialist",
          "App & Web Developer",
          "Professional Creative Editor"
        ],
        tagline: "Bridging hardware and software through real-time vision, IoT systems, and intelligent control—currently pursuing advanced Master’s programs in France.",
        contact: 'Contact me',
        cvFr: 'CV (FR)',
        cvEn: 'CV (EN)',
        cardTitle: 'Embedded Systems · AI',
        projectFocus: 'Project Focus',
        visionIot: 'Real-time Vision & IoT',
        maker: 'I make a lot of things'
      },
      about: {
        badge: 'Journey',
        title: 'About Me',
        bio: "I'm an embedded systems engineer from Algeria with a Master’s degree in Integrated Electronic Systems. I build apps and websites, and enjoy building systems that combine microcontrollers, sensors, control and AI and I complement my technical expertise with creative skills in image and video editing to deliver complete, polished solutions.",
        academic: "I’m currently applying to M2 Embedded Systems & AI programs in France, and I’m open to collaborations on ambitious, hands-on projects that bridge the gap between academia and industry.",
        stats: {
          edu: 'Education',
          focus: 'Focus',
          loc: 'Location',
          master: "Master's",
          real: 'Real-world',
          dz: 'Algeria'
        }
      },
      projects: {
        badge: 'Portfolio',
        title: 'Featured Projects',
        items: [
          {
            title: "Real-time Sign Language Translator",
            summary: "Android app that captures sign language gestures through the camera and translates them into text and speech using a custom deep learning model trained on a dataset I collected and labeled myself.",
            impact: "Trained custom model on 2k+ labeled gesture images"
          },
          {
            title: "IoT Weather Station (ESP32)",
            summary: "Autonomous weather station using ESP32 and DHT22, serving a responsive web interface directly from the microcontroller for real-time environmental data visualization over Wi‑Fi.",
            impact: "Full-stack IoT solution with live web dashboard"
          },
          {
            title: "DC Motor Speed Control with Feedback",
            summary: "Closed-loop DC motor speed control system using PWM and a speed sensor on Arduino, maintaining constant speed under varying loads and illustrating the full chain from sensors to control to actuator.",
            impact: "Achieved ±5% speed accuracy under varying loads"
          }
        ]
      },
      skills: {
        badge: 'Expertise',
        title: 'Skills & Expertise',
        alignment: 'Master’s-level projects in embedded systems and AI',
        groups: {
          embedded: "Embedded systems & hardware",
          ai: "AI & data / signal processing",
          web: "Web & mobile development",
          tools: "Programming & tools",
          creative: "Multimedia & Creative"
        }
      },
      contact: {
        badge: 'Reach Out',
        title: 'Get In Touch',
        desc: "Open to Master internships, research collaborations and freelance projects around embedded systems, AI and control.",
        email: 'Email',
        loc: 'Location',
        insta: 'Instagram',
        linked: 'LinkedIn',
        github: 'GitHub',
        soon: 'Coming Soon',
        copied: 'Copied!',
        creative: 'Creative Work',
        pro: 'Professional Profile'
      },
      footer: '© 2026 Said Ahrikenchikh. All rights reserved.'
    },
    fr: {
      nav: {
        about: 'À propos',
        projects: 'Projets',
        skills: 'Compétences',
        contact: 'Contact',
        hire: 'Me recruter'
      },
      hero: {
        available: 'Disponible pour travailler',
        roles: [
          "Ingénieur Systèmes Embarqués",
          "Spécialiste IA & Deep Learning",
          "Développeur Web & Mobile",
          "Monteur & Créatif Multimédia"
        ],
        tagline: "Faire le pont entre le matériel et le logiciel via la vision en temps réel, l'IoT et le contrôle intelligent—actuellement en recherche d'un Master 2 en France.",
        contact: 'Me contacter',
        cvFr: 'CV (FR)',
        cvEn: 'CV (EN)',
        cardTitle: 'Systèmes Embarqués · IA',
        projectFocus: 'Focus Projets',
        visionIot: 'Vision & IoT en temps réel',
        maker: 'Je crée beaucoup de choses'
      },
      about: {
        badge: 'Parcours',
        title: 'À Propos de Moi',
        bio: "Je suis un ingénieur en systèmes embarqués originaire d'Algérie, titulaire d'un Master en Systèmes Électroniques Intégrés. Je développe des applications et des sites web, et j'aime concevoir des systèmes combinant microcontrôleurs, capteurs et IA. Je complète mon expertise technique par des compétences créatives en édition image et vidéo pour livrer des solutions complètes et soignées.",
        academic: "Je postule actuellement à des programmes de Master 2 en Systèmes Embarqués & IA en France, et je suis ouvert à des collaborations sur des projets ambitieux faisant le lien entre le monde académique et l'industrie.",
        stats: {
          edu: 'Formation',
          focus: 'Approche',
          loc: 'Localisation',
          master: 'Master 2',
          real: 'Pratique',
          dz: 'Algérie'
        }
      },
      projects: {
        badge: 'Portfolio',
        title: 'Projets Phares',
        items: [
          {
            title: "Traducteur de Langue des Signes",
            summary: "Application Android capturant les gestes via la caméra pour les traduire en texte et voix grâce à un modèle de deep learning personnalisé entraîné sur un dataset que j'ai collecté moi-même.",
            impact: "Modèle entraîné sur +2000 images de gestes étiquetées"
          },
          {
            title: "Station Météo IoT (ESP32)",
            summary: "Station météo autonome utilisant ESP32 et DHT22, servant une interface web responsive directement depuis le microcontrôleur pour visualiser les données en temps réel via Wi-Fi.",
            impact: "Solution IoT full-stack avec dashboard web live"
          },
          {
            title: "Contrôle de Vitesse Moteur DC",
            summary: "Système de contrôle en boucle fermée utilisant le PWM et un capteur de vitesse sur Arduino, maintenant une vitesse constante sous charges variables.",
            impact: "Précision de vitesse de ±5% sous charge variable"
          }
        ]
      },
      skills: {
        badge: 'Expertise',
        title: 'Compétences & Outils',
        alignment: 'Projets de niveau Master en systèmes embarqués et IA',
        groups: {
          embedded: "Systèmes embarqués & hardware",
          ai: "IA & traitement du signal",
          web: "Développement Web & mobile",
          tools: "Programmation & outils",
          creative: "Multimédia & Créatif"
        }
      },
      contact: {
        badge: 'Contact',
        title: 'Me Contacter',
        desc: "Ouvert aux stages de Master, collaborations de recherche et projets freelance en systèmes embarqués, IA et contrôle.",
        email: 'Email',
        loc: 'Localisation',
        insta: 'Instagram',
        linked: 'LinkedIn',
        github: 'GitHub',
        soon: 'Bientôt disponible',
        copied: 'Copié !',
        creative: 'Travail Créatif',
        pro: 'Profil Professionnel'
      },
      footer: '© 2026 Said Ahrikenchikh. Tous droits réservés.'
    }
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result) result = result[key];
    }
    return result || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
