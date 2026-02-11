'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { quote: "Samsara isn't just a place. It's a remembering of who we truly are.", author: 'Elena Reyes', role: 'Member since 2021', initials: 'ER', bg: 'bg-terracotta-100' },
    { quote: "The transparency here changed how I view giving. Every rupee is sacred.", author: 'Marcus Thompson', role: 'Donor Partner', initials: 'MT', bg: 'bg-sage-100' },
    { quote: "Deep, rigorous, and completely devoid of fluff. This is real work.", author: 'Sarah Liu', role: 'Retreat Participant', initials: 'SL', bg: 'bg-gold-100' },
    { quote: "I came for a weekend. I stayed for six months. My whole life changed.", author: 'Raj Patel', role: 'Resident Practitioner', initials: 'RP', bg: 'bg-stone-200' },
    { quote: "The online sangha gave me community when I had none. I meditate every Sunday with thousands.", author: 'Marie Dubois', role: 'Digital Sangha Member', initials: 'MD', bg: 'bg-sage-100' },
    { quote: "As a teacher, the training here was the most rigorous and transformative I've experienced.", author: 'James Wright', role: 'Certified Teacher', initials: 'JW', bg: 'bg-terracotta-100' },
];

const events = [
    { title: 'Full Moon Meditation', date: 'Every Full Moon', type: 'Online & In-Person', accent: 'terracotta' },
    { title: 'Spring Silent Retreat', date: 'March 15–22, 2026', type: 'In-Person', accent: 'sage' },
    { title: 'Global Meditation Day', date: 'April 1, 2026', type: 'Online', accent: 'gold' },
    { title: 'Ayurveda Workshop', date: 'April 10–12, 2026', type: 'Hybrid', accent: 'terracotta' },
    { title: 'Summer Teacher Training', date: 'June 1 – Nov 30, 2026', type: 'In-Person', accent: 'sage' },
    { title: 'Winter Solstice Gathering', date: 'December 21, 2026', type: 'Online & In-Person', accent: 'gold' },
];

const communityStats = [
    { value: '12,500+', label: 'Lives Touched', icon: '❤️' },
    { value: '45', label: 'Active Programs', icon: '📿' },
    { value: '15', label: 'Countries', icon: '🌍' },
    { value: '200+', label: 'Volunteers', icon: '🙏' },
    { value: '45,000', label: 'Newsletter Subscribers', icon: '📬' },
    { value: '500+', label: 'Certified Teachers', icon: '🧘' },
];

export default function CommunityPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-sage-900 to-terracotta-900" />
                <div className="absolute inset-0 opacity-[0.04]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="community-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                                <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                                <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#community-pattern)" />
                    </svg>
                </div>
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-terracotta-700/20 rounded-full blur-[150px]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block">
                        Sangha
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl text-white leading-[0.95]"
                    >
                        We walk this path <span className="italic text-sage-300 font-light">together</span>.
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-stone-400 text-lg max-w-xl mx-auto">
                        A global community of seekers, practitioners, teachers, and volunteers united by the practice.
                    </motion.p>
                </div>
            </section>

            {/* Community Stats */}
            <section className="py-20 bg-stone-50">
                <div className="container-wide">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {communityStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="text-center p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <span className="text-3xl block mb-3">{stat.icon}</span>
                                <div className="font-serif text-2xl text-stone-900">{stat.value}</div>
                                <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 border border-sage-200 rounded-full opacity-30" />
                <div className="absolute bottom-20 right-10 w-48 h-48 border border-terracotta-200 rounded-full opacity-20" />

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 space-y-4"
                    >
                        <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">Voices</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                            Stories from the <span className="italic text-sage-600">Path</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <div className="text-5xl font-serif text-terracotta-200 leading-none mb-4">&ldquo;</div>
                                <p className="font-serif text-lg text-stone-700 italic leading-relaxed flex-grow">{t.quote}</p>
                                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-stone-100">
                                    <div className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center font-serif text-sm text-stone-600`}>{t.initials}</div>
                                    <div>
                                        <div className="font-semibold text-stone-900 text-sm">{t.author}</div>
                                        <div className="text-stone-500 text-xs uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Calendar */}
            <section className="py-28 bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
                    >
                        <div className="space-y-4">
                            <span className="text-terracotta-500 uppercase tracking-[0.3em] text-xs font-bold">Upcoming</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
                                Events & <span className="italic text-sage-600">Gatherings</span>
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((e, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className={`w-fit px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold mb-4 ${e.accent === 'terracotta' ? 'bg-terracotta-100 text-terracotta-700' :
                                        e.accent === 'sage' ? 'bg-sage-100 text-sage-700' : 'bg-gold-100 text-gold-700'
                                    }`}>{e.type}</div>
                                <h3 className="font-serif text-xl text-stone-900 mb-2 group-hover:text-sage-700 transition-colors">{e.title}</h3>
                                <p className="text-stone-500 text-sm">{e.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-28 bg-gradient-to-br from-sage-800 via-sage-900 to-stone-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                        <defs>
                            <pattern id="join-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#join-pattern)" />
                    </svg>
                </div>

                <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-white">
                            Ready to <span className="italic text-terracotta-300">join</span> the community?
                        </h2>
                        <p className="text-sage-300 text-lg">Whether online or in-person, there&apos;s a place for you here.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-10 py-5 bg-terracotta-500 hover:bg-terracotta-400 text-white rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            Join Online Sangha
                        </button>
                        <button className="px-10 py-5 border-2 border-sage-400 text-sage-200 hover:bg-sage-700 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-1">
                            Volunteer With Us
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
