import { useState } from 'react';

const TOPICS = [
  'Medical services',
  'Dental services',
  'Title V (children under 21)',
  'Primary Health Care Program',
  'Family Planning Program',
  'Social services',
  'Something else',
];

const fieldStyle = { padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 10, fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#0f172a' };
const labelStyle = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13.5, fontWeight: 700, color: '#475569' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: TOPICS[0], message: '' });
  const [sent, setSent] = useState(false);

  const field = (key) => (e) => setForm((s) => ({ ...s, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="ucf-in" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 44, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 20, padding: 26, display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 46, height: 46, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94a3b8' }}>Phone</div>
            <a href="tel:2818535555" style={{ fontSize: 20.5, fontWeight: 800, color: '#0f172a' }}>+1 (281) 853-5555</a>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 20, padding: 26, display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 46, height: 46, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94a3b8' }}>Email</div>
            <a href="mailto:info@ucftexas.org" style={{ fontSize: 20.5, fontWeight: 800, color: '#0f172a' }}>info@ucftexas.org</a>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 20, padding: 26, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 46, height: 46, borderRadius: 999, background: '#f0f6f7', color: '#2D5A61', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#94a3b8' }}>Address</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', lineHeight: 1.5 }}>12425 West Airport Blvd, Unit 205<br />Sugar Land, Texas 77478</div>
          </div>
        </div>
        <div style={{ height: 220, borderRadius: 20, overflow: 'hidden' }}>
          <iframe
            title="United Community Foundation location"
            src="https://www.google.com/maps?q=12425+West+Airport+Blvd+Unit+205+Sugar+Land+TX+77478&output=embed"
            style={{ width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <form data-reveal onSubmit={submit} style={{ background: '#fff', border: '1px solid #eceadf', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 23.5, fontWeight: 800, color: '#0f172a' }}>Send us a message</div>
        {sent && (
          <div style={{ padding: '16px 18px', borderRadius: 14, background: '#f0f6f7', border: '1px solid #d9e9ea', color: '#1e3d42', fontSize: 15, fontWeight: 600 }}>
            <i className="fas fa-check-circle" style={{ marginRight: 8, color: '#2D5A61' }}></i>
            Thank you. A care coordinator will follow up within one business day.
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <label style={labelStyle}>
            Full name
            <input value={form.name} onChange={field('name')} placeholder="Jane Doe" style={fieldStyle} />
          </label>
          <label style={labelStyle}>
            Phone
            <input value={form.phone} onChange={field('phone')} placeholder="(281) 000-0000" style={fieldStyle} />
          </label>
        </div>
        <label style={labelStyle}>
          Email
          <input value={form.email} onChange={field('email')} placeholder="you@email.com" style={fieldStyle} />
        </label>
        <label style={labelStyle}>
          What do you need help with?
          <select value={form.topic} onChange={field('topic')} style={{ ...fieldStyle, background: '#fff' }}>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label style={labelStyle}>
          Message
          <textarea value={form.message} onChange={field('message')} rows={4} placeholder="Tell us a little about your situation." style={{ ...fieldStyle, resize: 'vertical' }} />
        </label>
        <button type="submit" style={{ padding: '14px 24px', border: 'none', borderRadius: 999, background: '#2D5A61', color: '#fff', fontFamily: "'Figtree',sans-serif", fontSize: 15.5, fontWeight: 700, cursor: 'pointer' }}>
          Send message
        </button>
        <div style={{ fontSize: 13, color: '#94a3b8' }}>This is a design prototype — submissions are not delivered anywhere yet.</div>
      </form>
    </div>
  );
}
