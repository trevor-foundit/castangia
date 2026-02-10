"use client";



export function Campaign() {
    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <p className="text-navy text-xs tracking-[0.3em] uppercase">The Tribute</p>
                        <h2 className="font-serif text-5xl md:text-7xl text-charcoal">Cagliari, 1850.</h2>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-charcoal/60 font-serif text-lg leading-relaxed text-balance">
                            Even prior to the formation of the Kingdom of Italy, Castangia was manufacturing fine clothing for the most distinguished personalities of the era.
                            <br /><br />
                            San Remy was the first viceroy of Piedmont, the kingdom that ruled Sardinia until the mid-19th century. The Bastion, pictured here, stands as a monument to that rich history.
                        </p>
                    </div>
                </div>

                {/* 
                    GRID LAYOUT
                */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[120vh] md:h-[100vh]">

                    {/* Large Hero Image - The Bastion (Unsplash Placeholder) */}
                    <div className="md:col-span-8 h-full relative group overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1548625361-b789030b4226?q=80&w=2080&auto=format&fit=crop"
                            alt="Bastion Saint Remy - Historic Cagliari"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 text-white z-10">
                            <p className="text-xs uppercase tracking-widest mb-2">The Monument</p>
                            <p className="font-serif text-3xl">Saint Remy Bastion</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                    </div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-4 flex flex-col gap-4 h-full">
                        <div className="flex-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1594938291221-94f18c9560e5?q=80&w=2080&auto=format&fit=crop"
                                alt="Detail Shot"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop"
                                alt="Texture Shot"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
