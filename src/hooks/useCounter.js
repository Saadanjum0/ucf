import { useEffect, useRef } from 'react';

// Counts 0 -> target over `duration` ms with easeInOutQuart, the same curve
// and 3500ms duration the reference's fun-fact block uses, starting when the
// element is at least 50% in view.
const easeInOutQuart = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

export function useCounter(target, duration = 3500) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.textContent = '0';
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = String(Math.round(easeInOutQuart(p) * target));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { run(); io.disconnect(); }
    }, { threshold: [0.5] });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [target, duration]);
  return ref;
}
