import teamPhoto from '../../assets/photos/team.jpg';

export default function About() {
  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 52, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', color: '#0f172a' }}>United Community Foundation</h2>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          United Community Foundation (UCF) is a nonprofit organization committed to bridge the gap in access to essential health and educational resources for underserved communities. Guided by a strong belief in equity and social justice, we empower individuals and families facing barriers such as low income, lack of insurance, or limited access to quality care. Our goal is simple yet powerful to ensure that every person, regardless of their background or financial circumstances, can lead a healthy and fulfilling life.
        </p>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          At UCF, we hold ourselves to the highest standards of care and compassion. We never lower our quality of service just because someone cannot pay. Instead, we strive to deliver the same level of respect, professionalism, and excellence that every human being deserves. Our dedicated team brings passion, expertise, and empathy to every interaction, ensuring that those we serve feel valued, supported, and empowered.
        </p>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          &ldquo;United&rdquo; is more than just our name, it&rsquo;s the heart of who we are. By joining hands with partners, volunteers, and communities, we turn shared vision into tangible impact. Together, we transform challenges into opportunities, raise awareness about health and well-being, and nurture families toward a brighter, healthier tomorrow.
        </p>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: '#475569' }}>
          UCF actively promotes preventive and primary healthcare services to improve the overall health outcomes of the communities we serve. Our programs focus on early detection, education, and access to care, ensuring that individuals receive timely and comprehensive services in accordance with Texas and federal health regulations. By aligning our operations with recognized public health standards, we safeguard both the quality of care and the dignity of every patient who walks through our doors.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 110 }}>
        <div style={{ height: 220, borderRadius: 20, overflow: 'hidden' }}>
          <img src={teamPhoto} alt="United Community Foundation team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ background: '#f0f6f7', borderRadius: 20, padding: 26 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Vision</div>
          <div style={{ fontSize: 14, lineHeight: 1.65, color: '#334155' }}>Empower and strengthen underserved communities through access to resources and information</div>
        </div>
        <div style={{ background: '#2D5A61', color: '#fff', borderRadius: 20, padding: 26 }}>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Mission</div>
          <div style={{ fontSize: 14, lineHeight: 1.65, color: '#e7f1f2' }}>To explore, connect, educate, and provide quality health and educational opportunities to underserved communities in Texas.</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 20, padding: 26 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Goal</div>
          <div style={{ fontSize: 14, lineHeight: 1.65, color: '#475569' }}>To improve the quality of life of low-income and underserved communities.</div>
        </div>
      </div>
    </div>
  );
}
