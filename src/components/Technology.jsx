import { useState } from 'react';
import { TECH } from '../data';
import { Subhead } from './Departments';
import { PlayIcon } from './Icons';
import VideoPopup from './VideoPopup';

export default function Technology() {
  const [video, setVideo] = useState(false);
  return (
    <section className="technology">
      <div className="gv-container">
        <div className="gv-col" style={{ width: '100%' }}>
          <div className="gv-col-wrap">
            <Subhead tag="Technology" sub="Built Around You" />
            <h2 className="gv-h2 center">Advanced Technology &amp; Modern Facilities</h2>
            <p className="gv-p intro">Community Health &amp; Life Center combines attentive, unhurried visits with the tools you need to stay well.</p>

            <div className="tech-row">
              <div className="gv-col tech-video-col">
                <div className="gv-col-wrap">
                  <div className="video-card">
                    <div className="people" />
                    <div className="tint" />
                    <button className="play-btn" aria-label="Play video" onClick={() => setVideo(true)}><PlayIcon /></button>
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
      {video && <VideoPopup onClose={() => setVideo(false)} />}
    </section>
  );
}
