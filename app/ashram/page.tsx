'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const facilities = [
    { name: 'Meditation Hall', desc: 'A spacious, light-filled timber hall seating 100 practitioners. Heated floors, natural acoustics, and floor-to-ceiling forest views.', icon: '🧘', capacity: '100 seats' },
    { name: 'Organic Gardens', desc: 'Two acres of permaculture gardens growing seasonal vegetables, herbs, and medicinal plants. Work meditation happens here daily.', icon: '🌿', capacity: '2 acres' },
    { name: 'Community Kitchen', desc: 'A professional kitchen serving three sattvic meals daily. All food is organic, locally sourced, and prepared with mindfulness.', icon: '🍃', capacity: '3 meals/day' },
    { name: 'Library & Study Hall', desc: 'Over 3,000 texts spanning Vedanta, Buddhism, Sufism, and modern contemplative science. Silent study space available 24/7.', icon: '📚', capacity: '3,000+ texts' },
    { name: 'Healing Center', desc: 'Ayurvedic treatments, sound healing, and therapeutic bodywork by certified practitioners.', icon: '🌸', capacity: 'By appointment' },
    { name: 'Walking Trails', desc: 'Five kilometers of forest trails for walking meditation, connecting the ashram to mountain viewpoints.', icon: '🌲', capacity: '5 km' },
];

const schedule = [
    { time: '4:30 AM', activity: 'Wake-up Bell', phase: 'dawn' },
    { time: '5:00 AM', activity: 'Morning Meditation', phase: 'dawn' },
    { time: '6:30 AM', activity: 'Yoga Asana Practice', phase: 'morning' },
    { time: '8:00 AM', activity: 'Breakfast (Silent)', phase: 'morning' },
    { time: '9:00 AM', activity: 'Karma Yoga (Work Meditation)', phase: 'morning' },
    { time: '11:00 AM', activity: 'Teaching / Satsang', phase: 'midday' },
    { time: '12:30 PM', activity: 'Lunch', phase: 'midday' },
    { time: '1:30 PM', activity: 'Rest / Personal Practice', phase: 'afternoon' },
    { time: '3:00 PM', activity: 'Workshops / Study', phase: 'afternoon' },
    { time: '5:00 PM', activity: 'Walking Meditation', phase: 'evening' },
    { time: '6:30 PM', activity: 'Dinner', phase: 'evening' },
    { time: '7:30 PM', activity: 'Evening Meditation', phase: 'evening' },
    { time: '9:00 PM', activity: 'Noble Silence Begins', phase: 'night' },
];

export default function AshramPage() {
    const [activeTab, setActiveTab] = useState<'schedule' | 'facilities'>('schedule');

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-800 to-stone-900" />
                {/* Mountain landscape SVG */}
                <div className="absolute inset-0">
                    <svg className="absolute bottom-0 w-full opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none">
                        <defs>
                            <radialGradient id="ashram-sun" cx="50%" cy="90%" r="40%">
                                <stop offset="0%" stopColor="#d4a84a" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#ashram-sun)" />
                        <path d="M0 400 L150 200 L300 280 L500 120 L700 220 L850 80 L1000 160 L1200 60 L1200 400 Z" fill="#1c1917" opacity="0.5" />
                        <path d="M0 400 L200 250 L400 320 L600 180 L800 280 L1000 140 L1200 200 L1200 400 Z" fill="#292524" opacity="0.4" />
                    </svg>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 container-wide pb-20 space-y-8">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block">
                        The Physical Sanctuary
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] max-w-4xl"
                    >
                        Where the mountains <span className="italic text-sage-300 font-light">meet the soul</span>.
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-stone-400 text-lg max-w-xl">
                        108 Silence Valley, Himalayan Foothills, India. A living ashram open to all sincere seekers.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <button className="px-10 py-5 bg-terracotta-600 hover:bg-terracotta-500 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/30 hover:-translate-y-1">
                            Apply to Visit
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Tab Switcher */}
            <section className="py-20 bg-stone-50">
                <div className="container-wide">
                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-16">
                        {(['schedule', 'facilities'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 ${activeTab === tab ? 'bg-sage-700 text-white shadow-lg shadow-sage-300/30' : 'bg-white text-stone-600 border border-stone-200 hover:border-sage-400'
                                    }`}
                            >
                                {tab === 'schedule' ? 'Daily Schedule' : 'Facilities'}
                            </button>
                        ))}
                    </div>

                    {/* Schedule */}
                    {activeTab === 'schedule' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="relative">
                                <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400 via-sage-400 to-terracotta-400 opacity-30" />
                                {schedule.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="flex items-center gap-6 py-4 pl-16 relative group"
                                    >
                                        <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white z-10 ${item.phase === 'dawn' ? 'bg-gold-400' :
                                                item.phase === 'morning' ? 'bg-sage-400' :
                                                    item.phase === 'midday' ? 'bg-terracotta-400' :
                                                        item.phase === 'afternoon' ? 'bg-sage-500' :
                                                            item.phase === 'evening' ? 'bg-terracotta-500' : 'bg-stone-600'
                                            }`} />
                                        <span className="text-stone-400 font-mono text-sm w-20 shrink-0">{item.time}</span>
                                        <span className="text-stone-800 font-medium group-hover:text-sage-700 transition-colors">{item.activity}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Facilities */}
                    {activeTab === 'facilities' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {facilities.map((f, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                                >
                                    <span className="text-4xl block mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{f.icon}</span>
                                    <h3 className="font-serif text-xl text-stone-900 mb-2">{f.name}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                                    <span className="text-xs uppercase tracking-wider text-sage-600 font-bold">{f.capacity}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* How to Visit */}
            <section className="py-28 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-900/30 rounded-full blur-[150px]" />

                <div className="container-wide relative z-10 max-w-3xl mx-auto text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">Join Us</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">
                            How to <span className="italic text-sage-400">Visit</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            { step: '01', title: 'Apply', desc: 'Fill out a simple application sharing your intention and practice background.', icon: '📝' },
                            { step: '02', title: 'Prepare', desc: 'Receive your acceptance letter, travel guide, and pre-arrival practices.', icon: '🎒' },
                            { step: '03', title: 'Arrive', desc: 'Settle into your private room. Your journey into silence begins at sunset.', icon: '🏔️' },
                        ].map((s, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4"
                            >
                                <span className="text-4xl block">{s.icon}</span>
                                <span className="text-terracotta-400 font-serif text-3xl">{s.step}</span>
                                <h3 className="text-white font-serif text-xl">{s.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="px-10 py-5 bg-sage-600 hover:bg-sage-500 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/30 hover:-translate-y-1">
                            Begin Your Application
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
