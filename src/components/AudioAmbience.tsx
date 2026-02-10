"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioAmbience() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initial user interaction needed to play audio in most browsers
    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            setIsPlaying(true);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <audio
                ref={audioRef}
                loop
                src="https://cdn.pixabay.com/download/audio/2022/03/24/audio_07a0cc3115.mp3?filename=soft-wind-loop-120042.mp3" // Soft wind/atmosphere loop
            />

            <button
                onClick={toggleAudio}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
            >
                {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>
        </div>
    );
}
