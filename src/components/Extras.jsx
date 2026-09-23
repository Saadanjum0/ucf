import { GALLERY, SITE } from '../data';

export function Gallery() {
  return (
    <section className="chlc-gallery">
      <div className="gal-inner">
        <div className="gal-head">
          <p className="gal-eyebrow">Gallery</p>
          <h2>Our Community at Work</h2>
          <p className="gal-lead">A look at our care teams, our locations, and the families we serve across Harris and Fort Bend counties.</p>
        </div>
        <div className="gal-grid">
          {GALLERY.map((g) => (
            <a className="gal-item" key={g} href={`/img/${g}`} target="_blank" rel="noopener">
              <img src={`/img/${g}`} alt="United Community Foundation — community photo" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortalCta() {
  return (
    <section className="chlc-portal-cta">
      <h2>Need Help? We're Here for You</h2>
      <p>Whether you need free or low-cost medical, dental, or social services, our team can help you find the right program and location — or you can support our mission with a donation.</p>
      <div className="wp-buttons">
        <a className="wp-btn" href={SITE.portal}>Request Services</a>
        <a className="wp-btn outline" href={SITE.phoneHref}>Call {SITE.phone}</a>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section className="chlc-instagram">
      <p className="eyebrow">Community</p>
      <h2>Follow Our Work</h2>
      <p className="lead">Program updates, community events, and stories from United Community Foundation — follow along on Facebook.</p>
      <div className="wp-buttons">
        <a className="wp-btn" href={SITE.facebook} target="_blank" rel="noopener">Follow on Facebook</a>
      </div>
    </section>
  );
}
