import type { Project } from "@/data/projects";

const linkClass =
  "text-accent dark:text-accent-bright underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-l-2 border-line dark:border-night-line pl-5 py-1 hover:border-accent dark:hover:border-accent-bright transition-colors">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-head font-semibold text-lg text-ink dark:text-cream">
          {project.name}
        </h3>
        <span className="font-mono text-xs text-ink-soft dark:text-cream/50 whitespace-nowrap">
          {project.category}
        </span>
      </div>
      <p className="mt-2 font-body text-base leading-relaxed text-ink-soft dark:text-cream/70 max-w-prose">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-soft dark:text-cream/50">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {(project.live || project.repo) && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={linkClass}>
              live demo ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={linkClass}>
              source ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
