'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GuidedMicroPractice } from '@/components/home/GuidedMicroPractice';
import { DoshaQuiz } from '@/components/tools/DoshaQuiz';
import { MeditationTimer } from '@/components/tools/MeditationTimer';
import { ChakraAssessment } from '@/components/tools/ChakraAssessment';

const dailySchedule = [
    { time: '5:00 AM', practice: 'Morning Meditation', type: 'Silence', icon: '🧘' },
    { time: '6:00 AM', practice: 'Yoga Asana', type: 'Movement', icon: '🌅' },
    { time: '7:30 AM', practice: 'Pranayama', type: 'Breathwork', icon: '🌬️' },
    { time: '12:00 PM', practice: 'Mindful Eating', type: 'Nourishment', icon: '🍃' },
    { time: '4:00 PM', practice: 'Walking Meditation', type: 'Movement', icon: '🚶' },
    { time: '6:00 PM', practice: 'Evening Satsang', type: 'Study', icon: '📿' },
    { time: '9:00 PM', practice: 'Yoga Nidra', type: 'Rest', icon: '🌙' },
];

const resources = [
    { title: 'Beginner\'s Guide to Meditation', desc: 'A gentle 7-day introduction to stillness.', category: 'Guide', accent: 'sage' },
    { title: 'The Yoga Sutras Explained', desc: 'Ancient wisdom made accessible for modern seekers.', category: 'Text', accent: 'terracotta' },
    { title: 'Ayurvedic Daily Routine', desc: 'Design your day around natural cycles.', category: 'Guide', accent: 'gold' },
    { title: 'Sound Healing Library', desc: 'Singing bowls, mantras, and binaural beats.', category: 'Audio', accent: 'sage' },
    { title: 'Journaling Prompts for Self-Inquiry', desc: '52 weeks of deep reflection questions.', category: 'Guide', accent: 'terracotta' },
    { title: 'Mantra Collection', desc: 'Sacred chants from Vedic, Buddhist, and Sufi traditions.', category: 'Audio', accent: 'gold' },
];

export default function PracticePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-sage-50 to-stone-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sage-200 rounded-full opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sage-300 rounded-full opacity-15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-terracotta-200 rounded-full opacity-20" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-terracotta-500 uppercase tracking-[0.4em] text-xs font-bold block">
                        Your Daily Practice
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.95]"
                    >
                        Tools for <span className="italic text-sage-600 font-light">Transformation</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-stone-500 text-lg max-w-xl mx-auto">
                        Interactive practices you can use right now. No download needed.
                    </motion.p>
                </div>
            </section>

            {/* Interactive Tools */}
            <MeditationTimer />
            <GuidedMicroPractice />
            <ChakraAssessment />
            <DoshaQuiz />

            {/* Daily Practice Schedule */}
            <section className="py-28 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="schedule-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#schedule-dots)" />
                    </svg>
                </div>

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20 space-y-4"
                    >
                        <span className="text-terracotta-400 uppercase tracking-[0.3em] text-xs font-bold">Suggested Rhythm</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">
                            A Day of <span className="italic text-sage-400">Practice</span>
                        </h2>
                        <p className="text-stone-500 max-w-md mx-auto">Follow this rhythm to align your day with natural cycles.</p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {dailySchedule.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-6 p-5 bg-stone-800/50 rounded-xl border border-stone-700/50 hover:border-sage-600/50 hover:bg-stone-800/80 transition-all duration-300 group"
                            >
                                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                                <div className="flex-grow">
                                    <h4 className="text-white font-medium">{item.practice}</h4>
                                    <span className="text-stone-500 text-xs uppercase tracking-wider">{item.type}</span>
                                </div>
                                <span className="text-terracotta-400 font-serif text-lg">{item.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Library */}
            <section className="py-28 bg-stone-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/3" />

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 space-y-4"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">Free Resources</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                            Wisdom <span className="italic text-sage-600">Library</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((r, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-xl p-6 border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${r.accent === 'sage' ? 'bg-sage-100 text-sage-700' :
                                        r.accent === 'terracotta' ? 'bg-terracotta-100 text-terracotta-700' : 'bg-gold-100 text-gold-700'
                                    }`}>{r.category}</span>
                                <h4 className="font-serif text-lg text-stone-900 mt-4 mb-2 group-hover:text-sage-700 transition-colors">{r.title}</h4>
                                <p className="text-stone-500 text-sm leading-relaxed">{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
