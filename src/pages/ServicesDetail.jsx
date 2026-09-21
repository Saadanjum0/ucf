import { PageHero, IconList, GreyAccordion, ScheduleForm } from '../components/inner/Common';

const EXPECT = [
  'Thorough medical assessment based on symptoms and history',
  'Physical examination tailored to your concerns',
  'Basic diagnostics such as blood pressure, vitals, or lab recommendations',
  'Clear explanation of findings from your physician',
  'Personalized medical advice for prevention and treatment',
  'Time to ask questions and discuss next steps in detail',
];

const FAQ = [
  { q: 'What should I expect at an annual wellness exam?', a: 'Your visit includes a review of your health history, a physical exam, age-appropriate screenings, and any recommended lab work. We will also update immunizations and discuss prevention.' },
  { q: 'Can I access my test results online?', a: 'Yes. Results are available through our secure Patient Portal, and we will review anything that needs discussion at a follow-up.' },
  { q: 'How quickly will I receive my test results?', a: 'Most in-house lab results are ready within a few business days. Our team will contact you about any results that need attention.' },
];

export default function ServicesDetail() {
  return (
    <>
      <PageHero image="caucasian-senior-woman-consulting-black-middle-age.webp" tag="SERVICES" sub="Medical Service Overview" title="Annual Wellness Exam" intro="A comprehensive yearly visit to review your health, update screenings, and keep your preventive care on track." />
      <section className="detail-page">
        <div className="gv-container">
          <div className="gv-col detail-main">
            <div className="gv-col-wrap">
              <h2 className="detail-h2">Preventive Care for Your Everyday Health</h2>
              <p className="gv-p detail-p">Community Health &amp; Life Center’s general consultation offers personalized medical guidance for any symptoms, concerns, or routine checkups. Our clinicians ensure each visit is focused, attentive, and rooted in accurate assessment—helping you make informed decisions about your well-being.</p>
              <h2 className="detail-h2">What You Can Expect During Your Visit</h2>
              <p className="gv-p detail-p">Your consultation is designed to give you a complete, clear understanding of your overall health. During your visit, our physician will walk you through each step with careful attention, ensuring your concerns are heard, your symptoms are evaluated thoroughly, and your next steps are explained with clarity and care.</p>
              <IconList items={EXPECT} className="detail-list" />
              <h2 className="detail-h2">Frequently Asked Questions</h2>
              <p className="gv-p detail-p">Find clear, reliable answers to common questions about our services, processes, and overall patient care experience, helping you understand what to expect and feel fully supported at every step.</p>
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
