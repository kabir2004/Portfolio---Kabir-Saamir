"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export function HoverCard({
    href,
    title,
    description,
    external = false,
}: {
    href: string;
    title: string;
    description: string;
    external?: boolean;
}) {
    const CardContent = (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="block py-4 h-full transition-colors flex flex-col justify-center border-b border-border/20 last:border-b-0"
        >
            <h3 className="font-regular text-[15px] text-text-primary mb-0.5 transition-colors group-hover:text-text-primary">
                {title} {external && <span className="text-text-tertiary ml-0.5">↗</span>}
            </h3>
            <p className="text-text-secondary text-[13px]">{description}</p>
        </motion.div>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full -mx-3">
                {CardContent}
            </a>
        );
    }

    return (
        <Link href={href} className="block h-full -mx-3">
            {CardContent}
        </Link>
    );
}
