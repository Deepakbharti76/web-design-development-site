import { useState } from "react";
import { IconGlobe, IconSun, IconMoon, IconMenu, IconClose } from "./Icons.jsx";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Technologies" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__row">
        <a href="#top" className="nav__brand" aria-label="Web Design & Development — home">
          <span className="nav__mark" aria-hidden="true">
            <IconGlobe stroke="#fff" width={18} height={18} />
          </span>
          Web Design & Development
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav__cta"><span className="desktop-label">Get a Free Consultation</span></a>
          <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>Get a Free Consultation</a>
      </div>
    </header>
  );
}
