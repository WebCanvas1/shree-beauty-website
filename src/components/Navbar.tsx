import { useState } from "react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Shree Beauty & Brow Parlour" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-body text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:0424835213" className="hidden md:inline-block rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-bold text-primary-foreground hover:opacity-90 transition">
          Call Now
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-body text-sm font-semibold text-foreground/80 hover:text-primary transition">
              {l.label}
            </a>
          ))}
          <a href="tel:0424835213" className="mt-2 block text-center rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-bold text-primary-foreground">
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
