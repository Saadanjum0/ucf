import { PageHero, GreyAccordion } from '../components/inner/Common';

const GROUPS = [
  { title: 'General Information', lead: 'A brief overview of our services, hours, and how to reach us.', items: [
    { q: 'What services does Community Health & Life Center provide?', a: 'We provide comprehensive primary care for the whole family — annual wellness exams, acute and sick visits, chronic disease management, immunizations, women’s health, pediatric and newborn care, sports physicals, nutrition counseling, and on-site lab and imaging.' },
    { q: 'Do I need a referral to be seen?', a: 'No referral is needed. You can book directly with us as a new or established patient — just call the office at 346-616-0038.' },
    { q: 'How do I schedule an appointment?', a: 'Call us at 346-616-0038 or use the Patient Portal to request an appointment. Same-day and next-day slots are often available for established patients.' },
    { q: 'What are your office hours?', a: 'Our office is open Monday–Friday, 8:00 AM to 5:00 PM. Saturday appointments are available by request.' },
    { q: 'Do you see children?', a: 'Yes. We care for patients of all ages — from newborns to grandparents — including well-child visits, newborn exams, and school and sports physicals.' },
  ] },
  { title: 'Billing & Insurance', lead: 'Clear answers about coverage, costs, and billing.', padded: true, items: [
    { q: 'Do you accept my health insurance?', a: 'We accept most major plans, including Aetna, Blue Cross Blue Shield of Texas, Cigna, UnitedHealthcare, Humana, Medicare, Medicaid, Community Health Choice, and Amerigroup. Call us to confirm your specific plan.' },
    { q: 'How much will my visit cost?', a: 'Costs vary by visit type and insurance. We verify your insurance before you are seen and offer a competitive cash-pay price for self-pay patients. Call 346-616-0038 for an estimate.' },
    { q: 'What payment methods do you accept?', a: 'We accept cash, major credit and debit cards, and most insurance plans. Co-pays, deductibles, and non-covered services are due at the time of service.' },
    { q: 'How does the insurance claim process work?', a: 'We file insurance claims for you. Please bring your current insurance card and photo ID to each visit. You are responsible for co-pays, deductibles, and any non-covered services.' },
    { q: 'Are there any additional charges I should know about?', a: 'Possible additional costs include lab work, imaging, and procedures not covered by your plan. We will always discuss expected costs with you before services are performed.' },
  ] },
  { title: 'Patient Support', lead: 'How to reach us and get help when you need it.', items: [
    { q: 'Who should I contact for help?', a: 'Call our office at 346-616-0038 or message us through the Patient Portal for non-urgent questions.' },
    { q: 'Can I get help with forms and records?', a: 'Yes — we can help you complete new-patient and dietitian forms, request medical records, and sign the necessary releases. Forms are also available in the Patient Center.' },
    { q: 'How can I reach the support team?', a: 'Reach us by phone at 346-616-0038, by email at info@communityhealthandlifecenter.com, or through the Patient Portal.' },
    { q: 'How do I submit feedback?', a: 'We welcome your feedback. Call the office, email us, or share your experience in the Patient Portal — we use it to keep improving.' },
    { q: 'Is assistance available for special needs?', a: 'Absolutely. If you need assistance with accessibility, translation, or special accommodations, let us know when you schedule and we will do our best to help.' },
  ] },
];

export default function Faq() {
  return (
    <>
      <PageHero image="women-doctors-standing-on-medical-conference-talk.webp" tag="FAQ" sub="Patient Guidance" title="Helping You Every Step of the Way" intro="Quick guidance to help you understand our services, appointments, and patient support with clarity and confidence." />
      <section className="faq-page">
        <div className="gv-container">
          <div className="gv-col faq-main">
            <div className="gv-col-wrap">
              {GROUPS.map((g) => (
                <div className={`faq-group${g.padded ? ' padded' : ''}`} key={g.title}>
                  <h2 className="faq-h2">{g.title}</h2>
                  <p className="gv-p center">{g.lead}</p>
                  <div className="faq-acc-wrap"><GreyAccordion items={g.items} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="gv-col faq-side">
            <div className="gv-col-wrap">
              <div className="dark-box">
                <div className="ib-icon circle white"><img src="/img/emergency-call-icon-replace.webp" alt="emergency call icon" /></div>
                <h2 className="ib-title">Still Looking for Answers?</h2>
                <p className="ib-desc">Our team is ready to assist you with any questions or concerns you may have.</p>
                <a className="gv-btn pill-btn" href="/contact-us/"><span>Reach Support</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
