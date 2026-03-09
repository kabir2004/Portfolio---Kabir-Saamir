"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="portfolio-theme"
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
