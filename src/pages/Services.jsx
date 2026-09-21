import { PageHero, LineAccordion, GreyAccordion, ProcessList } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { PortalCta } from '../components/Extras';

function ServiceCard({ img, title, desc, height, anim, delay, TitleTag = 'h3' }) {
  return (
    <div className="photo-card svc-card gv-anim" data-anim={anim} style={{ '--delay': delay, backgroundImage: `url(/img/${img})`, height }}>
      <div className="glass">
        <TitleTag><a href="/services-detail/">{title}</a></TitleTag>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const WHY = [
  { q: 'Board-Certified Physician', a: 'Care led by a board-certified family medicine physician with a focus on prevention.' },
  { q: 'On-Site Lab & Imaging', a: 'Convenient in-building diagnostics for faster, more reliable results.' },
  { q: 'Patient-Centered Approach', a: 'Designed to prioritize clarity, comfort, and trust throughout every step of your care journey.' },
  { q: 'Coordinated Care', a: 'A seamless care journey supported by our physician, nurse practitioner, and dietitian.' },
];

const STEPS = [
  { icon: 'doctor-icon-replace.webp', title: 'Initial Assessment', desc: 'Discuss symptoms, concerns, and medical history with our doctors for a clear and informed starting point.' },
  { icon: 'health-check-icon.webp', title: 'Diagnostic Evaluation', desc: 'Receive accurate tests and imaging for a complete and reliable medical overview that supports precise decisions.' },
  { icon: 'personal-information-icon-replace.webp', title: 'Personalized Treatment Plan', desc: 'Your doctor creates a tailored plan designed around your needs and long-term wellbeing with thoughtful guidance.' },
  { icon: 'time-medicine-icon-replace.webp', title: 'Follow-Up & Ongoing Care', desc: 'Our experts continuous support to monitor progress, refine treatments, and maintain stable, sustainable health.' },
];

const FAQ = [
  { q: 'What services does Community Health & Life Center provide?', a: 'We provide comprehensive primary care for the whole family — annual wellness exams, sick visits, chronic disease management, immunizations, women’s health, pediatric and newborn care, sports physicals, nutrition counseling, and on-site lab and imaging.' },
  { q: 'Do you accept my insurance?', a: 'We accept most major plans, including Aetna, Blue Cross Blue Shield of Texas, Cigna, UnitedHealthcare, Humana, Medicare, and Medicaid. Call us to confirm your specific plan.' },
  { q: 'How do I schedule an appointment?', a: 'Call the office at 346-616-0038 or use the Patient Portal. Same-day and next-day slots are often available for established patients.' },
];

export default function Services() {
  return (
    <>
      <PageHero image="young-neurologists-reading-brain-mri-at-hospital-lab.webp" tag="SERVICES" sub="Trusted Primary Care" title="Comprehensive Primary Care, Just for You" intro="Personalized, patient-centered primary care for families across Sugar Land and Fort Bend County." />

      {/* six service cards in the "promise" layout */}
      <section className="svc-grid-section">
        <div className="gv-container">
          <div className="promise-row">
            <div className="gv-col promise-left">
              <div className="gv-col-wrap">
                <ServiceCard img="male-doctor-using-recovery-medication-to-give-pres.webp" title="Annual Wellness Exams" desc="Comprehensive yearly physicals and preventive screenings for adults of every age." height={520} anim="fadeInLeft" delay="0.05s" TitleTag="h2" />
                <ServiceCard img="female-doctor-hugging-her-little-male-patient.webp" title="Acute & Sick Visits" desc="Same-day care for common illnesses, minor injuries, and sudden concerns." height={520} anim="fadeInDown" delay="0.25s" />
              </div>
            </div>
            <div className="gv-col promise-right">
              <div className="gv-col-wrap">
                <Subhead tag="SERVICES" sub="Care Designed with Precision" center={false} />
                <h2 className="gv-h2 left svc-h2">Comprehensive Care Designed with Precision</h2>
                <div className="promise-sub">
                  <div className="gv-col">
                    <div className="gv-col-wrap">
                      <ServiceCard img="group-of-doctors-talking-about-corona-virus-on-conference.webp" title="Chronic Disease Management" desc="Ongoing care for diabetes, hypertension, asthma, and high cholesterol." height={470} anim="fadeInDown" delay="0.1s" />
                      <ServiceCard img="pre-oxygenation-for-general-anesthesia-surgery.webp" title="Pediatric & Newborn Care" desc="Well-child visits, newborn exams, immunizations, and school physicals." height={470} anim="fadeInLeft" delay="0.3s" />
                    </div>
                  </div>
                  <div className="gv-col">
                    <div className="gv-col-wrap">
                      <p className="gv-p">Every service is shaped around your needs, delivered with expertise, clarity, and lasting commitment.</p>
                      <ServiceCard img="meeting-team-of-doctor-and-medical-staff-consultant.webp" title="On-Site Lab & Diagnostics" desc="Convenient in-building lab testing for fast, reliable results." height={485} anim="fadeInDown" delay="0.2s" />
                      <ServiceCard img="balance-exercise-with-bosu-ball-woman-and-doctor.webp" title="Nutrition Counseling" desc="Dietitian-led nutrition plans to support lasting, healthy change." height={485} anim="fadeInDown" delay="0.4s" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="why-section">
        <div className="gv-container">
          <div className="gv-col why-left">
            <div className="gv-col-wrap">
              <Subhead tag="Why Choose Us" sub="Care Standards" center={false} onWhite />
              <h2 className="gv-h2 left why-h2">Excellence That Defines Our Care</h2>
              <p className="gv-p why-p">We combine family medicine expertise and compassionate care to deliver thoughtful, personalized treatment.</p>
            </div>
          </div>
          <div className="gv-col why-right">
            <div className="gv-col-wrap">
              <div className="why-card">
                <LineAccordion items={WHY} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="process-section">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <Subhead tag="PROCESS" sub="Guided Care Workflow" />
              <h2 className="gv-h2 center full">Guided Care Workflow</h2>
              <p className="gv-p intro-588">We combine family medicine expertise and compassionate care to deliver thoughtful, personalized treatment.</p>
              <div className="process-row">
                <div className="gv-col process-list-col gv-anim" data-anim="fadeInDown">
                  <div className="gv-col-wrap"><ProcessList steps={STEPS} /></div>
                </div>
                <div className="gv-col process-img-col">
                  <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/medical-specialist-consulting-senior-woman-in-waiting-room.webp)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="svc-faq">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <Subhead tag="faq" sub="Quick Answers" onWhite />
              <h2 className="gv-h2 center" style={{ width: 664, maxWidth: '100%' }}>Common Questions Clearly Answered</h2>
              <p className="gv-p intro-588" style={{ marginBottom: 56 }}>Find clear, reliable answers to common questions about our services, processes, and overall patient care experience.</p>
              <div className="svc-faq-acc gv-anim" data-anim="fadeInDown"><GreyAccordion items={FAQ} /></div>
              <div className="still-q center gv-anim" data-anim="fadeInDown" style={{ '--delay': '0.1s' }}>
                <h3>Still Have Questions?</h3>
                <h4>Check out our <a href="/faq/">FAQ</a> to learn more.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortalCta />
    </>
  );
}
