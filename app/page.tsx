import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <NavBar />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
