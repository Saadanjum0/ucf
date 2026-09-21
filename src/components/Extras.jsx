import { GALLERY, SITE } from '../data';

export function Gallery() {
  return (
    <section className="chlc-gallery">
      <div className="gal-inner">
        <div className="gal-head">
          <p className="gal-eyebrow">Gallery</p>
          <h2>Inside Our Clinic</h2>
          <p className="gal-lead">A look at our team, our patients, and the everyday care we provide.</p>
        </div>
        <div className="gal-grid">
          {GALLERY.map((g) => (
            <a className="gal-item" key={g} href={`/img/${g}`} target="_blank" rel="noopener">
              <img src={`/img/${g}`} alt="Community Health & Life Center — clinic photo" loading="lazy" />
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
      <h2>Manage Your Care Online</h2>
      <p>View your records, message our team, and request appointments anytime through our secure Patient Portal.</p>
      <div className="wp-buttons">
        <a className="wp-btn" href={SITE.portal} target="_blank" rel="noopener">Open the Patient Portal</a>
        <a className="wp-btn outline" href={SITE.phoneHref}>Call {SITE.phone}</a>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section className="chlc-instagram">
      <p className="eyebrow">Instagram</p>
      <h2>Follow Our Journey</h2>
      <p className="lead">Health tips, team moments, and updates from Community Health &amp; Life Center — see our latest on Instagram.</p>
      <div className="wp-buttons">
        <a className="wp-btn" href={SITE.instagram} target="_blank" rel="noopener">Follow @chlc.health</a>
      </div>
    </section>
  );
}
