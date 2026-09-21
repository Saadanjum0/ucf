import { useEffect, useRef, useState } from 'react';
import { REVIEWS, SITE } from '../data';
import { GoogleGIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const Stars = ({ size }) => (
  <span className="grw-stars" aria-label="5 stars">
    {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} style={{ width: size, height: size }} />)}
  </span>
);

// the widget fits as many ~337px cards as the track allows
function perView(trackWidth) {
  return Math.max(1, Math.floor(trackWidth / 330));
}

export default function Reviews() {
  const track = useRef(null);
  const [pv, setPv] = useState(3);
  const [page, setPage] = useState(0);
  const paused = useRef(false);
  const pages = Math.ceil(REVIEWS.length / pv);
  const gap = 4;

  useEffect(() => {
    const measure = () => { if (track.current) setPv(perView(track.current.clientWidth)); };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const go = (p) => {
    const next = (p + pages) % pages;
    setPage(next);
    const el = track.current;
    if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
  };

  // widget autoplays with a 3s interval and stops while the mouse is over it
  useEffect(() => {
    const id = setInterval(() => { if (!paused.current) go(page + 1); }, 3000);
    return () => clearInterval(id);
  });

  return (
    <section className="reviews">
      <GoogleGIcon className="g-logo" />
      <p className="eyebrow">Google Reviews</p>
      <h2>Loved by Patients Across Sugar Land</h2>

      <div className="grw" onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}>
        <div className="grw-header">
          <div className="grw-header-inner">
            <div className="grw-avatar"><img src="/img/ChIJGxlslC3iQIYRGeaGTW7qhM8.jpg" alt="Community Health and Life Center place picture" /></div>
            <div className="grw-place">
              <a className="name" href="https://maps.google.com/?cid=14953334422244877849" target="_blank" rel="noopener">Community Health and Life Center</a>
              <span className="grw-stars"><span className="rating">5.0</span><Stars size={20} /></span>
              <div className="grw-based">Based on 1,011 reviews</div>
              <div className="grw-powered">powered by <span className="g1">G</span><span className="g2">o</span><span className="g3">o</span><span className="g1">g</span><span className="g4">l</span><span className="g2">e</span></div>
              <a className="grw-write" href={SITE.writeReview} target="_blank" rel="noopener">review us on <GoogleGIcon /></a>
            </div>
          </div>
        </div>

        <div className="grw-content">
          <div className="grw-content-inner">
            <button className="grw-btn prev" aria-label="Previous" onClick={() => go(page - 1)}><ChevronLeftIcon /></button>
            <div className="grw-slides" ref={track} style={{ '--card-w': `calc((100% - ${gap * (pv - 1)}px) / ${pv})` }}>
              {REVIEWS.map((r) => (
                <div className="grw-review" key={r.name}>
                  <div className="grw-review-inner">
                    <div className="grw-review-head">
                      <div className="grw-avatar"><img src={`/img/${r.img}`} alt={`${r.name} profile picture`} /></div>
                      <div className="who">
                        <a href={r.href} target="_blank" rel="noopener">{r.name}</a>
                        <div className="time">{r.time}</div>
                      </div>
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
            {Array.from({ length: pages }).map((_, i) => {
              const d = Math.abs(i - page);
              const cls = i === page ? 'active' : d === 1 ? 'near' : 'far';
              return <button key={i} className={`grw-dot ${cls}`} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} />;
            })}
          </div>
        </div>
      </div>

      <p className="note">Your experience matters to us — and it helps other families find trusted care.</p>
      <div className="wp-buttons">
        <a className="wp-btn" href={SITE.mapsHref} target="_blank" rel="noopener">Leave a Google review</a>
        <a className="wp-btn outline" href={SITE.mapsHref} target="_blank" rel="noopener">Read our reviews on Google</a>
      </div>
      <p className="addr">Community Health &amp; Life Center · {SITE.address}</p>
    </section>
  );
}
