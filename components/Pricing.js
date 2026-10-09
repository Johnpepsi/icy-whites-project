import { SERVICES } from "@/lib/services";
import BookNowButton from "@/components/BookNowButton";
import LeafShadow from "@/components/LeafShadow";

export default function Pricing() {
  return (
    <section className="section-dark section-contained" id="pricing">
      <LeafShadow className="section-big-leaf" />
      <div className="wrap">
        <div className="head center">
          <div className="kicker">Pricing</div>
          <h2>Service Menu</h2>
          <p>Curated sessions for every goal, from a quick refresh to a full bridal-ready lift.</p>
        </div>
        <div className="price-grid">
          {SERVICES.map((s) => (
            <div className={`price-card${s.featured ? " featured" : ""}`} key={s.id}>
              <h3>{s.name}</h3>
              <div className="price">${s.price}</div>
              <div className="addon">+ Sensitivity gel, $8</div>
              <div className="desc">{s.blurb}</div>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <BookNowButton className={`btn ${s.featured ? "btn-solid" : "btn-ghost"}`}>
                Select
              </BookNowButton>
            </div>
          ))}
        </div>
        <div className="price-note">All prices are fixed. A $50 deposit secures your appointment.</div>
      </div>
    </section>
  );
}
