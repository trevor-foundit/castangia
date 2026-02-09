"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WorldOfCastangia() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const articles = [
        {
            id: 1,
            category: "Heritage",
            title: "The Air of Cagliari",
            excerpt: "How the Mediterranean breeze shapes our philosophy of lightness.",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop",
            align: "self-start",
            width: "max-w-xl"
        },
        {
            id: 2,
            category: "Style",
            title: "The Neapolitan Shoulder",
            excerpt: "Deconstructing the myth of the 'Spalla Camicia'.",
            image: "https://images.unsplash.com/photo-1598555230910-18eaf396f481?q=80&w=2574&auto=format&fit=crop",
            align: "self-end",
            width: "max-w-lg",
            margin: "-mt-24"
        },
        {
            id: 3,
            category: "Events",
            title: "Pitti Uomo 107",
            excerpt: "A look back at our presentation in Florence.",
            image: "https://images.unsplash.com/photo-1511511450040-677116ff8231?q=80&w=2673&auto=format&fit=crop",
            align: "self-center",
            width: "max-w-2xl",
            margin: "mt-24"
        }
    ];

    return (
        <div ref={containerRef} className="relative bg-[#151515] text-[#FDFCF8] min-h-screen">

            {/* HERO */}
            <section className="h-[80vh] relative z-10 flex items-center justify-center border-b border-white/5">
                <motion.div style={{ opacity: heroOpacity }} className="text-center px-6">
                    <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-8">The Journal</p>
                    <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight text-white/90">
                        World of<br />Castangia
                    </h1>
                </motion.div>
            </section>

            {/* SCATTER FEED */}
            <div className="relative z-20 pb-64 px-6 md:px-12 pt-32">
                <div className="max-w-[1400px] mx-auto flex flex-col">

                    {/* Featured Article */}
                    <div className="mb-48 relative group cursor-pointer">
                        <div className="w-full aspect-[21/9] overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2574&auto=format&fit=crop"
                                alt="Amalfi Coast"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                        <div className="mt-8 flex justify-between items-end">
                            <div>
                                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">Editorial</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-white">Summer in Sardinia</h2>
                            </div>
                            <ArrowRight className="w-6 h-6 text-white/50 group-hover:translate-x-4 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Article Stream */}
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: index * 0.2 }}
                            className={`flex flex-col group mb-32 ${article.align} ${article.width} ${article.margin || ""}`}
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                />
                            </div>
                            <div>
                                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{article.category}</span>
                                <h3 className="text-3xl font-serif text-white mt-2 group-hover:text-[#D4AF37] transition-colors">{article.title}</h3>
                                <p className="text-white/50 mt-2 font-serif italic">{article.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}

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
                                placeholder="Search the journal..."
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
