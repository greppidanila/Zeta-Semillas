'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '@/lib/constants';

export default function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'girasol' | 'sorgo' | 'maiz'>('all');

  return (
    <section id="productos" className="bg-white py-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-brand-green/40 text-[10px] font-bold tracking-[0.4em] block mb-4 uppercase"
                >
                  NUESTRO CATÁLOGO
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-brand-green font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]"
                >
                  GENÉTICA DE <br /> <span className="text-brand-green/20 italic">ALTA PERFORMANCE</span>
                </motion.h2>
            </div>
            
            <div className="flex gap-2 md:gap-4 p-1.5 bg-neutral-advanta rounded-2xl md:rounded-full flex-wrap justify-center">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-full text-[10px] font-black tracking-widest transition-all duration-300 ${activeCategory === 'all' ? 'bg-brand-green text-white shadow-xl scale-105' : 'text-brand-green/40 hover:text-brand-green hover:bg-white/50'}`}
                >
                    VER TODOS
                </button>
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as any)}
                        className={`px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-full text-[10px] font-black tracking-widest transition-all duration-300 ${activeCategory === cat.id ? 'bg-brand-green text-white shadow-xl scale-105' : 'text-brand-green/40 hover:text-brand-green hover:bg-white/50'}`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>
        </div>

        <AnimatePresence mode="wait">
          {activeCategory === 'all' ? (
            <motion.div 
              key="specialties-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative"
            >
              {/* Background floating seeds/particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, 20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 1,
                    }}
                    className="absolute w-2 h-2 rounded-full bg-brand-green/10"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 3) * 30}%`,
                    }}
                  />
                ))}
              </div>

              {CATEGORIES.map((category, idx) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="flex flex-col group relative"
                >
                  {/* Product Visual Container */}
                    <div className="relative w-full aspect-square mb-10 group-hover:scale-110 transition-transform duration-700">
                      {/* Background circles - moved to absolute background layer */}
                      <div className="absolute inset-0 z-0">
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full ${category.bgColor} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full ${category.bgColor} opacity-80 shadow-2xl overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none translate-y-1/4 group-hover:translate-y-0 transition-transform duration-1000">
                            <span className="text-[20px] font-display font-black text-white tracking-tighter uppercase">
                              {category.id}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main Product Image - z-20 for sure */}
                      <div className="relative w-full h-full z-20 flex items-center justify-center p-8">
                        <motion.div 
                          whileHover={{ y: -20, rotate: 2 }}
                          className="relative w-4/5 h-4/5"
                        >
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            priority
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>

                      {/* Geometric accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 border border-white/40 rounded-full group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 z-10" />
                    </div>

                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center pointer-events-none overflow-hidden">
                        <span className="text-white/10 font-display font-black text-8xl lg:text-9xl tracking-tighter whitespace-nowrap block translate-x-2 group-hover:translate-x-0 transition-transform duration-700">
                            {category.id}
                        </span>
                    </div>

                  <div className="relative px-2">
                    <h3 className="text-brand-green font-display text-4xl font-black tracking-tighter mb-2 group-hover:text-accent-stine transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-brand-green/60 text-sm font-medium mb-8 leading-relaxed max-w-[200px]">
                      {category.description}
                    </p>
                    
                    <button 
                      onClick={() => setActiveCategory(category.id as any)}
                      className="inline-flex items-center gap-4 text-brand-green font-black text-xs tracking-widest group/btn bg-neutral-advanta px-6 py-3 rounded-full hover:bg-brand-green hover:text-white transition-all shadow-sm"
                    >
                      VER HÍBRIDOS
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="hybrids-list"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-16"
            >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-accent-stine" />
                      <h3 className="text-brand-green font-display text-4xl md:text-5xl font-black tracking-tight uppercase">
                          CATÁLOGO <span className="text-accent-stine">{activeCategory}</span>
                      </h3>
                  </div>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="text-brand-green/40 hover:text-brand-green font-black text-[10px] tracking-widest uppercase flex items-center gap-2 transition-colors"
                  >
                    ← VOLVER A ESPECIALIDADES
                  </button>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  animate="show"
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                    {PRODUCTS.filter(p => p.category === activeCategory).map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{
                              hidden: { opacity: 0, y: 30, scale: 0.95 },
                              show: { opacity: 1, y: 0, scale: 1 }
                            }}
                            whileHover={{ y: -10 }}
                            className="bg-neutral-advanta/30 border border-brand-green/5 p-8 rounded-[40px] hover:border-accent-stine/50 transition-all group flex flex-col h-full shadow-sm hover:shadow-2xl"
                        >
                            <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-3xl bg-white shadow-inner">
                                <Image src={product.image} alt={product.name} fill className="object-contain transform group-hover:scale-110 transition-transform duration-700 p-8" />
                                <div className="absolute inset-0 bg-accent-stine/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                {product.specs?.mercado && (
                                    <div className="absolute top-4 right-4 group-hover:-translate-y-1 transition-transform">
                                        <span className="bg-brand-green text-white text-[8px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
                                            {product.specs.mercado}
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="space-y-4 flex-grow">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-brand-green font-display text-3xl font-black tracking-tighter group-hover:text-accent-stine transition-colors">{product.name}</h4>
                                    {product.specs?.tecnologia && (
                                        <span className="text-accent-stine text-[9px] font-black tracking-tighter border border-accent-stine/30 px-2 py-0.5 rounded bg-white/50">
                                            {product.specs.tecnologia}
                                        </span>
                                    )}
                                </div>
                                <p className="text-brand-green/60 text-sm leading-relaxed line-clamp-3">
                                    {product.description}
                                </p>
                            </div>

                            <Link 
                                href={`/productos/${product.id}`}
                                className="mt-8 w-full bg-brand-green text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] tracking-widest hover:bg-accent-stine hover:text-brand-green transition-all shadow-xl group-hover:shadow-accent-stine/20"
                            >
                                VER FICHA TÉCNICA <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
