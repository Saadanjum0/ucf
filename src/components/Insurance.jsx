import { useEffect, useRef, useState } from 'react';
import { LOGOS } from '../data';

// Replicates the theme's swiper: loop, autoplay every 2400ms, 300ms slide,
// 4 per view / 20px gap on desktop, 4 / 80px on tablet, 2 / 48px on mobile.
function config(width) {
  if (width >= 1024) return { perView: 4, gap: 20 };
  if (width >= 768) return { perView: 4, gap: 80 };
  return { perView: 2, gap: 48 };
}

export default function Insurance() {
  const [cfg, setCfg] = useState(() => config(window.innerWidth));
  const [index, setIndex] = useState(LOGOS.length); // start on the middle copy
  const [animate, setAnimate] = useState(true);
  const hover = useRef(false);
  const slides = [...LOGOS, ...LOGOS, ...LOGOS];

  useEffect(() => {
    const onResize = () => setCfg(config(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => { if (!hover.current) setIndex((i) => i + 1); }, 2400);
    return () => clearInterval(id);
  }, []);

  // seamless loop reset once we run past the middle copy
  useEffect(() => {
    if (index >= LOGOS.length * 2) {
      const t = setTimeout(() => { setAnimate(false); setIndex(index - LOGOS.length); }, 300);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const t = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(t);
    }
    return undefined;
  }, [index, animate]);

  const slideW = `calc((100% - ${cfg.gap * (cfg.perView - 1)}px) / ${cfg.perView})`;
  const shift = `calc(-${index} * ((100% - ${cfg.gap * (cfg.perView - 1)}px) / ${cfg.perView} + ${cfg.gap}px))`;

  return (
    <section className="insurance">
      <div className="gv-container">
        <div className="gv-col insurance-title"><h3>Our Insurance Partners</h3></div>
        <div className="gv-col insurance-slider">
          <div className="swiper" onMouseEnter={() => { hover.current = true; }} onMouseLeave={() => { hover.current = false; }}>
            <div className="swiper-track" style={{ transform: `translate3d(${shift}, 0, 0)`, transition: animate ? 'transform .3s ease' : 'none' }}>
              {slides.map((l, i) => (
                <div className="swiper-slide" key={i} style={{ width: slideW, marginRight: cfg.gap }}>
                  <div className="logo-slide">
                    <img className="main-image" src={`/img/${l.src}`} alt={l.alt} />
                    <img className="hover-image" src={`/img/${l.src}`} alt={l.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
