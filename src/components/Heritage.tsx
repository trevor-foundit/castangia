"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Heritage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex items-center justify-center overflow-hidden bg-[#101010] text-[#FDFCF8]">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y, scale: 1.1 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2148&auto=format&fit=crop" // High fidelity fabric/tailoring shot
                        alt="Atelier Detail"
                        className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]"></div>
                </motion.div>
            </div>

            {/* Floating content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-24">

                <motion.div
                    style={{ opacity }}
                    className="space-y-8"
                >
                    <span className="block text-xs uppercase tracking-[0.4em] text-[#D4AF37]">The Method</span>
                    <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tight">
                        Silence is the<br />loudest sound.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center pt-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-[#FDFCF8]/90">
                            In a world that shouts, we whisper. <br />
                            170 years of quiet perfection.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="space-y-6 text-[#FDFCF8]/60 font-mono text-xs md:text-sm tracking-wide"
                    >
                        <p>
                            CAGLIARI, SARDINIA / EST. 1850
                        </p>
                        <p>
                            We do not manufacture. We create. Each piece is a dialogue between the cloth and the cutter, spoken in the language of the needle.
                        </p>
                        <div className="w-12 h-px bg-[#D4AF37]"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
