'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const QUESTIONS = [
  {
    id: 'crop',
    text: '¿Qué cultivo te interesa?',
    options: [
      { id: 'girasol', label: 'Girasol', icon: '🌻' },
      { id: 'sorgo', label: 'Sorgo', icon: '🌾' },
      { id: 'maiz', label: 'Maíz', icon: '🌽' },
    ]
  },
  {
    id: 'goal',
    text: '¿Cuál es tu objetivo principal?',
    options: [
      { id: 'rendimiento', label: 'Máximo Rendimiento', icon: '📈' },
      { id: 'estabilidad', label: 'Estabilidad / Sanidad', icon: '🛡️' },
      { id: 'especialidad', label: 'Especialidades / Exportación', icon: '🌍' },
    ]
  }
];

export default function ProductAdvisor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<any[]>([]);

  const handleAnswer = (questionId: string, answerId: string) => {
    const nextAnswers = { ...answers, [questionId]: answerId };
    setAnswers(nextAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Find matches
      const matches = PRODUCTS.filter(p => p.category === nextAnswers.crop);
      setResults(matches.slice(0, 2));
      setStep(QUESTIONS.length);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResults([]);
  };

  return (
    <section className="py-24 px-6 bg-brand-green-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 border border-accent-stine rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <span className="text-accent-stine text-[10px] font-bold tracking-[0.4em] block mb-4 uppercase">Herramienta Interactiva</span>
            <h2 className="text-white font-display text-4xl md:text-5xl font-black tracking-tighter">
                ASISTENTE DE <span className="text-accent-stine italic">SIEMBRA</span>
            </h2>
            <p className="text-white/40 text-sm mt-4">Encontrá el híbrido ideal para tu lote en 2 simples pasos.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl min-h-[400px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
                {step < QUESTIONS.length ? (
                    <motion.div 
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full text-center"
                    >
                        <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-10">
                            {QUESTIONS[step].text}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {QUESTIONS[step].options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleAnswer(QUESTIONS[step].id, opt.id)}
                                    className="group bg-white/5 hover:bg-accent-stine border border-white/10 hover:border-accent-stine p-8 rounded-3xl transition-all duration-300 flex flex-col items-center gap-4"
                                >
                                    <span className="text-4xl group-hover:scale-125 transition-transform">{opt.icon}</span>
                                    <span className="text-white group-hover:text-brand-green font-bold text-xs tracking-widest uppercase">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full"
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-white font-display text-3xl font-bold mb-2">Recomendaciones para vos</h3>
                            <p className="text-white/40 text-sm">Basado en tus preferencias de {answers.crop}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {results.length > 0 ? results.map((product) => (
                                <div key={product.id} className="bg-white/10 p-6 rounded-3xl border border-white/20 flex gap-6 items-center">
                                    <div className="relative w-20 h-32 flex-shrink-0">
                                        <Image src={product.image} alt={product.name} fill className="object-contain" />
                                    </div>
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-accent-stine text-[10px] font-bold tracking-widest uppercase mb-1">{product.category}</span>
                                        <h4 className="text-white font-display font-bold text-xl mb-2">{product.name}</h4>
                                        <Link href={`/productos/${product.id}`} className="text-white/60 text-[10px] font-bold border-b border-white/20 hover:text-accent-stine hover:border-accent-stine transition-all">
                                            VER FICHA TÉCNICA
                                        </Link>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-2 text-center py-8">
                                    <p className="text-white/60">No encontramos resultados exactos, pero podés contactarnos para asesoramiento personalizado.</p>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={reset}
                                className="px-8 py-4 border border-white/20 text-white rounded-full text-xs font-bold tracking-widest hover:bg-white/10 transition-all"
                            >
                                VOLVER A EMPEZAR
                            </button>
                            <Link 
                                href="/#contacto"
                                className="px-8 py-4 bg-accent-stine text-brand-green rounded-full text-xs font-bold tracking-widest hover:brightness-110 transition-all"
                            >
                                CONTACTAR ASESOR
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
