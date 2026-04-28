'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';

function ProductosContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'girasol';
  const [selectedCat, setSelectedCat] = useState(initialCat);

  const filteredProducts = PRODUCTS.filter(p => p.category === selectedCat);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-24">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-brand-green text-white p-8 lg:fixed lg:h-screen lg:top-0 lg:left-0 lg:pt-32">
        <div className="mb-12">
           <h3 className="text-white/40 text-[10px] font-bold tracking-[0.2em] mb-4">CATEGORÍAS</h3>
           <div className="flex flex-col gap-6">
             {CATEGORIES.map(cat => (
               <button
                 key={cat.id}
                 onClick={() => setSelectedCat(cat.id)}
                 className={`text-left font-display font-bold tracking-tight text-lg transition-colors ${selectedCat === cat.id ? 'text-brand-mint' : 'text-white/60 hover:text-white'}`}
               >
                 SEMILLAS DE {cat.title}
               </button>
             ))}
           </div>
        </div>
        
        {/* Secondary Nav Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
             {filteredProducts.map(p => (
                 <Link key={p.id} href={`/productos/${p.id}`} className="text-white/40 hover:text-brand-mint text-sm transition-colors">
                    {p.name}
                 </Link>
             ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 bg-brand-cream p-8 md:p-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={selectedCat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
             <h1 className="text-brand-green font-display text-5xl md:text-7xl font-black tracking-tighter opacity-10 select-none absolute">
                {selectedCat.toUpperCase()}
             </h1>
             <h2 className="text-brand-green font-display text-3xl md:text-4xl font-bold tracking-tight relative pt-8">
                NUESTROS HÍBRIDOS
             </h2>
             <div className="w-24 h-1 bg-brand-mint mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group"
              >
                <Link href={`/productos/${product.id}`} className="w-full">
                    <div className="relative aspect-[3/4] mb-6 bg-white overflow-hidden rounded shadow-sm hover:shadow-xl transition-all border border-black/5 group-hover:-translate-y-2">
                        <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-8"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/20 to-transparent flex justify-center translate-y-full group-hover:translate-y-0 transition-transform">
                             <div className="bg-brand-green text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2">
                                VER FICHA <ChevronRight size={12} />
                             </div>
                        </div>
                    </div>
                </Link>
                <h4 className="text-brand-green font-display font-bold text-lg">{product.name}</h4>
                <Link 
                    href={`/productos/${product.id}`}
                    className="mt-4 px-6 py-1.5 border border-brand-green text-brand-green font-display font-bold text-[10px] tracking-widest hover:bg-brand-green hover:text-white transition-all rounded"
                >
                    FICHA TÉCNICA
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-display text-brand-green">Cargando...</div>}>
        <ProductosContent />
      </Suspense>
      <Footer />
    </>
  );
}
