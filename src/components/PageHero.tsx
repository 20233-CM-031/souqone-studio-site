import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
      <div className="future-grid absolute inset-0 opacity-50" />
      <div className="section-shell relative">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-heading text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">{copy}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
