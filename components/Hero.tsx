'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const SLIDES = [
  {
    image: '/imgi_45_beautiful-sunflower-field-sunlight-blue-sky-daytime-scaled.jpg',
    title: 'GIRASOL Y SORGO',
    subtitle: 'Mejoramiento genético y especialidades de exportación.',
    tag: 'LÍDERES EN ARGENTINA',
  },
  {
    image: '/imgi_47_z-semillas_slide-1.jpg',
    title: '100% ARGENTINA',
    subtitle: 'Más de 18 años impulsando el campo nacional.',
    tag: 'NUESTRA TRAYECTORIA',
  },
  {
    image: '/imgi_48_z-semillas_slide-2.jpg',
    title: 'I+D PROPIO',
    subtitle: 'Testeo y desarrollo con rigor científico en cada híbrido.',
    tag: 'TECNOLOGÍA ZETA',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-green-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom animation */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].image}
              alt="Zeta Semillas Field"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Advanced Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-brand-green/80 via-brand-green/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-green/90 via-transparent to-brand-green/20" />
          
          {/* Decorative Circular Elements (Advanta Style) */}
          <div className="absolute top-1/4 right-[-10%] w-[40vw] h-[40vw] border border-white/10 rounded-full animate-pulse pointer-events-none" />
          <div className="absolute bottom-[-10%] right-10 w-[20vw] h-[20vw] border border-accent-stine/20 rounded-full pointer-events-none" />
          
          {/* Content (Stine Bold Impact style) */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col items-start text-left">
                <motion.span 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-accent-stine text-brand-green px-4 py-1.5 text-xs font-bold tracking-widest rounded-sm mb-6"
                >
                  {SLIDES[current].tag}
                </motion.span>
                
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-white font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] mb-6"
                >
                  {SLIDES[current].title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </motion.h1>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-brand-mint text-xl md:text-2xl font-light max-w-lg mb-10 leading-relaxed"
                >
                  {SLIDES[current].subtitle}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-white text-brand-green hover:bg-accent-stine hover:text-brand-green transition-all px-10 py-5 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-2 group shadow-2xl">
                    NUESTROS PRODUCTOS
                    <motion.div 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </button>
                  <button className="border-2 border-white/30 text-white hover:border-white transition-all px-10 py-5 rounded-full font-bold text-sm tracking-widest flex items-center justify-center shadow-2xl backdrop-blur-sm">
                    CONTACTANOS
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical Navigation (Advanta Style) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden md:flex">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group flex items-center gap-4 text-right"
          >
            <span className={`text-[10px] font-bold tracking-tighter transition-all duration-300 ${current === idx ? 'text-accent-stine opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-white'}`}>
              0{idx + 1}
            </span>
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${current === idx ? 'bg-accent-stine border-accent-stine scale-125 shadow-[0_0_15px_rgba(198,255,0,0.5)]' : 'border-white/40 hover:border-white'}`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-12 flex items-center gap-4 text-white/50 text-[10px] font-bold tracking-widest vertical-rl uppercase"
      >
        Scroll down 
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
