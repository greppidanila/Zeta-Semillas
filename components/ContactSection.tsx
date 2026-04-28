'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 px-6 bg-neutral-advanta overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green/5 rounded-bl-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Information & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green/40 text-[10px] font-bold tracking-[0.4em] block mb-6">CANALES DE ATENCIÓN</span>
            <h2 className="text-brand-green font-display text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">
              ESCRIBINOS <span className="text-accent-stine">HOY</span>
            </h2>
            
            <div className="flex flex-col gap-10">
              <ContactInfoItem 
                  icon={<MapPin className="text-white" size={24} />} 
                  title="SUCURSAL CENTRAL" 
                  content="Chacabuco 670 Dto 6, San Isidro (CP 1642)\nBuenos Aires, Argentina" 
                  accentColor="bg-brand-mint"
              />
              <ContactInfoItem 
                  icon={<Phone className="text-white" size={24} />} 
                  title="CENTRAL TELEFÓNICA" 
                  content="(11) 3938-0445 / (11) 5007-5162" 
                  accentColor="bg-brand-green"
              />
              <ContactInfoItem 
                  icon={<Mail className="text-white" size={24} />} 
                  title="CORREO ELECTRÓNICO" 
                  content="sz@zetasemillas.com" 
                  accentColor="bg-accent-stine"
              />
            </div>
          </motion.div>

          {/* Contact Form (Advanta Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-brand-green/5"
          >
            <form className="flex flex-col gap-8">
              <div className="space-y-6">
                <div className="border-b border-brand-green/10 pb-2">
                  <label className="text-[10px] font-bold text-brand-green/40 tracking-widest uppercase">Nombre Completo</label>
                  <input type="text" className="w-full bg-transparent p-2 text-brand-green font-medium focus:outline-none placeholder:text-brand-green/20" placeholder="Ej: Juan Pérez" required />
                </div>

                <div className="border-b border-brand-green/10 pb-2">
                  <label className="text-[10px] font-bold text-brand-green/40 tracking-widest uppercase">Email de contacto</label>
                  <input type="email" className="w-full bg-transparent p-2 text-brand-green font-medium focus:outline-none placeholder:text-brand-green/20" placeholder="tu@email.com" required />
                </div>

                <div className="border-b border-brand-green/10 pb-2">
                  <label className="text-[10px] font-bold text-brand-green/40 tracking-widest uppercase">Mensaje</label>
                  <textarea rows={4} className="w-full bg-transparent p-2 text-brand-green font-medium focus:outline-none placeholder:text-brand-green/20 resize-none" placeholder="¿En qué podemos ayudarte?" />
                </div>
              </div>

              <button 
                type="submit"
                className="group relative overflow-hidden bg-brand-green text-white font-bold py-5 px-12 rounded-full w-fit flex items-center gap-4 hover:bg-accent-stine hover:text-brand-green transition-all duration-500 shadow-xl"
              >
                ENVIAR CONSULTA
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand-green/10 flex items-center justify-center">
                  →
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, content, accentColor }: { icon: React.ReactNode; title: string, content: string, accentColor?: string }) {
    return (
        <div className="flex gap-6 items-start">
            <div className={`w-12 h-12 ${accentColor || 'bg-brand-green'} rounded-lg flex items-center justify-center shrink-0 shadow-lg`}>
                {icon}
            </div>
            <div>
                <h4 className="text-brand-green font-display font-bold text-sm tracking-widest mb-2 uppercase">{title}</h4>
                <p className="text-brand-green/70 text-lg leading-relaxed whitespace-pre-line">{content}</p>
            </div>
        </div>
    )
}
