'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491150075162"
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
}
