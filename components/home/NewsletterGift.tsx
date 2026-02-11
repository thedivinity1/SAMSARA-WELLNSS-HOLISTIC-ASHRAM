'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const NewsletterGift = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-28 bg-gradient-to-br from-white via-stone-50 to-sage-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-terracotta-100 rounded-full blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage-100 rounded-full blur-[120px] opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">
                Sunday Stillness
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                A weekly gift, not an <span className="italic text-sage-600">email</span>.
              </h2>
            </div>

            <p className="text-stone-600 text-lg leading-relaxed">
              Join <span className="font-bold text-sage-700">45,000+</span> seekers receiving our curated collection of
              teachings, silence, and poetry. No marketing, just depth.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white border-2 border-stone-200 focus:border-sage-400 rounded-full px-6 py-4 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-terracotta-500 hover:bg-terracotta-400 text-white rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-300/50 whitespace-nowrap"
                >
                  Receive Gift
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage-50 border border-sage-200 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-2">🕊️</div>
                <p className="text-sage-700 font-medium">Welcome to the path.</p>
                <p className="text-stone-500 text-sm">Check your inbox for your first gift.</p>
              </motion.div>
            )}

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-stone-500 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Weekly delivery
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                No spam, ever
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Unsubscribe anytime
              </span>
            </div>
          </motion.div>

          {/* Visual - Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sage-800 via-sage-900 to-stone-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <pattern id="newsletter-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#newsletter-pattern)" />
                </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="text-5xl text-sage-400 font-serif">"</div>
                <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
                  The most peaceful email in my inbox. It feels like a friend writing from a mountain.
                </blockquote>
                <div className="pt-4">
                  <div className="w-12 h-12 bg-terracotta-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-serif text-lg">
                    AK
                  </div>
                  <cite className="text-sage-300 not-italic block">Ananya K.</cite>
                  <span className="text-sage-500 text-xs uppercase tracking-wider">Reader since 2023</span>
                </div>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-sage-200 rounded-[2rem] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
