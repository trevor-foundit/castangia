"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Collections() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const collectionItems = [
        {
            id: 1,
            category: "01 — Tailoring",
            title: "The Double Breasted",
            description: "Drape. Structure. Authority.",
            image: "/images/upload-5.jpg",
            aspect: "aspect-[3/4]",
            width: "w-full md:w-5/12",
            align: "self-start",
            delay: 0
        },
        {
            id: 2,
            category: "02 — Sportswear",
            title: "Leisure Refined",
            description: "The uniform of the exception.",
            image: "/images/upload-6.jpg",
            aspect: "aspect-[16/9]",
            width: "w-full md:w-6/12",
            align: "self-end",
            margin: "mt-0 md:-mt-32", // Overlap effect
            delay: 0.2
        },
        {
            id: 3,
            category: "03 — Knitwear",
            title: "Tactile Warmth",
            description: "Pure Vicuna. 100% Cashmere.",
            image: "/images/upload-7.jpg",
            aspect: "aspect-[4/5]",
            width: "w-full md:w-4/12",
            align: "self-center",
            margin: "mt-24 md:mt-32",
            delay: 0
        },
        {
            id: 4,
            category: "04 — Outerwear",
            title: "The Great Coat",
            description: "Armor for the modern protagonist.",
            image: "/images/upload-4.jpg",
            aspect: "aspect-[16/9]",
            width: "w-full md:w-8/12",
            align: "self-start",
            margin: "mt-24 md:mt-48",
            delay: 0.2
        }
    ];

    return (
        <div ref={containerRef} className="relative bg-[#151515] text-[#FDFCF8] min-h-screen">

            {/* 
                SCENE 1: THE COLLECTION INTRO
            */}
            <section className="h-[100vh] relative z-10 flex items-center justify-center">
                <motion.div style={{ opacity: heroOpacity }} className="text-center px-6">
                    <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-8">Autunno / Inverno</p>
                    <h1 className="text-6xl md:text-9xl font-serif leading-none tracking-tight text-white/90">
                        Sardinian<br />Soul
                    </h1>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent pointer-events-none"></div>
            </section>


            {/* 
                SCENE 2: THE SCATTER GRID
                Asymmetrical, overlapping, curated.
            */}
            <section className="relative z-20 pb-64 px-6 md:px-12">
                <div className="max-w-[1600px] mx-auto flex flex-col">

                    {collectionItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: item.delay }}
                            className={`flex flex-col group mb-32 ${item.align} ${item.width} ${item.margin || ""}`}
                        >
                            <div className={`${item.aspect} relative overflow-hidden rounded-sm cursor-none`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">{item.category}</span>
                                        <h3 className="text-3xl font-serif text-white">{item.title}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile caption (visible below image) */}
                            <div className="mt-4 md:hidden">
                                <span className="text-xs text-[#D4AF37] uppercase">{item.category}</span>
                                <h3 className="text-2xl font-serif mt-1">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Editorial Footer Quote */}
                <div className="max-w-screen-md mx-auto text-center py-32">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-xl md:text-3xl font-serif font-light leading-relaxed text-white/60 italic"
                    >
                        &quot;We do not chase the market. To wear Castangia is to step outside of time.&quot;
                    </motion.p>
                </div>

            </section>

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
                                placeholder="Locate a garment..."
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
