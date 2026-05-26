'use client';

import { useEffect, useState } from 'react';
import { Atom, Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#formations',  label: 'Formations' },
  { href: '#chiffres',    label: 'Chiffres clés' },
  { href: '#parcours',    label: 'Parcours' },
  { href: '#partenaires', label: 'Partenaires' },
  { href: '#contact',     label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-corp-border transition-all duration-300 ${
        scrolled ? 'shadow-sm' : 'shadow-none'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-corp-blue">
            <Atom className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-corp-navy">
            REP MIND<span className="text-corp-gold">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-4 py-2 text-sm font-medium text-corp-muted transition hover:text-corp-blue hover:bg-corp-bg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm py-2 px-5">
            Candidater
          </a>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg text-corp-navy hover:bg-corp-bg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-corp-border bg-white">
          <ul className="container-x flex flex-col py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-corp-muted transition hover:text-corp-blue hover:bg-corp-bg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Candidater
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
