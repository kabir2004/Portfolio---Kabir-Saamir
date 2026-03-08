"use client";

/**
 * Minimap Component
 * Based on rauno.me's navigation minimap
 * Features:
 * - Horizontal scroll progress indicator
 * - Smooth spring physics
 * - Fixed-width tracker with line visualization
 * - Blend modes for visibility on all backgrounds
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface MinimapProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

const NUM_LINES = 20;
const LINE_WIDTH = 2;
const LINE_HEIGHT = 18;
const LINE_GAP = 9;
const TRACKER_WIDTH = 30;

export function Minimap({ containerRef }: MinimapProps) {
  const [mounted, setMounted] = useState(false);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x",
  });

  // Smooth spring physics matching rauno.me
  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 400,
    damping: 40,
    mass: 1,
  });

  // Calculate total width: lines + gaps
  const totalWidth = NUM_LINES * LINE_WIDTH + (NUM_LINES - 1) * LINE_GAP;
  const trackWidth = totalWidth - TRACKER_WIDTH;

  // Transform scroll progress to tracker position
  const trackerX = useTransform(smoothProgress, [0, 1], [0, trackWidth]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
      aria-hidden="true"
      style={{
        "--line-width": `${LINE_WIDTH}px`,
        "--line-height": `${LINE_HEIGHT}px`,
        "--line-gap": `${LINE_GAP}px`,
        "--tracker-width": `${TRACKER_WIDTH}px`,
      } as React.CSSProperties}
    >
      <div
        className="relative flex items-end"
        style={{ gap: `${LINE_GAP}px` }}
      >
        {/* Animated tracker block */}
        <motion.div
          style={{
            x: trackerX,
            width: `${TRACKER_WIDTH}px`,
            backgroundColor: "var(--text-primary)",
            mixBlendMode: "difference",
          }}
          className="absolute top-0 bottom-0 left-0 rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

        {/* Static background lines */}
        {Array.from({ length: NUM_LINES }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: `${LINE_WIDTH}px`,
              height: `${LINE_HEIGHT}px`,
              backgroundColor: "var(--gray-9)",
              mixBlendMode: "difference",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.15,
              delay: 0.4 + i * 0.01, // Stagger lines
            }}
          />
        ))}
      </div>
    </div>
  );
}

