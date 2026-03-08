"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { CONTENT_MAX_WIDTH, CONTENT_PADDING_X, PAGE_PADDING_Y } from "@/lib/constants";

interface PageShellProps {
  children: ReactNode;
  /** Current page label for breadcrumb (e.g. "Experience") */
  title: string;
  /** Optional extra class for main */
  className?: string;
}

/**
 * Consistent inner-page layout: back link, breadcrumb, max-width, padding.
 * Content is centered in the viewport for a balanced, professional look.
 */
export function PageShell({ children, title, className = "" }: PageShellProps) {
  return (
    <main
      className={`w-full min-h-screen bg-bg text-text-primary flex flex-col items-center ${className}`}
      style={{
        paddingTop: `${PAGE_PADDING_Y}px`,
        paddingBottom: `${PAGE_PADDING_Y}px`,
      }}
    >
      <div
        className="w-full flex flex-col items-center"
        style={{
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          paddingLeft: `${CONTENT_PADDING_X}px`,
          paddingRight: `${CONTENT_PADDING_X}px`,
        }}
      >
        <nav
          className="flex items-center justify-center gap-3 text-text-secondary mb-12 w-full"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[13px] font-medium hover:text-text-primary transition-colors duration-200"
          >
            ← Back
          </Link>
          <span className="text-text-tertiary text-[13px]" aria-hidden>
            /
          </span>
          <span className="text-text-primary text-[13px] font-medium">{title}</span>
        </nav>
        <div className="w-full flex flex-col items-center">
          {children}
        </div>
      </div>
    </main>
  );
}
