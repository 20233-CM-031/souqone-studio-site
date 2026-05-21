# MARZ / SouqOne / SouqOne Studio Website

Static MARZ-first website for ethical AI commerce positioning, SouqOne initiative storytelling, and SouqOne Studio WhatsApp pilot lead generation.

## Initiative

Marz Enterprises Solutions Initiative:

- SouqOne
- SouqOne Studio

## Live Deployment

- Production site: https://marz-souqone.netlify.app
- GitHub repository: https://github.com/20233-CM-031/souqone-studio-site
- Netlify project: `marz-souqone`

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Netlify Forms

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deploy

This repository is connected to Netlify continuous deployment from the `main` branch.

- Build command: `npm run build`
- Publish directory: `dist`
- Form name: `pilot-application`

The project includes `netlify.toml` with the SPA redirect required for `/privacy`, `/terms`, `/ethics`, and `/thank-you`.
Netlify Forms are registered through the static `public/__forms.html` file and mirrored in the React pilot form.

## Important Placeholders

Review before public launch:

- WhatsApp number in `src/data/contact.ts`
- Contact email in `src/data/contact.ts`
- Founder LinkedIn URL in `src/data/contact.ts`
- UPI/payment wording if the pilot process changes
- Any future social links

## Brand Assets

The supplied MARZ, SouqOne, and SouqOne Studio logos are committed in `public/brand`.
The supplied before/after effect images are committed as optimized JPG files in `public/samples`.
The supplied AI ads sample video is committed as `public/samples/souqone-studio-ai-ads-sample.mp4`.
Each primary page uses a logo-led theme:

- MARZ pages: ivory, charcoal, and measured gold
- SouqOne pages: market green and trusted cream
- SouqOne Studio pages: warm premium beige, dark ink, and catalog gold

## Launch Status

This site is for MARZ brand positioning and the early WhatsApp-first pilot of SouqOne Studio.

It intentionally does not include:

- backend APIs;
- login;
- payment gateway;
- marketplace features;
- product upload on the website;
- fake testimonials or fake client logos.

## Routes

- `/` - main landing page
- `/about` - About MARZ
- `/souqone` - SouqOne initiative
- `/studio` - SouqOne Studio conversion page
- `/principles` - ethical AI and truthful commerce principles
- `/contact` - WhatsApp, email, and pilot form
- `/privacy` - privacy policy starter draft
- `/terms` - terms of use starter draft
- `/ethics` - ethical commerce statement
- `/thank-you` - form submission success page

## Quality Checks

Run before deploying:

```bash
npm run lint
npm run build
```
