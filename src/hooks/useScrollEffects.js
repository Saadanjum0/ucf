import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scroll progress bar, back-to-top visibility, a slow constant marquee drift,
// hero stat counters, and a GSAP scroll-reveal on [data-reveal] elements.
export function useScrollEffects(page) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tick = () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight || 1;
        const y = window.scrollY || doc.scrollTop || 0;
        const p = Math.max(0, Math.min(1, y / max));
        const bar = document.getElementById('ucfProgress');
        if (bar) bar.style.width = `${(p * 100).toFixed(2)}%`;
        const btn = document.getElementById('ucfTop');
        if (btn) {
          const on = y > 500;
          btn.style.opacity = on ? '1' : '0';
          btn.style.pointerEvents = on ? 'auto' : 'none';
        }
      };
      window.addEventListener('scroll', tick, { passive: true });
      tick();

      // Reveal-on-scroll: each [data-reveal] block fades/lifts in once, the
      // first time it crosses into the lower 85% of the viewport.
      const reveals = gsap.utils.toArray('[data-reveal]');
      reveals.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (i % 4) * 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      let loop;
      const mq = document.getElementById('ucfMarquee');
      if (mq) {
        const half = mq.scrollWidth / 2 || 1200;
        loop = gsap.to(mq, {
          x: -half,
          duration: 40,
          ease: 'none',
          repeat: -1,
          modifiers: { x: (x) => `${parseFloat(x) % half}px` },
        });
      }

      const counters = gsap.utils.toArray('[data-count]').map((el) => ({
        el,
        end: parseFloat(el.getAttribute('data-count')) || 0,
        suffix: el.getAttribute('data-suffix') || '',
      }));
      counters.forEach((c) => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: c.end,
          duration: 2.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: c.el, start: 'top 90%', once: true },
          onUpdate: () => { c.el.textContent = Math.round(obj.v) + c.suffix; },
        });
      });

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener('scroll', tick);
        if (loop) loop.kill();
      };
    });

    return () => ctx.revert();
  }, [page]);
}
