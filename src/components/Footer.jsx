import { useState } from 'react';
import { FOOTER_CARDS, FOOTER_LINKS, SITE } from '../data';
import { ChevronRightIcon, SendIcon, ArrowUpIcon, FacebookIcon, TwitterIcon, GoogleIcon } from './Icons';

function LinkCol({ title, links, small }) {
  return (
    <div className="gv-col" style={{ flex: 1 }}>
      <div className={`gv-col-wrap fl-col${small ? ' small' : ''}`}>
        <h4>{title}</h4>
        <ul>
          {links.map((l) => <li key={l.label}><a href={l.href}><span className="list-text">{l.label}</span></a></li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <footer className="footer">
      <section className="footer-top">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <h3>{SITE.name}</h3>
              <div className="footer-cards">
                {FOOTER_CARDS.map((c) => (
                  <div className="gv-col" key={c.title}>
                    <a className="fcard" href={c.href}>
                      <div className="icon-box">
                        <div className="ib-icon plain"><img src={`/img/${c.icon}`} alt={`${c.title.toLowerCase()} icon`} /></div>
                        <div className="ib-body"><h4 className="ib-title">{c.title}</h4></div>
                      </div>
                      <span className="chev"><ChevronRightIcon /></span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-main">
        <section className="footer-panel">
          <div className="gv-container">
            <div className="gv-col footer-news">
              <div className="gv-col-wrap">
                <div className="logo"><img src="/img/ucf-logo.png" alt="United Community Foundation" className="ucf-logo" /></div>
                <h3>Stay Connected with {SITE.name}</h3>
                <p className="gv-p gv-p-white">Get the latest program updates, community news, and health tips from {SITE.name}.</p>
                <form className="news-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <input type="email" name="input-email" id="footer-newsletter-email" placeholder="Enter Your Email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <button type="submit" aria-label="Subscribe"><SendIcon /></button>
                  {sent && <span className="gv-p gv-p-white" style={{ width: '100%', marginTop: 8 }}>Thank you.</span>}
                </form>
              </div>
            </div>

            <div className="gv-col footer-links">
              <div className="gv-col-wrap">
                <div className="footer-links-row">
                  <LinkCol title="Quick Links" links={FOOTER_LINKS.quick} />
                  <LinkCol title="Useful Resources" links={FOOTER_LINKS.resources} small />
                  <LinkCol title="Contact Info" links={FOOTER_LINKS.contact} small />
                </div>
                <div className="footer-bottom-row">
                  <div className="footer-socials">
                    <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
                    <a href={SITE.twitter} target="_blank" rel="noopener" aria-label="Twitter / X"><TwitterIcon /></a>
                    <a href={SITE.mapsHref} target="_blank" rel="noopener" aria-label="Google"><GoogleIcon /></a>
                  </div>
                  <a className="to-top" href="#sanorra-header" aria-label="Back to top"><ArrowUpIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-copy">
          <div className="gv-col">
            <div className="gv-col-wrap"><h4>© 2026 {SITE.name}. All rights reserved.</h4></div>
          </div>
          <div className="gv-col right">
            <div className="gv-col-wrap" style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <h4>Healthcare &amp; Hospital</h4>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
