export type Project = {
  name: string;
  year: string;
  period: string;
  tag: string;
  role: string;
  href: string;
  description: string;
  bullets: string[];
  tech: string[];
  external?: boolean;
};

export const projects: Project[] = [
  {
    name: "Real Estate Pricing & Tenant Analytics",
    year: "2025",
    period: "Jan 2025 – Present",
    tag: "Data / ML",
    role: "Technical Lead — 4-Person Engineering Team",
    href: "#",
    description:
      "Full-stack analytics platform aggregating 10K+ rental listings with predictive pricing models achieving 91% directional accuracy.",
    bullets: [
      "Designed a full-stack analytics platform that aggregates 10K+ rental listings and applies predictive pricing models to forecast neighbourhood-level rent movements with 91% directional accuracy.",
      "Enables data-driven leasing decisions through an interactive dashboard built on React/Next.js with a Java/J2EE service layer and PostgreSQL data store.",
      "Applied scikit-learn and Pandas for feature engineering, model training, and performance evaluation across heterogeneous listing datasets.",
    ],
    tech: ["Java/J2EE", "React", "Next.js", "PostgreSQL", "scikit-learn", "Pandas", "Python"],
  },
  {
    name: "Quantitative Portfolio Risk Engine",
    year: "2024",
    period: "Jan 2023 – Apr 2024",
    tag: "Fintech / Quant",
    role: "Independent Research",
    href: "#",
    description:
      "Portfolio risk evaluation framework employing Monte Carlo simulation, parametric VaR, and Sharpe Ratio optimization across 5 years of equity data.",
    bullets: [
      "Built a portfolio risk evaluation framework employing Monte Carlo simulation, parametric VaR, and Sharpe Ratio optimization across 5 years of equity market data.",
      "Automated data ingestion via a Java service layer into a Python analytics pipeline, reducing manual data preparation overhead.",
      "Presented findings through interactive Tableau and Power BI dashboards surfacing risk decomposition, drawdown analysis, and efficient frontier outputs.",
    ],
    tech: ["Java", "Python", "Tableau", "Power BI", "NumPy", "Pandas"],
  },
  {
    name: "Demand Forecasting & Inventory Optimization",
    year: "2024",
    period: "May 2023 – Aug 2024",
    tag: "ML / Operations",
    role: "Freelance Consulting",
    href: "#",
    description:
      "ML-driven forecasting engine reducing inventory carrying costs by 18% and increasing revenue by 12% for 3 retail clients.",
    bullets: [
      "Developed an ML-driven demand forecasting engine using XGBoost and Prophet for 3 retail clients across different product verticals.",
      "Reduced average inventory carrying costs by 18% and increased revenue by 12% through automated procurement logic integrated into a Flask operations dashboard.",
      "Delivered end-to-end: data pipeline, model training and evaluation, and a production dashboard for inventory managers.",
    ],
    tech: ["Python", "XGBoost", "Prophet", "Flask", "Pandas", "scikit-learn"],
  },
];
