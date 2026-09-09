import Hoverable from './Hoverable';

export default function DonateCta({ onNav }) {
  const go = (p) => (e) => { e.preventDefault(); onNav(p); };

  return (
    <div style={{ background: '#fff', borderTop: '1px solid #eceadf' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18 }}>
        <div data-reveal style={{ width: 72, height: 72, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
          <i className="fas fa-hands-helping"></i>
        </div>
        <h2 data-reveal style={{ margin: 0, fontSize: 'clamp(28px,4vw,38px)', fontWeight: 800, letterSpacing: '-.025em', color: '#0f172a' }}>
          Join us in healing Texas
        </h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#475569', maxWidth: '62ch' }}>
          As a nonprofit, our ability to deliver free and low-cost care relies directly on community partnerships, generous donations, and dedicated volunteers.
        </p>
        <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <Hoverable
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=KXUXZ2T5BTEEU&source=url"
            target="_blank" rel="noopener"
            style={{ padding: '14px 28px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 14.5, fontWeight: 700, boxShadow: '0 12px 26px -12px rgba(45,90,97,.8)' }}
            hoverStyle={{ background: '#1e3d42', color: '#fff' }}
          >
            <i className="fas fa-donate" style={{ marginRight: 8 }}></i>Make a donation
          </Hoverable>
          <Hoverable
            href="#contact" onClick={go('contact')}
            style={{ padding: '14px 28px', borderRadius: 999, background: '#f1f5f9', color: '#1e293b', fontSize: 14.5, fontWeight: 700 }}
            hoverStyle={{ background: '#e2e8f0', color: '#1e293b' }}
          >
            <i className="fas fa-user-plus" style={{ marginRight: 8 }}></i>Volunteer with us
          </Hoverable>
        </div>
      </div>
    </div>
  );
}
