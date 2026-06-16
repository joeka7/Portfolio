/* @ds-bundle: {"format":3,"namespace":"YoussefKaramDesignSystem_87aa67","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"},{"name":"SectionLabel","sourcePath":"components/portfolio/SectionLabel.jsx"},{"name":"SkillCard","sourcePath":"components/portfolio/SkillCard.jsx"},{"name":"StatBlock","sourcePath":"components/portfolio/StatBlock.jsx"},{"name":"TechPill","sourcePath":"components/portfolio/TechPill.jsx"},{"name":"TimelineItem","sourcePath":"components/portfolio/TimelineItem.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"d76a9eb41b72","components/core/Badge.jsx":"a372db31feae","components/core/Button.jsx":"8767e64706ba","components/core/GlassPanel.jsx":"d58ff15f4a8d","components/core/IconButton.jsx":"a353709749e0","components/forms/Input.jsx":"a7c53f363002","components/forms/Textarea.jsx":"cde4dbb7496a","components/portfolio/ProjectCard.jsx":"68609284e976","components/portfolio/SectionLabel.jsx":"a5f56e1c0118","components/portfolio/SkillCard.jsx":"f6023e32841a","components/portfolio/StatBlock.jsx":"321fb4ac1bd4","components/portfolio/TechPill.jsx":"ea1fa4c93700","components/portfolio/TimelineItem.jsx":"647bda4cc57f","ui_kits/portfolio/About.jsx":"b8a58a362813","ui_kits/portfolio/CaseStudy.jsx":"1825680f5b77","ui_kits/portfolio/Contact.jsx":"77d20a9f87be","ui_kits/portfolio/Hero.jsx":"6c17c44af1f6","ui_kits/portfolio/Icons.jsx":"e4ab4767eb4e","ui_kits/portfolio/KitShared.jsx":"eb6e99999dea","ui_kits/portfolio/Nav.jsx":"ef8f4bb88371","ui_kits/portfolio/Skills.jsx":"bbfce97f21e6","ui_kits/portfolio/Work.jsx":"9f2777f103f5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YoussefKaramDesignSystem_87aa67 = window.YoussefKaramDesignSystem_87aa67 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — a circular (or rounded) image/initials token with an optional
 * glass ring and status dot.
 */
function Avatar({
  src = null,
  initials = '',
  size = 48,
  shape = 'circle',
  ring = false,
  status = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-hi)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.36,
      letterSpacing: '-0.01em',
      border: ring ? '1px solid var(--glass-border)' : '1px solid var(--border)',
      boxShadow: ring ? '0 0 0 4px var(--w-04), var(--highlight-soft)' : 'var(--highlight-soft)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: size * 0.26,
      height: size * 0.26,
      minWidth: 9,
      minHeight: 9,
      borderRadius: '50%',
      background: status === 'online' ? 'var(--positive)' : 'var(--text-faint)',
      border: '2px solid var(--bg-base)',
      boxShadow: status === 'online' ? '0 0 8px var(--positive)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/label pill. Includes an optional pulsing dot
 * for the signature "Available for projects" indicator.
 */
function Badge({
  children,
  variant = 'neutral',
  dot = false,
  glass = false,
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      color: 'var(--text-muted)',
      border: 'var(--border)',
      bg: 'var(--w-04)',
      dotColor: 'var(--text-subtle)'
    },
    available: {
      color: 'var(--text-body)',
      border: 'var(--border)',
      bg: 'var(--w-04)',
      dotColor: 'var(--positive)'
    },
    positive: {
      color: 'var(--positive)',
      border: 'rgba(95,208,138,0.3)',
      bg: 'var(--positive-dim)',
      dotColor: 'var(--positive)'
    },
    strong: {
      color: 'var(--accent-contrast)',
      border: 'transparent',
      bg: 'var(--accent)',
      dotColor: 'var(--accent-contrast)'
    }
  };
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 13px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: v.color,
      background: glass ? 'var(--glass-bg)' : v.bg,
      border: `1px solid ${glass ? 'var(--glass-border)' : v.border}`,
      borderRadius: 'var(--radius-pill)',
      backdropFilter: glass ? 'var(--glass-blur)' : 'none',
      WebkitBackdropFilter: glass ? 'var(--glass-blur)' : 'none',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: v.dotColor,
      boxShadow: `0 0 8px ${v.dotColor}`,
      animation: variant === 'available' ? 'ds-pulse-dot 2.4s var(--ease-in-out) infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the primary action element.
 * Monochrome system: `primary` is solid white-on-ink, `secondary` is glass,
 * `ghost` is text-only. Motion: subtle lift + press-scale on the signature ease.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  loading = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 13,
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 46,
      fontSize: 14,
      gap: 9,
      radius: 'var(--radius-sm)'
    },
    lg: {
      padding: '0 28px',
      height: 56,
      fontSize: 15,
      gap: 11,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const isDisabled = disabled || loading;
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent',
      boxShadow: hover ? '0 8px 30px rgba(255,255,255,0.14)' : '0 2px 10px rgba(0,0,0,0.4)'
    },
    secondary: {
      background: hover ? 'var(--surface-hover)' : 'var(--glass-bg)',
      color: 'var(--text-strong)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--highlight-top)'
    },
    ghost: {
      background: hover ? 'var(--w-06)' : 'transparent',
      color: hover ? 'var(--text-strong)' : 'var(--text-muted)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    outline: {
      background: hover ? 'var(--w-04)' : 'transparent',
      color: 'var(--text-strong)',
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border)'}`,
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === 'button' ? isDisabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '-0.01em',
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.45 : 1,
      transform: press && !isDisabled ? 'scale(var(--press-scale))' : hover && !isDisabled ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), background-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'ds-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ds-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassPanel — a floating frosted surface. The base container for nav bars,
 * floating chips, modals, and feature cards. Hairline border + inset highlight
 * + backdrop blur.
 */
