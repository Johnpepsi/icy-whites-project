# Icy Whites — Next.js site

A white/cool-toned landing page for a teeth-whitening studio, built with Next.js (App
Router) and a live Calendly booking calendar.

## Getting started

```bash
npm install
cp .env.local.example .env.local
```

## Connecting Calendly

1. In Calendly, create (or open) the event type for your whitening session — e.g. a
   45-minute "Signature Session".
2. On that event type, click **Share** and copy its scheduling link
   (looks like `https://calendly.com/your-name/signature-session`).
3. Paste it into `.env.local`:

   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-name/signature-session
   ```
4. Run the dev server and open the Book section — the live Calendly calendar renders
   inline, right on the page:

   ```bash
   npm run dev
   ```

If you offer several session lengths, the simplest setup is one Calendly event type
per service, and pointing `NEXT_PUBLIC_CALENDLY_URL` at whichever one you want featured
in the main embed — the pricing cards' "Select" buttons scroll down to it. You can also
create a single Calendly page that lists all your event types and use that page's link
instead, so people choose the service inside Calendly itself.

### Taking a deposit through Calendly

Calendly's **Standard** plan and above let you collect payment (via Stripe or PayPal)
at the time of booking, directly on an event type — no custom checkout code needed. Turn
this on under the event type's **Payments** setting if you want the $50 deposit charged
automatically when someone books.

## Editing services & prices

`lib/services.js` is the single source of truth for what's offered — name, price,
duration, and the feature list shown on the pricing cards.

## Deploying

Standard Next.js app — deploys as-is to Vercel, Netlify, or any Node host. Set
`NEXT_PUBLIC_CALENDLY_URL` as an environment variable on whichever platform you use.
