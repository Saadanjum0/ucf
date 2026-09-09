export default function InnerHeader({ title, lede, onNav }) {
  return (
    <div className="ucf-in" style={{ background: '#1e3d42', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '54px 24px 48px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, color: '#a6cdd1' }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ color: '#a6cdd1' }}>Home</a>
          <span>/</span>
          <span style={{ color: '#fff', fontWeight: 600 }}>{title}</span>
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(30px,4.4vw,44px)', fontWeight: 800, letterSpacing: '-.03em' }}>{title}</h1>
        <p style={{ margin: 0, maxWidth: '64ch', fontSize: 15.5, lineHeight: 1.65, color: '#cfe3e4' }}>{lede}</p>
      </div>
    </div>
  );
}
