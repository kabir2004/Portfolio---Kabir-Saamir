import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { FleetiiLogo } from "@/components/FleetiiLogo";
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
                <span className="lowercase">research . code . deploy</span>
              </p>
            </div>
            <div className="text-right text-xs sm:text-sm text-text-tertiary shrink-0">
              <p>
                swe @ <span className="text-black dark:text-white">Fleetii</span>
              </p>
              <p>
                sde / analyst @{" "}
                <span className="text-[#3b82c6]">Sterling Mutuals</span>
              </p>
              <p>BSc @ <span className="text-[#a855f7]">Laurier</span></p>
            </div>
          </div>

          {/* Row 2: Raccoon + bio, stacks vertically on mobile */}
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
                hi, this is a space showcasing my work. currently a software engineer based in toronto.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 sm:justify-end mt-4 text-sm font-mono text-text-tertiary">
                <a href="https://www.linkedin.com/in/kabir-saamir-6890b2246" target="_blank" className="hover:text-text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/kabir2004" target="_blank" className="hover:text-text-primary transition-colors">GitHub</a>
                <a href="mailto:kabir.saamir@gmail.com" className="hover:text-text-primary transition-colors">Email</a>
                <a
                  href="https://kabirsaamir.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  Substack
                </a>
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
                  <FleetiiLogo className="object-contain w-full h-full" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">Software Engineer</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-text-secondary">Fleetii</span>
                    <span className="inline-flex items-center rounded-md border border-orange-400 bg-orange-400/25 px-1.5 py-0.5 text-[10px] font-medium text-text-tertiary dark:border-orange-400 dark:bg-orange-500/35 dark:text-orange-50">
                      Startup
                    </span>
                  </div>
                  <p className="text-xs text-text-tertiary mt-1">
                    Spend, invoicing, and carrier payments for logistics.
                  </p>
                </div>
              </div>
              <div className="text-xs text-text-tertiary font-mono shrink-0 group-hover:text-text-secondary transition-colors text-right">
                March 2026 - Present
              </div>
            </div>

            {/* Experience Item */}
            <div className="flex justify-between items-start gap-4 group">
              <div className="flex gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden bg-background border border-border">
                  <Image src="/sterlingmutualslogo-removebg-preview.png" alt="Sterling Mutuals" width={36} height={36} className="object-contain w-full h-full max-w-8 max-h-8 sm:max-w-9 sm:max-h-9" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">Software Developer / Analyst</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-text-secondary">Sterling Mutuals</span>
                    <span className="inline-flex items-center rounded-md border border-blue-400 bg-blue-400/25 px-1.5 py-0.5 text-[10px] font-medium text-text-tertiary dark:border-blue-400 dark:bg-blue-500/35 dark:text-blue-50">
                      Mutual Fund Dealer
                    </span>
                  </div>
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
                  <h3 className="font-medium text-sm sm:text-base">Software Developer Intern</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-text-secondary">Kennedy Medical Clinic</span>
                    <span className="inline-flex items-center rounded-md border border-emerald-400 bg-emerald-400/25 px-1.5 py-0.5 text-[10px] font-medium text-text-tertiary dark:border-emerald-400 dark:bg-emerald-500/35 dark:text-emerald-50">
                      Clinic
                    </span>
                  </div>
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
                  <h3 className="font-medium text-sm sm:text-base">Software Developer Intern</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-text-secondary">TCP Network Services</span>
                    <span className="inline-flex items-center rounded-md border border-cyan-400 bg-cyan-400/25 px-1.5 py-0.5 text-[10px] font-medium text-text-tertiary dark:border-cyan-400 dark:bg-cyan-500/35 dark:text-cyan-50">
                      Cybersecurity Firm
                    </span>
                  </div>
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
            <a href="https://github.com/kabir2004/Spore-" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">Spore</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  A desktop productivity app that aggregates Gmail, Documents, Calendar, Messages, and more into one unified workspace.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Project Item */}
            <a href="https://github.com/kabir2004/GitScope" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">GitScope</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Visualize your GitHub activity with personalized stats and insights.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Project Item */}
            <a href="https://github.com/kabir2004/Mesh" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">Mesh</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  End-to-end encrypted file sharing. Encrypt in the browser, server stores only ciphertext.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Project Item */}
            <a
              href="https://github.com/kabir2004/BogCall"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 cursor-pointer relative"
            >
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">BogCall</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Wetland bioacoustics species detector. Identify species from audio in wetland environments.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Project Item */}
            <a href="https://github.com/kabir2004/WiseDrive" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">WiseDrive</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Free Ontario DriveTest prep. Practice tests, mock exams, flashcards, road signs, and progress tracking for G1, M1, and Commercial.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Project Item */}
            <a href="https://github.com/kabir2004/SwishBot" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 cursor-pointer relative">
              <div>
                <h3 className="font-medium group-hover:text-text-primary transition-colors">SwishBot</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  Personalized NBA fantasy basketball insights via SMS. Start/sit lineup advice, waiver alerts, game recaps, and roster management. No app, just text.
                </p>
              </div>
              <div className="flex items-center justify-between text-text-tertiary group-hover:text-text-secondary transition-colors mt-auto pt-4">
                <Github size={16} />
                <ArrowUpRight size={16} />
              </div>
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}
