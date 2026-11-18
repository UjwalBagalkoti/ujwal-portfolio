import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {projects.map((p) => (
        <li key={p.name} className="group grid gap-4 py-8 sm:grid-cols-[1fr_auto] sm:gap-10">
          <div>
            <p className="text-sm text-ink/60">{p.kind}</p>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">{p.name}</h3>
            <p className="mt-3 max-w-prose leading-relaxed text-ink/80">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.name} stack`}>
              {p.stack.map((s) => (
                <li key={s} className="rounded-md bg-white px-2.5 py-1 text-sm text-ink/80 ring-1 ring-rule">{s}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 text-sm font-medium sm:flex-col sm:items-stretch">
            <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}
              className="rounded-full bg-cobalt px-5 py-2.5 text-center text-white hover:bg-ink">Live demo</a>
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} source on GitHub`}
              className="rounded-full border border-ink/30 px-5 py-2.5 text-center hover:border-cobalt hover:text-cobalt">Source</a>
          </div>
        </li>
      ))}
    </ul>
  );
}
