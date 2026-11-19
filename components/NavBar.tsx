const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function NavBar() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 border-y border-line bg-paper/90 backdrop-blur dark:border-night-line dark:bg-night/90"
    >
      <ul className="max-w-layout mx-auto flex gap-6 overflow-x-auto px-6 py-3 font-mono text-xs text-ink-soft dark:text-cream/70">
        {links.map(([label, href]) => (
          <li key={href} className="shrink-0">
            <a href={href} className="hover:text-accent dark:hover:text-accent-bright underline-offset-4 hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
