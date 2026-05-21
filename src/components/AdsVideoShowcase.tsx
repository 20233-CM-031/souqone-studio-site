import { whatsappLinks } from '../data/contact';

export function AdsVideoShowcase() {
  return (
    <div className="brand-card-strong overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="bg-black/5 p-4 sm:p-5">
          <video
            className="aspect-video w-full rounded-3xl border object-cover"
            style={{ borderColor: 'var(--line)' }}
            controls
            muted
            playsInline
            preload="metadata"
            poster="/samples/showcase-earrings.jpg"
          >
            <source src="/samples/souqone-studio-ai-ads-sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-6 sm:p-8">
          <p className="brand-kicker">AI ads services</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Product visuals can become short ad creatives too.
          </h2>
          <p className="mt-5 leading-8" style={{ color: 'var(--muted)' }}>
            SouqOne Studio also supports AI ad creative services for sellers who need
            WhatsApp status videos, Instagram-ready product promos, campaign visuals, and
            simple ad hooks built from the same truthful product presentation system.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Short product ad videos', 'WhatsApp status creatives', 'Instagram promo assets', 'Manual review before use'].map((item) => (
              <div key={item} className="brand-card rounded-2xl p-4">
                <div className="mb-3 h-1.5 w-10 rounded-full" style={{ background: 'var(--accent)' }} />
                <p className="text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
          <a href={whatsappLinks.sample} className="brand-button mt-7">
            Ask for AI Ads
          </a>
        </div>
      </div>
    </div>
  );
}
