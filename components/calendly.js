'use client';

import { useEffect } from 'react';

export default function CalendlyButton() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          // @ts-expect-error Calendly is loaded globally via script tag
          window.Calendly?.initPopupWidget({ url: calendlyUrl });
        }}
      >
        Schedule time with me
      </a>
    </>
  );
}