import medicalPhoto from '../../assets/photos/medical.jpg';

export default function Medical() {
  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: 44 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          In the realm of healthcare, the United Community Foundation (UCF) provides comprehensive preventive and primary medical and dental services. UCF also collaborates with local healthcare providers, community clinics, and public health agencies to expand access to medical and dental care. Additionally, the foundation supports initiatives aimed at addressing chronic health conditions prevalent in underserved communities, including diabetes management, mental health support, and access to affordable medications.
        </p>
        <div style={{ position: 'relative', padding: '0 0 14px 14px' }}>
          <div style={{ position: 'absolute', inset: '14px 14px 0 0', background: '#d9e9ea', borderRadius: 24 }}></div>
          <div style={{ position: 'relative', height: 280, borderRadius: 24, overflow: 'hidden' }}>
            <img src={medicalPhoto} alt="Medical consultation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
        <div data-reveal style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 24, padding: 32 }}>
          <div style={{ width: 46, height: 46, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 16 }}>
            <i className="fas fa-user-md"></i>
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>Primary Healthcare Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14.5, fontWeight: 600, color: '#334155' }}>
            {['Medical Consultations', 'Specialist consultation', 'Mental Health Evaluation', 'Lab Tests', 'Referrals'].map((t) => (
              <span key={t}><i className="fas fa-check" style={{ color: '#4a8d96', marginRight: 10 }}></i>{t}</span>
            ))}
          </div>
        </div>
        <div data-reveal style={{ background: '#2D5A61', color: '#fff', borderRadius: 24, padding: 32 }}>
          <div style={{ width: 46, height: 46, borderRadius: 999, background: 'rgba(255,255,255,.14)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 16 }}>
            <i className="fas fa-heartbeat"></i>
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Preventive Healthcare Services</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14.5, fontWeight: 600, color: '#e7f1f2' }}>
            {['Health Screenings', 'Health Education', 'Immunizations'].map((t) => (
              <span key={t}><i className="fas fa-check" style={{ color: '#a6cdd1', marginRight: 10 }}></i>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
