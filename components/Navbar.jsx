'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS as LINKS } from '@/lib/nav';
import { MAILTO } from '@/lib/contact';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation
  useEffect(() => {
    setOpen(false);
    setMobileSub(false);
  }, [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-corp-border transition-all duration-300 ${
        scrolled ? 'shadow-sm' : 'shadow-none'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="REP Mind Training Solutions — accueil">
          <Image
            src="/logo-rep-mind.png"
            alt="REP Mind"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-base md:text-lg font-bold leading-tight tracking-wide text-corp-navy">
            REP MIND
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-corp-muted/70">
              Training Solutions
            </span>
          </span>
        </Link>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) =>
            l.children ? (
              <li key={l.href} className="group relative">
                <Link
                  href={l.href}
                  className={`inline-flex items-center gap-1 rounded px-4 py-2 text-sm font-medium transition hover:text-corp-blue hover:bg-corp-bg ${
                    isActive(l.href) ? 'text-corp-blue' : 'text-corp-muted'
                  }`}
                >
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>
                {/* Méga-menu */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-corp-border bg-white p-2 shadow-card-hover">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-4 py-3 transition hover:bg-corp-bg"
                      >
                        <span className="block text-sm font-semibold text-corp-navy">{c.label}</span>
                        <span className="mt-0.5 block text-xs text-corp-muted">{c.short}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded px-4 py-2 text-sm font-medium transition hover:text-corp-blue hover:bg-corp-bg ${
                    isActive(l.href) ? 'text-corp-blue' : 'text-corp-muted'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center">
          <a href={MAILTO} className="btn-primary text-sm py-2 px-5">
            Décrivez votre besoin
          </a>
        </div>

        {/* Burger mobile */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg text-corp-navy hover:bg-corp-bg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-corp-border bg-white">
          <ul className="container-x flex flex-col py-3">
            {LINKS.map((l) =>
              l.children ? (
                <li key={l.href}>
                  <button
                    onClick={() => setMobileSub((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-corp-muted transition hover:text-corp-blue hover:bg-corp-bg"
                  >
                    <span>{l.label}</span>
                    <ChevronDown className={`h-4 w-4 transition ${mobileSub ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSub && (
                    <div className="ml-3 border-l border-corp-border pl-3">
                      <Link
                        href={l.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-corp-blue transition hover:bg-corp-bg"
                      >
                        Vue d'ensemble
                      </Link>
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-corp-muted transition hover:text-corp-blue hover:bg-corp-bg"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-lg px-4 py-3 text-corp-muted transition hover:text-corp-blue hover:bg-corp-bg"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
            <li className="mt-2">
              <a href={MAILTO} className="btn-primary w-full">
                Décrivez votre besoin
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
