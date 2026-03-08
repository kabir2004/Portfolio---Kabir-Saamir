import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kabirsaamir.com"),
  title: "Kabir Saamir",
  description:
    "Kabir Saamir is a Canadian software developer at Sterling Mutuals and studying computer science at Wilfrid Laurier University.",
  authors: [{ name: "Kabir Saamir" }],
  robots: "index,follow",
  openGraph: {
    type: "website",
    title: "Kabir Saamir",
    description:
      "Canadian software developer at Sterling Mutuals, studying at Wilfrid Laurier University.",
    url: "https://kabirsaamir.com",
    siteName: "Kabir Saamir",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabir Saamir",
    description:
      "Canadian software developer at Sterling Mutuals, studying at Wilfrid Laurier University.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
                requestAnimationFrame(function() {
                  requestAnimationFrame(function() {
                    document.documentElement.classList.add('theme-ready');
                  });
                });
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

