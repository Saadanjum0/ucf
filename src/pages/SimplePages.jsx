import { PageBanner } from '../components/inner/Common';
import { PortalCta } from '../components/Extras';
import { SITE } from '../data';

/* ---------------- Patient Center ---------------- */
export function PatientCenter() {
  return (
    <>
      <PageBanner title="Patient Center" />
      <section className="wp-page">
        <main className="wp-prose">
          <h1>Patient Center</h1>
          <p>Welcome to the Patient Center at Community Health &amp; Life Center — your hub for everything you need before, during, and after your visit. We are a family medicine practice in Sugar Land, TX, caring for patients at every stage of life.</p>
          <h2>New Patients</h2>
          <p>New to the practice? Please bring your <strong>photo ID</strong>, your <strong>current insurance card</strong>, and a list of any medications you take. Arriving 15 minutes early helps us get you checked in and seen on time.</p>
          <h2>Insurance &amp; Billing</h2>
          <p>We accept most major insurance plans, including Aetna, Amerigroup, Amerivantage, Blue Cross Blue Shield of Texas, Blue Medicare Advantage PPO, Cigna, Community Health Choice, Humana, Medicaid, Medicare, Memorial Hermann, Multiplan, and UnitedHealthcare. We also offer a competitive cash-pay price for self-pay patients — call <a href={SITE.phoneHref}>346-616-0038</a> for details.</p>
          <p>We verify insurance before every visit. All office fees are payable at the time of service; we file your claim for you, and patients are responsible for co-payments, deductibles, and non-covered services.</p>
          <h2>Patient Portal</h2>
          <p>Our secure Patient Portal gives you 24-hour access to your health information, messages, and non-urgent questions. <a href={SITE.portal} target="_blank" rel="noopener">Open the Patient Portal →</a></p>
          <h2>Patient Forms</h2>
          <p>Save time at your visit by completing the appropriate forms beforehand:</p>
          <ul>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2019/10/New-Medical-Patient-Forms-web.pdf" target="_blank" rel="noopener">New Medical Patient Forms</a></li>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2019/10/New-Dietitian-Patient-Forms-General-web.pdf" target="_blank" rel="noopener">New Dietitian Consult — General Consultation</a></li>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2019/10/New-Dietitian-Patient-Forms-Bariatric-web.pdf" target="_blank" rel="noopener">New Dietitian Consult — Bariatric Surgery</a></li>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2019/10/Joint-Notice-of-Privacy-Practices.pdf" target="_blank" rel="noopener">Joint Notice of Privacy Practices</a></li>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2020/03/CHLC-Medical-Records-Release.pdf" target="_blank" rel="noopener">Medical Records Release</a></li>
            <li><a href="https://communityhealthandlifecenter.com/wp-content/uploads/2020/03/CHLC-Medical-Power-of-Attorney.pdf" target="_blank" rel="noopener">Medical Power of Attorney</a></li>
          </ul>
          <h2>Office Policies</h2>
          <p>Questions about appointments, refills, or records? Review our <a href="/office-policies/">office policies</a>, or call us at <a href={SITE.phoneHref}>346-616-0038</a>.</p>
          <h2>Health Resources</h2>
          <p>Looking for reliable health information? Visit our <a href="/blog/">blog</a> for tips from our team, and check with your provider before making changes to your care.</p>
          <p><strong>Please note:</strong> the Patient Portal should not be used for urgent medical concerns. If you need prompt assistance, call the office directly. For a medical emergency, call 911.</p>
          <PortalCta />
        </main>
      </section>
    </>
  );
}

