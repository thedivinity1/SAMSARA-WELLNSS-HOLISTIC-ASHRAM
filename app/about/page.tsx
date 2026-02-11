'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
    { title: 'Ahimsa', subtitle: 'Non-Violence', desc: 'Compassion in every action, thought, and word.', icon: '🕊️', color: 'from-sage-600 to-sage-800' },
    { title: 'Satya', subtitle: 'Truth', desc: 'Radical honesty with self and the world.', icon: '💎', color: 'from-terracotta-500 to-terracotta-700' },
    { title: 'Seva', subtitle: 'Selfless Service', desc: 'Work as worship. Community before self.', icon: '🙏', color: 'from-gold-500 to-gold-700' },
    { title: 'Svadhyaya', subtitle: 'Self-Study', desc: 'Continuous inquiry into the nature of being.', icon: '📿', color: 'from-stone-600 to-stone-800' },
];

const team = [
    { name: 'Ananda Sharma', role: 'Founder & Spiritual Director', bio: 'Former neuroscientist turned contemplative. 20+ years of practice across Zen, Vedanta, and modern mindfulness traditions.', initials: 'AS', bg: 'bg-sage-100' },
    { name: 'Priya Menon', role: 'Director of Programs', bio: 'Certified yoga therapist and Ayurvedic practitioner. Designs transformative retreat experiences.', initials: 'PM', bg: 'bg-terracotta-100' },
    { name: 'David Chen', role: 'Head of Community', bio: 'Social impact leader with a decade of experience building conscious communities worldwide.', initials: 'DC', bg: 'bg-gold-100' },
    { name: 'Lakshmi Devi', role: 'Chief Transparency Officer', bio: 'Former auditor ensuring every donation is tracked, reported, and deployed with integrity.', initials: 'LD', bg: 'bg-stone-200' },
];

const milestones = [
    { year: '2020', title: 'The Seed', desc: 'Samsara was born as a small meditation circle in Mumbai with 12 members.' },
    { year: '2021', title: 'NGO Registration', desc: 'Officially registered as a non-profit. First silent retreat held with 40 participants.' },
    { year: '2022', title: 'The Ashram', desc: 'Acquired land in the Himalayan foothills. Construction begins on the living ashram.' },
    { year: '2023', title: 'Digital Expansion', desc: 'Launched online programs reaching 5,000+ seekers across 12 countries.' },
    { year: '2024', title: 'Global Community', desc: '12,500+ lives touched. Teacher training program launched. Full ashram operations begin.' },
    { year: '2025', title: 'Scaling Impact', desc: 'Partnership with global wellness organizations. 45 community programs running simultaneously.' },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-sage-900 to-stone-950" />
                <div className="absolute inset-0 opacity-[0.04]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="about-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#about-dots)" />
                    </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-800/30 rounded-full blur-[150px]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]"
                    >
                        Born from <span className="italic text-sage-300 font-light">Silence</span>,{' '}
                        <br className="hidden md:block" />
                        Built with <span className="italic text-terracotta-300 font-light">Purpose</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Samsara Wellness is a registered NGO, living ashram, and global community bridging ancient wisdom with modern science.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-28 bg-stone-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/3" />

                <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold inline-flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-terracotta-400" /> Our Mission
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-[1.1]">
                            Make wellness <span className="italic text-sage-600">accessible</span>, not exclusive.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            We exist to dismantle the barriers between people and their inner peace. Through free programs,
                            open-source wisdom, and radical transparency, we&apos;re building a world where spiritual growth
                            isn&apos;t a luxury — it&apos;s a birthright.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-sage-600 uppercase tracking-[0.3em] text-xs font-bold inline-flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-sage-400" /> Our Vision
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-[1.1]">
                            A world that <span className="italic text-terracotta-500">meditates</span> together.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            We envision a global network of conscious communities—physical ashrams and digital sanctuaries—where
                            ancient practices meet scientific rigor, and where every human has access to tools for
                            transformation, regardless of background or income.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-28 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20 space-y-4"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">Our Foundation</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                            Rooted in <span className="italic text-sage-600">Ancient Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className={`bg-gradient-to-br ${v.color} rounded-2xl p-8 text-white h-full flex flex-col justify-between min-h-[280px] relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                                    <div className="text-4xl mb-4">{v.icon}</div>
                                    <div className="space-y-2 relative z-10">
                                        <h3 className="font-serif text-2xl">{v.title}</h3>
                                        <p className="text-white/70 text-xs uppercase tracking-widest font-bold">{v.subtitle}</p>
                                        <p className="text-white/80 text-sm leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta-100 rounded-full blur-[120px] opacity-30 -translate-x-1/3 translate-y-1/3" />

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20 space-y-4"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">The Guides</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                            Led by <span className="italic text-sage-600">practitioners</span>, not executives.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                    <div className={`w-20 h-20 rounded-full ${t.bg} flex items-center justify-center font-serif text-2xl text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {t.initials}
                                    </div>
                                    <h3 className="font-serif text-xl text-stone-900 mb-1">{t.name}</h3>
                                    <p className="text-terracotta-500 text-xs uppercase tracking-wider font-bold mb-4">{t.role}</p>
                                    <p className="text-stone-500 text-sm leading-relaxed flex-grow">{t.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-28 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="timeline-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#timeline-grid)" />
                    </svg>
                </div>

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20 space-y-4"
                    >
                        <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">Our Journey</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">
                            From a Seed to a <span className="italic text-sage-400">Sanctuary</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-terracotta-500 via-sage-500 to-terracotta-500 opacity-30" />

                        {milestones.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative flex items-start mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                                    <span className="text-terracotta-400 font-serif text-3xl block mb-2">{m.year}</span>
                                    <h3 className="font-serif text-xl text-white mb-2">{m.title}</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed">{m.desc}</p>
                                </div>
                                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-terracotta-500 rounded-full border-4 border-stone-900 z-10" />
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
