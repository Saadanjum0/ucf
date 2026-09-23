import { TECH } from '../data';
import { Subhead } from './Departments';

export default function Technology() {
  return (
    <section className="technology">
      <div className="gv-container">
        <div className="gv-col" style={{ width: '100%' }}>
          <div className="gv-col-wrap">
            <Subhead tag="Technology" sub="Built Around You" />
            <h2 className="gv-h2 center">Trusted Facilities &amp; Community Reach</h2>
            <p className="gv-p intro">United Community Foundation combines attentive, coordinated care with the resources our community needs to stay well.</p>

            <div className="tech-row">
              <div className="gv-col tech-video-col">
                <div className="gv-col-wrap">
                  <div className="video-card">
                    <div className="people" />
                    <div className="tint" />
                  </div>
                </div>
              </div>

              <div className="gv-col tech-list-col gv-anim" data-anim="fadeInLeft">
                <div className="gv-col-wrap">
                  {TECH.map((t) => (
                    <div className="tech-box" key={t.title}>
                      <div className="icon-box">
                        <div className="ib-icon plain"><img src={`/img/${t.icon}`} alt={`${t.title.toLowerCase()} icon`} /></div>
                        <div className="ib-body">
                          <h2 className="ib-title">{t.title}</h2>
                          <p className="ib-desc">{t.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