function GlassPanel({
  children,
  strong = false,
  radius = 'lg',
  pad = true,
  hairline = false,
  style = {},
  ...rest
}) {
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    pill: 'var(--radius-pill)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      background: strong ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      borderRadius: radii[radius] || radii.lg,
      boxShadow: 'var(--elev-card)',
      padding: pad ? 'var(--pad-card)' : 0,
      overflow: 'hidden',
      ...style
    }
  }), hairline && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: '50%',
      background: 'var(--hairline-grad)',
      pointerEvents: 'none',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — a square/circular control holding a single icon.
 * Used for nav toggles, social links, card actions.
 */
function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  shape = 'rounded',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: 34,
    md: 42,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    secondary: {
      background: hover ? 'var(--surface-hover)' : 'var(--glass-bg)',
      color: 'var(--text-strong)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)'
    },
    ghost: {
      background: hover ? 'var(--w-06)' : 'transparent',
      color: hover ? 'var(--text-strong)' : 'var(--text-muted)',
      border: '1px solid transparent'
    },
    solid: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: shape === 'circle' ? '50%' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: 'var(--highlight-soft)',
      transform: press ? 'scale(var(--press-scale))' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — a single-line text field with floating focus glow and optional
 * leading icon. Dark, hairline-bordered, glassy on focus.
 */
function Input({
  label = null,
  hint = null,
  iconLeft = null,
  error = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      height: 50,
      background: focus ? 'var(--surface-hi)' : 'var(--surface)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--glow-focus)' : 'var(--highlight-soft)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)'
    }
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Textarea — multi-line field matching Input's treatment. Used in the contact
 * section ("Tell me about your project").
 */
function Textarea({
  label = null,
  hint = null,
  rows = 5,
  error = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      resize: 'vertical',
      padding: '14px',
      background: focus ? 'var(--surface-hi)' : 'var(--surface)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--glow-focus)' : 'var(--highlight-soft)',
      color: 'var(--text-strong)',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-normal)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out)'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the mono eyebrow + oversized serif title pattern that opens
 * every section ("// Selected Work" → "Featured Work").
 */
function SectionLabel({
  eyebrow,
  title,
  index = null,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: 'var(--border-strong)'
    }
  }), eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--text-d1)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      maxWidth: '16ch'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SkillCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * SkillCard — a glass tile pairing an icon with a skill title and a short
 * capability list. Hover reveals a faint top spotlight + lift.
 */
