export default function TopBar() {
  return (
    <div style={{ background: '#1e3d42', color: '#d9e9ea', fontSize: 12, padding: '9px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fas fa-map-marker-alt" style={{ color: '#4a8d96' }}></i> 12425 West Airport Blvd, Unit 205, Sugar Land, TX 77478
        </span>
        <a href="tel:2818535555" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#d9e9ea' }}>
          <i className="fas fa-phone-alt" style={{ color: '#4a8d96' }}></i> (281) 853-5555
        </a>
        <a href="mailto:info@ucftexas.org" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#d9e9ea' }}>
          <i className="fas fa-envelope" style={{ color: '#4a8d96' }}></i> info@ucftexas.org
        </a>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          <i className="fas fa-clock" style={{ color: '#4a8d96' }}></i> Mon–Fri: 8AM – 5PM
        </span>
      </div>
    </div>
  );
}
