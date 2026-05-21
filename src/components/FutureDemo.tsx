export function FutureDemo() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-glow">
      <div className="future-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(77,216,255,0.24),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(20,160,111,0.22),transparent_30%)]" />

      <div className="relative grid h-full gap-5 p-5 sm:p-7">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
          <div>
            <p className="text-xs font-black text-cyan">SouqOne Studio Console</p>
            <p className="text-sm text-mist">Truth-preserving visual commerce pipeline</p>
          </div>
          <div className="h-3 w-3 rounded-full bg-emerald shadow-[0_0_24px_rgba(20,160,111,0.9)]" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <figure className="scan-surface overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
            <img
              src="/samples/before-after-1.jpg"
              alt="Before product photo sample"
              className="h-64 w-full object-cover opacity-90"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-sm font-black text-mist">
              Before: ordinary seller photo
            </figcaption>
          </figure>
          <figure className="scan-surface overflow-hidden rounded-2xl border border-cyan/25 bg-charcoal shadow-glow">
            <img
              src="/samples/before-after-2.jpg"
              alt="After product catalog sample"
              className="h-64 w-full object-cover"
            />
            <figcaption className="border-t border-cyan/20 px-4 py-3 text-sm font-black text-cyan">
              After: showroom-ready direction
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {['Preserve shape', 'Protect material truth', 'Create catalog assets'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-cyan to-emerald" />
              <p className="text-sm font-black text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
