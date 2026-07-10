"use client";

import { useState } from "react";
import { useConnectModal } from "./ConnectModalContext";
import { useTheme } from "./ThemeContext";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#platforms", label: "Our Platforms" },
  { href: "#videos", label: "Blog" },
  { href: "#connect", label: "Contact" },
];

function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className={`theme-toggle${className ? ` ${className}` : ""}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useConnectModal();

  return (
    <header>
      <div className="nav">
        <a href="#top" className="logo">
          <span className="mark" />
          <span className="title">
            THE FREQUENCY<small>AWAKENING</small>
          </span>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map((link, i) => (
            <a key={link.href} href={link.href} className={i === 0 ? "active" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button type="button" className="btn btn-primary" onClick={open}>
            <span>Connect With Me</span>
          </button>
          <button className="burger" aria-label="Open menu" onClick={() => setMenuOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-theme-row">
          <span>Appearance</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
