import { PageHero, GreyAccordion } from '../components/inner/Common';

const GROUPS = [
  { title: 'General Information', lead: 'A brief overview of our programs, hours, and how to reach us.', items: [
    { q: 'What programs does United Community Foundation offer?', a: 'We offer Medical Services, Dental Services, Educational Programs, Social Services, and Free Programs — including the Title V Child Health & Dental Program, the PHC Program, and the Family Planning Program — for underserved families across Harris and Fort Bend Counties.' },
    { q: 'Is there a cost for services?', a: 'It depends on the program. We offer free care to eligible children through Title V, and free or low-cost primary care through the PHC and Family Planning Programs for uninsured and underinsured patients, regardless of ability to pay.' },
    { q: 'Do I need insurance to be seen?', a: 'No. Uninsured and underinsured patients can be seen through our free and low-cost programs, subject to eligibility requirements. Bring proof of income and household size so we can check what you qualify for.' },
    { q: 'Which locations offer which services?', a: 'Our Rosenberg, Wharton, Sugar Land, and Houston Health and Wellness Centers offer medical, dental, and program services; our Wilcrest Community Medical Center in Houston focuses on medical care. Call ahead to confirm services at your nearest location.' },
    { q: 'How do I schedule a visit?', a: 'Call us at (281) 853-5555 or use the Contact page to reach your nearest location. Most locations also accept walk-ins.' },
  ] },
  { title: 'Free Programs & Eligibility', lead: 'Clear answers about our Title V, PHC, and Family Planning programs.', padded: true, items: [
    { q: 'Who is eligible for the Title V program?', a: 'The Title V Child Health & Dental Program provides free medical and dental care for uninsured and underinsured children and adolescents under 21 from low-income families, subject to eligibility requirements based on income and residency.' },
    { q: 'What does the PHC Program cover?', a: 'The Primary Health Care (PHC) Program provides comprehensive primary and preventive health care for individuals who are uninsured or underinsured in Texas — diagnosis and treatment of common acute and chronic conditions, emergency and urgent care when needed, family-planning support, preventive services like immunizations and health screenings, diagnostic testing (labs, X-rays), health education, and nutrition and social support services.' },
    { q: 'What is the Family Planning Program?', a: 'The Family Planning Program (FPP) provides comprehensive, confidential services in three areas: Comprehensive Family Planning and Reproductive Health, Preventive Screenings and Women’s Health Services, and Chronic Disease Prevention and Wellness Care — helping clients take control of their health journey regardless of insurance status.' },
    { q: 'What documents do I need to apply for a free program?', a: 'Typically a photo ID, proof of household income, and proof of residency in Harris or Fort Bend County. Our staff will walk you through the exact requirements when you call or visit.' },
    { q: 'What if I have insurance?', a: 'Our free and low-cost programs are designed for uninsured and underinsured families. If you have insurance, our team can help you find the right care option and let you know whether a free program applies to your situation.' },
  ] },
  { title: 'Visits & Referrals', lead: 'What to bring, and how referrals and lab work are handled.', items: [
    { q: 'What should I bring to my first visit?', a: 'Bring a photo ID, your insurance card (if you have one), and, for free-program applicants, proof of income and residency. If you are following up on a referral, bring any paperwork from your prior visit.' },
    { q: 'How do I get referred for lab work or imaging?', a: 'If our medical team recommends lab tests or imaging, we coordinate the referral through our network and connect you to low-cost laboratory and imaging services.' },
    { q: 'How do I get a specialist referral?', a: 'Specialist Consultation is available through referral from our medical team following your initial consultation or health screening.' },
    { q: 'Do you offer mental health services?', a: 'Yes. Mental Health Evaluation is part of our medical services, and we can refer patients to additional mental health resources as needed.' },
    { q: 'What Educational Programs do you offer?', a: 'Mental Health First Aid Training, Dental Assistant Training, Financial Literacy, Language Classes, and Basic Computer Skills, plus individual and group mentorship for students from low-income backgrounds and referrals to free or low-cost training programs.' },
    { q: 'What Social Services can I access?', a: 'Emergency Preparedness and Response, Employment Resources, Training/Recovery referrals, Senior Services, Food Assistance and Nutrition, Financial Literacy, Health Insurance Enrollment, and Immigration Referrals — available in-house or through referral.' },
    { q: 'Who should I contact for help?', a: 'Call your nearest location at (281) 853-5555 or reach us through the Contact page for non-urgent questions about programs or appointments.' },
  ] },
];

export default function Faq() {
  return (
    <>
      <PageHero image="women-doctors-standing-on-medical-conference-talk.webp" tag="FAQ" sub="Patient Guidance" title="Helping You Every Step of the Way" intro="Quick guidance to help you understand our programs, eligibility, and what to expect at your visit." />
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
