"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_EMAIL } from "@/lib/constants";

export function CopyEmail() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="relative flex items-center justify-start transition-colors hover:text-text-primary overflow-hidden w-[100px]"
        >
            <AnimatePresence mode="wait">
                {copied ? (
                    <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute text-accent"
                    >
                        Copied ✓
                    </motion.span>
                ) : (
                    <motion.span
                        key="email"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        Email
                    </motion.span>
                )}
            </AnimatePresence>
            {/* Invisible placeholder to maintain width */}
            <span className="invisible px-1">Copied ✓</span>
        </button>
    );
}
