import { education, certifications, spokenLanguages } from "@/data/education";

export default function Education() {
  return (
    <section className="max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line">
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-10">
        Education
      </h2>

      <ul className="space-y-6">
        {education.map((item) => (
          <li key={item.degree}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-head font-semibold text-lg text-ink dark:text-cream">
                {item.degree}
              </h3>
              <span className="font-mono text-xs text-ink-soft dark:text-cream/50 whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="mt-1 font-body text-base text-ink-soft dark:text-cream/70">
              {item.school} — {item.score}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-x-8 gap-y-6 font-body text-base text-ink-soft dark:text-cream/70 sm:grid-cols-[8rem_1fr]">
        <h3 className="font-head font-semibold text-sm text-ink-soft dark:text-cream/60">
          Certifications
        </h3>
        <ul className="space-y-1.5">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>

        <h3 className="font-head font-semibold text-sm text-ink-soft dark:text-cream/60">
          Languages
        </h3>
        <p>{spokenLanguages.join(", ")}</p>
      </div>
    </section>
  );
}
