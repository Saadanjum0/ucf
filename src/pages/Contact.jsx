import { useState } from 'react';
import { PageHero } from '../components/inner/Common';
import { PortalCta } from '../components/Extras';
import { GoogleGIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, TwitterIcon, GoogleIcon } from '../components/Icons';
import { REVIEWS, SITE, LOCATIONS } from '../data';
import { useEffect, useRef } from 'react';

const INFO = [
  [{ icon: 'email-icon-replace.webp', label: 'Mail Us', value: SITE.email, href: `mailto:${SITE.email}` }, { icon: 'hospital-location-icon-replace.webp', label: 'Main Location', value: SITE.address, href: SITE.mapsHref }],
  [{ icon: 'emergency-call-icon-replace-contact.webp', label: 'Contact Us', value: SITE.phone, href: SITE.phoneHref }, { icon: 'hospital-icon-replace.webp', label: 'Office Hours', value: 'Mon–Fri: 9:00 AM – 2:00 PM · Sat hours vary by location' }],
];

const LOGOS = ['r1.png', 'r2.png', 'r3.png', 'r4.png', 'r2.png'];

function initials(name) {
  return name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

function ContactReviews() {
  const track = useRef(null);
  const [pv, setPv] = useState(3);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(REVIEWS.length / pv);
  useEffect(() => {
    const measure = () => { if (track.current) setPv(Math.max(1, Math.floor(track.current.clientWidth / 330))); };
    measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure);
  }, []);
  const go = (p) => { const next = (p + pages) % pages; setPage(next); const el = track.current; if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' }); };
  const Stars = ({ size }) => <span className="grw-stars">{[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} style={{ width: size, height: size }} />)}</span>;
  return (
    <section className="reviews contact-reviews">
      <p className="eyebrow">Google Reviews</p>
      <h2>What Our Patients Say</h2>
      <div className="grw">
        <div className="grw-header">
          <div className="grw-header-inner">
            <div className="grw-avatar"><span className="grw-avatar-initials" aria-hidden="true">UCF</span></div>
            <div className="grw-place">
              <a className="name" href={SITE.mapsHref} target="_blank" rel="noopener">United Community Foundation</a>
              <span className="grw-stars"><span className="rating">5.0</span><Stars size={20} /></span>
              <div className="grw-based">Community reviews across our five locations</div>
              <div className="grw-powered">powered by <span className="g1">G</span><span className="g2">o</span><span className="g3">o</span><span className="g1">g</span><span className="g4">l</span><span className="g2">e</span></div>
              <a className="grw-write" href={SITE.writeReview} target="_blank" rel="noopener">review us on <GoogleGIcon /></a>
            </div>
          </div>
        </div>
        <div className="grw-content">
          <div className="grw-content-inner">
            <button className="grw-btn prev" aria-label="Previous" onClick={() => go(page - 1)}><ChevronLeftIcon /></button>
            <div className="grw-slides" ref={track} style={{ '--card-w': `calc((100% - ${4 * (pv - 1)}px) / ${pv})` }}>
              {REVIEWS.map((r) => (
                <div className="grw-review" key={r.name}>
                  <div className="grw-review-inner">
                    <div className="grw-review-head">
                      <div className="grw-avatar">{r.img ? <img src={`/img/${r.img}`} alt={`${r.name} profile picture`} /> : <span className="grw-avatar-initials" aria-hidden="true">{initials(r.name)}</span>}</div>
                      <div className="who"><a href={r.href} target="_blank" rel="noopener">{r.name}</a><div className="time">{r.time}</div></div>
                    </div>
                    <Stars size={18} />
                    <div className="grw-text">{r.text}</div>
                    <GoogleGIcon className="g-mark" />
                  </div>
                </div>
              ))}
            </div>
            <button className="grw-btn next" aria-label="Next" onClick={() => go(page + 1)}><ChevronRightIcon /></button>
          </div>
          <div className="grw-dots">
            {Array.from({ length: pages }).map((_, i) => <button key={i} className={`grw-dot ${i === page ? 'active' : Math.abs(i - page) === 1 ? 'near' : 'far'}`} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} />)}
          </div>
        </div>
      </div>
      <div className="wp-buttons"><a className="wp-btn" href={SITE.mapsHref} target="_blank" rel="noopener">Leave a Google review</a></div>
      <div className="chlc-socials contact-socials">
        <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
        <a href={SITE.twitter} target="_blank" rel="noopener" aria-label="Twitter / X"><TwitterIcon /></a>
        <a href={SITE.mapsHref} target="_blank" rel="noopener" aria-label="Google"><GoogleIcon /></a>
      </div>
    </section>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero image="ucf-contact-bg.webp" tag="Contact US" sub="Connect With Us" title="Your Trusted Point of Contact for Care" intro="United Community Foundation is here to answer your questions, connect you to our free and low-cost programs, and help you find the location nearest you." overlayStop="40%" />

      <section className="contact-section">
        <div className="gv-container">
          <div className="gv-col contact-form-col gv-anim" data-anim="fadeInLeft">
            <div className="gv-col-wrap contact-card">
              <h2>Share Your Needs With Us</h2>
              <p className="gv-p lead">Get in touch with our team for quick assistance, guidance, or appointment support.</p>
              <div className="chlc-form-wrap">
                <form className="wpcf7-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <p><label>Your Name (required)<br /><input type="text" required /></label></p>
                  <p><label>Your Email (required)<br /><input type="email" required /></label></p>
                  <p><label>Subject<br /><input type="text" /></label></p>
                  <p><label>Your Message<br /><textarea rows={8} /></label></p>
                  <p><input type="submit" value="Send" className="wpcf7-submit" /></p>
                  {sent && <p className="gv-p" style={{ textAlign: 'center' }}>Thank you for your message. It has been sent.</p>}
                </form>
              </div>
            </div>
          </div>
          <div className="gv-col contact-info-col">
            <div className="gv-col-wrap">
              <h2 className="gv-h2 left contact-h2">Reach Our Team</h2>
              <div className="contact-info-row">
                {INFO.map((col, ci) => (
                  <div className="gv-col" key={ci}>
                    <div className="gv-col-wrap">
                      {col.map((it) => (
                        <div className="contact-item" key={it.label}>
                          <div className="contact-icon"><img src={`/img/${it.icon}`} alt="" /></div>
                          <div className="contact-body">
                            <h2 className="label">{it.label}</h2>
                            <p className="value">{it.href ? <a href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{it.value}</a> : it.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-map gv-anim" data-anim="fadeInDown">
                <iframe title={SITE.address} src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" style={{ paddingTop: 0 }}>
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <h2 className="gv-h2 left contact-h2">Our Locations</h2>
              <p className="gv-p lead">We serve Harris and Fort Bend counties from five community locations — walk-ins welcome at most sites.</p>
              <div className="contact-info-row">
                {[0, 1].map((col) => (
                  <div className="gv-col" key={col}>
                    <div className="gv-col-wrap">
                      {LOCATIONS.filter((_, i) => i % 2 === col).map((l) => (
                        <div className="contact-item" key={l.title}>
                          <div className="contact-body">
                            <h2 className="label">{l.title}</h2>
                            <p className="value">{l.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insurance contact-insurance">
        <div className="gv-container">
          <div className="gv-col insurance-title"><h3>Our Insurance Partners</h3></div>
          <div className="gv-col insurance-slider">
            <div className="logo-row">
              {LOGOS.map((l, i) => <div className="logo-slide" key={i}><img src={`/img/${l}`} alt="" className="main-image" /></div>)}
            </div>
          </div>
        </div>
      </section>

      <ContactReviews />
      <PortalCta />
    </>
  );
}
