import { PageHero, DotIcon } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { PortalCta } from '../components/Extras';
import { useCounter } from '../hooks/useCounter';
import { SITE } from '../data';

const VALUES = [
  { icon: 'hospital-bed-icon-replace-about.webp', title: 'Equity First', desc: 'We put access and dignity for underserved families at the center of every decision.' },
  { icon: 'insurance-icon-replace.webp', title: 'Dignity for Everyone', desc: 'We treat every person with respect, empathy, and personal care, regardless of income or insurance status.' },
  { icon: 'emergency-call-icon-replace.webp', title: 'Honest Communication', desc: 'We communicate honestly and transparently with the communities we serve to build lasting trust.' },
  { icon: 'cardiogram-icon-replace-about.webp', title: 'Community Partnership', desc: 'We keep learning from and investing in our communities so we can deliver better outcomes.' },
];

const FACTS = [
  { n: 2019, label: 'Founded As A 501(c)(3)' },
  { n: 5, label: 'Community Locations' },
  { n: 3, label: 'Free State-Funded Programs' },
  { n: 21, label: 'Age Covered Under Title V' },
];

const STEPS = [
  { n: '01', title: 'Intake & Eligibility', desc: 'We start with a simple screening to understand your household and connect you to the right free or low-cost program, including Title V, the PHC Program, and the Family Planning Program.' },
  { n: '02', title: 'Preventive & Chronic Care', desc: 'General and mental health screenings, vaccinations, and chronic disease management — including diabetes, hypertension, and access to affordable medications — coordinated across our clinical team.' },
  { n: '03', title: 'Ongoing Care', desc: 'Free and low-cost preventive, primary, and dental care for the whole family, delivered with the same standard of care we would expect for our own families, at any of our five locations.' },
  { n: '04', title: 'Community Education', desc: 'Mentorship, vocational training, scholarship referrals, and skill-building programs that help students and adults from low-income backgrounds pursue their goals beyond the visit.' },
];

const LEADERSHIP = [
  { name: 'Liaquat Khowaja', role: 'Chief Executive Officer', bio: 'Liaquat leads United Community Foundation’s day-to-day operations, guiding the organization’s growth across Harris and Fort Bend counties and its partnerships with the communities it serves.' },
  { name: 'Salman Aly, M.D.', role: 'Medical Director', bio: 'Dr. Aly oversees the clinical standards and medical programs across all UCF locations, ensuring every patient receives quality, coordinated care.' },
  { name: 'Sarfraz Aly, M.D.', role: 'Chief Clinical Officer', bio: 'Dr. Aly directs clinical operations and provider training, working to keep care consistent and accessible across UCF’s growing network of clinics.' },
  { name: 'Syed Raza', role: 'Finance Manager', bio: 'Syed manages the foundation’s finances and grant funding, helping ensure free and low-cost programs like Title V remain sustainable for the families who depend on them.' },
];

const BOARD = [
  { name: 'Zerin Chowdhury', role: 'Board Member' },
  { name: 'Shirmeen Lakhani', role: 'Board Member' },
  { name: 'Jalal Kapadia', role: 'Board Member' },
  { name: 'Nuruddin Ali', role: 'Board Member' },
  { name: 'Faizmin Lokhandwala', role: 'Board Member' },
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
      <PageHero titleWidth={775} image="in-the-hospital-office-a-medical-explains-abou.webp" tag="ABOUT US" sub="Story & Commitment" title="Bridging the Gap in Access to Care" intro="United Community Foundation is a nonprofit dedicated to bridging the gap in access to essential health and educational resources for underserved communities across Harris and Fort Bend counties." />

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
                      <p className="gv-p vision-p">Founded in 2019 as a 501(c)(3) nonprofit, United Community Foundation strives to empower individuals and families who face barriers due to socioeconomic challenges, lack of insurance, or limited access to quality care. Over the past five years, we've partnered with local organizations across Harris and Fort Bend counties so that every person, regardless of background or financial circumstances, can lead a healthy and fulfilling life.</p>
                      <div className="vm-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': '0.05s' }}>
                        <div className="vm-box-wrap">
                          <div className="ib-icon plain50"><img src="/img/insurance-icon-replace.webp" alt="our vision icon" /></div>
                          <h3 className="ib-title">Our Vision</h3>
                          <p className="ib-desc vm-desc">{SITE.vision}</p>
                        </div>
                      </div>
                      <div className="vm-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': '0.1s' }}>
                        <div className="vm-box-wrap">
                          <div className="ib-icon plain50"><img src="/img/stethoscope-icon-replace.webp" alt="our mission icon" /></div>
                          <h3 className="ib-title">Our Mission</h3>
                          <p className="ib-desc vm-desc">{SITE.mission}</p>
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
              <h2 className="gv-h2 center full">How We Care for Our Community</h2>
              <p className="gv-p center" style={{ width: '100%' }}>A simple, four-step path from eligibility screening to lasting community health.</p>
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

      {/* leadership */}
      <section className="values-section">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <Subhead tag="OUR PEOPLE" sub="Board & Leadership" />
              <h2 className="gv-h2 center full">Executive Management</h2>
              <p className="gv-p center" style={{ width: '100%' }}>The team guiding United Community Foundation's programs and clinics day to day.</p>
              <div className="values-grid">
                {[0, 1].map((col) => (
                  <div className="gv-col" key={col}>
                    <div className="gv-col-wrap">
                      {LEADERSHIP.slice(col * 2, col * 2 + 2).map((p, i) => (
                        <div className="value-box gv-anim" data-anim="fadeInLeft" style={{ '--delay': `${0.05 * (col * 2 + i)}s` }} key={p.name}>
                          <div className="value-box-wrap">
                            <h3 className="ib-title">{p.name}</h3>
                            <p className="ib-desc" style={{ fontWeight: 600 }}>{p.role}</p>
                            <p className="ib-desc">{p.bio}</p>
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

      {/* board of directors */}
      <section className="approach-section">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <Subhead tag="GOVERNANCE" sub="Our Board" />
              <h2 className="gv-h2 center full">Board of Directors</h2>
              <p className="gv-p center" style={{ width: '100%' }}>Volunteer community leaders who set the foundation's direction and hold it accountable to its mission.</p>
              <div className="steps-row">
                {BOARD.map((b, i) => (
                  <div className="gv-col step-col" key={b.name}>
                    <div className="gv-col-wrap">
                      <div className="step gv-anim" data-anim="fadeInLeft" style={{ '--delay': `${0.05 * i}s` }}>
                        <div className="step-card">
                          <div className="step-icon"><DotIcon /></div>
                          <h4 className="step-title">{b.name}</h4>
                          <p className="step-desc">{b.role}</p>
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
