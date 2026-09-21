import { PageHero, DotIcon } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { PortalCta } from '../components/Extras';
import { useCounter } from '../hooks/useCounter';

const VALUES = [
  { icon: 'hospital-bed-icon-replace-about.webp', title: 'Patient First', desc: 'We put the safety and comfort of every patient at the center of each decision.' },
  { icon: 'insurance-icon-replace.webp', title: 'Dignity for Everyone', desc: 'We treat every patient with respect, empathy, and personal care.' },
  { icon: 'emergency-call-icon-replace.webp', title: 'Ethical Communication', desc: 'We communicate honestly and transparently to build trust.' },
  { icon: 'cardiogram-icon-replace-about.webp', title: 'Continuous Improvement', desc: 'We keep learning and improving so we can deliver better care.' },
];

const FACTS = [
  { n: 1200, label: 'Patients Cared For' },
  { n: 200, label: 'Years of Service' },
  { n: 30, label: 'Areas of Care' },
  { n: 50, label: 'Insurance Plans' },
];

const STEPS = [
  { n: '01', title: 'Your First Visit', desc: 'We take time to understand your history, concerns, and health goals.' },
  { n: '02', title: 'A Personalized Plan', desc: 'We build a plan around your lifestyle, risks, and preferences.' },
  { n: '03', title: 'Prevention First', desc: 'Screenings, immunizations, and lifestyle support to help keep you well.' },
  { n: '04', title: 'Ongoing Partnership', desc: 'We follow up and adjust your care as your needs change.' },
];

function Fact({ n, label }) {
  const ref = useCounter(n, 3500);
  return (
    <div className="gv-col about-fact">
      <div className="funfact-inner">
        <span className="number"><span ref={ref}>0</span><sup className="super">+</sup></span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero titleWidth={775} image="in-the-hospital-office-a-medical-explains-abou.webp" tag="ABOUT US" sub="Story & Commitment" title="Dedicated to Your Family’s Health" intro="Community Health & Life Center provides trusted, patient-centered primary care for families across Sugar Land and Fort Bend County." />

      {/* values */}
      <section className="values-section">
        <div className="gv-container">
          <div className="gv-col values-img-col">
            <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/five-young-multiethnic-doctors-scientists-bioenge.webp)' }} />
          </div>
          <div className="gv-col values-text-col">
            <div className="gv-col-wrap">
              <Subhead tag="Our Values" sub="Our Ethical Standards" center={false} />
              <h2 className="gv-h2 left values-h2">Core Values That Shape Our Care</h2>
              <p className="gv-p values-p">Our values guide every decision we make as we care for you and your family.</p>
              <div className="values-grid">
                {[0, 1].map((col) => (
                  <div className="gv-col" key={col}>
                    <div className="gv-col-wrap">
                      {VALUES.slice(col * 2, col * 2 + 2).map((v, i) => (
                        <div className="value-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': `${0.05 * (col * 2 + i)}s` }} key={v.title}>
                          <div className="value-box-wrap">
                            <div className="ib-icon circle white sm"><img src={`/img/${v.icon}`} alt={`${v.title.toLowerCase()} icon`} /></div>
                            <h3 className="ib-title">{v.title}</h3>
                            <p className="ib-desc">{v.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vision & mission */}
      <section className="vision-section">
        <div className="vision-inner">
          <div className="gv-container">
            <div className="gv-col" style={{ width: '100%' }}>
              <div className="gv-col-wrap">
                <div className="vision-head">
                  <Subhead tag="VISION & MISSION" sub="Our Direction" center={false} onWhite />
                  <h2 className="gv-h2 left vision-h2">What Drives Us Forward</h2>
                </div>
                <div className="vision-row">
                  <div className="gv-col vision-img-col gv-anim" data-anim="fadeInLeft">
                    <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/group-of-doctors-standing-in-hospital-on-medical-center.webp)' }}>
                      <div className="spacer100" />
                    </div>
                  </div>
                  <div className="gv-col vision-text-col">
                    <div className="gv-col-wrap">
                      <p className="gv-p vision-p">To be the trusted family medicine practice in Fort Bend County, known for compassionate, high-quality, patient-centered care.</p>
                      <div className="vm-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': '0.05s' }}>
                        <div className="vm-box-wrap">
                          <div className="ib-icon plain50"><img src="/img/insurance-icon-replace.webp" alt="our vision icon" /></div>
                          <h3 className="ib-title">Our Vision</h3>
                          <p className="ib-desc vm-desc">To be the trusted family medicine practice in Fort Bend County — known for compassionate, high-quality, patient-centered care for every generation.</p>
                        </div>
                      </div>
                      <div className="vm-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': '0.1s' }}>
                        <div className="vm-box-wrap">
                          <div className="ib-icon plain50"><img src="/img/stethoscope-icon-replace.webp" alt="our mission icon" /></div>
                          <h3 className="ib-title">Our Mission</h3>
                          <p className="ib-desc vm-desc">To deliver accessible, high-quality primary care that keeps families healthy, prevents disease, and builds lasting relationships.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-facts gv-anim" data-anim="fadeInDown">
                  <div className="about-facts-inner">
                    {FACTS.map((f) => <Fact key={f.label} {...f} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our approach */}
      <section className="approach-section">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <Subhead tag="OUR APPROACH" sub="Our Journey" />
              <h2 className="gv-h2 center full">How We Care for You</h2>
              <p className="gv-p center" style={{ width: '100%' }}>A simple, patient-centered approach that keeps your whole family healthy.</p>
              <div className="steps-row">
                {STEPS.map((s, i) => (
                  <div className="gv-col step-col" key={s.n}>
                    <div className="gv-col-wrap">
                      <div className="step gv-anim" data-anim="fadeInLeft" style={{ '--delay': `${0.05 * i}s` }}>
                        <h3 className="step-num">{s.n}</h3>
                        <div className="step-card">
                          <div className="step-icon"><DotIcon /></div>
                          <h4 className="step-title">{s.title}</h4>
                          <p className="step-desc">{s.desc}</p>
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

      <PortalCta />
    </>
  );
}
