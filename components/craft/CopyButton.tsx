"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

export function CopyButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="p-3 bg-bg-subtle text-text-secondary border border-border rounded-xl hover:bg-hover-bg hover:text-text-primary transition-colors flex items-center justify-center relative overflow-hidden h-12 w-12"
            aria-label="Copy code"
        >
            <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                    <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="absolute"
                    >
                        <Check size={18} className="text-accent" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="absolute"
                    >
                        <Copy size={18} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
