import { useState } from 'react';
import Hoverable from '../Hoverable';
import programPhoto from '../../assets/photos/program.jpg';

const PROGRAMS = [
  [
    'Title V – Child Health and Dental Program',
    'Title V Program provides free and low-cost preventive, primary, and dental care for children and adolescents from low-income families. Our goal is to ensure that every child has access to essential health screenings, immunizations, and dental services, promoting healthy growth and development. We focus on early prevention and family education so children can enjoy a brighter, healthier future.',
  ],
  [
    'Primary Health Care (PHC) Program',
    'The PHC Program provides comprehensive primary and preventive health care services to individuals who are uninsured or underinsured in Texas. This includes diagnosis and treatment of common acute and chronic conditions, emergency and urgent care when needed, family-planning support, preventive health services such as immunizations and health screenings, diagnostic testing (labs, X-rays), health education, and nutrition and social support services.',
  ],
  [
    'Family Planning Program (FPP)',
    'Family Planning Program provides comprehensive and confidential health services to help individuals and families make informed choices about their reproductive and overall well-being. The program offers range of services including but not limited to Comprehensive Family Planning and Reproductive Health, Preventive Screenings and Women’s Health Services, Chronic Disease Prevention and Wellness Care. Through the FPP, UCF promotes preventive health and empowers clients to take control of their health journey ensuring access to quality care.',
  ],
];

const TAB_LABELS = ['Title V', 'Primary Health Care', 'Family Planning'];

export default function Free({ onNav }) {
  const [tab, setTab] = useState(0);
  const go = (p) => (e) => { e.preventDefault(); onNav(p); };
  const [title, body] = PROGRAMS[tab];

  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: 34 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40 }}>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          Under state-funded public health programs, UCF offers free preventive and primary healthcare services to individuals and families who need them most. We proudly participate in the Title V Child Health and Dental Program, Primary Health Care (PHC) Program, and Family Planning Program (FPP) — ensuring that every Texan, regardless of income or insurance status, has access to quality care close to home.
        </p>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          At UCF, we believe that good health is the foundation of a stronger community. Our programs focus on prevention, early intervention, and compassionate care — helping families stay healthy, informed, and supported at every stage of life. By combining professional excellence with a human touch, we bring hope, healing, and health equity to the heart of our communities.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid #eceadf', paddingBottom: 2 }}>
        {TAB_LABELS.map((label, i) => (
          <a
            key={label}
            href="#tab"
            onClick={(e) => { e.preventDefault(); setTab(i); }}
            style={{
              padding: '12px 18px', borderRadius: '10px 10px 0 0', fontSize: 14, fontWeight: 700,
              color: tab === i ? '#2D5A61' : '#64748b',
              borderBottom: `3px solid ${tab === i ? '#2D5A61' : 'transparent'}`,
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', color: '#0f172a' }}>{title}</div>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>{body}</p>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 9, padding: '9px 16px', borderRadius: 999, background: '#f0f6f7', border: '1px solid #d9e9ea', color: '#2D5A61', fontSize: 13, fontWeight: 700 }}>
            <i className="fas fa-info-circle"></i> Eligibility required
          </div>
          <Hoverable href="#contact" onClick={go('contact')} style={{ alignSelf: 'flex-start', padding: '13px 24px', borderRadius: 999, background: '#2D5A61', color: '#fff', fontSize: 14, fontWeight: 700 }} hoverStyle={{ background: '#1e3d42', color: '#fff' }}>
            Check eligibility
          </Hoverable>
        </div>
        <div style={{ position: 'relative', padding: '0 14px 14px 0' }}>
          <div style={{ position: 'absolute', inset: '14px 0 0 14px', background: '#d9e9ea', borderRadius: 24 }}></div>
          <div style={{ position: 'relative', height: 300, borderRadius: 24, overflow: 'hidden' }}>
            <img src={programPhoto} alt="Family program support" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
