'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MapPin, Info, Globe } from 'lucide-react';

const LOCATIONS = [
  { id: 'arg', name: 'ARGENTINA', label: 'Sede Central', bio: 'Centro de mejoramiento genético e I+D principal.', x: '27.5%', y: '82%' },
  { id: 'bol', name: 'BOLIVIA', label: 'Testing Regional', bio: 'Validación de materiales en ambientes tropicales.', x: '26.8%', y: '73%' },
  { id: 'par', name: 'PARAGUAY', label: 'Producción', bio: 'Multiplicación estratégica de semillas.', x: '30.2%', y: '74%' },
  { id: 'bra', name: 'BRASIL', label: 'Mercado Sorgo', bio: 'Fuerte crecimiento en híbridos de alta sanidad foliar.', x: '35%', y: '68%' },
  { id: 'uru', name: 'URUGUAY', label: 'Exportación', bio: 'Puente logístico para mercados globales.', x: '32.1%', y: '80%' },
  { id: 'usa', name: 'EEUU', label: 'Alianzas R&D', bio: 'Colaboración con laboratorios de última generación.', x: '18%', y: '35%' },
  { id: 'fra', name: 'FRANCIA', label: 'Germoplasma', bio: 'Intercambio estratégico de genética y selección.', x: '48.5%', y: '30%' },
  { id: 'rum', name: 'RUMANÍA', label: 'Expansión', bio: 'Primer registro de girasol argentino en Europa.', x: '55.5%', y: '28.5%' },
];

export default function MapSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="donde-estamos" className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-10">
          <div className="max-w-xl">
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-brand-green/40 text-[10px] font-bold tracking-[0.4em] block mb-4 uppercase"
             >
               PRESENCIA GLOBAL
             </motion.span>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-brand-green font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]"
             >
               ESTAMOS <br /> <span className="text-brand-green/20 italic">DONDE NACE EL FUTURO</span>
             </motion.h2>
          </div>
          
          <div className="bg-neutral-advanta p-8 rounded-3xl border border-brand-green/5 max-w-sm">
             <Globe className="text-accent-stine mb-4" size={32} />
             <h4 className="text-brand-green font-bold text-sm mb-2 uppercase tracking-wide">Alcance Internacional</h4>
             <p className="text-brand-green/60 text-xs leading-relaxed">
               ZETA Semillas proyecta su genética desde Argentina hacia los mercados más exigentes del mundo, validando cada híbrido en diversos ambientes globales.
             </p>
          </div>
        </div>

        <div className="relative w-full aspect-[22/10] bg-neutral-advanta rounded-[60px] shadow-2xl overflow-hidden group border border-brand-green/5">
            {/* World Map Background (Interactive feel) */}
            <div className="absolute inset-0 opacity-100 pointer-events-none">
                <Image 
                    src="/imgi_6_Mapa-5.png" 
                    alt="Mapa de Cobertura Zeta Semillas" 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Overlay Gradient for more "Advanta" tech look */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-white/20 pointer-events-none" />

            {/* Interactive Pins */}
            <div className="absolute inset-0">
                {LOCATIONS.map((loc) => (
                    <button
                        key={loc.id}
                        onClick={() => setActive(active === loc.id ? null : loc.id)}
                        onMouseEnter={() => setActive(loc.id)}
                        style={{ left: loc.x, top: loc.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20"
                    >
                        <div className={`relative flex items-center justify-center transition-all duration-300 ${active === loc.id ? 'scale-125' : 'hover:scale-110'}`}>
                           {active === loc.id && (
                               <div className="absolute w-12 h-12 rounded-full animate-ping opacity-30 bg-accent-stine" />
                           )}
                           {/* Pin Shadow/Pulse */}
                           <div className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${active === loc.id ? 'bg-accent-stine/40 blur-sm' : 'bg-brand-green/20 blur-xs'}`} />
                           
                           {/* Main Pin Dot */}
                           <div className={`w-3 h-3 rounded-full border-2 border-white shadow-xl transition-all duration-300 ${active === loc.id ? 'bg-accent-stine scale-125' : 'bg-brand-green scale-100 group-hover/pin:scale-110'}`} />
                        </div>

                        {/* Label (Always visible, more prominent on active) */}
                        <div className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${active === loc.id ? 'z-30 scale-110 shadow-2xl' : 'z-10 opacity-70 group-hover/pin:opacity-100'}`}>
                            <div className={`px-2.5 py-1.5 rounded bg-white shadow-lg border transition-all duration-300 ${active === loc.id ? 'border-accent-stine border-2 ring-4 ring-accent-stine/20' : 'border-brand-green/10'}`}>
                                <h5 className={`font-black text-[9px] tracking-widest leading-none block ${active === loc.id ? 'text-brand-green' : 'text-brand-green/80'}`}>{loc.name}</h5>
                                {active === loc.id && <span className="text-[7px] font-bold text-accent-stine block mt-1 uppercase tracking-tighter">{loc.label}</span>}
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Info Overlay (Left Side) */}
            <AnimatePresence>
                {active && (
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="absolute bottom-10 left-10 z-30 max-w-xs bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-white"
                    >
                        {(() => {
                            const cur = LOCATIONS.find(l => l.id === active);
                            return (
                                <>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-stine flex items-center justify-center text-brand-green">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl tracking-tighter leading-none">{cur?.name}</h4>
                                            <span className="text-accent-stine text-[10px] font-bold tracking-widest uppercase">{cur?.label}</span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-xs leading-relaxed mb-6 italic">
                                        &quot;{cur?.bio}&quot;
                                    </p>
                                    <div className="h-[1px] w-full bg-white/10 mb-6" />
                                    <button className="text-white font-bold text-[10px] tracking-[0.2em] flex items-center gap-2 hover:text-accent-stine transition-colors">
                                        EXPLORAR REGIÓN <Info size={12} />
                                    </button>
                                </>
                            )
                        })()}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative Map Legend */}
            <div className="absolute top-10 right-10 flex flex-col gap-4 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-stine rounded-full" />
                    PUNTOS ESTRATÉGICOS
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white/20 rounded-full" />
                    ZONAS DE TESTEO
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