function SkillCard({
  icon = null,
  title,
  description,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 'var(--pad-card)',
      background: 'var(--surface)',
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--elev-card)' : 'var(--highlight-soft)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 120,
      background: 'var(--spotlight-soft)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)',
      pointerEvents: 'none'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--w-04)',
      border: '1px solid var(--border)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--highlight-soft)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-md)',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { SkillCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SkillCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — an oversized metric with a label. Used in the hero strip and
 * experience highlights (3+, 15+, 40%).
 */
function StatBlock({
  value,
  label,
  suffix = '',
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'clamp(2.75rem, 5vw, 4rem)',
      lineHeight: 0.95,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      display: 'inline-flex',
      alignItems: 'baseline'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.45em',
      color: 'var(--text-subtle)',
      marginLeft: 4
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TechPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * TechPill — a small mono chip naming a technology in a stack list.
 */
function TechPill({
  children,
  active = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 11px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.02em',
      color: active ? 'var(--text-strong)' : 'var(--text-subtle)',
      background: active ? 'var(--w-08)' : 'var(--w-02)',
      border: `1px solid ${active ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { TechPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TechPill.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * ProjectCard — the featured-work card. Media area (image or monochrome
 * placeholder) over a glass body with index, tech stack, title, description,
 * and a "Visit" affordance. Hover lifts the card, zooms the media, and slides
 * the arrow.
 */
function ProjectCard({
  title,
  description,
  image = null,
  tags = [],
  index = null,
  href = '#',
  cta = 'Visit Site',
  featured = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--surface)',
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--elev-pop)' : 'var(--elev-card)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: featured ? '16 / 9' : '3 / 2',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--ink-750), var(--ink-850))'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      filter: 'saturate(0.92)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--dot-grid)',
      backgroundSize: 'var(--dot-size) var(--dot-size)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(2rem,5vw,3.5rem)',
      color: 'var(--text-faint)',
      letterSpacing: '-0.02em'
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)',
      opacity: 0.55,
      pointerEvents: 'none'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--text-body)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--glass-bg-strong)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)'
    }
  }, String(index).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 'var(--pad-card)'
    }
  }, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.TechPill, {
    key: i,
    active: i === 0
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      maxWidth: '42ch'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: hover ? 'var(--text-strong)' : 'var(--text-subtle)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, cta, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: hover ? 'translate(3px,-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TimelineItem — a single entry in the experience / journey timeline. Renders a
 * marker on a vertical rail with role, org, period, and optional bullet body.
 */
function TimelineItem({
  role,
  org,
  period,
  children,
  current = false,
  last = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      gap: 20,
      paddingBottom: last ? 0 : 'var(--space-10)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, !last && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      bottom: -8,
      width: 1,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      marginTop: 4,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: current ? 'var(--white)' : 'var(--surface-hi)',
      border: `1px solid ${current ? 'var(--white)' : 'var(--border-strong)'}`,
      boxShadow: current ? '0 0 0 4px var(--w-08), 0 0 14px rgba(255,255,255,0.4)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-md)',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, role), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--text-faint)'
    }
  }, period)), org && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, org), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* About — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon,
    PROFILE
  } = window;

  /**
   * About — editorial two-column block: an oversized serif statement paired with
   * a portrait panel (image-slot placeholder) and a short "approach" list.
   */
  function About() {
    const {
      SectionLabel
    } = window.YoussefKaramDesignSystem_87aa67;
    const Reveal = window.Reveal;
    const approach = [{
      k: 'Performance-first',
      v: 'Up to 50% faster loads via Core Web Vitals, caching, and image optimization.'
    }, {
      k: 'Pixel-faithful',
      v: 'I turn Figma/XD designs into responsive, cross-browser front-ends.'
    }, {
      k: 'Commerce-ready',
      v: 'Custom WooCommerce checkouts, payment integrations, and extensions.'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      style: {
        position: 'relative',
        padding: 'var(--section-gap) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "about-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 'clamp(32px, 6vw, 88px)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '4 / 5',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--ink-750), var(--ink-900))',
        border: '1px solid var(--border)',
        boxShadow: 'var(--elev-pop)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--dot-grid)',
        backgroundSize: 'var(--dot-size) var(--dot-size)',
        opacity: 0.6
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--spotlight-soft)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        color: 'var(--text-faint)',
        letterSpacing: '-0.03em'
      }
    }, "YK")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 18,
        bottom: 18,
        right: 18,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        background: 'var(--glass-bg-strong)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--positive)',
        boxShadow: '0 0 10px var(--positive)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-body)'
      }
    }, "Currently @ Everlast Wellness")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      index: 2,
      eyebrow: "About",
      title: "Code that earns its keep."
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 80
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-lg)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--text-body)',
        maxWidth: '48ch'
      }
    }, "I'm ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, "Youssef Karam"), ", a full-stack web developer with 3+ years building and maintaining 15+ custom WordPress sites, themes, and plugins \u2014 from healthcare platforms to high-traffic WooCommerce stores.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderTop: '1px solid var(--divider)'
      }
    }, approach.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.k,
      style: {
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: 20,
        padding: '18px 0',
        borderBottom: '1px solid var(--divider)'
      },
      className: "approach-row"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.04em',
        color: 'var(--text-strong)',
        textTransform: 'uppercase'
      }
    }, a.k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--text-muted)'
      }
    }, a.v)))))))));
  }
  if (typeof window !== 'undefined') window.About = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
/* CaseStudy — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon
  } = window;

  /* extra detail per project, keyed by title */
  const DETAIL = {
    'Everlast Wellness Store': {
      year: '2024',
      role: 'Lead Developer',
      client: 'Everlast Wellness',
      summary: 'A full WooCommerce storefront for a wellness brand — custom checkout, payment integration, and a catalog built to scale across hundreds of SKUs.',
      metrics: [{
        v: '30%',
        l: 'Faster load'
      }, {
        v: '40%',
        l: 'More engagement'
      }, {
        v: '100s',
        l: 'Products'
      }],
      work: ['Custom WooCommerce checkout flow with integrated payments', 'Catalog architecture + product upload pipeline', 'Performance pass: caching, image optimization, Core Web Vitals', 'Ongoing security hardening and maintenance']
    },
    default: {
      year: '2023',
      role: 'Web Developer',
      client: '—',
      summary: 'A custom WordPress build focused on performance, responsive design, and a clean content architecture.',
      metrics: [{
        v: '25%',
        l: 'Better SEO'
      }, {
        v: '30%',
        l: 'Faster load'
      }, {
        v: '5+',
        l: 'Templates'
      }],
      work: ['Custom theme + responsive layout system', 'SEO-friendly, mobile-first page architecture', 'Performance optimization and cross-browser QA']
    }
  };

  /**
   * CaseStudy — a project detail screen. Works standalone or as an overlay opened
   * from a ProjectCard. Hero title, meta strip, metrics, scope list, and next-up.
   */
  function CaseStudy({
    project,
    onBack
  }) {
    const {
      Button,
      Badge,
      TechPill
    } = window.YoussefKaramDesignSystem_87aa67;
    const p = project || {
      title: 'Everlast Wellness Store',
      desc: DETAIL['Everlast Wellness Store'].summary,
      tags: ['WordPress', 'WooCommerce', 'PHP'],
      href: 'https://everlastwellness.store'
    };
    const d = DETAIL[p.title] || DETAIL.default;
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' in window ? 'instant' : 'auto'
      });
    }, [project]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100svh',
        background: 'var(--bg-base)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        padding: '18px 16px',
        background: 'linear-gradient(180deg, var(--bg-base), transparent)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'var(--container-max)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        padding: '9px 16px 9px 13px',
        cursor: 'pointer',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        transform: 'rotate(180deg)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon.arrowRight, {
      size: 15
    })), " Back"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      as: "a",
      href: p.href,
      target: "_blank",
      iconRight: /*#__PURE__*/React.createElement(Icon.external, {
        size: 15
      })
    }, "Visit live site"))), /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '40px var(--container-pad) 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 24
      }
    }, p.tags.map((t, i) => /*#__PURE__*/React.createElement(TechPill, {
      key: i,
      active: i === 0
    }, t))), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-regular)',
        fontSize: 'var(--text-d1)',
        lineHeight: 0.95,
        letterSpacing: 'var(--tracking-display)',
        color: 'var(--text-strong)',
        maxWidth: '18ch'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '24px 0 0',
        maxWidth: '60ch',
        fontSize: 'var(--text-lg)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--text-muted)'
      }
    }, d.summary), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(28px, 5vw, 64px)',
        marginTop: 40,
        paddingTop: 28,
        borderTop: '1px solid var(--divider)'
      }
    }, [{
      k: 'Year',
      v: d.year
    }, {
      k: 'Role',
      v: d.role
    }, {
      k: 'Client',
      v: d.client
    }].map(m => /*#__PURE__*/React.createElement("div", {
      key: m.k,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, m.k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-md)',
        color: 'var(--text-strong)'
      }
    }, m.v))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-wide)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '16 / 8',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--ink-750), var(--ink-900))',
        border: '1px solid var(--border)',
        boxShadow: 'var(--elev-pop)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--dot-grid)',
        backgroundSize: 'var(--dot-size) var(--dot-size)',
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--spotlight-soft)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
        color: 'var(--text-faint)',
        letterSpacing: '-0.02em',
        textAlign: 'center',
        padding: '0 8%'
      }
    }, p.title)))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--section-gap) var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cs-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '0.4fr 0.6fr',
        gap: 'clamp(32px, 6vw, 80px)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 90
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, "// What I did")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }, d.work.map((w, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: 16,
        padding: '22px 0',
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-faint)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-md)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--text-body)'
      }
    }, w))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(28px, 5vw, 56px)',
        marginTop: 40
      }
    }, d.metrics.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.l,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem,5vw,3.5rem)',
        lineHeight: 0.95,
        color: 'var(--text-strong)'
      }
    }, m.v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, m.l))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad) var(--section-gap)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: 'clamp(28px, 5vw, 48px)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-2xl)',
        cursor: 'pointer',
        boxShadow: 'var(--elev-card)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, "Back to"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-d3)',
        color: 'var(--text-strong)'
      }
    }, "All selected work")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        flex: '0 0 56px',
        borderRadius: '50%',
        background: 'var(--white)',
        color: 'var(--ink-900)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon.arrowRight, {
      size: 22
    })))));
  }
  if (typeof window !== 'undefined') window.CaseStudy = CaseStudy;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon,
    PROFILE
  } = window;

  /**
   * Contact — closing CTA. Oversized serif invitation, a working-feel contact
   * form (fake submit), direct contact methods with copy-to-clipboard, and the
   * footer.
   */
  function Contact() {
    const {
      Button,
      Input,
      Textarea,
      Badge
    } = window.YoussefKaramDesignSystem_87aa67;
    const Reveal = window.Reveal;
    const [sent, setSent] = useState(false);
    const [copied, setCopied] = useState(false);
    const submit = e => {
      e.preventDefault();
      setSent(true);
      setTimeout(() => setSent(false), 3200);
    };
    const copyEmail = () => {
      navigator.clipboard?.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    const methods = [{
      icon: 'github',
      label: 'GitHub',
      val: 'github.com/joeka7',
      href: PROFILE.github
    }, {
      icon: 'linkedin',
      label: 'LinkedIn',
      val: 'youssef-karam-li',
      href: PROFILE.linkedin
    }, {
      icon: 'phone',
      label: 'Phone',
      val: PROFILE.phone,
      href: 'tel:+201062435720'
    }];
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        position: 'relative',
        padding: 'var(--section-gap) 0 0',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 480,
        background: 'var(--spotlight-top)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      style: {
        textAlign: 'center',
        marginBottom: 'var(--space-16)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "available",
      dot: true,
      glass: true
    }, "Available for projects")), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-regular)',
        fontSize: 'var(--text-hero)',
        lineHeight: 0.92,
        letterSpacing: 'var(--tracking-display)',
        color: 'var(--text-strong)'
      }
    }, "Let's build something", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--text-muted)'
      }
    }, "worth shipping.")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '22px auto 0',
        maxWidth: '44ch',
        fontSize: 'var(--text-md)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)'
      }
    }, "Have a project, an idea, or a role in mind? I'm always open to a conversation.")), /*#__PURE__*/React.createElement("div", {
      className: "contact-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 0.8fr',
        gap: 'clamp(28px, 5vw, 64px)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        padding: 'var(--pad-card-lg)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--elev-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      },
      className: "form-row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Your name",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@studio.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon.mail, {
        size: 17
      }),
      required: true
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Project details",
      rows: 5,
      placeholder: "Tell me about what you're building\u2026",
      required: true
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "primary",
      size: "lg",
      fullWidth: true,
      iconRight: sent ? /*#__PURE__*/React.createElement(Icon.check, {
        size: 17
      }) : /*#__PURE__*/React.createElement(Icon.arrowRight, {
        size: 17
      })
    }, sent ? 'Message sent — talk soon' : 'Send message'))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: copyEmail,
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--highlight-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        flex: '0 0 44px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--w-04)',
        border: '1px solid var(--border)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement(Icon.mail, {
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, copied ? 'Copied to clipboard' : 'Email — click to copy'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        color: 'var(--text-strong)',
        fontWeight: 500
      }
    }, PROFILE.email)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: 'var(--text-faint)'
      }
    }, copied ? /*#__PURE__*/React.createElement(Icon.check, {
      size: 18
    }) : /*#__PURE__*/React.createElement(Icon.copy, {
      size: 18
    }))), methods.map(m => {
      const IconC = Icon[m.icon];
      return /*#__PURE__*/React.createElement("a", {
        key: m.label,
        href: m.href,
        target: "_blank",
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '18px 20px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          textDecoration: 'none',
          boxShadow: 'var(--highlight-soft)',
          transition: 'border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
        },
        onMouseEnter: e => {
          e.currentTarget.style.borderColor = 'var(--border-strong)';
          e.currentTarget.style.transform = 'translateX(4px)';
        },
        onMouseLeave: e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'none';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 40,
          height: 40,
          flex: '0 0 40px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--w-04)',
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-strong)'
        }
      }, /*#__PURE__*/React.createElement(IconC, {
        size: 18
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-subtle)'
        }
      }, m.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--text-sm)',
          color: 'var(--text-body)'
        }
      }, m.val)), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 'auto',
          color: 'var(--text-faint)'
        }
      }, /*#__PURE__*/React.createElement(Icon.arrowUpRight, {
        size: 16
      })));
    }))), /*#__PURE__*/React.createElement("footer", {
      style: {
        marginTop: 'var(--section-gap)',
        borderTop: '1px solid var(--divider)',
        padding: '36px 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 18,
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--white)',
        color: 'var(--ink-900)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 14
      }
    }, "Y"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, "\xA9 2026 Youssef Karam \u2014 built with care & code.")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
        color: 'var(--text-faint)'
      }
    }, "CAIRO, EGYPT \xB7 ", PROFILE.role.toUpperCase()))));
  }
  if (typeof window !== 'undefined') window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon,
    PROFILE,
    STATS
  } = window;

  /**
   * Hero — full-height editorial opener. Oversized serif headline with an
   * animated word, mono eyebrow, availability badge, stat strip, and a floating
   * code-snippet glass card. Spotlight ambience overhead.
   */
  function Hero({
    onNavigate
  }) {
    const {
      Badge,
      Button,
      StatBlock
    } = window.YoussefKaramDesignSystem_87aa67;
    const words = ['beautifully.', 'fast.', 'to scale.', 'with care.'];
    const [wi, setWi] = useState(0);
    const [mx, setMx] = useState(0);
    useEffect(() => {
      const t = setInterval(() => setWi(i => (i + 1) % words.length), 2600);
      return () => clearInterval(t);
    }, []);
    useEffect(() => {
      const onMove = e => setMx((e.clientX / window.innerWidth - 0.5) * 2);
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px var(--container-pad) 60px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--spotlight-top)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--dot-grid)',
        backgroundSize: 'var(--dot-size) var(--dot-size)',
        opacity: 0.5,
        maskImage: 'radial-gradient(70% 60% at 50% 30%, #000, transparent)',
        WebkitMaskImage: 'radial-gradient(70% 60% at 50% 30%, #000, transparent)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.35fr 0.65fr',
        gap: 48,
        alignItems: 'center'
      },
      className: "hero-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        animation: 'ds-rise var(--dur-entrance) var(--ease-emphasis) both'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "available",
      dot: true,
      glass: true
    }, "Available for projects"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon.mapPin, {
      size: 13
    }), " ", PROFILE.location)), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-regular)',
        fontSize: 'var(--text-hero)',
        lineHeight: 0.9,
        letterSpacing: 'var(--tracking-display)',
        color: 'var(--text-strong)',
        animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 80ms both'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block'
      }
    }, "Building the web,"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        position: 'relative',
        minHeight: '1em'
      }
    }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: i === wi ? 'relative' : 'absolute',
        left: 0,
        top: 0,
        fontStyle: 'italic',
        color: 'var(--text-muted)',
        opacity: i === wi ? 1 : 0,
        transform: i === wi ? 'translateY(0)' : 'translateY(0.3em)',
        transition: 'opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out)'
      }
    }, w)))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: '46ch',
        fontSize: 'var(--text-md)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-muted)',
        animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 160ms both'
      }
    }, PROFILE.role, " based in Cairo. ", PROFILE.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 240ms both'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(Icon.arrowRight, {
        size: 17
      }),
      onClick: () => onNavigate?.('work')
    }, "View Selected Work"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon.github, {
        size: 17
      }),
      as: "a",
      href: PROFILE.github,
      target: "_blank"
    }, "GitHub")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(28px, 5vw, 56px)',
        marginTop: 14,
        paddingTop: 28,
        borderTop: '1px solid var(--divider)',
        animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 320ms both'
      }
    }, STATS.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
      key: i,
      value: s.value,
      suffix: s.suffix || '',
      label: s.label
    })))), /*#__PURE__*/React.createElement("div", {
      className: "hero-aside",
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        transform: `translateX(${mx * 6}px)`,
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 360,
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--elev-pop)',
        overflow: 'hidden',
        animation: 'ds-rise var(--dur-cinematic) var(--ease-emphasis) 200ms both'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '14px 16px',
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: 'var(--ink-600)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: 'var(--ink-600)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: '50%',
        background: 'var(--ink-600)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-faint)'
      }
    }, "developer.js")), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '18px 18px 22px',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1.85,
        color: 'var(--text-body)',
        whiteSpace: 'pre-wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)'
      }
    }, "const"), ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "dev"), " = ", '{', '\n', '  ', "name: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "'Youssef Karam'"), ",", '\n', '  ', "role: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "'Full-Stack Dev'"), ",", '\n', '  ', "stack: [", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "'PHP'"), ", ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "'JS'"), ",", '\n', '          ', /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)'
      }
    }, "'WordPress'"), "],", '\n', '  ', "ships: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--positive)'
      }
    }, "true"), ",", '\n', '}', ";")))), /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate?.('work'),
      style: {
        position: 'absolute',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-faint)'
      },
      className: "scroll-cue"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase'
      }
    }, "Scroll"), /*#__PURE__*/React.createElement("span", {
      style: {
        animation: 'ds-bob 1.8s var(--ease-in-out) infinite'
      }
    }, /*#__PURE__*/React.createElement(Icon.arrowDown, {
      size: 16
    }))), /*#__PURE__*/React.createElement("style", null, `@keyframes ds-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}`));
  }
  if (typeof window !== 'undefined') window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icons — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;

  /**
   * Icons — Lucide (ISC-licensed) line-icon paths, traced for the kit so it has
   * no CDN dependency. Stroke 1.6, round caps/joins — matches the system's
   * technical-but-refined character. Replaces the emoji used on the old site.
   */
  const Svg = ({
    size = 20,
    children,
    ...rest
  }) => /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
  const Icon = {
    arrowRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    arrowUpRight: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 7 17 7 17 17"
    })),
    arrowDown: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "19 12 12 19 5 12"
    })),
    menu: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    close: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    mail: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-10 5L2 7"
    })),
    phone: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
    })),
    github: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    })),
    linkedin: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    external: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })),
    zap: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    })),
    cart: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "21",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "21",
      r: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
    })),
    code: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
      points: "16 18 22 12 16 6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8 6 2 12 8 18"
    })),
    wand: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "m3 21 9-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 4V2M15 10V8M9.5 6.5h2M18.5 6.5h2M17 4l1.5-1.5M11.5 1.5 13 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 7 7 14"
    })),
    smartphone: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "18"
    })),
    search: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    })),
    wrench: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"
    })),
    layers: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    })),
    gauge: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "m12 14 4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3.34 19a10 10 0 1 1 17.32 0"
    })),
    layout: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9"
    })),
    copy: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    })),
    check: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    star: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    })),
    mapPin: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    calendar: p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    }))
  };
  if (typeof window !== 'undefined') window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/KitShared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* KitShared — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;

  /* ---- Reveal: rise + fade on scroll into view ---- */
  function Reveal({
    children,
    delay = 0,
    y = 28,
    as = 'div',
    style = {},
    ...rest
  }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(el);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    const Tag = as;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      ref: ref
    }, rest, {
      style: {
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity var(--dur-entrance) var(--ease-emphasis) ${delay}ms, transform var(--dur-entrance) var(--ease-emphasis) ${delay}ms`,
        ...style
      }
    }), children);
  }

  /* ---- Marquee: infinite horizontal scroll of children ---- */
  function Marquee({
    items = [],
    speed = 32,
    sep = '/',
    style = {}
  }) {
    const row = [...items, ...items];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0,
        whiteSpace: 'nowrap',
        animation: `ds-marquee ${speed}s linear infinite`
      }
    }, row.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(2rem,4vw,3.25rem)',
        color: 'var(--text-muted)',
        padding: '0 28px',
        letterSpacing: '-0.02em'
      }
    }, it), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem,4vw,3.25rem)'
      }
    }, sep)))));
  }

  /* ---- Real content (from résumé + live portfolio) ---- */
  const PROFILE = {
    name: 'Youssef Karam',
    role: 'Full-Stack Web Developer',
    location: 'Cairo, Egypt',
    email: 'ykaram599@gmail.com',
    phone: '+20 106 243 5720',
    github: 'https://github.com/joeka7',
    linkedin: 'https://linkedin.com/in/youssef-karam-li',
    blurb: 'I build fast, scalable web experiences — custom WordPress themes, WooCommerce storefronts, and performance-tuned front-ends that ship.'
  };
  const STATS = [{
    value: '3+',
    label: 'Years Experience'
  }, {
    value: '15+',
    label: 'Projects Delivered'
  }, {
    value: '40',
    suffix: '%',
    label: 'Engagement Boost'
  }, {
    value: '50',
    suffix: '%',
    label: 'Faster Load Times'
  }];
  const PROJECTS = [{
    title: 'Everlast Wellness Store',
    desc: 'Full e-commerce platform with custom checkout and payment integration.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    href: 'https://everlastwellness.store',
    featured: true
  }, {
    title: 'Evera AI',
    desc: 'AI health & wellness platform site with a modern, motion-led design.',
    tags: ['WordPress', 'JavaScript', 'Custom CSS'],
    href: 'https://evera-ai.com'
  }, {
    title: 'Jozur Cosmetics',
    desc: 'Natural beauty e-commerce with product catalog and reviews.',
    tags: ['WordPress', 'WooCommerce', 'JS'],
    href: 'https://jozurcosmetics.com'
  }, {
    title: 'Al Raha Medical Center',
    desc: 'Healthcare site with appointment booking and service listings.',
    tags: ['WordPress', 'Custom Theme'],
    href: 'https://alrahamedicalcenter.com'
  }, {
    title: 'Shiks Store',
    desc: 'Online retail store with inventory management and order processing.',
    tags: ['WordPress', 'WooCommerce', 'JS'],
    href: 'https://shiks.store'
  }, {
    title: 'Silk & Shine Club',
    desc: 'Beauty & wellness membership platform built front-end first.',
    tags: ['HTML', 'React', 'Custom CSS'],
    href: 'https://silkandshineclub.com'
  }];
  const SKILLS = [{
    icon: 'wand',
    title: 'WordPress',
    desc: 'Custom themes, plugins, ACF, REST API, Multisite.'
  }, {
    icon: 'cart',
    title: 'WooCommerce',
    desc: 'Custom checkout, payment integration, extensions.'
  }, {
    icon: 'zap',
    title: 'Performance',
    desc: 'Core Web Vitals, caching, image optimization.'
  }, {
    icon: 'code',
    title: 'PHP',
    desc: 'OOP, MVC architecture, MySQL, custom functions.'
  }, {
    icon: 'layout',
    title: 'Front-End',
    desc: 'HTML5, CSS3, JavaScript ES6+, jQuery, Bootstrap, React.'
  }, {
    icon: 'smartphone',
    title: 'Responsive',
    desc: 'Mobile-first, cross-browser, Figma/XD to code.'
  }, {
    icon: 'search',
    title: 'SEO',
    desc: 'On-page SEO, schema markup, technical SEO.'
  }, {
    icon: 'wrench',
    title: 'Tooling',
    desc: 'Git, cPanel, Elementor, WPML, page builders.'
  }];
  const EXPERIENCE = [{
    role: 'Web Developer',
    org: 'Everlast Wellness',
    period: 'Dec 2023 – Present',
    current: true,
    body: 'Built and manage the full WooCommerce store; cut load times up to 30% and lifted engagement 40%. Shipped 3 custom themes and 5 plugins across the wellness brand portfolio.'
  }, {
    role: 'Freelance Web Developer',
    org: 'Various clients',
    period: '2021 – 2023',
    body: 'Delivered 8+ healthcare, beauty, and e-commerce websites — Professorsa, JOZUR, Shiks, Green Concept, Root Medical — focused on responsiveness and UX.'
  }, {
    role: 'B.Sc. Management Information Systems',
    org: 'ElMotatawera Academy',
    period: '2019 – 2023',
    last: true,
    body: 'Graduated with a Good cumulative grade; graduation project graded A.'
  }];
  const STACK_MARQUEE = ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'React', 'MySQL', 'SEO', 'Performance'];
  if (typeof window !== 'undefined') Object.assign(window, {
    Reveal,
    Marquee,
    PROFILE,
    STATS,
    PROJECTS,
    SKILLS,
    EXPERIENCE,
    STACK_MARQUEE
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/KitShared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* Nav — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon
  } = window;

  /**
   * Nav — floating glass top bar. Condenses (stronger blur, tighter) once the
   * page is scrolled. Links smooth-scroll to sections.
   */
  function Nav({
    onNavigate
  }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const {
      Badge,
      Button
    } = window.YoussefKaramDesignSystem_87aa67;
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const links = [{
      label: 'Work',
      id: 'work'
    }, {
      label: 'About',
      id: 'about'
    }, {
      label: 'Skills',
      id: 'skills'
    }, {
      label: 'Journey',
      id: 'experience'
    }];
    const go = id => {
      setOpen(false);
      onNavigate?.(id);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: scrolled ? '14px 16px' : '22px 16px',
        transition: 'padding var(--dur-base) var(--ease-out)',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("nav", {
      style: {
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        width: '100%',
        maxWidth: 'var(--container-max)',
        height: 60,
        padding: '0 12px 0 22px',
        background: scrolled ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: scrolled ? 'var(--elev-pop)' : 'var(--highlight-top)',
        transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('top'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--white)',
        color: 'var(--ink-900)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 16,
        fontWeight: 600
      }
    }, "Y"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: 15,
        color: 'var(--text-strong)',
        letterSpacing: '-0.01em'
      }
    }, "Youssef Karam")), /*#__PURE__*/React.createElement("div", {
      className: "nav-links",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, links.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => go(l.id),
      className: "nav-link",
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-muted)',
        padding: '8px 14px',
        borderRadius: 'var(--radius-sm)',
        transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-strong)';
        e.currentTarget.style.background = 'var(--w-06)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.background = 'none';
      }
    }, l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nav-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(Icon.arrowUpRight, {
        size: 15
      }),
      onClick: () => go('contact')
    }, "Let's talk")), /*#__PURE__*/React.createElement("button", {
      className: "nav-burger",
      "aria-label": "Menu",
      onClick: () => setOpen(o => !o),
      style: {
        display: 'none',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--w-06)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--text-strong)',
        cursor: 'pointer'
      }
    }, open ? /*#__PURE__*/React.createElement(Icon.close, {
      size: 18
    }) : /*#__PURE__*/React.createElement(Icon.menu, {
      size: 18
    })))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        pointerEvents: 'auto',
        position: 'fixed',
        top: 84,
        left: 16,
        right: 16,
        zIndex: 99
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--glass-bg-strong)',
        backdropFilter: 'var(--glass-blur-lg)',
        WebkitBackdropFilter: 'var(--glass-blur-lg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 12,
        boxShadow: 'var(--elev-modal)',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, [...links, {
      label: "Let's talk",
      id: 'contact'
    }].map(l => /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => go(l.id),
      style: {
        textAlign: 'left',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 18,
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-body)',
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)'
      }
    }, l.label)))));
  }
  if (typeof window !== 'undefined') window.Nav = Nav;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Skills.jsx
