import { showcaseSamples } from '../data/showcase';

type FutureDemoProps = {
  featuredSlug?: string;
  logoSrc?: string;
};

export function FutureDemo({ featuredSlug = 'earrings', logoSrc = '/brand/souqone-studio.png' }: FutureDemoProps) {
  const featured = showcaseSamples.find((sample) => sample.slug === featuredSlug) ?? showcaseSamples[0];
  const supportingSamples = showcaseSamples.filter((sample) => sample.slug !== featured.slug).slice(0, 4);

  return (
    <div className="brand-card-strong relative min-h-[520px] overflow-hidden p-5 sm:p-7">
      <div className="brand-pattern absolute inset-0 opacity-35" />
      <div className="relative grid h-full gap-5">
        <div className="brand-card flex items-center justify-between rounded-2xl px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="brand-logo-card h-12 w-16 shrink-0 rounded-2xl">
              <img src={logoSrc} alt="SouqOne Studio logo" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="text-xs font-black" style={{ color: 'var(--accent-2)' }}>
                SouqOne Studio
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Truth-preserving visual commerce pipeline
              </p>
            </div>
          </div>
          <div className="h-3 w-3 rounded-full" style={{ background: 'var(--accent)' }} />
        </div>

        <figure className="scan-surface overflow-hidden rounded-3xl border bg-white/70" style={{ borderColor: 'var(--line)' }}>
          <img
            src={featured.src}
            alt={featured.alt}
            width={1672}
            height={941}
            className="w-full bg-white/40 object-contain"
          />
          <figcaption
            className="flex flex-col gap-1 border-t px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: 'var(--line)' }}
          >
            <span className="text-sm font-black" style={{ color: 'var(--accent-2)' }}>
              Real before and after proof
            </span>
            <span className="text-sm font-bold" style={{ color: 'var(--muted)' }}>
              {featured.title}
            </span>
          </figcaption>
        </figure>

        <div className="grid gap-3 sm:grid-cols-4">
          {supportingSamples.map((sample) => (
            <figure key={sample.slug} className="brand-card overflow-hidden rounded-2xl">
              <img
                src={sample.src}
                alt={sample.alt}
                width={1672}
                height={941}
                className="aspect-[1672/941] w-full bg-white/40 object-contain"
              />
              <figcaption className="px-3 py-2 text-xs font-black" style={{ color: 'var(--ink)' }}>
                {sample.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {['Real effect samples', 'Product truth protected', 'Catalog-ready output'].map((item) => (
            <div key={item} className="brand-card rounded-2xl p-4">
              <div className="mb-3 h-1.5 w-10 rounded-full" style={{ background: 'var(--accent)' }} />
              <p className="text-sm font-black" style={{ color: 'var(--ink)' }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
