"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorType = "default" | "hover" | "drag" | "text" | "exclude";

interface CursorContextType {
    setCursorType: (type: CursorType) => void;
    setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
    setCursorType: () => { },
    setCursorText: () => { },
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: React.ReactNode }) {
    const [cursorType, setCursorType] = useState<CursorType>("default");
    const [cursorText, setCursorText] = useState("");

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY]);

    // Add global hover listeners for interactive elements
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                setCursorType("hover");
            } else {
                setCursorType("default");
            }
        };

        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    // Cursor variants based on type
    const variants = {
        default: {
            height: 16,
            width: 16,
            backgroundColor: "#D4AF37", // Gold
            x: "-50%",
            y: "-50%",
        },
        hover: {
            height: 64,
            width: 64,
            backgroundColor: "transparent",
            border: "1px solid #D4AF37",
            x: "-50%",
            y: "-50%",
        },
        drag: {
            height: 80,
            width: 80,
            backgroundColor: "#D4AF37",
            color: "#000",
            x: "-50%",
            y: "-50%",
        },
        text: {
            height: 100,
            width: 100,
            backgroundColor: "#FDFCF8",
            mixBlendMode: "difference" as any,
            color: "#000",
            x: "-50%",
            y: "-50%",
        },
        exclude: {
            opacity: 0,
        }
    };

    return (
        <CursorContext.Provider value={{ setCursorType, setCursorText }}>
            {/* The Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center overflow-hidden"
                style={{
                    left: cursorX,
                    top: cursorY,
                }}
                variants={variants}
                animate={cursorType}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                {/* Text Content for Drag or Text  */}
                {(cursorType === "drag" || cursorType === "text") && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#151515]">
                        {cursorText || (cursorType === "drag" ? "DRAG" : "VIEW")}
                    </span>
                )}
            </motion.div>

            {children}
        </CursorContext.Provider>
    );
}