try { (() => {
/* Skills — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon,
    SKILLS,
    EXPERIENCE
  } = window;

  /**
   * Skills — capability grid (SkillCard) under a section label.
   */
  function Skills() {
    const {
      SectionLabel,
      SkillCard
    } = window.YoussefKaramDesignSystem_87aa67;
    const Reveal = window.Reveal;
    return /*#__PURE__*/React.createElement("section", {
      id: "skills",
      style: {
        position: 'relative',
        padding: '0 0 var(--section-gap)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      index: 3,
      eyebrow: "Capabilities",
      title: "The toolkit.",
      style: {
        marginBottom: 'var(--space-12)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "skills-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 18
      }
    }, SKILLS.map((s, i) => {
      const IconC = Icon[s.icon];
      return /*#__PURE__*/React.createElement(Reveal, {
        key: s.title,
        delay: i % 4 * 70
      }, /*#__PURE__*/React.createElement(SkillCard, {
        icon: /*#__PURE__*/React.createElement(IconC, {
          size: 22
        }),
        title: s.title,
        description: s.desc,
        style: {
          height: '100%'
        }
      }));
    }))));
  }

  /**
   * Experience — vertical timeline (TimelineItem) of roles + education.
   */
  function Experience() {
    const {
      SectionLabel,
      TimelineItem
    } = window.YoussefKaramDesignSystem_87aa67;
    const Reveal = window.Reveal;
    return /*#__PURE__*/React.createElement("section", {
      id: "experience",
      style: {
        position: 'relative',
        padding: 'var(--section-gap) 0',
        background: 'var(--bg-floor)',
        borderTop: '1px solid var(--divider)',
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--vignette)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      index: 4,
      eyebrow: "Journey",
      title: "Where I've been.",
      align: "center",
      style: {
        alignItems: 'center',
        marginBottom: 'var(--space-16)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        margin: '0 auto'
      }
    }, EXPERIENCE.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 80
    }, /*#__PURE__*/React.createElement(TimelineItem, {
      role: e.role,
      org: e.org,
      period: e.period,
      current: e.current,
      last: e.last
    }, e.body))))));
  }
  if (typeof window !== 'undefined') Object.assign(window, {
    Skills,
    Experience
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Skills.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
/* Work — UI kit module (loaded via babel; React is global UMD) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
  } = React;
  const {
    Icon,
    PROJECTS,
    STACK_MARQUEE
  } = window;

  /**
   * Work — selected projects. A serif marquee divider, section label, a simple
   * tag filter, and a responsive ProjectCard grid (first card featured/wide).
   */
  function Work({
    onOpenProject
  }) {
    const SectionLabelC = window.YoussefKaramDesignSystem_87aa67.SectionLabel;
    const ProjectCardC = window.YoussefKaramDesignSystem_87aa67.ProjectCard;
    const MarqueeC = window.Marquee;
    const RevealC = window.Reveal;
    const filters = ['All', 'WordPress', 'WooCommerce', 'React'];
    const [active, setActive] = useState('All');
    const shown = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().includes(active.toLowerCase()) || active === 'WooCommerce' && t === 'WooCommerce'));
    return /*#__PURE__*/React.createElement("section", {
      id: "work",
      style: {
        position: 'relative',
        padding: 'var(--section-gap) 0 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-20)'
      }
    }, /*#__PURE__*/React.createElement(MarqueeC, {
      items: STACK_MARQUEE,
      speed: 36
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement(RevealC, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 24,
        marginBottom: 'var(--space-12)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabelC, {
      index: 1,
      eyebrow: "Selected Work",
      title: "Things I've shipped."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, filters.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setActive(f),
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.04em',
        padding: '8px 15px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        color: active === f ? 'var(--accent-contrast)' : 'var(--text-muted)',
        background: active === f ? 'var(--accent)' : 'var(--w-04)',
        border: `1px solid ${active === f ? 'transparent' : 'var(--border)'}`,
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, f))))), /*#__PURE__*/React.createElement("div", {
      className: "work-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24
      }
    }, shown.map((p, i) => /*#__PURE__*/React.createElement(RevealC, {
      key: p.title,
      delay: i % 2 * 80,
      style: {
        gridColumn: p.featured && active === 'All' ? '1 / -1' : 'auto'
      }
    }, /*#__PURE__*/React.createElement(ProjectCardC, {
      index: i + 1,
      title: p.title,
      description: p.desc,
      tags: p.tags,
      featured: p.featured && active === 'All',
      cta: "Visit live site",
      onClick: e => {
        e.preventDefault();
        onOpenProject?.(p);
      },
      href: p.href,
      style: {
        height: '100%'
      }
    })))), /*#__PURE__*/React.createElement(RevealC, {
      style: {
        marginTop: 'var(--space-12)',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://github.com/joeka7",
      target: "_blank",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '0.04em',
        color: 'var(--text-subtle)',
        textDecoration: 'none',
        padding: '12px 20px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-pill)'
      }
    }, "See more on GitHub ", /*#__PURE__*/React.createElement(Icon.arrowUpRight, {
      size: 15
    })))));
  }
  if (typeof window !== 'undefined') window.Work = Work;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SkillCard = __ds_scope.SkillCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TechPill = __ds_scope.TechPill;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

})();
