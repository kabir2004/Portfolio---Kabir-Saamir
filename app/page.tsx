import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-5 sm:px-6 py-20 sm:py-24 md:py-32 font-sans relative">
      {/* Theme toggle */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-[600px] flex flex-col gap-14 sm:gap-24 mx-auto">

        {/* Header Section */}
        <header className="flex flex-col gap-10 sm:gap-16 relative">

          {/* Row 1: Name + role */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">Kabir Saamir</h1>
              <p className="text-text-secondary mt-1 text-sm">
                <span className="lowercase">research • code • deploy</span>
              </p>
            </div>
            <div className="text-right text-xs sm:text-sm text-text-tertiary shrink-0">
              <p>sde / analyst @ <span className="text-[#1e3a5f] dark:text-[#3b82c6]">Sterling Mutuals</span></p>
              <p>BSc @ <span className="text-[#3b0764] dark:text-purple-700">Laurier</span></p>
            </div>
          </div>

          {/* Row 2: Raccoon + bio — stacks vertically on mobile */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end">
            <div className="w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
              <Image
                src="/ArtRaccoonSticker.gif"
                alt="logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <div className="sm:max-w-[320px] sm:text-right">
              <p className="text-sm text-text-secondary leading-relaxed">
                hi, this is a space showcasing my work. currently an engineer based in toronto.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 sm:justify-end mt-4 text-sm font-mono text-text-tertiary">
                <a href="https://linkedin.com/in/kabir-saamir" target="_blank" className="hover:text-text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/saamirkabir" target="_blank" className="hover:text-text-primary transition-colors">GitHub</a>
                <a href="https://twitter.com" target="_blank" className="hover:text-text-primary transition-colors">Twitter / X</a>
                <a href="mailto:kabirsaamir@gmail.com" className="hover:text-text-primary transition-colors">Email</a>
              </div>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-lg font-medium tracking-tight">experience</h2>

          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Experience Item */}
            <div className="flex justify-between items-start gap-4 group">
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden bg-background border border-border">
                  <Image src="/sterlingmutualslogo-removebg-preview.png" alt="Sterling Mutuals" width={36} height={36} className="object-contain w-full h-full max-w-8 max-h-8 sm:max-w-9 sm:max-h-9" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">Software Developer / Analyst</h3>
                  <p className="text-sm text-text-secondary mt-0.5">Sterling Mutuals</p>
                  <p className="text-xs text-text-tertiary mt-1">Building financial advisor platforms</p>
                </div>
              </div>
              <div className="text-xs text-text-tertiary font-mono shrink-0 group-hover:text-text-secondary transition-colors text-right">
                May 2025 - Present
              </div>
            </div>

            {/* Experience Item */}
            <div className="flex justify-between items-start gap-4 group">
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden bg-background border border-border">
                  <Image src="/kenedymedicalcliniclogo-removebg-preview.png" alt="Kennedy Medical Clinic" width={36} height={36} className="object-contain w-full h-full max-w-8 max-h-8 sm:max-w-9 sm:max-h-9" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">Business Analyst Intern</h3>
                  <p className="text-sm text-text-secondary mt-0.5">Kennedy Medical Clinic</p>
                  <p className="text-xs text-text-tertiary mt-1">Streamlining operations and systems for a smoother-running clinic</p>
                </div>
              </div>
              <div className="text-xs text-text-tertiary font-mono shrink-0 group-hover:text-text-secondary transition-colors text-right">
                May 2024 - Dec 2024
              </div>
            </div>

            {/* Experience Item */}
            <div className="flex justify-between items-start gap-4 group">
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden bg-background border border-border">
                  <Image src="/tcpnetwroksolutions-removebg-preview.png" alt="TCP Network Services" width={36} height={36} className="object-contain w-full h-full max-w-8 max-h-8 sm:max-w-9 sm:max-h-9" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">Information Technology Intern</h3>
                  <p className="text-sm text-text-secondary mt-0.5">TCP Network Services</p>
                  <p className="text-xs text-text-tertiary mt-1">Supporting IT infrastructure and operations</p>
                </div>
              </div>
              <div className="text-xs text-text-tertiary font-mono shrink-0 group-hover:text-text-secondary transition-colors text-right">
                May 2023 - Sept 2023
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-6 sm:gap-8 pb-16">
          <h2 className="text-lg font-medium tracking-tight">clicking buttons does things?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-8 sm:gap-y-12">

            {/* Project Item */}
            <div className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">Grum</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  A desktop productivity app that aggregates Gmail, Documents, Calendar, Messages, and more into one unified workspace.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Project Item */}
            <div className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">GitWrapped</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Visualize your GitHub activity with personalized stats and insights.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Project Item */}
            <div className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">OrbitShare</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Decentralized file sharing platform built on blockchain for secure peer-to-peer distribution.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Project Item */}
            <div className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">ResDex</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  A mentorship platform connecting students with research opportunities.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
