import { useState } from 'react';
import Hoverable from './Hoverable';
import logo from '../assets/brand/logo.png';

const linkHover = { background: '#f0f6f7' };
const submenuHover = { background: '#f0f6f7', color: '#2D5A61' };

function NavLink({ page, current, onNav, children }) {
  const active = current === page;
  return (
    <Hoverable
      href={`#${page}`}
      onClick={onNav(page)}
      style={{ padding: '10px 12px', borderRadius: 8, color: active ? '#2D5A61' : '#1e293b' }}
      hoverStyle={linkHover}
    >
      {children}
    </Hoverable>
  );
}

export default function Nav({ page, wide, onNav, isAbout, isServices }) {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (p) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    setMenu(null);
    onNav(p);
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(255,255,255,.72)',
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        borderBottom: '1px solid rgba(45,90,97,.12)',
        boxShadow: '0 8px 30px -14px rgba(45,90,97,.28)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          minHeight: 78,
        }}
      >
        <a href="#home" onClick={go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="United Community Foundation" style={{ height: 48, width: 'auto', flexShrink: 0 }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontSize: 17.5, fontWeight: 900, letterSpacing: '-.02em', color: '#1e3d42' }}>
              United Community Foundation
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4a8d96' }}>
              Health · Equity · Texas
            </span>
          </span>
        </a>

        {wide && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>
            <NavLink page="home" current={page} onNav={go}>Home</NavLink>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setMenu('about')}
              onMouseLeave={() => setMenu(null)}
            >
              <Hoverable
                href="#about"
                onClick={go('about')}
                style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 12px', borderRadius: 8, color: isAbout ? '#2D5A61' : '#1e293b' }}
                hoverStyle={linkHover}
              >
                About Us <i className="fas fa-chevron-down" style={{ fontSize: 9, transition: 'transform .25s ease', transform: menu === 'about' ? 'rotate(180deg)' : 'none' }}></i>
              </Hoverable>
              {menu === 'about' && (
                <div
                  className="ucf-dropdown"
                  style={{
                    position: 'absolute', top: '100%', left: 0, minWidth: 220, padding: 8,
                    background: '#fff', border: '1px solid #eceadf', borderRadius: 12,
                    boxShadow: '0 18px 40px -18px rgba(45,90,97,.35)', display: 'flex', flexDirection: 'column', gap: 2,
                  }}
                >
                  <Hoverable href="#about" onClick={go('about')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>About Us</Hoverable>
                  <Hoverable href="#history" onClick={go('history')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>History</Hoverable>
                  <Hoverable href="#board" onClick={go('board')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Board of Directors</Hoverable>
                  <Hoverable href="#board" onClick={go('board')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Executive Management</Hoverable>
                </div>
              )}
            </div>

            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setMenu('services')}
              onMouseLeave={() => setMenu(null)}
            >
              <Hoverable
                href="#services"
                onClick={go('medical')}
                style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 12px', borderRadius: 8, color: isServices ? '#2D5A61' : '#1e293b' }}
                hoverStyle={linkHover}
              >
                Services <i className="fas fa-chevron-down" style={{ fontSize: 9, transition: 'transform .25s ease', transform: menu === 'services' ? 'rotate(180deg)' : 'none' }}></i>
              </Hoverable>
              {menu === 'services' && (
                <div
                  className="ucf-dropdown"
                  style={{
                    position: 'absolute', top: '100%', left: 0, minWidth: 250, padding: 8,
                    background: '#fff', border: '1px solid #eceadf', borderRadius: 12,
                    boxShadow: '0 18px 40px -18px rgba(45,90,97,.35)', display: 'flex', flexDirection: 'column', gap: 2,
                  }}
                >
                  <div style={{ padding: '8px 12px 4px', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#94a3b8' }}>Healthcare Services</div>
                  <Hoverable href="#medical" onClick={go('medical')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Medical</Hoverable>
                  <Hoverable href="#dental" onClick={go('dental')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Dental</Hoverable>
                  <div style={{ padding: '10px 12px 4px', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#94a3b8', borderTop: '1px solid #f1f5f9', marginTop: 4 }}>Programs</div>
                  <Hoverable href="#education" onClick={go('education')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Educational Programs</Hoverable>
                  <Hoverable href="#social" onClick={go('social')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Social Services</Hoverable>
                  <Hoverable href="#free" onClick={go('free')} style={{ padding: '9px 12px', borderRadius: 8, color: '#1e293b' }} hoverStyle={submenuHover}>Free Programs</Hoverable>
                </div>
              )}
            </div>

            <NavLink page="locations" current={page} onNav={go}>Locations</NavLink>
            <NavLink page="privacy" current={page} onNav={go}>Notice of Privacy</NavLink>
            <NavLink page="contact" current={page} onNav={go}>Contact</NavLink>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <Hoverable
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=KXUXZ2T5BTEEU&source=url"
            target="_blank"
            rel="noopener"
            style={{ padding: '11px 22px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 15, fontWeight: 700, boxShadow: '0 8px 20px -8px rgba(45,90,97,.7)', transition: 'transform .3s' }}
            hoverStyle={{ background: '#1e3d42', color: '#fff', transform: 'translateY(-2px)' }}
          >
            Donate
          </Hoverable>
          {!wide && (
            <Hoverable
              href="#menu"
              onClick={(e) => { e.preventDefault(); setMobileOpen((o) => !o); }}
              style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(240,246,247,.8)', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}
              hoverStyle={{ background: '#e2edee' }}
            >
              <i className={`fas ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} style={{ transition: 'transform .2s ease' }}></i>
            </Hoverable>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div style={{ padding: '8px 24px 20px', display: 'flex', flexDirection: 'column', gap: 2, fontSize: 15, fontWeight: 600, borderTop: '1px solid rgba(45,90,97,.1)' }}>
          <Hoverable href="#home" onClick={go('home')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Home</Hoverable>
          <Hoverable href="#about" onClick={go('about')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>About Us</Hoverable>
          <Hoverable href="#medical" onClick={go('medical')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Medical</Hoverable>
          <Hoverable href="#dental" onClick={go('dental')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Dental</Hoverable>
          <Hoverable href="#free" onClick={go('free')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Free Programs</Hoverable>
          <Hoverable href="#social" onClick={go('social')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Social Services</Hoverable>
          <Hoverable href="#education" onClick={go('education')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Educational Programs</Hoverable>
          <Hoverable href="#locations" onClick={go('locations')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Locations</Hoverable>
          <Hoverable href="#privacy" onClick={go('privacy')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Notice of Privacy</Hoverable>
          <Hoverable href="#contact" onClick={go('contact')} style={{ padding: '12px 14px', borderRadius: 10, color: '#1e293b' }} hoverStyle={linkHover}>Contact Us</Hoverable>
        </div>
      )}
    </div>
  );
}
