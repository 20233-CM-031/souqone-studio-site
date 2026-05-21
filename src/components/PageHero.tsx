import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  logoSrc?: string;
  logoAlt?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, logoSrc, logoAlt, children }: PageHeroProps) {
  return (
    <section className="brand-hero">
      <div className="brand-pattern absolute inset-0" />
      <div className="brand-orbit right-[10%] top-16 h-52 w-52" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="brand-kicker">{eyebrow}</p>
          <h1 className="brand-title mt-5">{title}</h1>
          <p className="brand-copy mt-6">{copy}</p>
          {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
        {logoSrc ? (
          <div className="brand-logo-card floating-panel min-h-72 overflow-hidden">
            <img src={logoSrc} alt={logoAlt ?? eyebrow} className="h-full min-h-72 w-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
