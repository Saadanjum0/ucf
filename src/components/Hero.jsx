import { SITE } from '../data';

function HeroCard({ icon, alt, title, children, delay }) {
  return (
    <div className="gv-col gv-anim" data-anim="fadeInLeft" style={{ '--delay': delay }}>
      <div className="hero-card">
        <div className="icon-box">
          <div className="ib-icon circle"><img src={`/img/${icon}`} alt={alt} /></div>
          <div className="ib-body">
            <h2 className="ib-title">{title}</h2>
            <p className="ib-desc">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="gv-container">
        <div className="hero-outer">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-tag">Family Medicine · Sugar Land, TX</p>
              <h1>Compassionate Care <span className="chlc-g">for Every Stage of Life</span></h1>
              <p className="hero-lede">
                Community Health &amp; Life Center provides personalized, patient-centered primary care for families across Sugar Land and Fort Bend County — from newborns to grandparents.
              </p>
              <div className="hero-btns">
                <a className="gv-btn btn-primary" href="#"><span>Meet Our Provider</span></a>
                <a className="gv-btn btn-underline" href="#"><span>Plan Your Visit</span></a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="hero-cards-row">
                <HeroCard icon="waiting-room-replace.webp" alt="waiting room" title="Clinic Hours" delay="0s">
                  Mon–Fri : 8:00 AM – 5:00 PM<br />Saturday : By Appointment
                </HeroCard>
                <HeroCard icon="emergency-call-replace.webp" alt="emergency call" title="Need Care Today?" delay="0.15s">
                  Established patients can message us via the Patient Portal. For emergencies, call 911.<br />{SITE.phone}
                </HeroCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
