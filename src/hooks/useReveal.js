import { useEffect } from 'react';

// Scroll-reveal trigger: an element plays its entrance animation every time it
// scrolls into view (top edge at or above 75% of viewport height), and resets
// so it plays again on re-entry after scrolling away and back.
export function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.gv-anim'));
    if (!els.length) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('gv-played'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            if (!el.classList.contains('gv-played')) {
              el.classList.add('gv-played');
            }
          } else if (entry.boundingClientRect.top > 0) {
            // Only re-arm for elements still below the fold. Anything scrolled
            // past above stays revealed, so content can never be stranded
            // invisible once it has been seen.
            el.classList.remove('gv-played');
            // eslint-disable-next-line no-void
            void el.offsetWidth; // force reflow so the animation restarts on re-entry
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -15% 0px' }
    );

    els.forEach((el) => observer.observe(el));

    // Safety net: any element that is on screen but still unrevealed gets shown
    // outright. A missed observer callback must never leave content permanently
    // invisible, so this re-checks on scroll rather than only once at mount.
    let raf = 0;
    const sweep = () => {
      raf = 0;
      els.forEach((el) => {
        if (el.classList.contains('gv-played')) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('gv-played');
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(sweep); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const initial = setTimeout(sweep, 400);

    return () => {
      clearTimeout(initial);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
