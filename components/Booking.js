import BookNowButton from "@/components/BookNowButton";
import LeafShadow from "@/components/LeafShadow";

export default function Booking() {
  return (
    <section className="section-white" id="book">
      <div className="wrap">
          <div className="head center">
            <div className="kicker">Reservations</div>
             <h2>Book Your Session</h2>
             <p>For the safety and comfort of our clients, Icy Whites appointments are available to clients 
              who are 18 years of age or older and are not pregnant or breastfeeding.</p>
             <p>By booking your appointment, you confirm that you meet these requirements. If any of these apply to you, please contact us before booking.</p>
        </div>
        <div className="book-layout">
          <div className="book-copy">
            <h2 className="book-studio-heading">Icy Whites Studio</h2>
            <p>
              Pick a session length below and select an open slot. You&rsquo;ll get an
              email confirmation right away, plus a reminder before your appointment.
            </p>
            <div className="book-info">
              <div className="row"><b>✉</b> icywhites.ca@gmail.com</div>
              <div className="row"><b>✦</b> Regina, Saskatchewan - mobile appointments available</div>
              <div className="row"><b>✧</b> Appointments are limited and booked one at a time.</div>
            </div>
          </div>

          <div className="book-panel book-panel-dark">
            <LeafShadow className="book-leaf-shadow" />
            <div className="kicker kicker-light">Reservations</div>
            <h2 className="book-heading">Select Your Appointment</h2>
            <p className="book-sub">
              Choose a time that suits you. You&rsquo;ll be redirected to secure
              booking instantly.
            </p>

            <BookNowButton className="btn btn-light book-cta">
              Open Booking Calendar
            </BookNowButton>

            <div className="book-footnotes">
              <p>
                <b>A $50 deposit</b> secures your date and is deducted from your
                final total.
              </p>
              <p>Average response time: under 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
