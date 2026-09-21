import { PageHero, IconList, ScheduleForm, SpecialistCard, ServiceCard } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { ArrowRightIcon } from '../components/Icons';
import { PortalCta } from '../components/Extras';

const LIST = ['Annual Wellness Exams', 'Preventive Screenings', 'Chronic Care', 'Immunizations', 'Nutrition Counseling', 'On-Site Lab & Imaging'];

const CARDS = [
  { icon: 'heart-icon-replace.webp', title: 'Family Medicine', desc: 'Comprehensive primary care for every age.', hover: 'group-of-doctors-and-nurses-consulting-about-a-com.webp', delay: '0.1s' },
  { icon: 'bone-icon-replace.webp', title: 'Preventive Care', desc: 'Annual physicals, screenings & immunizations.', hover: 'doctor-orthopedist-points-to-the-anatomical-model-replace.webp', delay: '0.15s' },
  { icon: 'microscope-icon-replace.webp', title: 'Chronic Disease Management', desc: 'Ongoing care for diabetes, hypertension and more.', hover: 'team-of-female-doctor-check-on-scan-results-paper.webp', delay: '0.2s' },
  { icon: 'dna-icon-replace.webp', title: 'Women’s Health', desc: 'Care for every stage of a woman’s life.', hover: 'young-neurologists-reading-brain-mri-at-hospital-replace.webp', delay: '0.15s' },
  { icon: 'pacifier-icon-replace.webp', title: 'Pediatric & Newborn Care', desc: 'Well-child visits, newborn exams and sick care.', hover: 'hospital-story-pediatrics.webp', delay: '0.2s' },
  { icon: 'sanitary-pad-icon-replace.webp', title: 'Nutrition Counseling', desc: 'Dietitian-led nutrition plans for lasting health.', hover: 'pregnant-woman-having-an-ultrasound-scan-performed.webp', delay: '0.25s' },
];

const SPECIALISTS = [
  { img: 'docpic.png', name: 'Dr. Daniel A. Nwachokor', role: 'Family Medicine Physician' },
  { img: 'in-the-hospital-office-a-medical-explains.webp', name: 'Carmen', role: 'Family Nurse Practitioner' },
  { img: 'team-of-female-doctor-check-on-scan-results-paper.webp', name: 'Alisa', role: 'Registered & Licensed Dietitian' },
];

export default function Departments() {
  return (
    <>
      <PageHero titleWidth={628} image="shot-of-a-group-of-scientists-giving-each-other-a-toss.webp" tag="Areas of Care" sub="Specialties for Every Need" title="Your Health, Our Collective Expertise" intro="Community Health & Life Center unites family medicine expertise and compassion — delivering personalized, patient-centered primary care for every member of your family." />

      {/* introduction */}
      <section className="dept-intro">
        <div className="gv-container">
          <div className="gv-col intro-photo-col">
            <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/group-of-doctors-standing-on-stairs-on-medical-conferences.webp)' }} />
          </div>
          <div className="gv-col intro-mid-col">
            <div className="gv-col-wrap">
              <Subhead tag="Introduction" sub="Dedicated to Your Well" center={false} />
              <h2 className="gv-h2 left intro-h2">Shaped Around Your Well-Being</h2>
              <div className="intro-img gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.05s' }}>
                <img src="/img/diverse-group-of-healthcare-workers-clearing-the-way-replace.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="gv-col intro-right-col gv-anim" data-anim="fadeInLeft">
            <div className="gv-col-wrap">
              <p className="gv-p intro-text">At Community Health &amp; Life Center, we provide personalized primary care for families across Sugar Land and Fort Bend County — from newborns to grandparents, we are with you at every stage.</p>
              <IconList items={LIST} />
            </div>
          </div>
        </div>
      </section>

      {/* areas of care grid */}
      <section className="areas-section">
        <div className="areas-inner">
          <div className="gv-container">
            <div className="gv-col" style={{ width: '100%' }}>
              <div className="gv-col-wrap center">
                <Subhead tag="Areas of Care" sub="Care for Every Need" onWhite />
                <h2 className="gv-h2 center" style={{ width: 655, maxWidth: '100%' }}>Your Partner in Better Health</h2>
                <p className="gv-p center" style={{ width: '100%', marginBottom: 56 }}>Community Health &amp; Life Center delivers personalized primary care with trust and compassion.</p>
                <div className="areas-grid">
                  {[CARDS.slice(0, 3), CARDS.slice(3)].map((row, ri) => (
                    <div className="areas-row" key={ri}>
                      {row.map((c) => (
                        <div className="gv-col areas-card gv-anim" data-anim="fadeInLeft" style={{ '--delay': c.delay, '--hover-bg': `url(/img/${c.hover})` }} key={c.title}>
                          <div className="gv-col-wrap">
                            <div className="dept-box">
                              <div className="dept-box-wrap white">
                                <div className="ib-icon"><img src={`/img/${c.icon}`} alt={`${c.title.toLowerCase()} icon`} /></div>
                                <div className="ib-body">
                                  <h2 className="ib-title">{c.title}</h2>
                                  <p className="ib-desc">{c.desc}</p>
                                  <a className="readmore" href="/services-detail/"><span>Read More</span><ArrowRightIcon /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* specialists */}
      <section className="specialists-section">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <div className="specialists-head">
                <div className="gv-col half">
                  <div className="gv-col-wrap">
                    <Subhead tag="Our Experts" sub="Care for Every Need" center={false} />
                    <h2 className="gv-h2 left" style={{ width: 580, maxWidth: '100%' }}>Meet the Specialists Behind Your Care</h2>
                  </div>
                </div>
                <div className="gv-col half">
                  <div className="gv-col-wrap end">
                    <p className="gv-p" style={{ width: 566, maxWidth: '100%' }}>Our providers are dedicated to delivering personalized, compassionate, and patient-focused primary care for your whole family.</p>
                  </div>
                </div>
              </div>
              <div className="specialists-row">
                {SPECIALISTS.map((s, i) => <SpecialistCard key={s.name} {...s} delay={`${0.05 * i}s`} />)}
              </div>
              <div className="view-all center">
                <h3 className="ps">Find the right care for your needs</h3>
                <a className="gv-link-btn" href="/services/"><span>Here</span><ArrowRightIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* schedule */}
      <section className="dept-schedule">
        <div className="gv-container">
          <div className="dept-schedule-inner">
            <div className="gv-col half" />
            <div className="gv-col half">
              <div className="gv-col-wrap">
                <ScheduleForm subtitle="Access trusted primary care with our team." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortalCta />
    </>
  );
}

export { ServiceCard };
