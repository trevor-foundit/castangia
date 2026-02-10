"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SartorialArt() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax Effects
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    return (
        <div ref={containerRef} className="relative bg-[#151515] text-[#FDFCF8] min-h-screen">

            {/* 
                SCENE 1: THE ATMOSPHERE (Intro)
            */}
            <section className="h-[120vh] relative z-10">
                <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                    <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=2574&auto=format&fit=crop"
                            alt="The Atelier"
                            className="w-full h-full object-cover grayscale opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151515]/20 to-[#151515]"></div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: heroOpacity }}
                        className="relative z-20 text-center max-w-4xl px-4"
                    >
                        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#D4AF37] mb-8">The Discipline</p>
                        <h1 className="text-6xl md:text-9xl font-serif leading-none tracking-tight mix-blend-overlay opacity-90">
                            170<br />Operations
                        </h1>
                        <p className="mt-8 text-xl font-light text-white/80 max-w-lg mx-auto leading-relaxed">
                            We do not manufacture. We create.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* 
                SCENE 2: THE SCATTER STREAM (Process)
            */}
            <div className="relative z-20 pb-64 px-6 md:px-0">
                <div className="max-w-screen-xl mx-auto">

                    {/* Step 1: The Cut (Right Align) */}
                    <div className="flex justify-end pr-0 md:pr-24 mb-40 md:mb-64">
                        <div className="max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="mb-8 text-right"
                            >
                                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">01. The Architecture</span>
                                <p className="text-2xl font-serif font-light leading-relaxed text-white/90 italic">
                                    &quot;The pattern is not a suggestion. It is a law.&quot;
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full aspect-[4/5] relative overflow-hidden group rounded-sm"
                            >
                                <img
                                    src="/images/upload-1.jpg"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                                    alt="Pattern Cutting"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Step 2: The Hand (Left Align) */}
                    <div className="flex justify-start pl-0 md:pl-24 mb-40 md:mb-64">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full aspect-video relative overflow-hidden group rounded-sm mb-8"
                            >
                                <img
                                    src="/images/upload-2.jpg"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                                    alt="Hand Sewing"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="pl-8 border-l border-[#D4AF37]/30"
                            >
                                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">02. The Pulse</span>
                                <p className="text-lg leading-loose text-white/80 font-serif">
                                    The machine has no memory. The hand remembers everything. Every stitch is a decision made by an artisan.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Step 3: The Obsession (Center) */}
                    <div className="flex justify-center mb-48">
                        <div className="max-w-md text-center">
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                whileInView={{ opacity: 0.5, height: 80 }}
                                transition={{ duration: 1 }}
                                className="w-px bg-[#D4AF37] mx-auto mb-10"
                            />
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.2 }}
                                className="text-5xl font-serif text-white/90 mb-6"
                            >
                                25 Hours
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                className="text-sm uppercase tracking-[0.2em] text-white/40"
                            >
                                Minimum. Per Jacket.
                            </motion.p>
                        </div>
                    </div>

                    {/* Step 4: The Detail (Large Feature) */}
                    <div className="flex justify-center mb-32 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                            className="w-full max-w-5xl aspect-[21/9] relative overflow-hidden group rounded-sm"
                        >
                            <img
                                src="/images/upload-3.jpg"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-1000"
                                alt="Final Detail"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl md:text-5xl font-serif text-white/0 group-hover:text-white/90 transition-colors duration-700 transform translate-y-4 group-hover:translate-y-0 italic">
                                    Imperfection is the proof.
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* 
                THE PERSISTENT ORACLE 
            */}
            <div className="fixed bottom-8 left-6 right-6 z-50 flex justify-center pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                    className="w-full max-w-2xl pointer-events-auto"
                >
                    <div className="relative group rounded-full">
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

                        {/* Glass Container */}
                        <div className="relative flex items-center bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                            <Sparkles className="w-5 h-5 text-[#D4AF37] mr-4 animate-pulse" />
                            <input
                                type="text"
                                placeholder="Inquire about the process..."
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
