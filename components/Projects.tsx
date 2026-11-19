import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 max-w-layout mx-auto px-6 py-16 sm:py-20">
      <h2 className="font-head font-bold text-2xl sm:text-3xl text-ink dark:text-cream mb-10">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
