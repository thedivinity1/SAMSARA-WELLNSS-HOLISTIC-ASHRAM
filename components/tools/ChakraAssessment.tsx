'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chakras = [
    { name: 'Root', sanskrit: 'Muladhara', color: 'bg-red-500', text: 'text-red-500', desc: 'Grounding, stability, and survival.' },
    { name: 'Sacral', sanskrit: 'Svadhisthana', color: 'bg-orange-500', text: 'text-orange-500', desc: 'Creativity, passion, and emotion.' },
    { name: 'Solar Plexus', sanskrit: 'Manipura', color: 'bg-yellow-500', text: 'text-yellow-500', desc: 'Power, will, and transformation.' },
    { name: 'Heart', sanskrit: 'Anahata', color: 'bg-green-500', text: 'text-green-500', desc: 'Love, compassion, and bridge.' },
    { name: 'Throat', sanskrit: 'Vishuddha', color: 'bg-blue-400', text: 'text-blue-400', desc: 'Truth, expression, and voice.' },
    { name: 'Third Eye', sanskrit: 'Ajna', color: 'bg-indigo-600', text: 'text-indigo-600', desc: 'Intuition, vision, and wisdom.' },
    { name: 'Crown', sanskrit: 'Sahasrara', color: 'bg-purple-600', text: 'text-purple-600', desc: 'Spirituality, connection, and unit.' },
];

export const ChakraAssessment = () => {
    const [selectedChakra, setSelectedChakra] = useState<number | null>(null);

    return (
        <section className="py-28 bg-stone-900 relative overflow-hidden" id="chakras">
            {/* Ethereal background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-terracotta-500/10 rounded-full blur-[100px] animate-pulse" />

            <div className="container-wide relative z-10 flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2 space-y-8">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-terracotta-400 uppercase tracking-[0.4em] text-xs font-bold block">Energy Alignment</motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-6xl text-white leading-tight"
                    >
                        Chakra <span className="italic text-sage-400">Energy Centers</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-stone-400 text-lg leading-relaxed">
                        The seven chakras are the main energy centers of the body. When they are open and aligned, our energy can flow freely.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {chakras.map((c, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setSelectedChakra(idx)}
                                className={`text-left p-6 rounded-2xl border transition-all duration-500 ${selectedChakra === idx ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`w-3 h-3 rounded-full ${c.color}`} />
                                    <h4 className="text-white font-serif">{c.name}</h4>
                                </div>
                                <p className="text-stone-500 text-xs uppercase tracking-widest">{c.sanskrit}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-80 h-[500px] flex flex-col justify-between items-center py-10">
                        {/* Vertical Alignment Line */}
                        <div className="absolute h-full w-[1px] bg-gradient-to-b from-purple-500 via-green-500 to-red-500 opacity-20" />

                        {chakras.toReversed().map((c, idx) => {
                            const actualIdx = 6 - idx;
                            return (
                                <motion.div
                                    key={actualIdx}
                                    animate={{
                                        scale: selectedChakra === actualIdx ? 1.5 : 1,
                                        opacity: selectedChakra === null || selectedChakra === actualIdx ? 1 : 0.4
                                    }}
                                    className={`relative z-10 w-8 h-8 rounded-full ${c.color} shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer`}
                                    onMouseEnter={() => setSelectedChakra(actualIdx)}
                                    title={c.name}
                                >
                                    <AnimatePresence>
                                        {selectedChakra === actualIdx && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                className="absolute left-10 top-1/2 -translate-y-1/2 w-48 bg-white rounded-xl p-4 shadow-2xl pointer-events-none"
                                            >
                                                <div className={`font-bold text-xs uppercase tracking-widest mb-1 ${c.text}`}>{c.name}</div>
                                                <p className="text-stone-600 text-[10px] leading-tight font-medium">{c.desc}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
