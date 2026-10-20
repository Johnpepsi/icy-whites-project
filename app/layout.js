import "./globals.css";

// Swap this for your real domain once the site is live — it's what turns
// the opengraph-image.png into a full, shareable URL for link previews.
const SITE_URL = "https://icywhites.ca";

const TITLE = "Icy Whites — Teeth Whitening Studio";
const DESCRIPTION =
  "Icy Whites is a small teeth-whitening studio built around a careful, low-sensitivity process. Mobile appointments in Regina, SK. Book your session online.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // app/opengraph-image.png is picked up automatically by Next.js and used
  // for both of the blocks below — this is what shows up when the site link
  // is shared in texts, Slack, Facebook, etc.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Icy Whites",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        {children}
      </body>
    </html>
  );
}
