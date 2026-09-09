import Hoverable from './Hoverable';

export default function BackToTop() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Hoverable
      id="ucfTop"
      href="#top"
      onClick={toTop}
      style={{
        position: 'fixed', right: 24, bottom: 24, zIndex: 70, width: 50, height: 50, borderRadius: 999,
        background: 'rgba(45,90,97,.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,.25)', color: '#fff', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 14px 34px -12px rgba(45,90,97,.8)', opacity: 0,
        pointerEvents: 'none', transition: 'opacity .25s ease',
      }}
      hoverStyle={{ background: '#1e3d42', color: '#fff' }}
    >
      <i className="fas fa-arrow-up"></i>
    </Hoverable>
  );
}
