"use client";

import { useState, useRef } from "react";

const CHARS = "!@#$%^&*()_+{}:<>?~[]|-=[]/";

export function TextScramble({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        let iteration = 0;
        clearInterval(intervalRef.current!);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current!);
            }

            iteration += 1 / 3;
        }, 30);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
    };

    return (
        <span
            className="font-mono cursor-default text-text-primary text-xl font-medium"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {displayText}
        </span>
    );
}
