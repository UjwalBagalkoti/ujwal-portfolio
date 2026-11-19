import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line">
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-10">
        Skills
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-head font-semibold text-sm text-ink-soft dark:text-cream/60 mb-3">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded-sm bg-paper-surface dark:bg-night-surface text-ink dark:text-cream/90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
