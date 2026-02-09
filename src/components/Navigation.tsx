"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, ShoppingBag, User, Search } from "lucide-react";
import Link from "next/link";
import { MegaMenu } from "@/components/MegaMenu";

export function Navigation() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <>
            <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "bg-cream/90 backdrop-blur-md border-b border-charcoal/5 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between text-charcoal">

                    {/* Left: Menu */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <Menu strokeWidth={1} className="w-5 h-5 group-hover:text-charcoal/60 transition-colors" />
                        <span className={`text-xs uppercase tracking-[0.2em] font-medium group-hover:underline underline-offset-4 decoration-charcoal/30 ${scrolled ? "text-charcoal" : "text-cream mix-blend-difference"}`}>
                            Menu
                        </span>
                    </button>

                    {/* Center: Logo (Only visible when scrolled past Hero) */}
                    <div className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}>
                        <Link href="/" className="font-serif text-2xl tracking-tight">
                            CASTANGIA
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className={`flex items-center gap-6 ${scrolled ? "text-charcoal" : "text-cream mix-blend-difference"}`}>
                        <Link href="/boutiques" className="hidden md:flex items-center gap-2 group">
                            <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:underline underline-offset-4 decoration-current/30">
                                Boutiques
                            </span>
                        </Link>
                        <button className="hidden md:flex items-center gap-2 group">
                            <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:underline underline-offset-4 decoration-current/30">
                                Bespoke
                            </span>
                        </button>
                        <div className="h-4 w-px bg-current/20 hidden md:block" />
                        <button className="hover:opacity-60 transition-opacity">
                            <Search strokeWidth={1} className="w-5 h-5" />
                        </button>
                        <button className="hover:opacity-60 transition-opacity">
                            <User strokeWidth={1} className="w-5 h-5" />
                        </button>
                        <button className="hover:opacity-60 transition-opacity relative">
                            <ShoppingBag strokeWidth={1} className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-navy"></span>
                            </span>
                        </button>
                    </div>

                </div>
            </motion.header>
        </>
    );
}
