import { workflowSteps } from '../data/services';

export function HowItWorks() {
  return (
    <section id="workflow" className="bg-white py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-3">Simple WhatsApp-first workflow.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article key={step} className="panel p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{step}</h3>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="panel p-6">
            <h3 className="font-bold">Pilot process</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              During the pilot, payments and onboarding are handled manually through WhatsApp. Once
              your plan is confirmed, you can pay through UPI and send your product images. We track
              your image/catalog slots internally and deliver final files through WhatsApp or Drive.
            </p>
          </div>
          <div className="panel p-6">
            <h3 className="font-bold">Quality note</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Better input photos produce better results. We may ask you to retake photos if the
              product is too blurry, cropped, dark, or unclear.
            </p>
          </div>
          <div className="panel p-6">
            <h3 className="font-bold">Accuracy note</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Please review every final image before sharing it with customers. SouqOne Studio
              improves presentation, but sellers remain responsible for truthful product details.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-4xl rounded-lg border border-gold/30 bg-gold/10 p-5 text-sm font-semibold leading-7 text-charcoal">
          During pilot, SouqOne Studio is a managed service. The mobile app will be built later after
          working with real sellers and understanding their repeated needs.
        </p>
      </div>
    </section>
  );
}
