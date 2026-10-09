// Single source of truth for services, prices, and what each session includes.
// Edit this list to change what shows up in Pricing and in the booking form —
// the Stripe checkout amount is read from here too, so the two never drift apart.

export const SERVICES = [
  {
    id: "Individual-Session",
    name: "Individual Session",
    price: 150,
    duration: "60 min",
    blurb: "Professional teeth whitening with approximately 60 minutes of active whitening time.",
    features: ["60-minute session", "Single treatment round", "Shade check included"],
  },
  {
    id: "Whitening-Touch-Up",
    name: "Whitening Touch-Up ",
    price: 130,
    duration: "",
    featured: true,
    blurb: [
      "A maintenance session exclusively for returning Icy Whites clients. Available when your last whitening session with us was within the past 6 months. Includes approximately 60 minutes of active whitening time.",
    ],
    features: [
      "Full shade-match consult",
      "Low-sensitivity formula",
      "Aftercare guide included",
    ],
  },
  {
    id: "Whiten Together",
    name: "Whiten Together",
    price: 250,
    duration: "60 min",
    blurb: "Book together at the same location and save $50. Each person receives their own complete teeth whitening treatment with approximately 60 minutes of active whitening time per person.",
    features: ["60-minute session", "$250 for 2 people", "A deal for 2 people whitening at the same time"],
  },
];

export function getServiceById(id) {
  return SERVICES.find((s) => s.id === id);
}
