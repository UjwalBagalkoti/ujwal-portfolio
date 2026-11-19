import { education, certifications, spokenLanguages } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line">
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

      <div className="mt-12">
        <h3 className="font-head font-bold text-xl sm:text-2xl text-ink dark:text-cream">
          Certifications
        </h3>
        <ul className="mt-4 space-y-3 font-body text-lg sm:text-xl text-ink dark:text-cream">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="font-head font-bold text-xl sm:text-2xl text-ink dark:text-cream">
          Languages
        </h3>
        <p className="mt-4 font-body text-lg sm:text-xl text-ink dark:text-cream">
          {spokenLanguages.join(", ")}
        </p>
      </div>
    </section>
  );
}
