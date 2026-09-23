import { PageHero, LineAccordion, GreyAccordion, ProcessList } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { PortalCta } from '../components/Extras';

function ServiceCard({ img, title, desc, href = '/services-detail/', height, anim, delay, TitleTag = 'h3' }) {
  return (
    <div className="photo-card svc-card gv-anim" data-anim={anim} style={{ '--delay': delay, backgroundImage: `url(/img/${img})`, height }}>
      <div className="glass">
        <TitleTag><a href={href}>{title}</a></TitleTag>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const WHY = [
  { q: 'Trusted Since 2019', a: 'A Texas 501(c)(3) nonprofit serving Harris and Fort Bend Counties with quality, coordinated care.' },
  { q: 'Free & Low-Cost Programs', a: 'Title V, PHC, and Family Planning programs bring essential care within reach for uninsured and underinsured families.' },
  { q: 'Whole-Person Approach', a: 'Medical, dental, educational, and social services delivered together, not in silos.' },
  { q: 'Five Community Locations', a: 'Clinics and centers across Rosenberg, Wharton, Sugar Land, and Houston, with walk-ins welcome.' },
];

const STEPS = [
  { icon: 'doctor-icon-replace.webp', title: 'Registration & Eligibility', desc: 'Tell us about your household and insurance status so we can connect you to the right program, including free and low-cost options.' },
  { icon: 'health-check-icon.webp', title: 'Consultation & Screening', desc: 'Meet with our medical or dental team for an evaluation, health screening, or exam suited to your visit.' },
  { icon: 'personal-information-icon-replace.webp', title: 'Referrals & Diagnostics', desc: 'When needed, we coordinate specialist referrals and low-cost lab or imaging services through our referral network.' },
  { icon: 'time-medicine-icon-replace.webp', title: 'Ongoing Support', desc: 'From health education to social services and skill-building programs, our team stays connected with your family beyond a single visit.' },
];

const FAQ = [
  { q: 'What services does United Community Foundation provide?', a: 'We provide Medical Services, Dental Services, Educational Programs, Social Services, and Free Programs for uninsured and underinsured families across Harris and Fort Bend Counties.' },
  { q: 'Do I need insurance to be seen?', a: 'No. We offer free and low-cost programs — including the Title V Child Health & Dental Program and the PHC Program — for patients without insurance, regardless of ability to pay.' },
  { q: 'How do I schedule a visit?', a: 'Call us at (281) 853-5555 or use the Contact page. Most of our locations also welcome walk-ins.' },
];

export default function Services() {
  return (
    <>
      <PageHero image="female-doctor-hugging-her-little-male-patient.webp" tag="SERVICES" sub="Health, Dental & Community Programs" title="Care and Resources for the Whole Family" intro="United Community Foundation delivers medical, dental, educational, and social services to underserved families across Harris and Fort Bend Counties." />

      {/* six service cards in the "promise" layout */}
      <section className="svc-grid-section">
        <div className="gv-container">
          <div className="promise-row">
            <div className="gv-col promise-left">
              <div className="gv-col-wrap">
                <ServiceCard img="ucf-healthy-living.png" title="Medical Services" href="/services/medical/" desc="Primary healthcare: medical consultations, specialist consultation, mental health evaluation, lab tests, and referrals. Preventive healthcare: health screenings, health education, and immunizations." height={520} anim="fadeInLeft" delay="0.05s" TitleTag="h2" />
                <ServiceCard img="ucf-dental.png" title="Dental Services" href="/services/dental/" desc="Dental exam & X-ray, hygiene education, cleanings, and dental procedures for every member of the family." height={520} anim="fadeInDown" delay="0.25s" />
              </div>
            </div>
            <div className="gv-col promise-right">
              <div className="gv-col-wrap">
                <Subhead tag="SERVICES" sub="Care Designed with Precision" center={false} />
                <h2 className="gv-h2 left svc-h2">Five Pillars of Care, Built Around Your Family</h2>
                <div className="promise-sub">
                  <div className="gv-col">
                    <div className="gv-col-wrap">
                      <ServiceCard img="shot-of-a-group-of-scientists-giving-each-other-a-toss.webp" title="Educational Programs" href="/services/educational-programs/" desc="Mental health first aid training, dental assistant training, financial literacy, language classes, and basic computer skills." height={470} anim="fadeInDown" delay="0.1s" />
                      <ServiceCard img="balance-exercise-with-bosu-ball-woman-and-doctor.webp" title="Social Services" href="/services/social-services/" desc="Emergency preparedness, employment and training referrals, senior services, food assistance, health insurance enrollment, and immigration referrals." height={470} anim="fadeInLeft" delay="0.3s" />
                    </div>
                  </div>
                  <div className="gv-col">
                    <div className="gv-col-wrap">
                      <p className="gv-p">Every program is shaped around our community's needs, delivered with equity, dignity, and excellence.</p>
                      <ServiceCard img="ucf-titlev.png" title="Free Programs" href="/services/free-programs/" desc="Title V Child Health & Dental Program, the PHC Program, and the Family Planning Program for uninsured families." height={485} anim="fadeInDown" delay="0.2s" />
                      <ServiceCard img="ucf-labs.png" title="Low-Cost Lab & Imaging" href="/services/medical/" desc="Preventive and primary care backed by a referral network for affordable laboratory and imaging services." height={485} anim="fadeInDown" delay="0.4s" />
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
              <p className="gv-p why-p">We combine health, dental, and social services expertise with compassionate, community-rooted care.</p>
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
              <p className="gv-p intro-588">From your first visit to ongoing support, our team walks alongside you at every step.</p>
              <div className="process-row">
                <div className="gv-col process-list-col gv-anim" data-anim="fadeInDown">
                  <div className="gv-col-wrap"><ProcessList steps={STEPS} /></div>
                </div>
                <div className="gv-col process-img-col">
                  <div className="gv-col-wrap" style={{ backgroundImage: 'url(/img/female-receptionist-working-at-desk-in-clinic.webp)' }} />
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
              <p className="gv-p intro-588" style={{ marginBottom: 56 }}>Find clear, reliable answers to common questions about our programs, eligibility, and how to get started.</p>
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
