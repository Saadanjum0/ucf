import dentalPhoto from '../../assets/photos/dental.jpg';

export default function Dental() {
  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          In the realm of healthcare, the United Community Foundation (UCF) provides comprehensive preventive and primary medical and dental services. UCF also collaborates with local healthcare providers, community clinics, and public health agencies to expand access to medical and dental care. Additionally, the foundation supports initiatives aimed at addressing chronic health conditions prevalent in underserved communities, including diabetes management, mental health support, and access to affordable medications.
        </p>
        <div data-reveal style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 24, padding: 32 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>Dental</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14.5, fontWeight: 600, color: '#334155' }}>
            {['Dental Exam & X-ray', 'Hygiene Education', 'Dental Cleanings', 'Dental Procedures'].map((t) => (
              <span key={t}><i className="fas fa-check" style={{ color: '#4a8d96', marginRight: 10 }}></i>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', padding: '0 14px 14px 0' }}>
        <div style={{ position: 'absolute', inset: '14px 0 0 14px', background: '#2D5A61', borderRadius: 24 }}></div>
        <div style={{ position: 'relative', height: 330, borderRadius: 24, overflow: 'hidden' }}>
          <img src={dentalPhoto} alt="Dental clinic care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}
