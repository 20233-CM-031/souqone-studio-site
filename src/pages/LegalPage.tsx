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
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <Link to="/" className="text-sm font-black text-cyan hover:text-gold">
          Back to MARZ
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-heading text-4xl font-black leading-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-mist">{intro}</p>
        </div>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="panel p-6">
              <h2 className="text-xl font-black text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
