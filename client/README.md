# WEB CREST LAB - Client

Production-ready developer portfolio built as a digital engineering laboratory.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Fonts: Inter, Space Grotesk, JetBrains Mono

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

## Deploy To Vercel

1. Push this repo to GitHub.
2. Import project in Vercel and select `client/` as the root directory.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output: default Next.js output.
6. Add custom domain: `webcrest.studio`.

## Notes

- Contact form currently validates and returns success through `/api/contact`.
- For real email delivery, plug in Resend, Postmark, or SES in `app/api/contact/route.ts`.
