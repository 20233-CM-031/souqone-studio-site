# SouqOne Studio Launch Website

Static landing website for SouqOne Studio, a WhatsApp-first pilot service under SouqOne by MARZ Enterprises & Solutions.

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

Connect this GitHub repository to Netlify.

- Build command: `npm run build`
- Publish directory: `dist`
- Form name: `pilot-application`

The project includes `netlify.toml` with the SPA redirect required for `/privacy`, `/terms`, `/ethics`, and `/thank-you`.

## Important Placeholders

Review before public launch:

- WhatsApp number in `src/data/contact.ts`
- Contact email in `src/data/contact.ts`
- Sample images in `public/samples`
- `public/og-image.png`
- UPI/payment wording if the pilot process changes
- Any future social links

## Launch Status

This site is for the early WhatsApp-first pilot of SouqOne Studio.

It intentionally does not include:

- backend APIs;
- login;
- payment gateway;
- marketplace features;
- product upload on the website;
- fake testimonials or fake client logos.

## Routes

- `/` - main landing page
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
