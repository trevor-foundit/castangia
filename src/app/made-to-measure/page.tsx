"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MadeToMeasure() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="relative bg-[#151515] text-[#FDFCF8] min-h-screen">

            {/* HER0 */}
            <section className="h-[100vh] relative z-10 flex items-center justify-center">
                <motion.div style={{ opacity: heroOpacity }} className="text-center px-6 relative z-20">
                    <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-8">Su Misura</p>
                    <h1 className="text-6xl md:text-9xl font-serif leading-none tracking-tight text-white/90">
                        The<br />Commission
                    </h1>
                </motion.div>
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                        alt="Measuring Tape"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/50 to-transparent"></div>
                </div>
            </section>

            {/* SCATTER STREAM */}
            <div className="relative z-20 pb-64 px-6 md:px-0">
                <div className="max-w-screen-xl mx-auto">

                    {/* Left: The Ritual */}
                    <div className="flex justify-start pl-0 md:pl-24 mb-40 md:mb-64">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full aspect-[4/5] relative overflow-hidden group rounded-sm mb-8"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2609&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                                    alt="Fabrics"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="text-right border-r border-[#D4AF37]/30 pr-8"
                            >
                                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">The Protocol</span>
                                <p className="text-lg leading-loose text-white/80 font-serif italic">
                                    "We do not fit the garment to the body. We fit the garment to the life."
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: The Library */}
                    <div className="flex justify-end pr-0 md:pr-24 mb-40 md:mb-64">
                        <div className="max-w-lg text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="mb-8"
                            >
                                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">The Archive</span>
                                <p className="text-2xl font-serif font-light leading-relaxed text-white/90">
                                    Super 180s. Vicuna. Como Silk.
                                </p>
                                <p className="mt-4 text-white/50 font-light">
                                    Every detail is a decision. Your decision.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Center: Appointment "Form" -> Now functionality of Oracle */}
                    <div className="flex justify-center mb-32">
                        <div className="max-w-md text-center">
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                whileInView={{ opacity: 0.5, height: 80 }}
                                transition={{ duration: 1 }}
                                className="w-px bg-[#D4AF37] mx-auto mb-10"
                            />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                className="text-xl font-serif text-white/60 italic"
                            >
                                Cagliari. Milano. New York.
                            </motion.p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ORACLE */}
            <div className="fixed bottom-8 left-6 right-6 z-50 flex justify-center pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                    className="w-full max-w-2xl pointer-events-auto"
                >
                    <div className="relative group rounded-full">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                        <div className="relative flex items-center bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                            <Sparkles className="w-5 h-5 text-[#D4AF37] mr-4 animate-pulse" />
                            <input
                                type="text"
                                placeholder="Begin the dialogue..."
                                className="w-full bg-transparent text-lg font-serif text-white/90 placeholder:text-white/30 focus:outline-none focus:placeholder:text-white/10 transition-colors"
                            />
                            <button className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors">
                                <ArrowRight className="w-5 h-5 text-white/50 hover:text-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
