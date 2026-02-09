"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if we've already shown the preloader this session
        const hasLoaded = sessionStorage.getItem("castangia_loaded");

        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        // Fake loading time for the experience
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("castangia_loaded", "true");
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-[#FDFCF8]"
                    exit={{ height: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="overflow-hidden relative">
                        <motion.h1
                            className="font-serif text-4xl md:text-6xl tracking-widest"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            CASTANGIA
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="h-px bg-[#D4AF37] mt-4"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-4 text-[10px] uppercase tracking-[0.4em] text-white/50"
                        >
                            Cagliari • 1850
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
