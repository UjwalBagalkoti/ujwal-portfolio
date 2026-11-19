import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line"
    >
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-4">
        Get in touch
      </h2>
      <p className="max-w-prose font-body text-lg leading-relaxed text-ink-soft dark:text-cream/70 mb-8">
        Open to full-stack and backend roles in Bengaluru or remote.
        {site.email ? " The fastest way to reach me is email." : ""}
      </p>

      <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
        {site.email && (
          <a
            href={`mailto:${site.email}`}
            className="text-accent dark:text-accent-bright underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright"
          >
            {site.email}
          </a>
        )}
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="text-ink dark:text-cream underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright"
        >
          github.com/UjwalBagalkoti
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-ink dark:text-cream underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright"
        >
          linkedin.com/in/ujwal-bagalkoti
        </a>
      </div>
    </section>
  );
}
