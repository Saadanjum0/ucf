import { LOCATIONS } from '../data';
import { Subhead } from './Departments';

export default function Location() {
  return (
    <section className="location">
      <div className="gv-container">
        <div className="gv-col" style={{ width: '100%' }}>
          <div className="gv-col-wrap">
            <Subhead tag="Location" sub="Sugar Land, Texas" />
            <h2 className="gv-h2 center">Find Us in Sugar Land, Texas</h2>
            <p className="gv-p intro">Community Health &amp; Life Center is located on W. Grand Parkway South, serving Sugar Land and the greater Fort Bend County community.</p>

            <div className="loc-row">
              {LOCATIONS.map((l) => (
                <div className="gv-col gv-anim" data-anim="fadeInLeft" style={{ '--delay': l.delay }} key={l.title}>
                  <div className="gv-col-wrap">
                    <div className="photo-card loc-card" style={{ backgroundImage: `url(/img/${l.img})` }}>
                      <div className="glass loc-glass">
                        <h3>{l.title}</h3>
                        <h4>{l.sub}</h4>
                        <p>{l.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
