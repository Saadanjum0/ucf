import Hoverable from './Hoverable';
import logo from '../assets/brand/logo.png';

const linkHover = { color: '#a6cdd1' };
const socialHover = { background: '#2D5A61', color: '#fff' };

export default function Footer({ onNav }) {
  const go = (p) => (e) => { e.preventDefault(); onNav(p); };

  return (
    <div style={{ background: '#0f172a', color: '#94a3b8', borderTop: '4px solid #2D5A61', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 24px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 40 }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'flex-start' }}>
            <span style={{ borderRadius: 10, background: '#fff', padding: '6px 8px', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="United Community Foundation" style={{ height: 36, width: 'auto' }} />
            </span>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>United Community Foundation</span>
          </span>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, maxWidth: '44ch' }}>
            United Community Foundation is a nonprofit organization dedicated to bridging the gap in access to essential health and educational resources for underserved communities.
          </p>
          <a href="#about" onClick={go('about')} style={{ fontSize: 13.5, fontWeight: 700, color: '#a6cdd1' }}>
            Learn More <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
          </a>
          <div style={{ display: 'flex', gap: 10 }}>
            <Hoverable
              href="https://www.facebook.com/ucftexas" target="_blank" rel="noopener"
              style={{ width: 40, height: 40, borderRadius: 10, background: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              hoverStyle={socialHover}
            >
              <i className="fab fa-facebook-f"></i>
            </Hoverable>
            <Hoverable
              href="https://www.twitter.com/ucf_tx" target="_blank" rel="noopener"
              style={{ width: 40, height: 40, borderRadius: 10, background: '#1e293b', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              hoverStyle={socialHover}
            >
              <i className="fab fa-twitter"></i>
            </Hoverable>
          </div>
        </div>

        <div data-reveal>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Quick Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13.5, fontWeight: 500 }}>
            <Hoverable href="#home" onClick={go('home')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>Home</Hoverable>
            <Hoverable href="#history" onClick={go('history')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>History</Hoverable>
            <Hoverable href="#board" onClick={go('board')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>Board of Directors</Hoverable>
            <Hoverable href="#locations" onClick={go('locations')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>Locations</Hoverable>
            <Hoverable href="#contact" onClick={go('contact')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>Contact Us</Hoverable>
            <Hoverable href="#privacy" onClick={go('privacy')} style={{ color: '#94a3b8' }} hoverStyle={linkHover}><i className="fas fa-chevron-right" style={{ fontSize: 10, color: '#2D5A61', marginRight: 8 }}></i>Notice of Privacy</Hoverable>
          </div>
        </div>

        <div data-reveal>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Contact Us</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
            <div style={{ display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 12, background: 'rgba(30,41,59,.5)' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#4a8d96', marginTop: 3 }}></i>
              <span>12425 West Airport Blvd, Unit 205<br />Sugar Land, Texas 77478</span>
            </div>
            <a href="tel:2818535555" style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', borderRadius: 12, background: 'rgba(30,41,59,.5)', color: '#fff', fontWeight: 700 }}>
              <i className="fas fa-phone-alt" style={{ color: '#4a8d96' }}></i>(281) 853-5555
            </a>
            <Hoverable
              href="mailto:info@ucftexas.org"
              style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', borderRadius: 12, background: 'rgba(30,41,59,.5)', color: '#94a3b8' }}
              hoverStyle={{ color: '#fff' }}
            >
              <i className="fas fa-envelope" style={{ color: '#4a8d96' }}></i>info@ucftexas.org
            </Hoverable>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 28px' }}>
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 12.5 }}>
          <span>© Copyright 2026 | All Rights Reserved by United Community Foundation</span>
          <Hoverable href="#privacy" onClick={go('privacy')} style={{ color: '#94a3b8' }} hoverStyle={{ color: '#fff' }}>Notice of Privacy</Hoverable>
        </div>
      </div>
    </div>
  );
}
