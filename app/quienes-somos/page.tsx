'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'motion/react';
import { TEAM } from '@/lib/constants';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen pt-24 bg-brand-cream overflow-hidden">
        {/* Left: Team Section */}
        <div className="lg:w-[45%] p-8 md:p-16 flex flex-col gap-12 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                 <div className="absolute top-1/4 -left-1/4 w-full h-full bg-brand-mint rounded-full blur-[120px]" />
             </div>

             {TEAM.map((member, idx) => (
                 <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-8 group"
                 >
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-8 border-white shadow-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500">
                        <Image 
                            src={member.img}
                            alt={member.name}
                            width={300}
                             height={300}
                            className="object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-4 text-center md:text-left pt-4">
                        <h3 className="text-brand-green font-display text-2xl font-bold tracking-tight">{member.name}</h3>
                        <div className="flex flex-col gap-1">
                            <p className="text-brand-green font-display font-medium text-sm tracking-wide opacity-70">{member.role}</p>
                            <a href={`tel:${member.phone}`} className="text-brand-green font-display font-medium text-sm hover:text-brand-mint transition-colors">{member.phone}</a>
                            <a href={`mailto:${member.email}`} className="text-brand-green font-display font-medium text-sm hover:text-brand-mint transition-colors">{member.email}</a>
                        </div>
                        <div className="flex gap-4 justify-center md:justify-start mt-2">
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-green text-white rounded hover:bg-brand-mint hover:text-brand-green transition-all shadow-md">
                                    <Linkedin size={18} />
                                </a>
                            )}
                            <a href={`mailto:${member.email}`} className="p-2 bg-brand-green text-white rounded hover:bg-brand-mint hover:text-brand-green transition-all shadow-md">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                 </motion.div>
             ))}
        </div>

        {/* Right: Info Section */}
        <div className="lg:w-[55%] bg-brand-green text-white p-8 md:p-20 flex flex-col justify-center relative">
             {/* Background Decorative "Z" */}
             <div className="absolute bottom-12 right-12 opacity-10 pointer-events-none">
                 <span className="text-[400px] font-display font-black leading-none">Z</span>
             </div>

             <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative z-10 max-w-2xl flex flex-col gap-8"
             >
                 <div className="space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed">
                        ZETA Semillas es una empresa de semillas con foco en girasol, con un programa potente de genética propio en todos los segmentos: linoleicos, oleicos, confiteros y estriados. Su fundador tiene 35 años en el mercado de girasol, con trayectoria en Asgrow, Zeneca ICI, Mycogen-Agrigenetics, Morgan, Dow y ahora ZETA Semillas. Participó en los primeros híbridos de girasoles alto oleico y confiteros en ARG, y lideró a Morgan en ventas creciendo del 6% al 25% de market share en girasol en 1994-1998.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Invertimos en I+D porque estamos convencidos que es el mejor camino de largo plazo para traer valor al productor. Buscamos lograr híbridos adaptados a las 3 regiones girasoleras de Argentina, con sanidad, estabilidad, materia grasa y rinde. En 2023 estamos instalando un invernáculo para realizar “trait introgression” y accedimos a una línea de financiamiento para equipar nuestros laboratorios con la última tecnología. Tenemos alianzas estratégicas con laboratorios de USA y Europa y con bancos de germoplasma de España, USA, Portugal y Francia. En 2023 logramos el primer registro de girasol en Europa.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Contamos también con 4 localidades de testing donde testeamos nuestro pipeline de híbridos para los próximos 5 años contra los mejores del mercado. Queremos partners comerciales que crean en las relaciones de largo plazo, conozcan el mercado de semillas y entiendan el desarrollo de híbridos junto al productor.
                    </p>
                 </div>

                 <div className="pt-12 border-t border-white/10 mt-8">
                     <p className="text-xl md:text-2xl font-display leading-relaxed italic">
                        Nuestro propósito es ser <span className="text-brand-mint font-bold italic">“LA” empresa de genética de girasol argentina</span> Y exportar nuestra semilla a Brasil, Bolivia y Europa, con foco en specialties y mercados de nicho.
                     </p>
                 </div>
             </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
