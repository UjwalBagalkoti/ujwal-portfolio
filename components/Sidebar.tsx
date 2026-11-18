import { site } from "@/data/site";
import SideNav from "./SideNav";
import fs from "node:fs";
import path from "node:path";

export default function Sidebar() {
  const hasResume = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));
  return (
    <aside className="on-dark bg-deep text-chalk lg:fixed lg:inset-y-0 lg:left-0 lg:w-[22rem] lg:overflow-y-auto">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-10 lg:min-h-full lg:justify-between lg:px-10 lg:py-10">
        <div className="rise">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photo.jpg" alt="Portrait of Ujwal Bagalkoti" width={160} height={160}
            className="h-40 w-40 lg:h-32 lg:w-32 rounded-full object-cover ring-4 ring-sun" />
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight">{site.name}</h1>
          <p className="mt-2 text-lg text-sun">{site.role}</p>
          <p className="mt-1 text-mist">{site.location}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm"><span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400" />Open to full-stack and backend roles</p>
          <p className="mt-6 max-w-sm leading-relaxed text-chalk/85">{site.intro}</p>
        </div>

        <SideNav />

        <div className="flex flex-wrap gap-3 text-sm font-medium">
          {hasResume && <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-sun px-5 py-2.5 text-ink hover:bg-white">Resume</a>}
          <a href={site.github} target="_blank" rel="noreferrer" className="rounded-full border border-mist/50 px-5 py-2.5 hover:border-sun hover:text-sun">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-mist/50 px-5 py-2.5 hover:border-sun hover:text-sun">LinkedIn</a>
        </div>
      </div>
    </aside>
  );
}
