import { useEffect, useRef, useState } from 'react';
import { OFFER } from '../data';
import { Subhead, ViewAll } from './Departments';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

function AccItem({ title, desc, active, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(active ? 'auto' : 0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (active) {
      setHeight(el.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [active]);

  return (
    <div className={`acc-item${active ? ' active' : ''}`}>
      <button className="acc-heading" onClick={onToggle} aria-expanded={active}>
        <span className="acc-text">{title}</span>
        <span className="acc-icon">{active ? <ChevronDownIcon /> : <ChevronUpIcon />}</span>
      </button>
      <div className="acc-body" ref={bodyRef} style={{ height }}>
        <div className="acc-content"><p>{desc}</p></div>
      </div>
    </div>
  );
}

export default function Offer() {
  const [active, setActive] = useState(0);
  return (
    <section className="offer">
      <div className="gv-container">
        <div className="gv-col" style={{ width: '100%' }}>
          <div className="gv-col-wrap">
            <Subhead tag="Services" sub="What We Offer" />
            <h2 className="gv-h2 center">Medical, Dental & Community Programs</h2>
            <p className="gv-p intro">From preventive medical and dental care to free programs for uninsured families, we deliver coordinated care for your whole household.</p>

            <div className="offer-row">
              <div className="gv-col offer-acc-col">
                <div className="gv-col-wrap">
                  <div className="accordion">
                    {OFFER.map((item, i) => (
                      <AccItem key={item.title} {...item} active={active === i} onToggle={() => setActive(active === i ? -1 : i)} />
                    ))}
                  </div>
                  <ViewAll />
                </div>
              </div>
              <div className="gv-col offer-img-col">
                <div className="gv-col-wrap">
                  <div className="spacer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
