"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Design", "Engineering", "Product"];

export function LiquidTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="flex gap-2 p-1 bg-border/20 rounded-full w-max border border-border">
            {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-1.5 text-sm font-medium transition-colors ${isActive ? "text-bg" : "text-text-secondary hover:text-text-primary"
                            }`}
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="pill"
                                className="absolute inset-0 bg-text-primary rounded-full"
                                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                style={{ zIndex: -1 }}
                            />
                        )}
                        <span className="relative z-10">{tab}</span>
                    </button>
                );
            })}
        </div>
    );
}
