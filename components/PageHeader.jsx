import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * En-tête de page intérieure. Gère l'espace sous la navbar fixe,
 * un fil d'Ariane optionnel, un eyebrow, un titre et une accroche.
 */
export default function PageHeader({ eyebrow, title, lead, breadcrumb = [] }) {
  return (
    <header className="relative overflow-hidden bg-corp-navy">
      {/* halos décoratifs */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-corp-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-corp-gold/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-corp-gold/40 to-transparent" />

      <div className="container-x relative pt-32 pb-16 md:pt-40 md:pb-20">
        {breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-6 flex items-center gap-1.5 text-xs text-white/45">
            <Link href="/" className="transition hover:text-corp-gold">Accueil</Link>
            {breadcrumb.map((b) => (
              <span key={b.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {b.href ? (
                  <Link href={b.href} className="transition hover:text-corp-gold">{b.label}</Link>
                ) : (
                  <span className="text-white/70">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-corp-gold">
              <span className="inline-block h-[2px] w-6 rounded-full bg-corp-gold" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">
              {lead}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
