import { DEPARTMENTS } from '../data';
import { ArrowRightIcon } from './Icons';

export function Subhead({ tag, sub, center = true, onWhite = false }) {
  return (
    <div className={`gv-subhead${center ? ' center' : ''}${onWhite ? ' on-white' : ''}`}>
      <h3 className="tag">{tag}</h3>
      <h3 className="sub">{sub}</h3>
    </div>
  );
}

export function ViewAll({ href = '/services/' }) {
  return (
    <div className="view-all">
      <h3 className="ps">View All Services</h3>
      <a className="gv-link-btn" href={href}><span>Here</span><ArrowRightIcon /></a>
    </div>
  );
}

function DeptBox({ icon, title, desc, hover, href = '/services/', anim, delay }) {
  return (
    <div className="dept-box gv-anim" data-anim={anim} style={{ '--delay': delay, '--hover-bg': `url(/img/${hover})` }}>
      <div className="dept-box-wrap">
        <div className="ib-icon"><img src={`/img/${icon}`} alt={`${title.toLowerCase()} icon`} /></div>
        <div className="ib-body">
          <h2 className="ib-title">{title}</h2>
          <p className="ib-desc">{desc}</p>
          <a className="readmore" href={href}><span>Read More</span><ArrowRightIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default function Departments() {
  return (
    <section className="departments">
      <div className="gv-container">
        <div className="gv-col" style={{ width: '100%' }}>
          <div className="gv-col-wrap">
            <Subhead tag="Departments" sub="Our Services" />
            <h2 className="gv-h2 center">Care for Every Stage of Life</h2>
            <p className="gv-p intro">Medical, dental, educational, and social services for underserved families across Harris &amp; Fort Bend Counties.</p>

            <div className="dept-grid">
              <div className="gv-col">
                <div className="gv-col-wrap">
                  {DEPARTMENTS.left.map((d) => <DeptBox key={d.title} {...d} />)}
                </div>
              </div>
              <div className="gv-col gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.05s' }}>
                <div className="dept-photo">
                  <div className="spacer" />
                  <div className="banner"><img src="/img/team-of-female-doctor-check-on-scan-results-paper.webp" alt="United Community Foundation" /></div>
                </div>
              </div>
              <div className="gv-col">
                <div className="gv-col-wrap">
                  {DEPARTMENTS.right.map((d) => <DeptBox key={d.title} {...d} />)}
                </div>
              </div>
            </div>

            <ViewAll />
          </div>
        </div>
      </div>
    </section>
  );
}
