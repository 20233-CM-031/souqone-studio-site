import { showcaseSamples } from '../data/showcase';

export function ShowcaseGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {showcaseSamples.map((sample, index) => (
        <article
          key={sample.slug}
          className={`brand-card overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
        >
          <div className="bg-white/45">
            <img
              src={sample.src}
              alt={sample.alt}
              width={sample.width}
              height={sample.height}
              loading="eager"
              className="w-full object-contain"
            />
          </div>
          <div className="p-5 sm:p-6">
            <p className="brand-kicker">{sample.category}</p>
            <h3 className="mt-3 text-2xl font-black">{sample.title}</h3>
            <p className="mt-2 text-sm font-black" style={{ color: 'var(--accent)' }}>
              Original phone photo vs SouqOne Studio output
            </p>
            <p className="mt-3 leading-7" style={{ color: 'var(--muted)' }}>
              {sample.note}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
