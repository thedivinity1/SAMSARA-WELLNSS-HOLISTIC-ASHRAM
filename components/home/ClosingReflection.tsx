'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const ClosingReflection = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-white" />

      {/* Decorative circles */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] border border-sage-200 rounded-full"
      />
      <motion.div 
        animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[800px] h-[800px] border border-terracotta-200 rounded-full"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-10">
        {/* Lotus icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <svg className="w-16 h-16 text-terracotta-400" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center */}
            <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3"/>
            {/* Petals */}
            <ellipse cx="32" cy="16" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="32" cy="48" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(180 32 48)"/>
            <ellipse cx="16" cy="32" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(90 16 32)"/>
            <ellipse cx="48" cy="32" rx="6" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(-90 48 32)"/>
            {/* Diagonal petals */}
            <ellipse cx="20" cy="20" rx="5" ry="12" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 20 20)" opacity="0.6"/>
            <ellipse cx="44" cy="20" rx="5" ry="12" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-45 44 20)" opacity="0.6"/>
            <ellipse cx="20" cy="44" rx="5" ry="12" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-45 20 44)" opacity="0.6"/>
            <ellipse cx="44" cy="44" rx="5" ry="12" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 44 44)" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 leading-relaxed"
        >
          "You are not a drop in the ocean. <br className="hidden md:block" />
          <span className="text-sage-600 italic">You are the entire ocean in a drop.</span>"
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="w-12 h-[1px] bg-terracotta-300 mx-auto" />
          <cite className="text-stone-500 not-italic uppercase tracking-[0.3em] text-sm font-medium block">
            Rumi
          </cite>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-8"
        >
          <button className="px-10 py-5 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            Begin Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};
