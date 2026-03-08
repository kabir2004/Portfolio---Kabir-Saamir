"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface SectionProps {
  title: string;
  children: ReactNode;
  /** Center the section label */
  center?: boolean;
  /** Optional: wrap content in a card */
  card?: boolean;
}

export function Section({ title, children, center, card }: SectionProps) {
  return (
    <motion.div
      variants={sectionVariants}
      className="flex flex-col gap-5 w-full"
    >
      <div className={`flex items-center ${center ? "flex-col gap-2 justify-center" : ""}`}>
        <span className="text-[11px] font-medium text-text-tertiary tracking-[0.1em] uppercase font-sans">
          {title}
        </span>
      </div>
      {card ? (
        <div className="rounded-xl border border-border/50 bg-bg-subtle/60 p-5 sm:p-6">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  subtitle?: string;
  location: string;
  period: string;
  bullets: string[];
}

export function ExperienceItem({
  title,
  company,
  subtitle,
  location,
  period,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="rounded-xl border border-border/40 bg-bg-subtle/40 p-5 sm:p-6 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-[15px] font-semibold tracking-[-0.02em] text-text-primary">
            {title}
          </p>
          <p className="text-[13px] text-text-secondary">{company}</p>
          {subtitle && (
            <p className="text-[12px] text-text-tertiary">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-0.5 shrink-0 font-sans text-[11px] text-text-tertiary">
          <span>{period}</span>
          <span>{location}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2.5 border-t border-border/30 pt-4">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-3 text-[13px] text-text-secondary leading-[1.7]"
          >
            <span className="text-text-tertiary shrink-0 mt-[2px]">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
