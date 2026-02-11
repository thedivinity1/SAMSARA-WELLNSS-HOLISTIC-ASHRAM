'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ['All', 'Retreats', 'Training', 'Workshops', 'Online'];

const programs = [
    {
        title: 'Silent Retreat: The Deep Dive',
        category: 'Retreats',
        duration: '7 Days',
        price: 'Sliding Scale ($0–$800)',
        description: 'A week of noble silence in the Himalayan ashram. Includes guided meditation, yoga, and individual mentoring sessions. No phones. No distractions. Just you and the infinite.',
        features: ['Guided Morning Meditation', 'Yoga Asana Practice', 'Silent Meals', 'One-on-One Mentoring', 'Nature Walks'],
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
        accent: 'terracotta',
        spots: 'Limited to 20 seekers',
    },
    {
        title: 'Mindfulness Teacher Training',
        category: 'Training',
        duration: '200 Hours / 6 Months',
        price: 'Scholarships Available',
        description: 'A rigorous certification program combining ancient contemplative traditions with modern neuroscience. Graduate prepared to teach in clinical, corporate, and community settings.',
        features: ['Neuroscience of Meditation', 'Teaching Methodology', 'Supervised Practice', 'Ethics & Lineage', 'Business of Wellness'],
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
        accent: 'sage',
        spots: 'Cohort of 15',
    },
    {
        title: 'Weekend Reset',
        category: 'Workshops',
        duration: '2 Days',
        price: 'Dana (Pay What Feels Right)',
        description: 'A powerful weekend of restoration. Unplug, reflect, and return to your life with clarity. Perfect for beginners and seasoned practitioners alike.',
        features: ['Sound Bath Healing', 'Journaling Workshops', 'Group Sharing Circles', 'Forest Bathing', 'Closing Ceremony'],
        image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop',
        accent: 'gold',
        spots: 'Open to all',
    },
    {
        title: 'Digital Sangha: Online Meditation',
        category: 'Online',
        duration: 'Ongoing (Weekly)',
        price: 'Free',
        description: 'Join our global meditation community every Sunday. Live guided sessions, dharma talks, and Q&A with senior teachers. All traditions welcome.',
        features: ['Live Guided Sessions', 'Dharma Talks', 'Breakout Rooms', 'Monthly Guest Teachers', 'Recording Library'],
        image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop',
        accent: 'sage',
        spots: 'Unlimited',
    },
    {
        title: '10-Day Vipassana Intensive',
        category: 'Retreats',
        duration: '10 Days',
        price: 'By Donation',
        description: 'A traditional Vipassana meditation course. Ten days of silence, discipline, and self-discovery. The most profound offering in our program lineage.',
        features: ['Traditional Vipassana Technique', 'Noble Silence', 'Structured Schedule', 'Vegetarian Meals', 'Post-Retreat Integration'],
        image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=600&fit=crop',
        accent: 'terracotta',
        spots: 'Limited to 30',
    },
    {
        title: 'Ayurveda Foundations',
        category: 'Online',
        duration: '8 Weeks',
        price: '$108',
        description: 'Learn the science of life. Discover your dosha, build a daily routine, and understand the intersection of food, herbs, and consciousness.',
        features: ['Dosha Assessment', 'Seasonal Living', 'Herbal Medicine Basics', 'Cooking Demonstrations', 'Community Support'],
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
        accent: 'gold',
        spots: 'Self-paced',
    },
];

export default function ProgramsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const filtered = activeCategory === 'All' ? programs : programs.filter(p => p.category === activeCategory);

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-800 to-stone-900" />
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M0 600 L200 300 L400 450 L600 200 L800 350 L1000 100 L1200 250 L1200 600 Z" fill="#1c1917" opacity="0.3" />
                    </svg>
                </div>
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta-800/20 rounded-full blur-[150px]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block">
                        Transformative Journeys
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl text-white leading-[0.95]"
                    >
                        Programs & <span className="italic text-sage-300 font-light">Offerings</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-stone-400 text-lg max-w-xl mx-auto">
                        From silent retreats to online communities—find the path that meets you where you are.
                    </motion.p>
                </div>
            </section>

            {/* Filter + Programs */}
            <section className="py-20 bg-stone-50 relative">
                <div className="container-wide">
                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 mb-16"
                    >
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-sage-700 text-white shadow-lg shadow-sage-300/30'
                                        : 'bg-white text-stone-600 border border-stone-200 hover:border-sage-400 hover:text-sage-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((prog, idx) => (
                                <motion.div
                                    key={prog.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-stone-200/50 hover:shadow-xl hover:shadow-stone-300/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col border border-stone-100">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={prog.image}
                                                alt={prog.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                                            <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold ${prog.accent === 'terracotta' ? 'bg-terracotta-500 text-white' :
                                                    prog.accent === 'sage' ? 'bg-sage-600 text-white' : 'bg-gold-500 text-stone-900'
                                                }`}>
                                                {prog.category}
                                            </div>
                                            <div className="absolute bottom-4 right-4 text-white/80 text-xs uppercase tracking-wider font-medium">
                                                {prog.spots}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="font-serif text-xl text-stone-900 mb-2">{prog.title}</h3>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`w-8 h-[2px] ${prog.accent === 'terracotta' ? 'bg-terracotta-400' :
                                                        prog.accent === 'sage' ? 'bg-sage-400' : 'bg-gold-400'
                                                    }`} />
                                                <span className="text-stone-400 text-xs uppercase tracking-wider">{prog.duration}</span>
                                            </div>
                                            <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-4">{prog.description}</p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-6">
                                                {prog.features.slice(0, 3).map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs text-stone-500">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${prog.accent === 'terracotta' ? 'bg-terracotta-400' :
                                                                prog.accent === 'sage' ? 'bg-sage-400' : 'bg-gold-400'
                                                            }`} />
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                                <span className="text-stone-800 font-semibold text-sm">{prog.price}</span>
                                                <button className={`text-xs uppercase tracking-wider font-bold flex items-center gap-1 transition-colors ${prog.accent === 'terracotta' ? 'text-terracotta-500 hover:text-terracotta-700' :
                                                        prog.accent === 'sage' ? 'text-sage-600 hover:text-sage-800' : 'text-gold-600 hover:text-gold-800'
                                                    }`}>
                                                    Learn More <span>→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container-wide max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 space-y-4"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">Common Questions</span>
                        <h2 className="font-serif text-4xl text-stone-900">Frequently <span className="italic text-sage-600">Asked</span></h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { q: 'Do I need meditation experience to attend?', a: 'Not at all. Our programs welcome absolute beginners and advanced practitioners alike. We meet you where you are.' },
                            { q: 'What does "Sliding Scale" pricing mean?', a: 'It means you pay what feels right and financially responsible. We believe wisdom should never be gatekept by economics.' },
                            { q: 'Can I attend online from anywhere?', a: 'Yes! Our Digital Sangha and online courses are accessible from anywhere in the world with an internet connection.' },
                            { q: 'Are scholarships available?', a: 'Absolutely. We offer full and partial scholarships for all in-person programs. Apply during registration — no income verification needed. We trust you.' },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-stone-50 rounded-xl p-6 border border-stone-100"
                            >
                                <h4 className="font-serif text-lg text-stone-900 mb-2">{faq.q}</h4>
                                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
