import { Link } from 'react-router-dom';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="section-shell">
        <Link to="/" className="text-sm font-bold text-emerald hover:text-gold">
          Back to SouqOne Studio
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-700">{intro}</p>
        </div>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="panel p-6">
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
