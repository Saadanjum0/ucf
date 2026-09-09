// Generic placeholder content for pages with nothing real to blur yet
// (History, Board, Locations, Notice of Privacy, Educational Programs).
export default function Skeleton() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ height: 26, width: '60%', background: '#eceadf', borderRadius: 8 }} />
      <div style={{ height: 16, width: '90%', background: '#eceadf', borderRadius: 8 }} />
      <div style={{ height: 16, width: '80%', background: '#eceadf', borderRadius: 8 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 20 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ height: 180, background: '#f0f6f7', borderRadius: 20 }} />
        ))}
      </div>
    </div>
  );
}
