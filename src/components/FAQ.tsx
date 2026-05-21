import { faqs } from '../data/faqs';

export function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">Questions sellers usually ask first.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="panel group p-5">
              <summary className="cursor-pointer list-none text-base font-bold text-charcoal">
                {faq.question}
                <span className="float-right text-gold group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-zinc-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
