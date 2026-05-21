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
    <div className="brand-page theme-principles">
      <section className="brand-section">
        <div className="section-shell">
        <Link to="/" className="text-sm font-black hover:text-[var(--accent)]">
          Back to MARZ
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="brand-title mt-3">{title}</h1>
          <p className="brand-copy mt-5">{intro}</p>
        </div>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="brand-card p-6">
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted)' }}>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
