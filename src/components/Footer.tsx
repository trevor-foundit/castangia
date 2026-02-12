"use client";

import Link from "next/link";


export function Footer() {
    return (
        <footer className="bg-charcoal text-cream pt-24 pb-12 px-6">
            <div className="max-w-[1400px] mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-cream/10 pb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-8">
                        <h2 className="font-serif text-4xl">CASTANGIA 1850</h2>
                        <div className="space-y-4 text-cream/60 text-sm font-light leading-relaxed max-w-xs">
                            <p>
                                The oldest tailoring house in Italy.
                                Crafting sartorial masterpieces in Cagliari, Sardinia for nearly two centuries.
                            </p>
                            <p>
                                Via Roma, 15, 09100 Cagliari CA, Italy
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/40">The House</h4>
                            <ul className="space-y-3 text-sm font-light text-cream/80">
                                <li><Link href="/boutiques" className="hover:text-navy transition-colors">Find a Store</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Heritage</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Craftsmanship</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Sustainability</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Press</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/40">Collections</h4>
                            <ul className="space-y-3 text-sm font-light text-cream/80">
                                <li><Link href="#" className="hover:text-navy transition-colors">Made to Measure</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Ready to Wear</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Accessories</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Ceremony</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/40">Services</h4>
                            <ul className="space-y-3 text-sm font-light text-cream/80">
                                <li><Link href="#" className="hover:text-navy transition-colors">Book an Appointment</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Maintenance</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Gift Cards</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Contact Us</Link></li>
                                <li><Link href="/dealer-portal" className="hover:text-navy transition-colors">Dealer Portal</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/40">Legal</h4>
                            <ul className="space-y-3 text-sm font-light text-cream/80">
                                <li><Link href="#" className="hover:text-navy transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Terms of Service</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Cookie Settings</Link></li>
                                <li><Link href="#" className="hover:text-navy transition-colors">Accessibility</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-cream/30 uppercase tracking-widest">
                    <p>&copy; 2026 Castangia 1850. All Rights Reserved. <span className="text-white/10 ml-2">v2.1</span></p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-cream transition-colors">Instagram</a>
                        <a href="#" className="hover:text-cream transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-cream transition-colors">Facebook</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
