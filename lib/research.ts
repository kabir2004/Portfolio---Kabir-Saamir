/**
 * Independent research: theses, essays, notes.
 */

export type ResearchCategory = "thesis" | "essay" | "reading";

export type ResearchItem = {
  id: string;
  category: ResearchCategory;
  title: string;
  description: string;
  date: string;
  href?: string;
};

export const researchItems: ResearchItem[] = [
  {
    id: "1",
    category: "thesis",
    title: "Data quality precedes model complexity",
    description:
      "Clean pipelines and consistent schemas compound. Fix the foundation before adding another layer.",
    date: "2025",
    href: "#",
  },
  {
    id: "2",
    category: "thesis",
    title: "Regulation as a design constraint",
    description:
      "KYC/AML and dealer compliance shape architecture. Build them in from day one.",
    date: "2025",
  },
  {
    id: "3",
    category: "essay",
    title: "Group retirement plans as a systems problem",
    description:
      "Vesting, contribution allocation, and plan-level roles form a graph of state machines. Design for it upfront.",
    date: "May 2025",
    href: "#",
  },
  {
    id: "4",
    category: "reading",
    title: "Monte Carlo methods in portfolio risk",
    description:
      "Parametric VaR, simulation design, when closed-form approximations break down.",
    date: "2024",
  },
];

export const categoryLabels: Record<ResearchCategory, string> = {
  thesis: "Theses",
  essay: "Essays",
  reading: "Notes",
};
