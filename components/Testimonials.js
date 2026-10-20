const QUOTES = [
  {
    quote: "I had a great experience with this teeth whitening service. The convenience of having it done at home made the process stress-free. Reeanne was very knowledgeable and personally pleasing to work with, which added to the comfort of the session. My teeth whitened a couple of shades, and I was satisfied with the results. I definitely recommend giving it a try!",
    who: "— Alexander Basada",
  },
  {
    quote: "Super satisfied with the results! I use to smoke a lot, drink soda and beer in the past. I had a bad shade of stain in my teeth. After 1 session I saw the icywhite already. Also the home service was a bonus. My wife and I didn’t have to get out of our house. Thank you! Would highly recommend!",
    who: "— John Bacani",
  },
  {
    quote: "I had an amazing experience at Icy Whites YQR! My recent teeth whitening left my smile bright and beautiful, and now I feel so confident showing it off. I’m incredibly happy with the results and highly recommend her professional, friendly, and effective service.",
    who: "— Ann B.",
  },
  {
    quote: "Amazing experience with an amazing person! She’s very professional, organized and efficient when working. Immediate results plus the option of getting it done from the comfort of my own home?! What more could you ask for?! Highly recommended and already referred friends! Will definitely book again!",
    who: "— Carrie Jane Bilgera",
  },
  {
    quote:"Great service with affordable price. Easy to book appointment and the result is beautiful.",
    who: "— Margielee Jimelo",
  },
  {
    quote:"It was absolutely amazing getting my treatment done. Would definitely get it again.",
    who: "— Sadia Nadeem",
  },
];

export default function Testimonials() {
  return (
    <section className="section-frost" id="reviews">
      <div className="wrap">
        <div className="head center">
          <div className="kicker">Reviews</div>
          <h2>Testimonials</h2>
          <p>From Icy Whites YQR – Teeth Whitening</p>
        </div>
        <div className="quote-grid">
          {QUOTES.map((q) => (
            <div className="quote-card" key={q.who}>
              <div className="quote-mark">&ldquo;</div>
              <p className="q">{q.quote}</p>
              <div className="who">{q.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
