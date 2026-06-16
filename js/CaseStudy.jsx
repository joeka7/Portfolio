/* CaseStudy — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon } = window;

const DETAIL = {
  'Everlast Wellness Store': {
    year: '2024', role: 'Lead Developer', client: 'Everlast Wellness',
    summary: 'A full WooCommerce storefront for a wellness brand — custom checkout, payment integration, and a catalog built to scale across hundreds of SKUs.',
    metrics: [{ v: '30%', l: 'Faster load' }, { v: '40%', l: 'More engagement' }, { v: '100s', l: 'Products' }],
    work: ['Custom WooCommerce checkout flow with integrated payments', 'Catalog architecture + product upload pipeline', 'Performance pass: caching, image optimization, Core Web Vitals', 'Ongoing security hardening and maintenance'],
  },
  'Al Jameela Club': {
    year: '2023', role: 'Web Developer', client: 'Al Jameela Club',
    summary: 'Beauty & wellness membership platform — membership programs, service pages, and customer engagement features optimized for conversions.',
    metrics: [{ v: '5+', l: 'Pages built' }, { v: '↑', l: 'Membership conversions' }, { v: '100%', l: 'Responsive' }],
    work: ['Developed and maintained the full website structure', 'Membership programs and service pages', 'Responsive design across 5+ pages improving accessibility', 'UX optimization to improve membership conversions'],
  },
  default: {
    year: '2023', role: 'Web Developer', client: '—',
    summary: 'A custom WordPress build focused on performance, responsive design, and a clean content architecture.',
    metrics: [{ v: '25%', l: 'Better SEO' }, { v: '30%', l: 'Faster load' }, { v: '5+', l: 'Templates' }],
    work: ['Custom theme + responsive layout system', 'SEO-friendly, mobile-first page architecture', 'Performance optimization and cross-browser QA'],
  },
};

function CaseStudy({ project, onBack }) {
  const { Button, Badge, TechPill } = window.YoussefKaramDesignSystem_87aa67;
  const p = project || { title: 'Everlast Wellness Store', desc: DETAIL['Everlast Wellness Store'].summary, tags: ['WordPress', 'WooCommerce', 'PHP'], href: 'https://everlastwellness.store' };
  const d = DETAIL[p.title] || DETAIL.default;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }); }, [project]);

  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg-base)' }}>
      {/* top bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 20, display: 'flex', justifyContent: 'center', padding: '18px 16px', background: 'linear-gradient(180deg, var(--bg-base), transparent)' }}>
        <div style={{ width: '100%', maxWidth: 'var(--container-max)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-pill)', padding: '9px 16px 9px 13px', cursor: 'pointer', color: 'var(--text-body)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500 }}>
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Icon.arrowRight size={15} /></span> Back
          </button>
          <Button size="sm" variant="secondary" as="a" href={p.href} target="_blank" iconRight={<Icon.external size={15} />}>Visit live site</Button>
        </div>
      </div>

      {/* hero */}
      <header style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px var(--container-pad) 56px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {p.tags.map((t, i) => <TechPill key={i} active={i === 0}>{t}</TechPill>)}
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--text-d1)', lineHeight: 0.95, letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)', maxWidth: '18ch' }}>{p.title}</h1>
        <p style={{ margin: '24px 0 0', maxWidth: '60ch', fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)' }}>{d.summary}</p>

        {/* meta strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px, 5vw, 64px)', marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--divider)' }}>
          {[{ k: 'Year', v: d.year }, { k: 'Role', v: d.role }, { k: 'Client', v: d.client }].map((m) => (
            <div key={m.k} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{m.k}</span>
              <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>{m.v}</span>
            </div>
          ))}
        </div>
      </header>

      {/* hero media */}
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ position: 'relative', aspectRatio: '16 / 8', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'linear-gradient(135deg, var(--ink-750), var(--ink-900))', border: '1px solid var(--border)', boxShadow: 'var(--elev-pop)' }}>
          {p.image && <img src={p.image} alt={p.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.92)' }} onError={(e) => { e.target.style.display = 'none'; }} />}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--dot-grid)', backgroundSize: 'var(--dot-size) var(--dot-size)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'var(--spotlight-soft)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: 'var(--text-faint)', letterSpacing: '-0.02em', textAlign: 'center', padding: '0 8%' }}>{p.title}</span>
          </div>
        </div>
      </div>

      {/* body */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-gap) var(--container-pad)' }}>
        <div className="cs-grid" style={{ display: 'grid', gridTemplateColumns: '0.4fr 0.6fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 90 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>// What I did</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {d.work.map((w, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, padding: '22px 0', borderBottom: '1px solid var(--divider)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-normal)', color: 'var(--text-body)' }}>{w}</span>
              </div>
            ))}
            {/* metrics */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px, 5vw, 56px)', marginTop: 40 }}>
              {d.metrics.map((m) => (
                <div key={m.l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,3.5rem)', lineHeight: 0.95, color: 'var(--text-strong)' }}>{m.v}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* next CTA */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) var(--section-gap)' }}>
        <button onClick={onBack} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: 'clamp(28px, 5vw, 48px)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-2xl)', cursor: 'pointer', boxShadow: 'var(--elev-card)' }}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Back to</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-d3)', color: 'var(--text-strong)' }}>All selected work</span>
          </span>
          <span style={{ width: 56, height: 56, flex: '0 0 56px', borderRadius: '50%', background: 'var(--white)', color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon.arrowRight size={22} /></span>
        </button>
      </div>
    </div>
  );
}

if (typeof window !== 'undefined') window.CaseStudy = CaseStudy;

})();
