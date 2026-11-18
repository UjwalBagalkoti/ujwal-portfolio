import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import { site } from "@/data/site";
import { experience, education, certifications, languages, skills } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="px-6 py-12 sm:px-10 lg:ml-[22rem] lg:px-16 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <Section id="projects" title="Projects"><Projects /></Section>

          <Section id="experience" title="Experience">
            <ol className="space-y-8">
              {experience.map((e) => (
                <li key={e.role} className="border-l-4 border-cobalt pl-5">
                  <h3 className="font-display text-xl font-bold">{e.role}</h3>
                  <p className="text-ink/70">{e.org} · {e.when}</p>
                  <p className="mt-2 max-w-prose leading-relaxed text-ink/80">{e.note}</p>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="education" title="Education">
            <ul className="space-y-6">
              {education.map((e) => (
                <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <div>
                    <h3 className="font-display text-xl font-bold">{e.title}</h3>
                    <p className="text-ink/70">{e.where}</p>
                  </div>
                  <p className="text-ink/70">{e.when} · {e.score}</p>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-10 font-display text-xl font-bold">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.name}><span className="font-medium">{c.name}</span> <span className="text-ink/70">– {c.by}</span></li>
              ))}
            </ul>
            <p className="mt-8 text-ink/80"><span className="font-medium">Languages:</span> {languages.join(", ")}</p>
          </Section>

          <Section id="skills" title="Skills">
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {skills.map((g) => (
                <div key={g.group}>
                  <dt className="font-display text-lg font-bold">{g.group}</dt>
                  <dd className="mt-1 leading-relaxed text-ink/80">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="contact" title="Contact">
            <p className="max-w-prose text-lg leading-relaxed">Open to full-stack and backend roles in Bengaluru or remote.</p>
            <a href={`mailto:${site.email}`} className="mt-5 inline-block break-all rounded-full bg-ink px-6 py-3 font-medium text-chalk hover:bg-cobalt">{site.email}</a>
          </Section>
        </div>
      </main>
    </>
  );
}
