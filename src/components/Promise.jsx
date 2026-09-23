import { PROMISE } from '../data';
import { Subhead } from './Departments';

export function PhotoCard({ img, tag, title, desc, height, className = '', TagTag = 'h4' }) {
  return (
    <div className={`photo-card ${className}`} style={{ backgroundImage: `url(/img/${img})`, height }}>
      <TagTag className="tag">{tag}</TagTag>
      <div className="glass">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Promise() {
  return (
    <section className="promise">
      <div className="promise-inner">
        <div className="gv-container">
          <div className="promise-row">
            <div className="gv-col promise-left gv-anim" data-anim="fadeInLeft" style={{ '--delay': '0.05s' }}>
              <div className="gv-col-wrap">
                <PhotoCard {...PROMISE.chronic} />
              </div>
            </div>

            <div className="gv-col promise-right">
              <div className="gv-col-wrap">
                <Subhead tag="Our Promise" sub="With Excellence & Integrity" center={false} onWhite />
                <h2 className="gv-h2 left">Bridging the Gap in Access to Essential Care</h2>

                <div className="promise-sub">
                  <div className="gv-col gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.15s' }}>
                    <div className="gv-col-wrap">
                      <PhotoCard {...PROMISE.family} TagTag="h3" />
                    </div>
                  </div>
                  <div className="gv-col">
                    <div className="gv-col-wrap">
                      <p className="gv-p">{PROMISE.text}</p>
                      <div className="gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.25s', width: '100%' }}>
                        <PhotoCard {...PROMISE.oncology} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
