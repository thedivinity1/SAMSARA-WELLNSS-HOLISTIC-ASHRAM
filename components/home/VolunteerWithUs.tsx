'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  { name: 'Permaculture Gardeners', icon: '🌱', color: 'bg-sage-100 text-sage-700 border-sage-200' },
  { name: 'Digital Archivists', icon: '📚', color: 'bg-terracotta-100 text-terracotta-700 border-terracotta-200' },
  { name: 'Event Coordinators', icon: '✨', color: 'bg-gold-100 text-gold-700 border-gold-200' },
  { name: 'Translation Guides', icon: '🌍', color: 'bg-stone-100 text-stone-700 border-stone-200' },
  { name: 'Yoga Instructors', icon: '🧘', color: 'bg-sage-100 text-sage-700 border-sage-200' },
  { name: 'Kitchen Seva', icon: '🍃', color: 'bg-terracotta-100 text-terracotta-700 border-terracotta-200' },
];

export const VolunteerWithUs = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&h=1080&fit=crop"
          alt="Community service"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/95 via-sage-900/90 to-sage-800/80" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">
              Karma Yoga
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Service is the highest <span className="italic text-sage-300">practice</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sage-200 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Whether you have 2 hours a week or 6 months to give, your skills can build this sanctuary.
            We are currently seeking passionate souls for:
          </motion.p>

          {/* Role Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {roles.map((role, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`${role.color} px-5 py-3 rounded-full text-sm font-medium border shadow-lg backdrop-blur-sm flex items-center gap-2 cursor-pointer transition-all duration-300`}
              >
                <span>{role.icon}</span>
                {role.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6"
          >
            <button className="px-10 py-5 bg-terracotta-500 hover:bg-terracotta-400 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/30 hover:-translate-y-1">
              Apply to Volunteer
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-12 pt-8 border-t border-sage-700/50"
          >
            <div className="text-center">
              <div className="font-serif text-3xl text-white">200+</div>
              <div className="text-sage-400 text-xs uppercase tracking-wider">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl text-white">15</div>
              <div className="text-sage-400 text-xs uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl text-white">50k+</div>
              <div className="text-sage-400 text-xs uppercase tracking-wider">Hours Given</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
