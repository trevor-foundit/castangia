"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Sartorial Art", href: "/sartorial-art", image: "/images/upload-1.jpg" },
    { label: "Collections", href: "/collections", image: "/images/upload-3.jpg" },
    { label: "Made to Measure", href: "/made-to-measure", image: "/images/upload-2.jpg" },
    { label: "World of Castangia", href: "/world", image: "/images/upload-4.jpg" },
    { label: "Fabrics", href: "/fabrics", image: "/images/upload-7.jpg" },
    { label: "Ateliers", href: "/boutiques", image: "/images/upload-5.jpg" },
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
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#151515] text-[#FDFCF8] flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-50 p-2 hover:rotate-90 transition-transform duration-500"
                    >
                        <X className="w-8 h-8 text-[#FDFCF8]" strokeWidth={1} />
                    </button>

                    {/* Left Panel: Navigation Links */}
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-8 md:p-16 lg:p-20 relative z-20">

                        <div className="space-y-2">
                            <div className="w-full h-px bg-white/10 mb-8"></div>
                            <div className="flex justify-between items-end">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Navigation</p>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Est. 1850</p>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-2 mt-8">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (index * 0.05), duration: 0.5, ease: "easeOut" }}
                                    className="group relative"
                                    onMouseEnter={() => setHoveredItem(item)}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-baseline gap-6 py-2"
                                    >
                                        <span className="text-xs font-mono text-white/30 group-hover:text-[#D4AF37] transition-colors duration-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-serif text-5xl md:text-6xl lg:text-7xl group-hover:text-white/80 transition-colors duration-500">
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-6 mt-12">
                            <div className="w-full h-px bg-white/10"></div>
                            <div className="flex justify-between items-center text-white/40 text-sm">
                                <div className="flex gap-8">
                                    <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Instagram</a>
                                    <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Facebook</a>
                                    <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Linkedin</a>
                                </div>
                                <a href="mailto:concierge@castangia.com" className="hover:text-white transition-colors uppercase tracking-widest text-xs hidden md:block">concierge@castangia.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Dynamic Hover Image */}
                    <div className="absolute inset-0 md:relative md:w-1/2 h-full overflow-hidden pointer-events-none md:pointer-events-auto bg-[#0a0a0a]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={hoveredItem.label}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={hoveredItem.image}
                                    alt={hoveredItem.label}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#151515] opacity-50"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
