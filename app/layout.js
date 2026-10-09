import "./globals.css";

export const metadata = {
  title: "Icy Whites — Teeth Whitening Studio",
  description:
    "Icy Whites is a small teeth-whitening studio built around a careful, low-sensitivity process. Book your session online.",
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
