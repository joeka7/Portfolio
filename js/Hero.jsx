/* Hero — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon, PROFILE, STATS } = window;

function Hero({ onNavigate }) {
  const { Badge, Button, StatBlock } = window.YoussefKaramDesignSystem_87aa67;
  const words = ['beautifully.', 'fast.', 'to scale.', 'with care.'];
  const [wi, setWi] = useState(0);
  const [mx, setMx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWi((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const onMove = (e) => setMx((e.clientX / window.innerWidth - 0.5) * 2);
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px var(--container-pad) 60px', overflow: 'hidden' }}>
      {/* ambience */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--spotlight-top)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--dot-grid)', backgroundSize: 'var(--dot-size) var(--dot-size)', opacity: 0.5, maskImage: 'radial-gradient(70% 60% at 50% 30%, #000, transparent)', WebkitMaskImage: 'radial-gradient(70% 60% at 50% 30%, #000, transparent)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 48, alignItems: 'center' }} className="hero-grid">
        {/* left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', animation: 'ds-rise var(--dur-entrance) var(--ease-emphasis) both' }}>
            <Badge variant="available" dot glass>Available for projects</Badge>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
              <Icon.mapPin size={13} /> {PROFILE.location}
            </span>
          </div>

          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--text-hero)', lineHeight: 0.9, letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)', animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 80ms both' }}>
            <span style={{ display: 'block' }}>Building the web,</span>
            <span style={{ display: 'block', position: 'relative', minHeight: '1em' }}>
              {words.map((w, i) => (
                <span key={i} style={{ position: i === wi ? 'relative' : 'absolute', left: 0, top: 0, fontStyle: 'italic', color: 'var(--text-muted)', opacity: i === wi ? 1 : 0, transform: i === wi ? 'translateY(0)' : 'translateY(0.3em)', transition: 'opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out)' }}>{w}</span>
              ))}
            </span>
          </h1>

          <p style={{ margin: 0, maxWidth: '46ch', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)', animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 160ms both' }}>
            {PROFILE.role} based in Cairo. {PROFILE.blurb}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 240ms both' }}>
            <Button size="lg" variant="primary" iconRight={<Icon.arrowRight size={17} />} onClick={() => onNavigate?.('work')}>View Selected Work</Button>
            <Button size="lg" variant="secondary" iconLeft={<Icon.github size={17} />} as="a" href={PROFILE.github} target="_blank">GitHub</Button>
            <Button size="lg" variant="secondary" iconLeft={<Icon.arrowDown size={17} />} as="a" href="./Youssef_Karam_Resume.pdf" download>Download CV</Button>
          </div>

          {/* stat strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px, 5vw, 56px)', marginTop: 14, paddingTop: 28, borderTop: '1px solid var(--divider)', animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 320ms both' }}>
            {STATS.map((s, i) => <StatBlock key={i} value={s.value} suffix={s.suffix || ''} label={s.label} />)}
          </div>
        </div>

        {/* right — code card */}
        <div className="hero-aside" style={{ display: 'flex', justifyContent: 'flex-end', transform: `translateX(${mx * 6}px)`, transition: 'transform var(--dur-slow) var(--ease-out)' }}>
          <div style={{ width: '100%', maxWidth: 360, background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--elev-pop)', overflow: 'hidden', animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 200ms both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '14px 16px', borderBottom: '1px solid var(--divider)' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--ink-600)' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--ink-600)' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--ink-600)' }} />
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>developer.js</span>
            </div>
            <pre style={{ margin: 0, padding: '18px 18px 22px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.85, color: 'var(--text-body)', whiteSpace: 'pre-wrap' }}>
<span style={{ color: 'var(--text-faint)' }}>const</span>{' '}<span style={{ color: 'var(--text-strong)' }}>dev</span> = {'{'}{'\\n'}
{'  '}name: <span style={{ color: 'var(--text-strong)' }}>'Youssef Karam'</span>,{'\\n'}
{'  '}role: <span style={{ color: 'var(--text-strong)' }}>'Full-Stack Dev'</span>,{'\\n'}
{'  '}stack: [<span style={{ color: 'var(--text-strong)' }}>'PHP'</span>, <span style={{ color: 'var(--text-strong)' }}>'JS'</span>,{'\\n'}
{'          '}<span style={{ color: 'var(--text-strong)' }}>'WordPress'</span>],{'\\n'}
{'  '}ships: <span style={{ color: 'var(--positive)' }}>true</span>,{'\\n'}
{'}'};</pre>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <button onClick={() => onNavigate?.('work')} style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)' }} className="scroll-cue">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <span style={{ animation: 'ds-bob 1.8s var(--ease-in-out) infinite' }}><Icon.arrowDown size={16} /></span>
      </button>
      <style>{`@keyframes ds-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}`}</style>
    </section>
  );
}

if (typeof window !== 'undefined') window.Hero = Hero;

})();
