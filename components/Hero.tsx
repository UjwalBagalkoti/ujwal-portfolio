import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { site } from "@/data/site";
import TypedRole from "./TypedRole";
import ThemeToggle from "./ThemeToggle";

const linkClass =
  "text-ink dark:text-cream underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright";

export default function Hero() {
  const hasResume = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));

  return (
    <header className="max-w-layout mx-auto px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="flex items-center justify-between mb-16 sm:mb-24">
        <span className="font-mono text-xs text-ink-soft dark:text-cream/60">
          Bengaluru, India
        </span>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <Image
          src="/photo.jpg"
          alt="Portrait of Ujwal Bagalkoti"
          width={288}
          height={288}
          priority
          className="h-32 w-32 rounded-sm border border-line object-cover dark:border-night-line md:order-2 md:h-56 md:w-56 md:shrink-0"
        />

        <div className="md:order-1 md:min-w-0">
          <h1 className="font-head font-bold text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-ink dark:text-cream">
            Ujwal Bagalkoti
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-ink-soft dark:text-cream/70 h-8">
            <TypedRole />
          </p>

          <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink dark:text-cream/90">
            I build and ship full-stack software, from responsive React and
            Next.js interfaces to Python and Node.js APIs backed by SQL
            databases. I’m especially interested in developer tools and
            practical AI products—and I care about making the systems behind
            them reliable, testable, and useful.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
            {hasResume && (
              <a
                href="/resume.pdf"
                className="text-accent dark:text-accent-bright underline underline-offset-4 decoration-line hover:decoration-accent dark:hover:decoration-accent-bright"
              >
                resume
              </a>
            )}
            <a href={site.github} target="_blank" rel="noreferrer" className={linkClass}>
              github
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              linkedin
            </a>
            <a href="#contact" className={linkClass}>
              get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
