import React from 'react';


export default function Fabrics() {
    const fabrics = [
        {
            id: 1,
            name: "Vicuna",
            description: "The fibre of the gods. Rarest of all.",
            image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2574&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Super 180s Wool",
            description: "Unimaginable fineness. A second skin.",
            image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2672&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Cashmere & Silk",
            description: "The perfect blend of warmth and lustre.",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2536&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A]">


            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2609&auto=format&fit=crop"
                        alt="Fabric Texture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/10"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-12 border border-black/5">
                    <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#D4AF37] mb-6">Material Excellence</p>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 text-[#1A1A1A]">
                        Tactile<br />Emotion
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-80 leading-relaxed text-[#1A1A1A]">
                        To touch is to understand. We source only the world&apos;s most precious fibres, transformed by Italian mills into fabrics that breathe, move, and endure.
                    </p>
                </div>
            </section>

            {/* Fabric Showcase */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-7xl mx-auto space-y-24">
                    {fabrics.map((fabric, index) => (
                        <div key={fabric.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 aspect-square relative overflow-hidden group">
                                <img
                                    src={fabric.image}
                                    alt={fabric.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                <h2 className="text-4xl md:text-5xl font-serif">{fabric.name}</h2>
                                <div className={`w-12 h-0.5 bg-[#D4AF37] ${index % 2 === 1 ? 'mx-auto md:mx-0' : 'mx-auto md:mx-0'}`}></div>
                                <p className="text-xl text-neutral-600 font-light max-w-sm mx-auto md:mx-0">
                                    {fabric.description}
                                </p>
                                <button className="text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-colors">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}
