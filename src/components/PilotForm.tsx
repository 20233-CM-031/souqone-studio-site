import { whatsappLinks } from '../data/contact';

export function PilotForm() {
  return (
    <section id="apply" className="brand-section">
      <div className="brand-pattern absolute inset-0 opacity-25" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="reveal-card">
            <p className="eyebrow">Pilot access</p>
            <h2 className="section-title mt-4">Apply for SouqOne Studio.</h2>
            <p className="section-copy mt-5">
              This is a WhatsApp-first pilot for selected local sellers. The website captures
              intent; the real pilot conversation starts on WhatsApp with sample product photos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLinks.sample} className="brand-button">
                Send Sample Photos
              </a>
              <a href={whatsappLinks.general} className="brand-button-secondary">
                Ask Before Applying
              </a>
            </div>
          </div>

          <form
            name="pilot-application"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            className="brand-card p-5 sm:p-7"
          >
            <input type="hidden" name="form-name" value="pilot-application" />
            <input type="hidden" name="bot-field" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Full name
                <input className="field-input" name="full_name" required />
              </label>
              <label className="field-label">
                Shop/business name
                <input className="field-input" name="shop_name" required />
              </label>
              <label className="field-label">
                WhatsApp number
                <input className="field-input" name="whatsapp" inputMode="tel" required />
              </label>
              <label className="field-label">
                Area / locality in Hyderabad
                <input className="field-input" name="area" />
              </label>
              <label className="field-label">
                Business category
                <select className="field-input" name="category" defaultValue="Jewelry">
                  <option>Jewelry</option>
                  <option>Bangles</option>
                  <option>Pearls</option>
                  <option>Boutique</option>
                  <option>Accessories</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="field-label">
                Monthly product photos
                <select className="field-input" name="monthly_photos" defaultValue="Below 30">
                  <option>Below 30</option>
                  <option>30-100</option>
                  <option>100-200</option>
                  <option>200+</option>
                </select>
              </label>
              <label className="field-label sm:col-span-2">
                Interested plan
                <select className="field-input" name="plan" defaultValue="Need guidance">
                  <option>Go To Pilot - Rs 149</option>
                  <option>Starter Seller - Rs 999</option>
                  <option>Shop Seller - Rs 2,999</option>
                  <option>Premium Catalog Pack - Rs 4,999</option>
                  <option>Need guidance</option>
                </select>
              </label>
              <label className="field-label sm:col-span-2">
                Message / requirement
                <textarea className="field-input min-h-32 resize-y" name="message" />
              </label>
            </div>
            <button type="submit" className="brand-button mt-6 w-full">
              Submit Pilot Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
