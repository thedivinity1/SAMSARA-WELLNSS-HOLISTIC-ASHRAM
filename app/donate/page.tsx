'use client';
import React from 'react';
import { motion } from 'framer-motion';

const donationTiers = [
    { title: 'Pathfinder', amount: '$25', desc: 'Provides organic, sattvic meals for 5 retreatants for one day.', icon: '🍲' },
    { title: 'Sustainer', amount: '$108', desc: 'Supports a full scholarship for a weekend workshop for a local seeker.', icon: '🕯️' },
    { title: 'Guardian', amount: '$500', desc: 'Covers the maintenance of the meditation hall and gardens for one month.', icon: '🌳' },
    { title: 'Lineage Keeper', amount: 'Custom', desc: 'Directly funds our free digital sangha, reaching thousands globally.', icon: '🌍' },
];

export default function DonatePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta-900 via-stone-900 to-sage-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-terracotta-500/10 rounded-full blur-[150px]" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block">
                        Seva
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-7xl text-white leading-tight"
                    >
                        The Art of <span className="italic text-sage-300 font-light">Giving</span>.
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-stone-400 text-lg max-w-xl mx-auto">
                        Your support keeps our wisdom free and our doors open to all. Samsara is a registered NGO fueled by radical transparency.
                    </motion.p>
                </div>
            </section>

            {/* Donation Grid */}
            <section className="py-24 bg-stone-50">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {donationTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <span className="text-4xl mb-6 block">{tier.icon}</span>
                                <h3 className="font-serif text-xl text-stone-900 mb-2">{tier.title}</h3>
                                <div className="text-3xl font-serif text-terracotta-600 mb-4">{tier.amount}</div>
                                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">{tier.desc}</p>
                                <button className="w-full py-4 bg-stone-900 hover:bg-terracotta-600 text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-colors duration-300">
                                    Support
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency Promise */}
            <section className="py-24 bg-white">
                <div className="container-wide max-w-4xl mx-auto">
                    <div className="bg-sage-50 rounded-3xl p-12 md:p-16 border border-sage-100 items-center text-center space-y-8">
                        <span className="text-sage-600 uppercase tracking-widest text-xs font-bold">Radical Accountability</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Where does your <span className="italic text-sage-600">contribution</span> go?</h2>
                        <p className="text-stone-600 leading-relaxed">
                            For every dollar donated, 92 cents directly fund program operations, community meals, and teacher scholarships.
                            The remaining 8 cents cover essential digital infrastructure and administration. We publish our full audited
                            ledger every quarter for all community members to review.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-serif text-stone-900">92%</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Program Impact</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif text-stone-900">0</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Executive Pay</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif text-stone-900">100%</div>
                                <div className="text-[10px] uppercase tracking-wider text-stone-500">Transparency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other ways to help */}
            <section className="py-24 bg-stone-50">
                <div className="container-wide text-center">
                    <h2 className="font-serif text-3xl text-stone-900 mb-12">Other Ways to Practice <span className="italic text-terracotta-600">Seva</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl border border-stone-100 text-left space-y-4">
                            <h3 className="font-serif text-xl">Volunteer In-Person</h3>
                            <p className="text-stone-500 text-sm">Join our Karma Yoga program at the ashram. Help in the gardens, kitchen, or with facility maintenance.</p>
                            <button className="text-terracotta-600 text-sm font-bold uppercase tracking-wider">Learn More →</button>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-stone-100 text-left space-y-4">
                            <h3 className="font-serif text-xl">Share Your Skills</h3>
                            <p className="text-stone-500 text-sm">We are always looking for writer, designers, and developers to help with our digital offerings.</p>
                            <button className="text-terracotta-600 text-sm font-bold uppercase tracking-wider">Contact Us →</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
