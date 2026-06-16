/* Nav — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon } = window;

function Nav({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { Badge, Button } = window.YoussefKaramDesignSystem_87aa67;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Journey', id: 'experience' },
  ];

  const go = (id) => { setOpen(false); onNavigate?.(id); };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center', padding: scrolled ? '14px 16px' : '22px 16px', transition: 'padding var(--dur-base) var(--ease-out)', pointerEvents: 'none' }}>
      <nav style={{
        pointerEvents: 'auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        width: '100%', maxWidth: 'var(--container-max)',
        height: 60, padding: '0 12px 0 22px',
        background: scrolled ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: scrolled ? 'var(--elev-pop)' : 'var(--highlight-top)',
        transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      }}>
        {/* brand */}
        <button onClick={() => go('top')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img src="./imgs/me.webp" alt="Youssef Karam" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 15, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>Youssef Karam</span>
        </button>

        {/* links (desktop) */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="nav-link" style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 'var(--fw-medium)',
              color: 'var(--text-muted)', padding: '8px 14px', borderRadius: 'var(--radius-sm)',
              transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-strong)'; e.currentTarget.style.background = 'var(--w-06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'none'; }}
            >{l.label}</button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="nav-cta">
            <Button size="sm" variant="primary" iconRight={<Icon.arrowUpRight size={15} />} onClick={() => go('contact')}>Let's talk</Button>
          </span>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)} style={{ display: 'none', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', background: 'var(--w-06)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-strong)', cursor: 'pointer' }}>
            {open ? <Icon.close size={18} /> : <Icon.menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      {open && (
        <div style={{ pointerEvents: 'auto', position: 'fixed', top: 84, left: 16, right: 16, zIndex: 99 }}>
          <div style={{ background: 'var(--glass-bg-strong)', backdropFilter: 'var(--glass-blur-lg)', WebkitBackdropFilter: 'var(--glass-blur-lg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)', padding: 12, boxShadow: 'var(--elev-modal)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[...links, { label: "Let's talk", id: 'contact' }].map((l) => (
              <button key={l.id} onClick={() => go(l.id)} style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 'var(--fw-medium)', color: 'var(--text-body)', padding: '14px 16px', borderRadius: 'var(--radius-md)' }}>{l.label}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

if (typeof window !== 'undefined') window.Nav = Nav;

})();
