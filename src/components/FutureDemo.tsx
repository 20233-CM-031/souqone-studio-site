type FutureDemoProps = {
  logoSrc?: string;
};

export function FutureDemo({ logoSrc = '/brand/souqone-studio.png' }: FutureDemoProps) {
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

        <div className="grid gap-5 lg:grid-cols-2">
          <figure className="scan-surface overflow-hidden rounded-3xl border bg-white/55" style={{ borderColor: 'var(--line)' }}>
            <div className="sample-frame sample-frame-input" role="img" aria-label="Before product photo sample">
              <div className="sample-label">Phone photo input</div>
              <div className="product-plate" />
              <div className="sample-note">ordinary light / busy frame</div>
            </div>
            <figcaption className="border-t px-4 py-3 text-sm font-black" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
              Before: ordinary seller photo
            </figcaption>
          </figure>
          <figure className="scan-surface overflow-hidden rounded-3xl border bg-white/70" style={{ borderColor: 'var(--line)' }}>
            <div className="sample-frame sample-frame-output" role="img" aria-label="After product catalog sample">
              <div className="sample-label">Studio output</div>
              <div className="product-plate product-plate-after" />
              <div className="sample-note">same product / cleaner catalog asset</div>
            </div>
            <figcaption className="border-t px-4 py-3 text-sm font-black" style={{ borderColor: 'var(--line)', color: 'var(--accent-2)' }}>
              After: showroom-ready direction
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {['Preserve shape', 'Protect material truth', 'Create catalog assets'].map((item) => (
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
