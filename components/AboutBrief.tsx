'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { TEAM } from '@/lib/constants';

export default function AboutBrief() {
  return (
    <section className="relative overflow-hidden flex flex-col lg:flex-row bg-white">
      {/* Light Side (Left) */}
      <div className="lg:w-1/2 bg-white relative py-32 px-6 lg:px-20 flex flex-col justify-center">
         <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-green/40 text-[10px] font-bold tracking-[0.4em] block mb-6"
            >
              NUESTRA FILOSOFÍA
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-display text-5xl lg:text-7xl font-black tracking-tighter leading-[0.8] mb-12"
            >
              TECNOLOGÍA <br /> <span className="text-brand-green/30 italic">CON RAÍCES</span>
            </motion.h2>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col gap-6 max-w-lg mb-16"
            >
               <p className="text-brand-green/80 font-display text-lg leading-relaxed">
                 Somos una empresa <span className="font-bold text-brand-green">100% Argentina</span> enfocada en el mejoramiento genético y comercialización de híbridos.
               </p>
               <p className="text-brand-green/60 text-base leading-relaxed">
                 Desde 2006, invertimos en programas propios de R&D para entregar germoplasma adaptado a cada ambiente, asegurando rentabilidad y estabilidad para el productor.
               </p>
            </motion.div>

            <Link 
              href="/quienes-somos"
              className="inline-flex items-center gap-6 group"
            >
               <div className="w-16 h-16 rounded-full border border-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.div>
               </div>
               <span className="text-brand-green font-bold text-xs tracking-[0.2em]">CONOCÉ NUESTRA HISTORIA</span>
            </Link>
         </div>

         {/* Backdrop circle */}
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-brand-green/5 rounded-full pointer-events-none" />
      </div>

      {/* Dark Side (Right) - Team focused */}
      <div className="lg:w-1/2 bg-brand-green py-32 px-6 lg:px-20 relative overflow-hidden">
        {/* Background Text Decor */}
        <div className="absolute -top-10 -right-10 opacity-5 select-none pointer-events-none">
            <span className="text-[400px] font-display font-black leading-none text-white">Z</span>
        </div>

        <div className="relative z-10 flex flex-col items-center lg:items-end h-full justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl">
                 {TEAM.map((member, idx) => (
                   <TeamMember 
                    key={idx}
                    name={member.name} 
                    role={member.role} 
                    img={member.img}
                    email={member.email}
                    phone={member.phone}
                   />
                 ))}
                 
                 {/* Join Info box */}
                 <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col justify-center">
                    <h4 className="text-accent-stine font-display font-bold text-xl mb-2">Sumate a la red</h4>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">Estamos en constante búsqueda de partners que compartan nuestra visión.</p>
                    <Link href="/#contacto" className="text-white font-bold text-[10px] tracking-widest border-b border-accent-stine w-fit pb-1 hover:text-accent-stine transition-colors">
                        CONTACTAR VENTAS
                    </Link>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function TeamMember({ name, role, img, email, phone }: { name: string; role: string; img: string; email?: string; phone?: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-6"
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-accent-stine rounded-full translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
                    <Image 
                        src={img}
                        alt={name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
            <div>
                <h4 className="text-white font-display font-bold text-sm tracking-tight">{name}</h4>
                <p className="text-accent-stine text-[10px] font-bold tracking-[0.1em] uppercase mt-1">{role}</p>
                {phone && <p className="text-white/40 text-[10px] mt-2 font-medium">{phone}</p>}
                {email && <p className="text-white/40 text-[10px] font-medium break-all">{email}</p>}
            </div>
        </motion.div>
    )
}
