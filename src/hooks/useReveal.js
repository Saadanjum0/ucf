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
          } else {
            el.classList.remove('gv-played');
            // eslint-disable-next-line no-void
            void el.offsetWidth; // force reflow so the animation restarts on re-entry
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -25% 0px' }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
