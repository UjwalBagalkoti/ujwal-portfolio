export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-8 py-12 first:pt-0 sm:py-16 sm:first:pt-0">
      <h2 id={`${id}-h`} className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
