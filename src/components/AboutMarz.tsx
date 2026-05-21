export function AboutMarz() {
  return (
    <section className="bg-charcoal py-20 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              Built under MARZ. Launched through SouqOne.
            </h2>
          </div>
          <p className="text-lg leading-9 text-zinc-200">
            MARZ Enterprises & Solutions is an emerging technology venture focused on ethical AI and
            practical digital systems for real-world businesses. SouqOne is MARZ's local commerce
            initiative, created to support small and mid-sized sellers with useful digital growth
            tools. SouqOne Studio is the first focused step in that journey.
          </p>
        </div>
      </div>
    </section>
  );
}
