import { site } from "@/data/site";
import fs from "node:fs";
import path from "node:path";

const nav = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Sidebar() {
  const hasResume = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));
  return (
    <aside className="on-dark bg-deep text-chalk lg:fixed lg:inset-y-0 lg:left-0 lg:w-[22rem] lg:overflow-y-auto">
      <div className="mx-auto flex max-w-xl flex-col gap-8 px-6 py-10 lg:min-h-full lg:justify-between lg:px-10 lg:py-14">
        <div className="rise">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photo.jpg" alt="Portrait of Ujwal Bagalkoti" width={160} height={160}
            className="h-40 w-40 rounded-full object-cover ring-4 ring-sun" />
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight">{site.name}</h1>
          <p className="mt-2 text-lg text-sun">{site.role}</p>
          <p className="mt-1 text-mist">{site.location}</p>
          <p className="mt-6 max-w-sm leading-relaxed text-chalk/85">{site.intro}</p>
        </div>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="space-y-1">
            {nav.map(([label, href]) => (
              <li key={href}><a href={href} className="inline-block py-1 text-chalk/80 underline-offset-4 hover:text-sun hover:underline">{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap gap-3 text-sm font-medium">
          {hasResume && <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-sun px-5 py-2.5 text-ink hover:bg-white">Resume</a>}
          <a href={site.github} target="_blank" rel="noreferrer" className="rounded-full border border-mist/50 px-5 py-2.5 hover:border-sun hover:text-sun">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-mist/50 px-5 py-2.5 hover:border-sun hover:text-sun">LinkedIn</a>
        </div>
      </div>
    </aside>
  );
}
