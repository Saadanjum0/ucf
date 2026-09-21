import { useEffect, useState } from 'react';

// Minimal history router: same-origin links navigate without a reload, the
// page scrolls to the top on every route change, and back/forward work.
const normalize = (p) => {
  if (!p) return '/';
  let path = p.replace(/\/+$/, '');
  if (path === '') return '/';
  return path;
};

export function usePath() {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href === '#' || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (/\.(pdf|jpg|jpeg|png|webp)$/i.test(url.pathname)) return;
      e.preventDefault();
      const next = normalize(url.pathname);
      if (next !== normalize(window.location.pathname)) {
        window.history.pushState({}, '', url.pathname);
        setPath(next);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPop);
    document.addEventListener('click', onClick);
    return () => { window.removeEventListener('popstate', onPop); document.removeEventListener('click', onClick); };
  }, []);

  return path;
}
