import { PageHero, IconList, ScheduleForm, SpecialistCard, ServiceCard } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { ArrowRightIcon } from '../components/Icons';
import { PortalCta } from '../components/Extras';

const LIST = ['Title V Child Health & Dental Program', 'Primary Health Care (PHC) Program', 'Family Planning Program', 'Specialist Referrals', 'Mental Health Evaluation', 'Low-Cost Lab & Imaging'];

const CARDS = [
  { icon: 'heart-icon-replace.webp', title: 'Preventive & Primary Medical Care', desc: 'Medical consultations, health screenings, immunizations & health education.', hover: 'shot-of-a-group-of-scientists-giving-each-other-a-toss.webp', delay: '0.1s' },
  { icon: 'bone-icon-replace.webp', title: 'Specialist Consultation & Referrals', desc: 'Coordinated referrals to specialists when your care needs a closer look.', hover: 'male-doctor-using-recovery-medication-to-give-pres.webp', delay: '0.15s' },
  { icon: 'microscope-icon-replace.webp', title: 'Lab Tests & Low-Cost Imaging', desc: 'Diagnostics through our referral network at a reduced cost.', hover: 'shot-of-a-group-of-scientists-giving-each-other-a-toss.webp', delay: '0.2s' },
  { icon: 'dna-icon-replace.webp', title: 'Preventive & Primary Dental Care', desc: 'Exams & X-rays, cleanings, hygiene education & dental procedures.', hover: 'balance-exercise-with-bosu-ball-woman-and-doctor.webp', delay: '0.15s' },
  { icon: 'pacifier-icon-replace.webp', title: 'Title V Child Health & Dental', desc: 'Free medical and dental care for uninsured and underinsured children under 21.', hover: 'female-doctor-hugging-her-little-male-patient.webp', delay: '0.2s' },
  { icon: 'sanitary-pad-icon-replace.webp', title: 'Family Planning & PHC Programs', desc: 'Free and low-cost primary and reproductive health services for qualifying families.', hover: 'female-receptionist-working-at-desk-in-clinic.webp', delay: '0.25s' },
];

const SPECIALISTS = [
  { name: 'Salman Aly, M.D.', role: 'Medical Director' },
  { img: 'male-doctor-using-recovery-medication-to-give-pres.webp', name: 'Sarfraz Aly, M.D.', role: 'Chief Clinical Officer' },
  { img: 'shot-of-a-group-of-scientists-giving-each-other-a-toss.webp', name: 'Liaquat Khowaja', role: 'Chief Executive Officer' },
];

export default function Departments() {
  return (
    <>
      <PageHero titleWidth={628} image="ucf-locations-bg.webp" tag="Areas of Care" sub="Programs for Every Need" title="Your Health, Our Collective Commitment" intro="United Community Foundation unites medical, dental, educational, and social service expertise — delivering coordinated, patient-centered care for every member of your family." />

      {/* introduction */}
      <section className="dept-intro">
        <div className="gv-container">
          <div className="gv-col intro-photo-col">
            <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/medical-team-pair-smiling.png)' }} />
          </div>
          <div className="gv-col intro-mid-col">
            <div className="gv-col-wrap">
              <Subhead tag="Introduction" sub="Dedicated to Your Well" center={false} />
              <h2 className="gv-h2 left intro-h2">Shaped Around Your Well-Being</h2>
              <div className="intro-img gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.05s' }}>
                <img src="/img/female-doctor-hugging-her-little-male-patient.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="gv-col intro-right-col gv-anim" data-anim="fadeInLeft">
            <div className="gv-col-wrap">
              <p className="gv-p intro-text">At United Community Foundation, we coordinate medical, dental, and social care for underserved families across Harris and Fort Bend Counties — connecting each visit to the right program, free or low-cost when needed.</p>
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
                <h2 className="gv-h2 center" style={{ width: 655, maxWidth: '100%' }}>Coordinated Care, Program by Program</h2>
                <p className="gv-p center" style={{ width: '100%', marginBottom: 56 }}>A closer look at how our medical and dental teams put each service into practice.</p>
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
                    <Subhead tag="Our Leadership" sub="Care for Every Need" center={false} />
                    <h2 className="gv-h2 left" style={{ width: 580, maxWidth: '100%' }}>Meet the Team Behind Our Programs</h2>
                  </div>
                </div>
                <div className="gv-col half">
                  <div className="gv-col-wrap end">
                    <p className="gv-p" style={{ width: 566, maxWidth: '100%' }}>Our leadership and clinical staff are dedicated to delivering equitable, coordinated care to every family we serve.</p>
                  </div>
                </div>
              </div>
              <div className="specialists-row">
                {SPECIALISTS.map((s, i) => <SpecialistCard key={s.name} {...s} delay={`${0.05 * i}s`} />)}
              </div>
              <div className="view-all center">
                <h3 className="ps">Find the right program for your needs</h3>
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
                <ScheduleForm subtitle="Access trusted medical, dental, and program support with our team." />
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
