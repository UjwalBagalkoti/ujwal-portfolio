import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line">
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-10">
        Experience
      </h2>

      <ol className="space-y-8">
        {experience.map((item, index) => (
          <li key={item.org} className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm text-accent dark:text-accent-bright pt-0.5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-head font-semibold text-lg text-ink dark:text-cream">
                  {item.role} <span className="text-ink-soft dark:text-cream/60 font-normal">— {item.org}</span>
                </h3>
                {item.period && (
                  <span className="font-mono text-xs text-ink-soft dark:text-cream/50 whitespace-nowrap">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-soft dark:text-cream/70 max-w-prose">
                {item.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
