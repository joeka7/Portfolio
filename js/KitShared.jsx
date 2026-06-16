/* KitShared — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const { useState, useEffect, useRef, useMemo, useCallback } = React;

  /* ---- Reveal: rise + fade on scroll into view ---- */
  function Reveal({
    children,
    delay = 0,
    y = 28,
    as = "div",
    style = {},
    ...rest
  }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown(true);
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);
    const Tag = as;
    return (
      <Tag
        ref={ref}
        {...rest}
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : `translateY(${y}px)`,
          transition: `opacity var(--dur-entrance) var(--ease-emphasis) ${delay}ms, transform var(--dur-entrance) var(--ease-emphasis) ${delay}ms`,
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  }

  /* ---- Marquee: infinite horizontal scroll of children ---- */
  function Marquee({ items = [], speed = 32, sep = "/", style = {} }) {
    const row = [...items, ...items];
    return (
      <div
        style={{
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          ...style,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            whiteSpace: "nowrap",
            animation: `ds-marquee ${speed}s linear infinite`,
          }}
        >
          {row.map((it, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(2rem,4vw,3.25rem)",
                  color: "var(--text-muted)",
                  padding: "0 28px",
                  letterSpacing: "-0.02em",
                }}
              >
                {it}
              </span>
              <span
                style={{
                  color: "var(--text-faint)",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem,4vw,3.25rem)",
                }}
              >
                {sep}
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  /* ---- Real content (from résumé + live portfolio) ---- */
  const PROFILE = {
    name: "Youssef Karam",
    role: "Full-Stack Web Developer",
    location: "Cairo, Egypt",
    email: "ykaram599@gmail.com",
    phone: "+20 106 243 5720",
    github: "https://github.com/joeka7",
    linkedin: "https://linkedin.com/in/youssef-karam-li",
    blurb:
      "I build fast, scalable web experiences — custom WordPress themes, WooCommerce storefronts, and performance-tuned front-ends that ship.",
  };

  const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "40", suffix: "%", label: "Engagement Boost" },
    { value: "50", suffix: "%", label: "Faster Load Times" },
  ];

  const PROJECTS = [
    {
      title: "Everlast Wellness Store",
      desc: "Full e-commerce platform with custom checkout and payment integration.",
      tags: ["WordPress", "WooCommerce", "PHP"],
      href: "https://everlastwellness.store",
      image: "./imgs/everlast-store.webp",
      featured: true,
    },
    {
      title: "Evera AI",
      desc: "AI health & wellness platform site with a modern, motion-led design.",
      tags: ["WordPress", "JavaScript", "Custom CSS"],
      href: "https://evera-ai.com",
      image: "./imgs/evera.webp",
    },
    {
      title: "Jozur Cosmetics",
      desc: "Natural beauty e-commerce with product catalog and reviews.",
      tags: ["WordPress", "WooCommerce", "JS"],
      href: "https://jozurcosmetics.com",
      image: "./imgs/jouzr.webp",
    },
    {
      title: "Al Raha Medical Center",
      desc: "Healthcare site with appointment booking and service listings.",
      tags: ["WordPress", "Custom Theme"],
      href: "https://alrahamedicalcenter.com",
      image: "./imgs/alrahamedicalcenter.webp",
    },
    {
      title: "Shiks Store",
      desc: "Online retail store with inventory management and order processing.",
      tags: ["WordPress", "WooCommerce", "JS"],
      href: "https://shiks.store",
      image: "./imgs/shiks.webp",
    },
    {
      title: "Silk & Shine Club",
      desc: "Beauty & wellness membership platform built front-end first.",
      tags: ["HTML", "React", "Custom CSS"],
      href: "https://silkandshineclub.com",
      image: "./imgs/silk-and-shine.webp",
    },
    {
      title: "Al Jameela Club",
      desc: "Beauty & wellness membership platform — membership programs, service pages, and customer engagement features across 5+ responsive pages.",
      tags: ["React", "Custom CSS"],
      href: "https://aljameelaclub.com/",
      image: "./imgs/aljameela-club.webp",
    },
  ];

  const SKILLS = [
    {
      icon: "wand",
      title: "WordPress",
      desc: "Custom themes, plugins, ACF, REST API, Multisite.",
    },
    {
      icon: "cart",
      title: "WooCommerce",
      desc: "Custom checkout, payment integration, extensions.",
    },
    {
      icon: "zap",
      title: "Performance",
      desc: "Core Web Vitals, caching, image optimization.",
    },
    {
      icon: "code",
      title: "PHP",
      desc: "OOP, MVC architecture, MySQL, custom functions.",
    },
    {
      icon: "layout",
      title: "Front-End",
      desc: "HTML5, CSS3, JavaScript ES6+, jQuery, Bootstrap, React.",
    },
    {
      icon: "smartphone",
      title: "Responsive",
      desc: "Mobile-first, cross-browser, Figma/XD to code.",
    },
    {
      icon: "search",
      title: "SEO",
      desc: "On-page SEO, schema markup, technical SEO.",
    },
    {
      icon: "wrench",
      title: "Tooling",
      desc: "Git, cPanel, Elementor, WPML, page builders.",
    },
  ];

  const EXPERIENCE = [
    {
      role: "Web Developer",
      org: "Everlast Wellness",
      period: "Dec 2023 – Present",
      current: true,
      body: "Built and manage the full WooCommerce store; cut load times up to 30% and lifted engagement 40%. Shipped 3 custom themes and 5 plugins across the wellness brand portfolio.",
    },
    {
      role: "Freelance Web Developer",
      org: "Various clients",
      period: "2021 – 2023",
      body: "Delivered 8+ healthcare, beauty, and e-commerce websites — Professorsa, JOZUR, Shiks, Green Concept, Root Medical — focused on responsiveness and UX.",
    },
    {
      role: "B.Sc. Management Information Systems",
      org: "ElMotatawera Academy",
      period: "2019 – 2023",
      last: true,
      body: "Graduated with a Good cumulative grade; graduation project graded A.",
    },
  ];

  const STACK_MARQUEE = [
    "WordPress",
    "WooCommerce",
    "PHP",
    "JavaScript",
    "React",
    "MySQL",
    "SEO",
    "Performance",
  ];

  if (typeof window !== "undefined")
    Object.assign(window, {
      Reveal,
      Marquee,
      PROFILE,
      STATS,
      PROJECTS,
      SKILLS,
      EXPERIENCE,
      STACK_MARQUEE,
    });
})();
