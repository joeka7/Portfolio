/* Contact — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon, PROFILE } = window;

function Contact() {
  const { Button, Input, Textarea, Badge } = window.YoussefKaramDesignSystem_87aa67;
  const Reveal = window.Reveal;
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3200); };
  const copyEmail = () => { navigator.clipboard?.writeText(PROFILE.email); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  const methods = [
    { icon: 'github', label: 'GitHub', val: 'github.com/joeka7', href: PROFILE.github },
    { icon: 'linkedin', label: 'LinkedIn', val: 'youssef-karam-li', href: PROFILE.linkedin },
    { icon: 'phone', label: 'Phone', val: PROFILE.phone, href: 'tel:+201062435720' },
  ];

  return (
    <section id="contact" style={{ position: 'relative', padding: 'var(--section-gap) 0 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 480, background: 'var(--spotlight-top)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <span style={{ display: 'inline-block', marginBottom: 18 }}><Badge variant="available" dot glass>Available for projects</Badge></span>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--text-hero)', lineHeight: 0.92, letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)' }}>
            Let's build something<br /><span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>worth shipping.</span>
          </h2>
          <p style={{ margin: '22px auto 0', maxWidth: '44ch', fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)' }}>
            Have a project, an idea, or a role in mind? I'm always open to a conversation.
          </p>
        </Reveal>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 'clamp(28px, 5vw, 64px)', alignItems: 'start' }}>
          {/* form */}
          <Reveal>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 'var(--pad-card-lg)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--elev-card)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <Input label="Name" placeholder="Your name" required />
                <Input label="Email" type="email" placeholder="you@studio.com" iconLeft={<Icon.mail size={17} />} required />
              </div>
              <Textarea label="Project details" rows={5} placeholder="Tell me about what you're building…" required style={{ height: '200px' }} />
              <Button type="submit" variant="primary" size="lg" fullWidth iconRight={sent ? <Icon.check size={17} /> : <Icon.arrowRight size={17} />}>
                {sent ? 'Message sent — talk soon' : 'Send message'}
              </Button>
            </form>
          </Reveal>

          {/* direct */}
          <Reveal delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <button onClick={copyEmail} style={{ textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--highlight-soft)' }}>
              <span style={{ width: 44, height: 44, flex: '0 0 44px', borderRadius: 'var(--radius-md)', background: 'var(--w-04)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-strong)' }}><Icon.mail size={20} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{copied ? 'Copied to clipboard' : 'Email — click to copy'}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', color: 'var(--text-strong)', fontWeight: 500 }}>{PROFILE.email}</span>
              </span>
              <span style={{ marginLeft: 'auto', color: 'var(--text-faint)' }}>{copied ? <Icon.check size={18} /> : <Icon.copy size={18} />}</span>
            </button>

            <a href="./Youssef_Karam_Resume.pdf" download style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', boxShadow: 'var(--highlight-soft)', transition: 'border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
              <span style={{ width: 40, height: 40, flex: '0 0 40px', borderRadius: 'var(--radius-md)', background: 'var(--w-04)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-strong)' }}><Icon.arrowDown size={18} /></span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Résumé</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>Download CV</span>
              </span>
              <span style={{ marginLeft: 'auto', color: 'var(--text-faint)' }}><Icon.arrowDown size={16} /></span>
            </a>

            {methods.map((m) => {
              const IconC = Icon[m.icon];
              return (
                <a key={m.label} href={m.href} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', boxShadow: 'var(--highlight-soft)', transition: 'border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
                  <span style={{ width: 40, height: 40, flex: '0 0 40px', borderRadius: 'var(--radius-md)', background: 'var(--w-04)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-strong)' }}><IconC size={18} /></span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{m.label}</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{m.val}</span>
                  </span>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-faint)' }}><Icon.arrowUpRight size={16} /></span>
                </a>
              );
            })}
          </Reveal>
        </div>

        {/* footer */}
        <footer style={{ marginTop: 'var(--section-gap)', borderTop: '1px solid var(--divider)', padding: '36px 0', display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--white)', color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 14 }}>Y</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>© 2026 Youssef Karam — built with care &amp; code.</span>
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text-faint)' }}>CAIRO, EGYPT · {PROFILE.role.toUpperCase()}</span>
        </footer>
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') window.Contact = Contact;

})();
