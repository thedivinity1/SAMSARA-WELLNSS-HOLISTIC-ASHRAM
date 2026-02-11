'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const donationTiers = [
  { amount: "$25", period: "Monthly", desc: "Feeds one resident for a week", popular: false },
  { amount: "$50", period: "Monthly", desc: "Sponsors a free meditation session", popular: true },
  { amount: "$108", period: "One Time", desc: "Sacred offering to the ashram", popular: false },
];

export const SupportTheMission = () => {
  const [selectedTier, setSelectedTier] = useState(1);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-sage-950" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="support-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#support-pattern)" />
        </svg>
      </div>

      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta-900/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sage-900/30 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">
              Dana (Generosity)
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Help us keep wisdom <span className="italic text-sage-400">free</span> for those who cannot pay.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Samsara is 100% donor-funded. Your contribution directly supports scholarships,
            ashram maintenance, and free digital resources.
          </motion.p>

          {/* Donation Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4"
          >
            {donationTiers.map((tier, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTier(idx)}
                className={`relative py-8 px-6 rounded-2xl transition-all duration-300 ${selectedTier === idx
                    ? 'bg-gradient-to-b from-terracotta-500 to-terracotta-600 shadow-xl shadow-terracotta-500/30'
                    : 'bg-stone-800/50 border border-stone-700 hover:border-stone-600'
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-stone-900 text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <span className={`block text-3xl font-serif mb-2 ${selectedTier === idx ? 'text-white' : 'text-white'}`}>
                  {tier.amount}
                </span>
                <span className={`block text-xs uppercase tracking-wider mb-3 ${selectedTier === idx ? 'text-terracotta-200' : 'text-stone-500'}`}>
                  {tier.period}
                </span>
                <span className={`block text-sm ${selectedTier === idx ? 'text-white/80' : 'text-stone-400'}`}>
                  {tier.desc}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Custom Amount */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <div className="flex items-center bg-stone-800/50 border border-stone-700 rounded-full overflow-hidden">
              <span className="text-stone-400 px-4">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                className="bg-transparent py-4 pr-6 text-white focus:outline-none w-40"
              />
            </div>
            <button className="px-10 py-4 bg-sage-600 hover:bg-sage-500 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/30">
              Donate Now
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6 text-stone-500 text-xs"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Tax Deductible
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Secure Payment
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              100% Goes to Mission
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
