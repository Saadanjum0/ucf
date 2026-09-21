import { useEffect } from 'react';

// Replicates the reference's scroll-reveal trigger: an element stays hidden
// until its top edge is at or above 75% of the viewport height (or the page is
// scrolled to the bottom), then its entrance animation plays once.
export function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.gv-anim:not(.gv-played)'));
    if (!els.length) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pending = els;
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      const atBottom = vh + Math.ceil(window.pageYOffset) >= document.body.offsetHeight - 0.25 * vh;
      pending = pending.filter((el) => {
        const top = el.getBoundingClientRect().top;
        if (top <= 0.75 * vh || (top > 0 && atBottom)) {
          el.classList.add('gv-played');
          if (reduce) el.style.animation = 'none';
          return false;
        }
        return true;
      });
      if (!pending.length) detach();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    const detach = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    const t = setTimeout(check, 300);
    return () => { detach(); clearTimeout(t); if (raf) cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
