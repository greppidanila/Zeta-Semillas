'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function TestimonialsAndPartners() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-mint/30 p-12 rounded-lg relative"
        >
          <div className="mb-8">
            <motion.h2
              className="text-brand-green font-display text-3xl font-bold tracking-tight mb-4"
            >
              TESTIMONIALES
            </motion.h2>
            <div className="w-20 h-1 bg-brand-green" />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <Quote size={48} className="text-brand-green opacity-20" />
            <p className="text-brand-green font-display text-lg italic leading-relaxed">
              &quot;Hace 4 años que elijo los híbridos de ZETA. Los híbridos tienen consistentemente una excelente performance en materia grasa. Además se destacan por tener una emergencia y vigor inicial que aseguran un buen stand de plantas.&quot;
            </p>
            <div className="border-t border-brand-green/20 pt-6">
               <p className="text-brand-green font-bold">Rodrigo Cevedio</p>
               <p className="text-brand-green/70 text-sm">Agrocomercial Altan, Tandil</p>
            </div>
            
            {/* Pagination placeholder */}
            <div className="flex gap-2 mt-4">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
              <div className="w-2.5 h-2.5 rounded-full border border-brand-green" />
              <div className="w-2.5 h-2.5 rounded-full border border-brand-green" />
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="mb-12">
            <h2 className="text-brand-green font-display text-3xl font-bold tracking-tight mb-4">
              ASOCIACIONES ESTRATÉGICAS
            </h2>
            <div className="w-24 h-1 bg-brand-mint" />
          </div>

          <div className="flex-grow flex items-center justify-center p-8 bg-white rounded-3xl border border-brand-green/10 shadow-sm">
            <Image
              src="/imgi_9_Z-semillas_logos2.png"
              alt="Asociaciones Estratégicas"
              width={1000}
              height={500}
              className="w-full h-auto object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
