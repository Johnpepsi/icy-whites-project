import BookNowButton from "@/components/BookNowButton";
import LeafFall from "@/components/LeafFall";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <LeafFall />
      <div className="wrap">
        <div className="hero-marks">
          <span>❄</span><span>✧</span><span>❄</span>
        </div>
        <div className="kicker">Teeth Whitening Studio</div>
        <h1>Icy <span className="accent">Whites</span></h1>
        <p className="lede center">
          Limited sessions available this month — a calm, one-on-one whitening
          experience built around comfort, not chemicals that leave you wincing.
        </p>
        <div className="hero-actions">
          <BookNowButton className="btn btn-solid">Reserve Your Session</BookNowButton>
          <a className="btn btn-ghost" href="#pricing">See Pricing</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">400+</div>
            <div className="stat-label">Sessions completed</div>
          </div>
          <div>
            <div className="stat-num">8</div>
            <div className="stat-label">Shades, average lift</div>
          </div>
          <div>
            <div className="stat-num">3+</div>
            <div className="stat-label">Years in practice</div>
          </div>
        </div>
        <div className="scroll-cue">
         SCROLL
        <span className="scroll-track">
          <span className="scroll-dot" />
        </span>
      </div>
      </div>
    </section>
  );
}
