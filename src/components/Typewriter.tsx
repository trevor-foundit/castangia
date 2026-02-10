"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, delay = 0, speed = 50, className = "" }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const startTimeout = setTimeout(() => {
                const intervalId = setInterval(() => {
                    setDisplayedText((prev) => prev + text.charAt(i));
                    i++;
                    if (i === text.length) {
                        clearInterval(intervalId);
                    }
                }, speed);
                return () => clearInterval(intervalId);
            }, delay * 1000);
            return () => clearTimeout(startTimeout);
        }
    }, [isInView, text, delay, speed]);

    return (
        <span ref={ref} className={className}>
            {displayedText}
            {displayedText.length < text.length && (
                <span className="animate-blink inline-block w-[1px] h-[1em] bg-[#D4AF37] ml-1 align-middle"></span>
            )}
        </span>
    );
}
