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
          <p>Welcome to the Patient Center at United Community Foundation — your hub for everything you need before, during, and after your visit. We provide free and low-cost medical, dental, and social services to underserved families across Harris and Fort Bend counties.</p>
          <h2>New Patients</h2>
          <p>New to UCF? Please bring a <strong>photo ID</strong>, <strong>proof of household income</strong> (such as a recent pay stub or benefits letter), your <strong>current insurance card if you have one</strong>, and a list of any medications you take. Arriving 15 minutes early helps us get you checked in and seen on time. Most of our locations accept walk-ins alongside scheduled appointments.</p>
          <h2>Free Title V Program &amp; Eligibility</h2>
          <p>Our Title V Child Health and Dental Program provides free medical and dental care to uninsured and underinsured children and adolescents under 21 from low-income households. Eligibility is based on household size and income — bring proof of income and residency in Harris or Fort Bend County to your first visit, and our care coordinators will help you determine which of our free or low-cost programs fits your family, including the Primary Health Care (PHC) Program and the Family Planning Program (FPP).</p>
          <h2>Insurance &amp; Billing</h2>
          <p>We accept major medical insurance plans and offer reduced-cost self-pay options for patients without insurance. Lab and imaging services are available at reduced cost through our referral network. Call <a href={SITE.phoneHref}>{SITE.phone}</a> for current accepted plans and pricing.</p>
          <p>We verify insurance before every visit. All office fees are payable at the time of service; patients are responsible for co-payments, deductibles, and any non-covered services. No family is turned away from Title V services due to inability to pay.</p>
          <h2>What to Expect at Your Visit</h2>
          <p>After a brief eligibility screening, our team connects you to the right service — medical, dental, or social services — and coordinates any follow-up care or referrals you need. Many families are seen the same day at our walk-in-friendly locations.</p>
          <h2>Office Policies</h2>
          <p>Questions about appointments, eligibility, or records? Call us at <a href={SITE.phoneHref}>{SITE.phone}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Health &amp; Community Resources</h2>
          <p>Beyond clinical care, UCF connects families to food assistance, employment resources, health insurance enrollment help, and free educational programs like financial literacy and job-skills training.</p>
          <p><strong>Please note:</strong> our Patient Center should not be used for urgent medical concerns. If you need prompt assistance, call your nearest location directly. For a medical emergency, call 911.</p>
          <PortalCta />
        </main>
      </section>
    </>
  );
}

/* ---------------- Doctors & Staff (Leadership) ---------------- */
const EXECUTIVES = [
  {
    name: 'Liaquat Khowaja', role: 'Chief Executive Officer',
    bio: 'Liaquat Khowaja leads United Community Foundation\u2019s operations and strategy, guiding the organization\u2019s growth across Harris and Fort Bend counties since its founding in 2019. He works closely with the Board of Directors to keep UCF\u2019s free and low-cost programs accessible to the families who need them most.',
  },
  {
    name: 'Salman Aly, M.D.', role: 'Medical Director',
    bio: 'Dr. Salman Aly oversees clinical standards and medical programs across all UCF locations, ensuring every patient receives quality, coordinated care regardless of ability to pay.',
  },
  {
    name: 'Sarfraz Aly, M.D.', role: 'Chief Clinical Officer',
    bio: 'Dr. Sarfraz Aly directs day-to-day clinical operations and provider training, working to keep care consistent, safe, and accessible across UCF\u2019s growing network of clinics.',
  },
  {
    name: 'Syed Raza', role: 'Finance Manager',
    bio: 'Syed Raza manages the foundation\u2019s finances and grant funding, helping ensure free programs like Title V remain sustainable for the underserved communities UCF serves.',
  },
];

const BOARD = [
  { name: 'Zerin Chowdhury', role: 'Board Member' },
  { name: 'Shirmeen Lakhani', role: 'Board Member' },
  { name: 'Jalal Kapadia', role: 'Board Member' },
  { name: 'Nuruddin Ali', role: 'Board Member' },
  { name: 'Faizmin Lokhandwala', role: 'Board Member' },
];

export function Doctors() {
  return (
    <>
      <PageBanner title="Leadership & Staff" />
      <section className="wp-page">
        <main className="wp-prose">
          <h1>Leadership &amp; Staff</h1>
          <p>United Community Foundation is guided by an experienced executive team and a volunteer Board of Directors, all committed to expanding access to health and educational resources for underserved communities across Harris and Fort Bend counties. Meet the people behind our mission.</p>
          <h2>Executive Management</h2>
          {EXECUTIVES.map((p, i) => (
            <div key={p.name}>
              <div className="media-text">
                <div className="media-text-content">
                  <h3>{p.name}</h3>
                  <p><strong>{p.role}</strong></p>
                  <p>{p.bio}</p>
                </div>
              </div>
              {i < EXECUTIVES.length - 1 && <hr className="wp-separator" />}
            </div>
          ))}
          <h2>Board of Directors</h2>
          <p>Our Board of Directors provides governance and community oversight for UCF's programs and clinics:</p>
          <ul>
            {BOARD.map((b) => <li key={b.name}>{b.name} \u2014 {b.role}</li>)}
          </ul>
          <h2>Clinical &amp; Support Staff</h2>
          <p>Across our five locations, our physicians, nurse practitioners, dental providers, and front-desk and clinical support staff work together to make sure every visit runs smoothly \u2014 from eligibility screening and scheduling to ongoing care and follow-up.</p>
          <h2>Contact Our Team</h2>
          <p>Call us at <a href={SITE.phoneHref}>{SITE.phone}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to reach our leadership team or ask about our programs.</p>
          <PortalCta />
        </main>
      </section>
    </>
  );
}
