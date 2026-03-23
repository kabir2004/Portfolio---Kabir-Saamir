"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-full bg-background border border-border shrink-0"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-border bg-background text-text-secondary transition-theme hover:text-text-primary hover:border-text-tertiary shrink-0 focus:outline-none focus:ring-2 focus:ring-text-tertiary focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolvedTheme}
          initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {isDark ? (
            <Sun size={18} strokeWidth={1.5} />
          ) : (
            <Moon size={18} strokeWidth={1.5} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
