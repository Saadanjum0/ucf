// Wraps a page's real content, blurred and non-interactive, with a
// "Coming Soon" card on top — gives a sense of what's coming without
// exposing unfinished copy/interaction.
export default function ComingSoon({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        aria-hidden="true"
        style={{
          filter: 'blur(6px)',
          transform: 'scale(1.02)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(250,249,246,.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #eceadf',
            borderRadius: 24,
            padding: '40px 44px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            textAlign: 'center',
            maxWidth: 420,
            boxShadow: '0 25px 60px -20px rgba(45,90,97,.35)',
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              background: '#f0f6f7',
              color: '#2D5A61',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
          >
            <i className="fas fa-hourglass-half"></i>
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a' }}>Coming Soon</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.6, color: '#475569' }}>
            This page is being finished up. Check back soon, or reach out and we&rsquo;ll help directly.
          </div>
        </div>
      </div>
    </div>
  );
}
