"use client";
import { useEffect, useState } from "react";

const items = [["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Skills", "skills"], ["Contact", "contact"]];

export default function SideNav() {
  const [active, setActive] = useState("projects");
  useEffect(() => {
    const els = items.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="space-y-1">
        {items.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}
              className={`inline-flex items-center gap-3 py-1 hover:text-sun ${active === id ? "font-medium text-sun" : "text-chalk/70"}`}>
              <span aria-hidden className={`h-0.5 bg-sun transition-all ${active === id ? "w-8" : "w-3 opacity-40"}`} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