/* ---------------- Doctors & Staff ---------------- */
const PROVIDERS = [
  {
    img: 'docpic.png', name: 'Dr. Daniel A. Nwachokor, MD, MPH', role: 'Family Medicine Physician',
    bio: 'Dr. Nwachokor is proud to practice family medicine in the community he grew up in. A product of the Hightower High School Medical Science Academy in Fort Bend ISD, he treats patients at all stages of life — from newborns to the elderly. He has a passion for community service and for training future health professionals, and is active in numerous local, state, and national medical organizations.',
    edu: ['Undergraduate: Grambling State University (Grambling, LA)', 'Medical School: University of Kansas School of Medicine (MD/MPH)', 'Residency: Memorial Family Medicine Residency Program (Sugar Land)', 'Board Certification: American Board of Family Medicine'],
    extra: [['Languages:', 'English & Spanish'], ['Clinical Interests:', 'Preventive medicine, chronic disease management, nutrition counseling, obesity medicine, immunizations, and sports physicals.'], ['Hospital Affiliation:', 'Memorial Hermann Sugar Land Hospital']],
  },
  {
    img: 'team-of-female-doctor-check-on-scan-results-paper.webp', name: 'Carmen — Family Nurse Practitioner', role: null,
    bio: 'Carmen is a family nurse practitioner whose training prepared her to care for individuals and families with a focus on primary care. She empowers her patients to reach their overall health goals, takes the time to learn about them, and stays involved in the community. She is a clinical preceptor for nurse practitioner students.',
    edu: ['Undergraduate: Houston Baptist University (Houston, TX)', 'Graduate School: University of Texas Health Science Center (Houston, TX)'],
    extra: [['Languages:', 'English & Spanish'], ['Clinical Interests:', 'Acute illness, women’s health care, adolescent care, and mental wellbeing.']],
  },
  {
    img: 'in-the-hospital-office-a-medical-explains.webp', name: 'Alisa — Registered Dietitian', role: null,
    bio: 'Alisa is a registered and licensed dietitian with clinical and hospital experience. She consults with your physician to ensure your nutrition plan meets your specific health needs, and is especially interested in promoting healthy lifestyles through weight management, nutrition, and fitness. A Missouri native, she enjoys cooking, traveling, and spending time with family.',
    edu: ['Undergraduate: Cheyney University (Cheyney, PA)', 'Graduate School: Texas Southern University (Houston, TX)'],
    extra: [['Languages:', 'English & Spanish'], ['Clinical Interests:', 'General nutrition & wellness, medical nutrition therapy, and group classes and seminars.']],
  },
];

export function Doctors() {
  return (
    <>
      <PageBanner title="Doctors & Staff" />
      <section className="wp-page">
        <main className="wp-prose">
          <h1>Doctors &amp; Staff</h1>
          <p>Our team at Community Health &amp; Life Center is dedicated to caring for you and your family at every stage of life. Meet the people behind your care.</p>
          <h2>Our Providers</h2>
          {PROVIDERS.map((p, i) => (
            <div key={p.name}>
              <div className="media-text">
                <figure className="media-text-media"><img src={`/img/${p.img}`} alt={p.name} /></figure>
                <div className="media-text-content">
                  <h3>{p.name}</h3>
                  {p.role && <p><strong>{p.role}</strong></p>}
                  <p>{p.bio}</p>
                  <p><strong>Education &amp; Training</strong><br />{p.edu.map((e, j) => <span key={j}>{e}<br /></span>)}</p>
                  <p>{p.extra.map(([k, v]) => <span key={k}><strong>{k}</strong> {v}<br /></span>)}</p>
                </div>
              </div>
              {i < PROVIDERS.length - 1 && <hr className="wp-separator" />}
            </div>
          ))}
          <h2>Support Staff</h2>
          <p>Our front desk and clinical support team help with scheduling, insurance verification, records, and making sure every visit runs smoothly.</p>
          <h2>Schedule a Visit</h2>
          <p>Call us at <a href={SITE.phoneHref}>346-616-0038</a> or use our <a href={SITE.portal} target="_blank" rel="noopener">Patient Portal</a> to request an appointment.</p>
          <PortalCta />
        </main>
      </section>
    </>
  );
}
