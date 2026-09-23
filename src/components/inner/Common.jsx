import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../Icons';

// Filled-circle bullet the theme renders for icon lists
export const DotIcon = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" {...p}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
);

/* Inner-page hero: photo, olive-to-dark gradient, two pills, h1, right-hand intro */
export function PageHero({ image, tag, sub, title, intro, overlayStop = '20%', titleWidth = 670 }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(/img/${image})` }}>
      <div className="page-hero-overlay" style={{ background: `linear-gradient(rgba(180, 192, 96, 0.3) ${overlayStop}, rgb(20, 26, 11) 100%)` }} />
      <div className="gv-container">
        <div className="gv-col page-hero-left">
          <div className="gv-col-wrap">
            <div className="gv-subhead page-hero-pills">
              <p className="tag accent">{tag}</p>
              <p className="sub white">{sub}</p>
            </div>
            <h1 style={{ width: titleWidth, maxWidth: '100%' }}>{title}</h1>
          </div>
        </div>
        <div className="gv-col page-hero-right">
          <div className="gv-col-wrap">
            <p className="gv-p gv-p-white">{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Banner used by the plain WordPress pages (Patient Center, Doctors & Staff) */
export function PageBanner({ title, noImage = false }) {
  return (
    <section className={`page-banner${noImage ? ' no-image' : ''}`}>
      <div className="page-banner-overlay" />
      <div className="gv-container"><h1>{title}</h1></div>
    </section>
  );
}

/* Bulleted list with the olive dot */
export function IconList({ items, className = '' }) {
  return (
    <div className={`gv-icon-list ${className}`}>
      {items.map((t) => (
        <a href="#" key={t} onClick={(e) => e.preventDefault()}>
          <DotIcon />
          <span className="list-text">{t}</span>
        </a>
      ))}
    </div>
  );
}

/* Grey rounded accordion used on FAQ / Services Detail / Services */
export function GreyAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="grey-acc">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div className={`grey-acc-item${active ? ' active' : ''}`} key={it.q}>
            <button className="grey-acc-heading" onClick={() => setOpen(active ? -1 : i)} aria-expanded={active}>
              <span className="grey-acc-text">{it.q}</span>
              <span className="grey-acc-icon">{active ? <ChevronDownIcon /> : <ChevronUpIcon />}</span>
            </button>
            <div className="grey-acc-body" style={{ height: active ? 'auto' : 0 }}>
              <div className="grey-acc-content"><p>{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Hairline accordion (same as the home "What We Offer" block) */
export function LineAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div className={`acc-item${active ? ' active' : ''}`} key={it.q}>
            <button className="acc-heading" onClick={() => setOpen(active ? -1 : i)} aria-expanded={active}>
              <span className="acc-text">{it.q}</span>
              <span className="acc-icon">{active ? <ChevronDownIcon /> : <ChevronUpIcon />}</span>
            </button>
            <div className="acc-body" style={{ height: active ? 'auto' : 0 }}>
              <div className="acc-content line"><p>{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const DEPARTMENTS = ['Family Medicine', 'Women’s Health', 'Preventive Care', 'Pediatric & Newborn Care', 'Chronic Disease Management', 'Nutrition Counseling'];

/* "Schedule Your Visit With Us" form card */
export function ScheduleForm({ subtitle = 'Access trusted medical care with our specialists.', sticky = false }) {
  const [sent, setSent] = useState(false);
  return (
    <div className={`schedule-card${sticky ? ' sticky' : ''}`}>
      <h2 className="heading-title">Schedule Your Visit With Us</h2>
      <span className="heading-subtitle">{subtitle}</span>
      <form className="schedule-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <div className="row"><input className="gv-input" type="text" placeholder="Full Name" required /></div>
        <div className="row two">
          <input className="gv-input" type="email" placeholder="Email Address" required />
          <input className="gv-input" type="tel" placeholder="Phone Number" />
        </div>
        <div className="row two">
          <select className="gv-input gv-select" defaultValue="">
            <option value="" disabled>Select Department</option>
            {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
          </select>
          <input className="gv-input" type="text" placeholder="Preferred Date" onFocus={(e) => { e.target.type = 'date'; }} onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }} />
        </div>
        <div className="row"><textarea className="gv-input" placeholder="Leave us a message..." rows={6} /></div>
        <label className="gdpr"><input type="checkbox" required /><span className="gdpr-label">You agree to our friendly privacy policy.</span></label>
        <button type="submit" className="schedule-submit"><span>Schedule Appointment</span></button>
        {sent && <p className="gv-p" style={{ marginTop: 12, textAlign: 'center' }}>Thank you. We will be in touch shortly.</p>}
      </form>
    </div>
  );
}

/* Vertical numbered-style process list with connectors */
export function ProcessList({ steps }) {
  return (
    <div className="feature-list">
      {steps.map((s, i) => (
        <div className="feature-item" key={s.title}>
          {i > 0 && <span className="connector-top" />}
          {i < steps.length - 1 && <span className="connector-bottom" />}
          <div className="feature-icon"><img src={`/img/${s.icon}`} alt={s.title} width="30" height="30" /></div>
          <div className="feature-content">
            <h2 className="feature-title">{s.title}</h2>
            <p className="feature-desc">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Glass caption card overlaying a provider photo (Areas of Care) */
function initials(name) {
  return name.split(' ').filter((w) => /^[A-Za-z]/.test(w)).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

export function SpecialistCard({ img, name, role, delay }) {
  return (
    <div className="gv-col gv-anim" data-anim="fadeInLeft" style={{ '--delay': delay }}>
      <div className="gv-col-wrap specialist">
        <div className="specialist-img">
          {img ? <img src={`/img/${img}`} alt={name} /> : <div className="specialist-avatar" aria-hidden="true"><span>{initials(name)}</span></div>}
        </div>
        <div className="specialist-caption">
          <div className="specialist-inner">
            <h2 className="heading-title">{name}</h2>
            <span className="heading-subtitle">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small icon card with photo hover (Areas of Care grid) */
export function ServiceCard({ icon, title, desc, delay, white = true }) {
  return (
    <div className="gv-col gv-anim" data-anim="fadeInLeft" style={{ '--delay': delay }}>
      <div className="gv-col-wrap">
        <div className="dept-box">
          <div className={`dept-box-wrap${white ? ' white' : ''}`}>
            <div className="ib-icon"><img src={`/img/${icon}`} alt={`${title.toLowerCase()} icon`} /></div>
            <div className="ib-body">
              <h2 className="ib-title">{title}</h2>
              <p className="ib-desc">{desc}</p>
              <a className="readmore" href="#" onClick={(e) => e.preventDefault()}><span>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M25.333 16.667h-18.667c-0.368 0-0.667-0.299-0.667-0.667s0.299-0.667 0.667-0.667h18.667c0.368 0 0.667 0.299 0.667 0.667s-0.299 0.667-0.667 0.667zM16 26c-0.171 0-0.341-0.065-0.471-0.196-0.26-0.26-0.26-0.683 0-0.943l8.862-8.862-8.862-8.862c-0.26-0.26-0.26-0.683 0-0.943s0.683-0.26 0.943 0l9.333 9.333c0.26 0.26 0.26 0.683 0 0.943l-9.333 9.333c-0.131 0.132-0.301 0.196-0.472 0.196z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
