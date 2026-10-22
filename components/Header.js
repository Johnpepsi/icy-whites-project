"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu automatically on resize back to desktop, and
  // lock background scroll while it's open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header>
      <div className="wrap nav-row">
        <div className="wordmark">
          Icy <em>Whites</em>
        </div>
        <nav className="links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-solid" href="#book">
            Book Now
          </a>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger${open ? " open" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <nav className="mobile-links" onClick={() => setOpen(false)}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-solid" href="#book">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
