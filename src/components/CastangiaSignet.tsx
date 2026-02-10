"use client";

import { motion } from "framer-motion";

export function CastangiaSignet({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-2xl"
                initial="initial"
                whileHover="hover"
            >
                {/* Outer Ring */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Inner Ring */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    className="opacity-50"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />

                {/* The "C" Monogram */}
                <motion.path
                    d="M 130 60 C 110 40, 90 40, 70 60 C 50 80, 50 120, 70 140 C 90 160, 110 160, 130 140"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />

                {/* The Date "1850" */}
                <motion.text
                    x="100"
                    y="175"
                    fontSize="12"
                    fontFamily="serif"
                    fill="#D4AF37"
                    textAnchor="middle"
                    letterSpacing="4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    1850
                </motion.text>

                {/* The Location "CAGLIARI" */}
                <motion.text
                    x="100"
                    y="35"
                    fontSize="8"
                    fontFamily="serif"
                    fill="#D4AF37"
                    textAnchor="middle"
                    letterSpacing="3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                >
                    CAGLIARI
                </motion.text>

            </motion.svg>
        </div>
    );
}
