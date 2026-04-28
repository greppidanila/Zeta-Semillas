'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-brand-green py-3 shadow-lg' : 'bg-brand-green/90 md:bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-48 transition-transform group-hover:scale-105 duration-300">
             <Image 
                src="https://zetasemillas.com/wp-content/uploads/2023/09/Z-semillas-logo.png"
                alt="ZETA Semillas"
                fill
                className="object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white font-display text-sm font-medium tracking-wide hover:text-brand-mint transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-4">
            <Link href="https://instagram.com" target="_blank" className="text-white hover:text-brand-mint transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-brand-mint transition-colors">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-green shadow-xl border-t border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-display text-lg font-medium py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-4">
                <Link href="https://instagram.com" target="_blank" className="text-white">
                  <Instagram size={24} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-white">
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
