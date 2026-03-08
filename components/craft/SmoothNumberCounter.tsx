"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function SmoothNumberCounter({ value = 100 }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            ease: [0.16, 1, 0.3, 1], // Custom bezier or simply "easeOut"
            onUpdate: (latest) => {
                setDisplayValue(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [value]);

    return (
        <div className="text-4xl font-mono text-text-primary">
            {displayValue.toLocaleString()}
        </div>
    );
}
