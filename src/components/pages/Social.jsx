const SERVICES = [
  ['fa-house-damage', 'Emergency Preparedness and Response'],
  ['fa-briefcase', 'Employment Resources'],
  ['fa-life-ring', 'Training Recovery'],
  ['fa-user-friends', 'Senior Services'],
  ['fa-utensils', 'Food Assistance and Nutrition'],
  ['fa-coins', 'Financial Literacy'],
  ['fa-file-medical', 'Health Insurance Enrollment'],
  ['fa-passport', 'Immigration Referrals'],
];

export default function Social() {
  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: 34 }}>
      <p style={{ margin: 0, maxWidth: '90ch', fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
        The United Community Foundation (UCF) is committed to fostering a resilient and thriving community by offering a range of social services tailored to the diverse needs of the local communities. We strive to support individuals and families by providing essential resources, guidance, and programs that promote health, safety, and overall well-being. With a strong focus on inclusivity and accessibility, UCF aims to empower community members to lead healthier, more fulfilling lives, ensuring that everyone can succeed and contribute to a stronger, more connected society.
      </p>
      <div>
        <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: '#2D5A61', marginBottom: 16 }}>
          Social Services (In-house &amp; Referrals)
        </div>
        <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {SERVICES.map(([icon, label]) => (
            <div key={label} style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <i className={`fas ${icon}`} style={{ color: '#2D5A61', fontSize: 18 }}></i>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
