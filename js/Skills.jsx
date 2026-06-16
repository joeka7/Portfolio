/* Skills — UI kit module (loaded via babel; React is global UMD) */
(function(){
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const { Icon, SKILLS, EXPERIENCE } = window;

function Skills() {
  const { SectionLabel, SkillCard } = window.YoussefKaramDesignSystem_87aa67;
  const Reveal = window.Reveal;
  return (
    <section id="skills" style={{ position: 'relative', padding: '0 0 var(--section-gap)' }}>
      <div style={{ width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <Reveal><SectionLabel index={3} eyebrow="Capabilities" title="The toolkit." style={{ marginBottom: 'var(--space-12)' }} /></Reveal>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {SKILLS.map((s, i) => {
            const IconC = Icon[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 4) * 70}>
                <SkillCard icon={<IconC size={22} />} title={s.title} description={s.desc} style={{ height: '100%' }} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { SectionLabel, TimelineItem } = window.YoussefKaramDesignSystem_87aa67;
  const Reveal = window.Reveal;
  return (
    <section id="experience" style={{ position: 'relative', padding: 'var(--section-gap) 0', background: 'var(--bg-floor)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--vignette)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <Reveal><SectionLabel index={4} eyebrow="Journey" title="Where I've been." align="center" style={{ alignItems: 'center', marginBottom: 'var(--space-16)' }} /></Reveal>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <TimelineItem role={e.role} org={e.org} period={e.period} current={e.current} last={e.last}>
                {e.body}
              </TimelineItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') Object.assign(window, { Skills, Experience });

})();
