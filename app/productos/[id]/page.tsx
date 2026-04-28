'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/constants';
import Image from 'next/image';
import { ChevronLeft, FileText, CheckCircle2, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = PRODUCTS.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
            <h1 className="text-4xl font-black text-brand-green mb-4">PRODUCTO NO ENCONTRADO</h1>
            <button onClick={() => router.push('/')} className="text-accent-stine font-bold hover:underline">VOLVER AL INICIO</button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Product Header */}
      <section className="pt-32 pb-20 px-6 bg-neutral-advanta/30">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-brand-green/60 hover:text-brand-green transition-colors font-bold text-xs tracking-widest mb-12"
          >
            <ChevronLeft size={16} /> VOLVER AL CATÁLOGO
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[3/4] max-w-md mx-auto w-full"
            >
              <div className="absolute inset-0 bg-accent-stine/10 rounded-[60px] blur-3xl scale-90" />
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)]" 
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-brand-green text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 inline-block">
                HÍBRIDO DE {product.category}
              </span>
              <h1 className="text-brand-green font-display text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                {product.name}
              </h1>
              <p className="text-brand-green/70 text-lg md:text-xl leading-relaxed mb-12 border-l-4 border-accent-stine pl-8">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-green text-white px-8 py-5 rounded-full font-black text-xs tracking-widest flex items-center gap-3 hover:bg-brand-green-dark transition-all">
                  <FileText size={18} /> DESCARGAR FICHA TÉCNICA (PDF)
                </button>
                <button className="border-2 border-brand-green text-brand-green px-8 py-5 rounded-full font-black text-xs tracking-widest hover:bg-brand-green hover:text-white transition-all">
                  CONSULTAR CON UN ASESOR
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-accent-stine" />
            <h2 className="text-brand-green font-display text-3xl font-black tracking-tight">ESPECIFICACIONES TÉCNICAS</h2>
          </div>

          <div className="bg-white border-2 border-neutral-advanta rounded-[40px] overflow-hidden shadow-sm">
            {product.specs ? (
              <div className="grid grid-cols-1 md:grid-cols-2">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div key={key} className={`p-8 border-neutral-advanta ${idx % 2 === 0 ? 'md:border-r border-b' : 'border-b'} flex gap-4`}>
                    <div className="text-accent-stine flex-shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-brand-green/40 font-bold text-[10px] tracking-widest uppercase mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-brand-green font-bold text-base">{value as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-brand-green/40 font-bold italic">
                Solicite la ficha detallada contactando a nuestro equipo técnico.
              </div>
            )}
            
            <div className="bg-brand-green/5 p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-green shadow-sm">
                    <Package size={28} />
                </div>
                <div>
                    <h4 className="text-brand-green font-black text-sm">Presentación Standard</h4>
                    <p className="text-brand-green/60 text-xs">Consulta por disponibilidad y logística para tu zona.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
