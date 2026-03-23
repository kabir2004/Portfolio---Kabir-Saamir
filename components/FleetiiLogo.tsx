"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Light-mode asset (dark text / full-color on light backgrounds) */
const FLEETII_LOGO_LIGHT = "/fleetiilogolight-removebg-preview.png";
/** Dark-mode asset (light marks on dark backgrounds) */
const FLEETII_LOGO_DARK = "/fleettiilogodark-removebg-preview.png";

type FleetiiLogoProps = {
  className?: string;
};

export function FleetiiLogo({ className }: FleetiiLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="relative h-full w-full" role="img" aria-label="Fleetii">
      <Image
        src={FLEETII_LOGO_LIGHT}
        alt=""
        width={48}
        height={48}
        aria-hidden
        className={`${className} transition-opacity duration-theme ${isDark ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={FLEETII_LOGO_DARK}
        alt=""
        width={48}
        height={48}
        aria-hidden
        className={`${className} absolute inset-0 transition-opacity duration-theme ${isDark ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
