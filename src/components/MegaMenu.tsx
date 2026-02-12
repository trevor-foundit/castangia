"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Sartorial Art", href: "/sartorial-art", image: "/images/campaign/2026/IMG_3672.JPG" },
    { label: "Collections", href: "/collections", image: "/images/campaign/2026/IMG_3677.JPG" },
    { label: "Made to Measure", href: "/made-to-measure", image: "/images/campaign/2026/IMG_3667.JPG" },
    { label: "World of Castangia", href: "/world", image: "/images/campaign/2026/IMG_3676.JPG" },
    { label: "Fabrics", href: "/fabrics", image: "/images/campaign/2026/IMG_3671.JPG" },
    { label: "Ateliers", href: "/boutiques", image: "/images/campaign/2026/IMG_3673.JPG" },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const [hoveredItem, setHoveredItem] = useState(menuItems[0]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#FDFCF8] flex flex-col md:flex-row overflow-y-auto max-h-screen"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-8 right-8 z-50 p-4 hover:scale-110 transition-transform duration-500 group mix-blend-difference"
                    >
                        <X className="w-8 h-8 text-[#FDFCF8] group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
                    </button>

                    {/* Left Panel: Navigation Links */}
                    <div className="w-full md:w-1/2 min-h-full flex flex-col justify-between p-8 md:p-16 lg:p-24 relative z-20 bg-[#0a0a0a]">

                        <div className="space-y-4">
                            <div className="w-full h-px bg-white/10 mb-8 origin-left" />
                            <div className="flex justify-between items-end mb-12">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Navigation</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Est. 1850</p>
                            </div>

                            <nav className="flex flex-col gap-1">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (index * 0.05), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredItem(item)}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="block py-1"
                                        >
                                            <div className="flex items-baseline gap-6 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                                <span className="text-[10px] font-mono text-white/20 group-hover:text-[#D4AF37] transition-colors duration-300 -translate-y-2">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/60 group-hover:text-white group-hover:italic transition-all duration-500">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        <div className="flex flex-col gap-8 mt-24">
                            <div className="w-full h-px bg-white/10 origin-left"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-white/40 text-[10px] uppercase tracking-[0.2em]">
                                <div className="flex gap-8">
                                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                                    <a href="#" className="hover:text-white transition-colors">Linkedin</a>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    <a href="mailto:concierge@castangia.com" className="hover:text-white transition-colors">concierge@castangia.com</a>
                                    <Link href="/dealer-portal" onClick={onClose} className="hover:text-[#D4AF37] transition-colors">Dealer Portal</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Dynamic Hover Image */}
                    <div className="hidden md:block md:w-1/2 h-full fixed right-0 top-0 bottom-0 overflow-hidden bg-[#111]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={hoveredItem.label}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={hoveredItem.image}
                                    alt={hoveredItem.label}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
