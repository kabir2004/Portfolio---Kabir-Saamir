"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
    "Ship fast.",
    "Build clean.",
    "Stay curious.",
    "Think in systems.",
    "Care about craft.",
    "Go build it.",
];

export function RotatingTagline() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[1.6em] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.p
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute text-text-secondary"
                >
                    {phrases[index]}
                </motion.p>
            </AnimatePresence>
            <div className="invisible">{phrases[0]}</div>
        </div>
    );
}
