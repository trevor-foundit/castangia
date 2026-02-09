"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function VelvetRope() {
    return (
        <section className="relative py-48 bg-[#050505] text-[#FDFCF8] overflow-hidden">
            <div className="max-w-xl mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]/80">Restricted Access</span>
                        <h2 className="text-3xl md:text-4xl font-serif">The Private Atelier</h2>
                    </div>

                    <form className="relative max-w-sm mx-auto group">
                        <input
                            type="password"
                            placeholder="Enter Access Key"
                            className="w-full bg-transparent border-b border-[#333] py-4 text-center text-xl tracking-[0.2em] placeholder-white/10 focus:outline-none focus:border-[#D4AF37] transition-colors duration-500"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="text-[10px] uppercase tracking-widest text-white/20">
                        For authorized retailers and private clients only
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
