'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Donor Funded", value: "100%", icon: "💎" },
  { label: "Admin Costs", value: "<8%", icon: "📊" },
  { label: "Public Reports", value: "12+", icon: "📄" },
];

export const TransparencyPromise = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-white via-stone-50 to-sage-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sage-100 rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2" />

      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Radical Transparency
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Trust is the foundation of <span className="italic text-sage-600">service</span>.
            </h2>
          </div>

          <p className="text-stone-600 leading-relaxed text-lg">
            As a registered NGO, we believe you deserve to know exactly where every dollar goes.
            We publish quarterly financial audits, impact reports, and governance minutes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 py-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="font-serif text-2xl text-stone-900">{stat.value}</div>
                <div className="text-xs text-stone-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 bg-sage-600 hover:bg-sage-500 text-white rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sage-300/50">
              View Annual Report
            </button>
            <button className="px-6 py-3 border-2 border-stone-300 hover:border-sage-500 text-stone-700 hover:text-sage-700 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300">
              Our Ethics Code
            </button>
          </div>
        </motion.div>

        {/* Visual Element - Impact Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sage-800 via-sage-900 to-stone-900 p-8 flex items-center justify-center relative">
            {/* Globe/World visualization */}
            <svg className="w-full h-full max-w-[400px] opacity-20" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-400" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-500" />
              <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-600" />
              {/* Grid lines */}
              <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sage-400" />
              <ellipse cx="200" cy="200" rx="150" ry="100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sage-400" />
              <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="0.5" className="text-sage-400" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-sage-400" />
            </svg>

            {/* Impact Points */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/3 left-1/4 w-4 h-4 bg-terracotta-400 rounded-full shadow-lg shadow-terracotta-500/50"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 right-1/3 w-3 h-3 bg-gold-400 rounded-full shadow-lg shadow-gold-500/50"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-sage-400 rounded-full shadow-lg shadow-sage-500/50"
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-serif text-5xl mb-2">12</div>
                <div className="text-sm uppercase tracking-widest text-sage-300">Countries Reached</div>
              </div>
            </div>
          </div>

          {/* Frame */}
          <div className="absolute -inset-3 border border-sage-200 rounded-[2rem] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
