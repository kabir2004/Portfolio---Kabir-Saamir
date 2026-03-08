"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCardContent({ project }: ProjectCardProps) {
  return (
    <>
      <header className="flex flex-col gap-1">
        <h2 className="text-[15px] font-medium tracking-[-0.02em] text-text-primary">
          {project.name}
          {project.external && (
            <span className="text-text-tertiary ml-1.5 text-[12px]">↗</span>
          )}
        </h2>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-mono text-text-tertiary">
          <span>{project.period}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>{project.tag}</span>
        </div>
      </header>
      <p className="text-[13px] leading-[1.65] text-text-secondary">
        {project.description}
      </p>
      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-block rounded border border-border bg-bg-subtle px-2 py-0.5 text-[11px] font-mono text-text-tertiary"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLink = project.href && project.href !== "#";

  if (isLink && project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-border/40 bg-bg-subtle/50 p-5 transition-colors duration-200 hover:border-border hover:bg-hover-bg flex flex-col gap-6"
      >
        <ProjectCardContent project={project} />
      </a>
    );
  }

  if (isLink) {
    return (
      <Link
        href={project.href}
        className="block rounded-lg border border-border/40 bg-bg-subtle/50 p-5 transition-colors duration-200 hover:border-border hover:bg-hover-bg flex flex-col gap-6"
      >
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-border/40 bg-bg-subtle/50 p-5">
      <ProjectCardContent project={project} />
    </div>
  );
}
