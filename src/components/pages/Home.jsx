import Hoverable from '../Hoverable';
import heroPhoto from '../../assets/photos/hero.jpg';
import aboutPhoto from '../../assets/photos/about.jpg';

export default function Home({ onNav }) {
  const go = (p) => (e) => { e.preventDefault(); onNav(p); };

  return (
    <div className="ucf-in">
      {/* hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'center' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 22, minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(39px,5.6vw,63px)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-.03em', color: '#0f172a', textWrap: 'pretty' }}>
            Preventive and primary care,<br /><span style={{ color: '#2D5A61' }}>rooted in community.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 18.4, lineHeight: 1.65, color: '#475569', maxWidth: '46ch' }}>
            United Community Foundation is a nonprofit bridging the gap in access to essential health and educational resources for underserved communities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Hoverable href="#medical" onClick={go('medical')} style={{ padding: '14px 26px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 15.7, fontWeight: 700, boxShadow: '0 12px 26px -12px rgba(45,90,97,.8)' }} hoverStyle={{ background: '#1e3d42', color: '#fff' }}>
              Explore services
            </Hoverable>
            <Hoverable href="#free" onClick={go('free')} style={{ padding: '14px 26px', borderRadius: 999, background: '#fff', border: '1px solid #e2e8f0', color: '#1e293b', fontSize: 15.7, fontWeight: 700 }} hoverStyle={{ background: '#f1f5f9', color: '#1e293b' }}>
              Free programs
            </Hoverable>
          </div>
          <div style={{ display: 'flex', gap: 28, paddingTop: 10, borderTop: '1px solid #eceadf', marginTop: 6 }}>
            <div><div data-count="3" style={{ fontSize: 25.9, fontWeight: 900, color: '#2D5A61' }}>3</div><div style={{ fontSize: 13, color: '#64748b' }}>State-funded programs</div></div>
            <div><div data-count="100" data-suffix="%" style={{ fontSize: 25.9, fontWeight: 900, color: '#2D5A61' }}>100%</div><div style={{ fontSize: 13, color: '#64748b' }}>Care regardless of ability to pay</div></div>
            <div><div style={{ fontSize: 25.9, fontWeight: 900, color: '#2D5A61' }}>501(c)(3)</div><div style={{ fontSize: 13, color: '#64748b' }}>Nonprofit organization</div></div>
          </div>
        </div>

        <div data-reveal style={{ position: 'relative', minWidth: 0, padding: '16px 16px 0 22px' }}>
          <div style={{ position: 'absolute', inset: 0, background: '#d9e9ea', borderRadius: '24px 24px 120px 24px', transform: 'rotate(3deg)' }}></div>
          <div style={{ position: 'relative', height: 'min(520px,58vh)', minHeight: 340, borderRadius: '24px 24px 120px 24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(45,90,97,.18)' }}>
            <img src={heroPhoto} alt="Clinician caring for a patient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', left: 0, bottom: -26, display: 'flex', gap: 14, alignItems: 'center', padding: 18, borderRadius: 18, background: 'rgba(255,255,255,.72)', backdropFilter: 'blur(16px) saturate(160%)', WebkitBackdropFilter: 'blur(16px) saturate(160%)', border: '1px solid rgba(255,255,255,.7)', boxShadow: '0 18px 40px -14px rgba(45,90,97,.45)', maxWidth: 260 }}>
            <div style={{ width: 46, height: 46, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <div><div style={{ fontSize: 21.6, fontWeight: 900, color: '#0f172a' }}>Title V</div><div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.35 }}>Free care for uninsured children under 21</div></div>
          </div>
        </div>
      </div>

      {/* service quick cards */}
      <div style={{ background: '#fff', borderTop: '1px solid #eceadf', borderBottom: '1px solid #eceadf' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div data-reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12.4, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2D5A61' }}>Our Services</div>
              <h2 style={{ margin: '8px 0 0', fontSize: 41, fontWeight: 800, letterSpacing: '-.025em', color: '#0f172a' }}>Comprehensive care solutions</h2>
            </div>
            <p style={{ margin: 0, maxWidth: '42ch', fontSize: 15.7, lineHeight: 1.65, color: '#64748b' }}>
              Medical, dental, social and educational support delivered directly, and through a trusted network of partners.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20 }}>
            {[
              { page: 'medical', icon: 'fa-stethoscope', title: 'Medical Services', body: 'Consultations, screenings, immunizations, lab tests and referrals.' },
              { page: 'dental', icon: 'fa-tooth', title: 'Dental Services', body: 'Exams and X-rays, cleanings, procedures and hygiene education.' },
              { page: 'social', icon: 'fa-hands-helping', title: 'Social Support', body: 'Food assistance, employment resources, senior services and referrals.' },
              { page: 'social', icon: 'fa-house-damage', title: 'Emergency Preparedness', body: 'Preparedness and response support for families and communities.' },
            ].map((c) => (
              <Hoverable
                key={c.title}
                data-reveal
                href={`#${c.page}`}
                onClick={go(c.page)}
                style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 26, borderRadius: 20, background: '#faf9f6', border: '1px solid #eceadf', transition: 'transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s' }}
                hoverStyle={{ transform: 'translateY(-6px)', boxShadow: '0 25px 50px -20px rgba(45,90,97,.35)', color: '#2D5A61' }}
              >
                <span style={{ width: 46, height: 46, borderRadius: 999, background: '#fff', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19.4, boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}>
                  <i className={`fas ${c.icon}`}></i>
                </span>
                <span style={{ fontSize: 19.4, fontWeight: 800, color: '#0f172a' }}>{c.title}</span>
                <span style={{ fontSize: 14.6, lineHeight: 1.6, color: '#475569' }}>{c.body}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#2D5A61', marginTop: 'auto' }}>Learn more <i className="fas fa-arrow-right" style={{ fontSize: 11.9 }}></i></span>
              </Hoverable>
            ))}
          </div>
        </div>
      </div>

      {/* marquee */}
      <div style={{ background: '#2D5A61', overflow: 'hidden', padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
        <div id="ucfMarquee" style={{ display: 'flex', gap: 44, whiteSpace: 'nowrap', willChange: 'transform' }}>
          {[0, 1].map((i) => (
            <span key={i} style={{ display: 'flex', gap: 44, alignItems: 'center', fontSize: 20.5, fontWeight: 800, letterSpacing: '-.01em', color: '#fff' }}>
              {['Medical', 'Dental', 'Title V', 'Primary Health Care', 'Family Planning', 'Social Services', 'Health Education'].map((t) => (
                <span key={t} style={{ display: 'flex', gap: 44, alignItems: 'center' }}>
                  <span>{t}</span><span style={{ color: '#7fb3ba' }}>✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* vision / mission / goal offset cards */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 44, alignItems: 'start' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 12.4, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2D5A61' }}>Our Foundation</div>
          <h2 style={{ margin: 0, fontSize: 38.9, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-.025em', color: '#0f172a' }}>Driven by equity. Grounded in empathy.</h2>
          <p style={{ margin: 0, fontSize: 16.2, lineHeight: 1.7, color: '#475569' }}>
            Guided by a strong belief in equity and social justice, we empower individuals and families facing barriers such as low income, lack of insurance, or limited access to quality care.
          </p>
          <Hoverable href="#about" onClick={go('about')} style={{ alignSelf: 'flex-start', padding: '13px 24px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 15.1, fontWeight: 700 }} hoverStyle={{ background: '#1e3d42', color: '#fff' }}>
            About the foundation
          </Hoverable>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          <Hoverable as="div" data-reveal style={{ background: '#f0f6f7', borderRadius: 24, padding: 32 }} hoverStyle={{ transform: 'translateY(-5px)', boxShadow: '0 20px 40px -20px rgba(45,90,97,.3)' }}>
            <div style={{ color: '#2D5A61', fontSize: 28.1, marginBottom: 16 }}><i className="fas fa-eye"></i></div>
            <div style={{ fontSize: 22.7, fontWeight: 800, color: '#0f172a', marginBottom: 10 }}>Vision</div>
            <div style={{ fontSize: 15.1, lineHeight: 1.65, color: '#334155' }}>Empower and strengthen underserved communities through access to resources and information.</div>
          </Hoverable>
          <Hoverable as="div" data-reveal style={{ background: '#2D5A61', borderRadius: 24, padding: 32, color: '#fff', boxShadow: '0 25px 50px -12px rgba(45,90,97,.35)' }} hoverStyle={{ transform: 'translateY(-5px)', boxShadow: '0 30px 55px -14px rgba(45,90,97,.5)' }}>
            <div style={{ color: '#a6cdd1', fontSize: 28.1, marginBottom: 16 }}><i className="fas fa-bullseye"></i></div>
            <div style={{ fontSize: 22.7, fontWeight: 800, marginBottom: 10 }}>Mission</div>
            <div style={{ fontSize: 15.1, lineHeight: 1.65, color: '#e7f1f2' }}>To explore, connect, educate, and provide quality health and educational opportunities to underserved communities in Texas.</div>
          </Hoverable>
          <Hoverable as="div" data-reveal style={{ gridColumn: '1/-1', background: '#fff', border: '1px solid #eceadf', borderRadius: 24, padding: 32, display: 'flex', gap: 22, alignItems: 'center' }} hoverStyle={{ transform: 'translateY(-5px)', boxShadow: '0 20px 40px -20px rgba(45,90,97,.3)' }}>
            <div style={{ width: 54, height: 54, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23.8, flexShrink: 0 }}>
              <i className="fas fa-flag"></i>
            </div>
            <div>
              <div style={{ fontSize: 22.7, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Goal</div>
              <div style={{ fontSize: 15.1, lineHeight: 1.65, color: '#475569' }}>To improve the quality of life of low-income and underserved communities.</div>
            </div>
          </Hoverable>
        </div>
      </div>

      {/* free programs highlight */}
      <div style={{ background: '#1e3d42', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px', display: 'flex', flexDirection: 'column', gap: 34 }}>
          <div data-reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12.4, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: '#a6cdd1' }}>Free &amp; low-cost care</div>
              <h2 style={{ margin: '8px 0 0', fontSize: 41, fontWeight: 800, letterSpacing: '-.025em' }}>State-funded public health programs</h2>
            </div>
            <Hoverable href="#free" onClick={go('free')} style={{ padding: '13px 24px', borderRadius: 999, background: '#fff', color: '#1e3d42', fontSize: 15.1, fontWeight: 700 }} hoverStyle={{ background: '#d9e9ea', color: '#1e3d42' }}>
              See eligibility
            </Hoverable>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20 }}>
            {[
              { tag: 'Title V', title: 'Child Health & Dental Program', body: 'Free and low-cost preventive, primary, and dental care for children and adolescents from low-income families.' },
              { tag: 'PHC', title: 'Primary Health Care Program', body: 'Comprehensive primary and preventive care for individuals who are uninsured or underinsured in Texas.' },
              { tag: 'FPP', title: 'Family Planning Program', body: 'Comprehensive and confidential services supporting reproductive health and overall well-being.' },
            ].map((p) => (
              <Hoverable
                as="div"
                key={p.tag}
                data-reveal
                style={{ background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,.16)', borderRadius: 24, padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}
                hoverStyle={{ transform: 'translateY(-6px)', background: 'rgba(255,255,255,.14)' }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#a6cdd1' }}>{p.tag}</div>
                <div style={{ fontSize: 21.6, fontWeight: 800 }}>{p.title}</div>
                <div style={{ fontSize: 15.1, lineHeight: 1.65, color: '#cfe3e4' }}>{p.body}</div>
              </Hoverable>
            ))}
          </div>
          <div data-reveal style={{ background: '#fff', color: '#0f172a', borderRadius: 24, padding: '28px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 23.8, fontWeight: 800, marginBottom: 6 }}>Not sure if you qualify?</div>
              <div style={{ fontSize: 15.1, color: '#64748b', maxWidth: '60ch' }}>Our team can verify eligibility and connect you with the right program. Eligibility is required for Title V services.</div>
            </div>
            <Hoverable href="#contact" onClick={go('contact')} style={{ padding: '14px 26px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 15.1, fontWeight: 700 }} hoverStyle={{ background: '#1e3d42', color: '#fff' }}>
              Talk to a coordinator
            </Hoverable>
          </div>
        </div>
      </div>

      {/* about strip */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eceadf' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 52, alignItems: 'center' }}>
          <div data-reveal style={{ position: 'relative', padding: '0 16px 16px 0' }}>
            <div style={{ position: 'absolute', inset: '16px 0 0 16px', background: '#2D5A61', borderRadius: 24 }}></div>
            <div style={{ position: 'relative', height: 340, borderRadius: 24, overflow: 'hidden' }}>
              <img src={aboutPhoto} alt="Community outreach volunteers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ fontSize: 12.4, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2D5A61' }}>About Us</div>
            <h2 style={{ margin: 0, fontSize: 36.7, fontWeight: 800, lineHeight: 1.18, letterSpacing: '-.025em', color: '#0f172a' }}>&ldquo;United&rdquo; is more than just our name.</h2>
            <p style={{ margin: 0, fontSize: 16.2, lineHeight: 1.7, color: '#475569' }}>
              By joining hands with partners, volunteers, and communities, we turn shared vision into tangible impact. Together, we transform challenges into opportunities, raise awareness about health and well-being, and nurture families toward a brighter, healthier tomorrow.
            </p>
            <p style={{ margin: 0, fontSize: 16.2, lineHeight: 1.7, color: '#475569' }}>
              We never lower our quality of service just because someone cannot pay. Instead, we strive to deliver the same level of respect, professionalism, and excellence that every human being deserves.
            </p>
            <a href="#about" onClick={go('about')} style={{ alignSelf: 'flex-start', fontSize: 15.7, fontWeight: 700, color: '#2D5A61' }}>
              Read our full story <i className="fas fa-arrow-right" style={{ fontSize: 13 }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
