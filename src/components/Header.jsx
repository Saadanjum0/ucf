import { useEffect, useState } from 'react';
import { NAV, SITE } from '../data';
import {
  PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, GoogleIcon,
  HamburgerIcon, CloseIcon, AngleDownIcon,
} from './Icons';

function Socials({ className }) {
  return (
    <div className={className}>
      <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
      <a href={SITE.twitter} target="_blank" rel="noopener" aria-label="Twitter / X"><TwitterIcon /></a>
      <a href={SITE.mapsHref} target="_blank" rel="noopener" aria-label="Google"><GoogleIcon /></a>
    </div>
  );
}

export default function Header({ path = '/' }) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header>
      {/* top bar */}
      <section className="topbar" id="sanorra-header">
        <div className="gv-container">
          <div className="gv-col topbar-left">
            <div className="gv-col-wrap">
              <p>Compassionate care for every stage of life</p>
            </div>
          </div>
          <div className="gv-col topbar-right">
            <div className="gv-col-wrap">
              <div className="topbar-list">
                <a className="topbar-item" href={SITE.phoneHref}>
                  <PhoneIcon />
                  <span className="list-text">Call us {SITE.phone}</span>
                </a>
                <a className="topbar-item" href={SITE.mapsHref} target="_blank" rel="noopener">
                  <MapPinIcon />
                  <span className="list-text">{SITE.address}</span>
                </a>
              </div>
              <Socials className="chlc-socials" />
            </div>
          </div>
        </div>
      </section>

      {/* main nav */}
      <section className="navbar">
        <div className="gv-container">
          <div className="gv-col nav-logo-col">
            <a href="/"><img src="/img/ucf-logo.png" alt="United Community Foundation" className="ucf-logo" /></a>
          </div>

          <div className="gv-col nav-menu-col">
            <nav className="nav-pill" aria-label="sanorra menu">
              <ul className="nav-menu">
                {NAV.map((item) => (
                  <li key={item.label} className={(item.href === path || (item.children && item.children.some((c) => c.href.replace(/\/$/, '') === path))) ? 'current' : ''}>
                    <a href={item.href} aria-label={item.label}>
                      {item.label}
                      {item.children && <AngleDownIcon />}
                    </a>
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((c) => (
                          <li key={c.label}><a href={c.href} aria-label={c.label}>{c.label}</a></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="gv-col nav-cta-col">
            <a className="gv-btn nav-contact" href="/contact-us/"><span>Contact Us</span></a>
            <button className="hamburger" aria-label="to show the nav menu" onClick={() => setOpen(true)}>
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </section>

      {/* off-canvas menu (tablet / mobile) */}
      <div className="mobile-nav">
        <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
        <div className={`mobile-panel${open ? ' open' : ''}`}>
          <div className="mobile-identity">
            <a className="logo" href="/"><img src="/img/ucf-logo.png" alt="United Community Foundation" className="ucf-logo" /></a>
            <button className="mobile-close" aria-label="close the menu" onClick={() => setOpen(false)}><CloseIcon /></button>
          </div>
          <ul className="mobile-menu">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.children) { e.preventDefault(); setOpenSub(openSub === item.label ? null : item.label); }
                  }}
                >
                  {item.label}
                  {item.children && <AngleDownIcon />}
                </a>
                {item.children && (
                  <ul className={`sub-menu${openSub === item.label ? ' open' : ''}`}>
                    {item.children.map((c) => (
                      <li key={c.label}><a href={c.href}>{c.label}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
