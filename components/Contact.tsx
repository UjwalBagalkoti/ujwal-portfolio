import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 max-w-layout mx-auto px-6 py-16 sm:py-20 border-t border-line dark:border-night-line"
    >
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-4">
        Get in touch
      </h2>
      <p className="max-w-prose font-body text-lg leading-relaxed text-ink-soft dark:text-cream/70 mb-8">
        I’m interested in software engineering opportunities across full-stack
        development, backend engineering, and AI-enabled products. Based in
        Bengaluru and open to remote opportunities. The fastest way to reach
        me is email.
      </p>

      {site.email && (
        <a
          href={`mailto:${site.email}`}
          className="mb-8 inline-block rounded-md bg-accent px-6 py-3 font-mono text-sm text-white hover:bg-accent-dim dark:bg-accent-bright dark:text-night dark:hover:bg-accent"
        >
          Email me
        </a>
      )}

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
