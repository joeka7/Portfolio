/* Work — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon, PROJECTS, STACK_MARQUEE } = window;

function Work({ onOpenProject }) {
  const SectionLabelC = window.YoussefKaramDesignSystem_87aa67.SectionLabel;
  const ProjectCardC = window.YoussefKaramDesignSystem_87aa67.ProjectCard;
  const MarqueeC = window.Marquee;
  const RevealC = window.Reveal;

  const filters = ['All', 'WordPress', 'WooCommerce', 'React'];
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()) || (active === 'WooCommerce' && t === 'WooCommerce')));

  return (
    <section id="work" style={{ position: 'relative', padding: 'var(--section-gap) 0 0' }}>
      <div style={{ padding: '0 0 var(--space-20)' }}>
        <MarqueeC items={STACK_MARQUEE} speed={36} />
      </div>

      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <RevealC>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 'var(--space-12)' }}>
            <SectionLabelC index={1} eyebrow="Selected Work" title="Things I've shipped." />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {filters.map((f) => (
                <button key={f} onClick={() => setActive(f)} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em',
                  padding: '8px 15px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                  color: active === f ? 'var(--accent-contrast)' : 'var(--text-muted)',
                  background: active === f ? 'var(--accent)' : 'var(--w-04)',
                  border: `1px solid ${active === f ? 'transparent' : 'var(--border)'}`,
                  transition: 'all var(--dur-fast) var(--ease-out)',
                }}>{f}</button>
              ))}
            </div>
          </div>
        </RevealC>

        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {shown.map((p, i) => (
            <RevealC key={p.title} delay={(i % 2) * 80} style={{ gridColumn: p.featured && active === 'All' ? '1 / -1' : 'auto' }}>
              <ProjectCardC
                index={i + 1}
                title={p.title}
                description={p.desc}
                tags={p.tags}
                featured={p.featured && active === 'All'}
                image={p.image}
                cta="Visit live site"
                onClick={(e) => { e.preventDefault(); onOpenProject?.(p); }}
                href={p.href}
                style={{ height: '100%' }}
              />
            </RevealC>
          ))}
        </div>

        <RevealC style={{ marginTop: 'var(--space-12)', display: 'flex', justifyContent: 'center' }}>
          <a href="https://github.com/joeka7" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', color: 'var(--text-subtle)', textDecoration: 'none', padding: '12px 20px', border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)' }}>
            See more on GitHub <Icon.arrowUpRight size={15} />
          </a>
        </RevealC>
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') window.Work = Work;

})();
