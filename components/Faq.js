"use client";
import { useState } from "react";

const ITEMS = [
  {
    q: "How does teeth whitening work?",
    a: "Our treatment uses professional whitening gel to help break down stains and brighten the appearance of your natural teeth. An LED light is used as part of our in-chair whitening system. The active whitening treatment consists of four 15-minute rounds, for approximately 60 minutes of whitening time.",
  },
  {
    q: "How long is the appointment?",
    a: "The active whitening treatment takes approximately 60 minutes, but please allow up to 2 hours for your full appointment. This includes setup, consultation, an initial shade assessment, preparation, whitening, and aftercare.",
  },
  {
    q: "What results can I expect?",
    a: "Every smile responds differently to whitening. Results can vary depending on your natural tooth colour, type and extent of staining, previous dental work, and individual response to treatment. Many clients notice a visible difference after one session, but specific results or a certain number of shades cannot be guaranteed.",
  },
  {
    q: "Will my teeth be sensitive afterward?",
    a: [
      "Some clients may experience temporary tooth sensitivity during or after whitening, while others experience little to none. Sensitivity is generally temporary and short-lived.",
      "For clients who are prone to sensitivity, a lower-concentration whitening gel may be used when appropriate, and the treatment can be adjusted based on your individual needs and comfort. We also use a desensitizing gel and provide aftercare recommendations to help keep you comfortable.",
    ],
  },
  {
    q: "How long will my results last?",
    a: "Whitening results vary from person to person and can be influenced by your diet, oral hygiene, and lifestyle habits. Coffee, tea, red wine, tobacco, and other staining substances may contribute to discolouration over time. Maintaining good oral hygiene and having occasional touch-up treatments can help maintain the appearance of your results.",
  },
  {
    q: "What should I avoid after my appointment?",
    a: "A strict “white diet” is not considered necessary after teeth whitening. However, you may choose to limit strongly pigmented foods and beverages—such as coffee, tea, red wine, and dark sauces—during the first 24 hours. Reducing staining habits over time may also help maintain your brighter smile.",
  },
  {
    q: "Will whitening work on crowns, veneers, or fillings?",
    a: "Whitening treatments work on natural tooth structure. Crowns, veneers, fillings, and other tooth-coloured restorations do not whiten in the same way as natural teeth. If you have visible restorations, please let us know before your appointment so we can discuss what you may expect from your results.",
  },
  {
    q: "Do you offer mobile appointments?",
    a: "Yes! Icy Whites offers convenient mobile teeth whitening throughout Regina, Saskatchewan. We bring the whitening experience to you, allowing you to enjoy your appointment from the comfort and convenience of your home or office.",
  },
  {
    q: "Who is not eligible for treatment?",
    a: [
      "As a precaution and as part of our treatment policy, Icy Whites does not provide whitening services to individuals under 18 or those who are pregnant or breastfeeding.",
      "If you have existing dental concerns, significant sensitivity, or are unsure whether whitening is appropriate for you, we recommend consulting your dentist before booking.",
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-frost" id="faq">
      <div className="wrap">
        <div className="head center faq-head">
          <div className="kicker">Everything you need to know before your Icy Whites appointment.</div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button className="faq-q" onClick={() => setOpenIndex(isOpen ? null : i)} aria-expanded={isOpen}>
                  {item.q}
                  <span className="plus"></span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    {(Array.isArray(item.a) ? item.a : [item.a]).map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-more">
          <h3>Still have questions?</h3>
          <p>
            We’re happy to help! Reach out to Icy Whites with any questions before booking. We want you to feel
            comfortable and informed about your whitening experience from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}