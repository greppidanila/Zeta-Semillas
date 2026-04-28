'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

const STATS = [
  { value: 18, label: 'AÑOS DE TRAYECTORIA', suffix: 'AÑOS', prefix: '', plus: '+' },
  { value: 100, label: 'CAPITALES NACIONALES', suffix: 'NACIONAL', prefix: '', plus: '%' },
  { value: 20, label: 'HÍBRIDOS DESARROLLADOS', suffix: 'HÍBRIDOS', prefix: '+', plus: '' },
  { value: 45, label: 'PUNTOS DE VENTA', suffix: 'VENTA', prefix: '', plus: '+' },
];

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });
  
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="text-brand-green font-display text-5xl md:text-7xl font-black tracking-tighter">
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function InfoBanner() {
  return (
    <section className="bg-neutral-advanta py-24 px-6 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mint/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.plus} />
                <div className="w-full h-1 bg-accent-stine scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
              <span className="text-brand-green/40 text-[10px] font-bold tracking-[0.2em] mb-2">
                {stat.suffix}
              </span>
              <p className="text-brand-green font-display text-sm font-bold max-w-[150px] leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-brand-green/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-brand-green font-display text-2xl md:text-3xl font-bold leading-tight">
              Investigamos y desarrollamos <span className="text-brand-green italic opacity-60">híbridos de girasol y sorgo</span> con rigor científico.
            </h3>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest rounded-full hover:bg-accent-stine hover:text-brand-green transition-all shadow-xl">
             NUESTRA GENÉTICA
          </button>
        </motion.div>
      </div>
    </section>
  );
}
