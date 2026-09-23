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
              <p className="hero-tag">United Community Foundation · Harris &amp; Fort Bend Counties, TX</p>
              <h1>Empowering <span className="chlc-g">and Strengthening Communities</span></h1>
              <p className="hero-lede">
                United Community Foundation provides free and low-cost medical, dental, and social services to underserved and uninsured families across Harris and Fort Bend counties — including free care for children under 21 through our Title V Program.
              </p>
              <div className="hero-btns">
                <a className="gv-btn btn-primary" href="/services/medical/"><span>Learn More</span></a>
                <a className="gv-btn btn-underline" href={SITE.donate} target="_blank" rel="noopener"><span>Donate</span></a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="hero-cards-row">
                <HeroCard icon="time-medicine-icon-replace.webp" alt="waiting room" title="Clinic Hours" delay="0s">
                  Mon–Fri : 9:00 AM – 2:00 PM<br />Saturday : Select Locations
                </HeroCard>
                <HeroCard icon="emergency-call-icon-replace.webp" alt="emergency call" title="Need Care Today?" delay="0.15s">
                  Most locations welcome walk-ins. For emergencies, call 911.<br />{SITE.phone}
                </HeroCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
