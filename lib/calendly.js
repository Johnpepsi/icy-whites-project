// Loads Calendly's popup script once and reuses it, so every "Book Now"
// button can trigger the same modal without duplicating <script> tags.

let scriptPromise;

export function loadCalendlyScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the Calendly widget script."));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export async function openCalendlyPopup(url) {
  if (!url) {
    // eslint-disable-next-line no-alert
    alert("Add your Calendly link to NEXT_PUBLIC_CALENDLY_URL in .env.local first.");
    return;
  }
  try {
    await loadCalendlyScript();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  } catch (err) {
    console.error(err);
  }
}
