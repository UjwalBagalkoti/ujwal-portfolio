import { projects, more } from "@/data/projects";

export default function Projects() {
  return (
    <>
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
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}
                className="rounded-full bg-cobalt px-5 py-2.5 text-center text-white hover:bg-ink">Live demo</a>
            )}
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} source on GitHub`}
              className={`rounded-full px-5 py-2.5 text-center ${p.live ? "border border-ink/30 hover:border-cobalt hover:text-cobalt" : "bg-cobalt text-white hover:bg-ink"}`}>Source</a>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-10">
      <h3 className="font-display text-xl font-bold">More on GitHub</h3>
      <ul className="mt-3 space-y-2">
        {more.map((m) => (
          <li key={m.name} className="leading-relaxed">
            <a href={m.href} target="_blank" rel="noreferrer" className="font-medium text-cobalt underline underline-offset-4 hover:text-ink">{m.name}</a>
            <span className="text-ink/70"> – {m.note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4"><a href="https://github.com/UjwalBagalkoti" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 hover:text-cobalt">All repositories on GitHub</a></p>
    </div>
    </>
  );
}
