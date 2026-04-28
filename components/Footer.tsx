'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
             <div className="relative h-12 w-48 mb-6">
                <Image 
                    src="https://zetasemillas.com/wp-content/uploads/2023/09/Z-semillas-logo.png"
                    alt="ZETA Semillas"
                    fill
                    className="object-contain brightness-0 invert"
                    referrerPolicy="no-referrer"
                />
             </div>
             <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">
               Líderes en mejoramiento genético de girasol y sorgo en Argentina desde 2006.
             </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-accent-stine font-display font-bold text-xs tracking-widest mb-6">EXPLORAR</h4>
            <div className="flex flex-col gap-4 text-white/60 text-sm">
                <Link href="/productos" className="hover:text-white transition-colors">Híbridos</Link>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link>
                <Link href="/catalogo-2026.pdf" className="hover:text-white transition-colors">Catálogo Digital</Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-accent-stine font-display font-bold text-xs tracking-widest mb-6">OFICINA</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Chacabuco 670, Dto 6<br />
              San Isidro, Buenos Aires<br />
              Argentina
            </p>
          </div>

          {/* Column 4: Newsletter/Social */}
          <div>
            <h4 className="text-accent-stine font-display font-bold text-xs tracking-widest mb-6">CONECTAR</h4>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] tracking-widest uppercase font-bold">
            © 2026 ZETA SEMILLAS - TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex gap-6 text-white/20 text-[10px] items-center">
            <span>DISEÑO HIGH-IMPACT</span>
            <div className="w-[1px] h-3 bg-white/10" />
            <span>TERMINOS Y PRIVACIDAD</span>
          </div>
        </div>
      </div>
      
      {/* Decorative background "Z" */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.02] select-none pointer-events-none">
        <span className="text-[600px] font-display font-black text-white">Z</span>
      </div>
    </footer>
  );
}
