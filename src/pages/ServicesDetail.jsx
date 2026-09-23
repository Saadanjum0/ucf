import { PageHero, IconList, GreyAccordion, ScheduleForm } from '../components/inner/Common';

const EXPECT = [
  'Thorough medical consultation based on symptoms and history',
  'Specialist consultation and referrals when a concern needs a closer look',
  'Mental health evaluation and health screenings as part of routine care',
  'Lab tests and diagnostics through our low-cost referral network',
  'Health education to help you understand and manage your care',
  'Immunizations and preventive services for every age',
];

const FAQ = [
  { q: 'What should I expect at a medical consultation?', a: 'Your visit includes a review of your health history, a consultation with our medical staff, any needed health screenings, and a clear explanation of next steps — including referrals or lab work if recommended.' },
  { q: 'Do I need insurance for a medical consultation?', a: 'No. Uninsured or underinsured patients may qualify for free or low-cost care through our Title V, PHC, or Family Planning programs, and our team can talk through options with you regardless of insurance status.' },
  { q: 'How do I get a specialist referral?', a: 'If our medical team recommends specialist care, we coordinate the referral for you as part of your visit, along with any lab tests or imaging needed beforehand.' },
];

export default function ServicesDetail() {
  return (
    <>
      <PageHero image="balance-exercise-with-bosu-ball-woman-and-doctor.webp" tag="SERVICES" sub="Medical Service Overview" title="Medical Consultation" intro="Comprehensive medical consultations that connect you to screenings, referrals, and preventive care under one roof." />
      <section className="detail-page">
        <div className="gv-container">
          <div className="gv-col detail-main">
            <div className="gv-col-wrap">
              <h2 className="detail-h2">Care for Your Everyday Health</h2>
              <p className="gv-p detail-p">United Community Foundation's medical consultations offer personalized guidance for any symptoms, concerns, or routine checkups. Our clinicians ensure each visit is focused, attentive, and rooted in accurate assessment — helping uninsured and underinsured families make informed decisions about their well-being, regardless of ability to pay.</p>
              <h2 className="detail-h2">What You Can Expect During Your Visit</h2>
              <p className="gv-p detail-p">Your consultation is designed to give you a complete, clear understanding of your overall health. During your visit, our medical team will walk you through each step with careful attention, ensuring your concerns are heard, your symptoms are evaluated thoroughly, and your next steps — including specialist referrals or low-cost lab and imaging services — are explained with clarity and care.</p>
              <IconList items={EXPECT} className="detail-list" />
              <h2 className="detail-h2">Frequently Asked Questions</h2>
              <p className="gv-p detail-p">Find clear, reliable answers to common questions about our medical services, eligibility for free programs, and overall patient care experience.</p>
              <div className="detail-acc"><GreyAccordion items={FAQ} /></div>
              <div className="still-q">
                <h3>Still Have Questions?</h3>
                <h4>Check out our <a href="/faq/">FAQ</a> to learn more.</h4>
              </div>
            </div>
          </div>
          <div className="gv-col detail-side">
            <div className="gv-col-wrap">
              <ScheduleForm sticky />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
