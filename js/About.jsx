/* About — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon, PROFILE } = window;

function About() {
  const { SectionLabel } = window.YoussefKaramDesignSystem_87aa67;
  const Reveal = window.Reveal;

  const approach = [
    { k: 'Performance-first', v: 'Up to 50% faster loads via Core Web Vitals, caching, and image optimization.' },
    { k: 'Pixel-faithful', v: 'I turn Figma/XD designs into responsive, cross-browser front-ends.' },
    { k: 'Commerce-ready', v: 'Custom WooCommerce checkouts, payment integrations, and extensions.' },
  ];

  return (
    <section id="about" style={{ position: 'relative', padding: 'var(--section-gap) 0' }}>
      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(32px, 6vw, 88px)', alignItems: 'center' }}>
          {/* portrait panel */}
          <Reveal style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'linear-gradient(160deg, var(--ink-750), var(--ink-900))', border: '1px solid var(--border)', boxShadow: 'var(--elev-pop)' }}>
              <img src="./imgs/me.webp" alt="Youssef Karam" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.92)', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--dot-grid)', backgroundSize: 'var(--dot-size) var(--dot-size)', opacity: 0.6 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--spotlight-soft)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'var(--text-faint)', letterSpacing: '-0.03em', opacity: 0 }}>YK</span>
              </div>
              {/* floating chip */}
              <div style={{ position: 'absolute', left: 18, bottom: 18, right: 18, display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--glass-bg-strong)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--positive)', boxShadow: '0 0 10px var(--positive)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-body)' }}>Currently @ Everlast Wellness</span>
              </div>
            </div>
          </Reveal>

          {/* narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <Reveal><SectionLabel index={2} eyebrow="About" title="Code that earns its keep." /></Reveal>
            <Reveal delay={80}>
              <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 'var(--lh-normal)', color: 'var(--text-body)', maxWidth: '48ch' }}>
                I'm <strong style={{ color: 'var(--text-strong)', fontWeight: 600 }}>Youssef Karam</strong>, a full-stack web developer with 3+ years building and maintaining 15+ custom WordPress sites, themes, and plugins — from healthcare platforms to high-traffic WooCommerce stores.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderTop: '1px solid var(--divider)' }}>
                {approach.map((a) => (
                  <div key={a.k} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, padding: '18px 0', borderBottom: '1px solid var(--divider)' }} className="approach-row">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--text-strong)', textTransform: 'uppercase' }}>{a.k}</span>
                    <span style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)' }}>{a.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') window.About = About;

})();
