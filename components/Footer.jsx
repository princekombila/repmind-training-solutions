'use client';

import { Atom, Mail, MapPin, Phone, Linkedin, Youtube, Github } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Formations',
    links: ['Cycle Ingénieur', 'MSc Sûreté', 'Démantèlement', 'Fusion & Gen IV', 'Executive Education'],
  },
  {
    title: 'École',
    links: ['À propos', 'Équipe', 'Recherche', 'International', 'Carrières'],
  },
  {
    title: 'Ressources',
    links: ['Admissions', 'Brochures', 'FAQ', 'Presse', 'Mentions légales'],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-corp-navy">
      {/* Séparateur doré */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corp-gold/50 to-transparent" />

      <div className="container-x py-16 md:py-20">

        {/* Bande CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-corp-blue p-8 md:p-12">
          <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Prêt à rejoindre la prochaine génération d'ingénieurs ?
              </h3>
              <p className="mt-2 text-white/70">
                Les candidatures pour la rentrée 2026 sont ouvertes. Concours sur
                titre + entretien.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-corp-blue transition hover:bg-corp-bg"
              >
                Candidater
              </a>
              <a
                href="#"
                className="btn-ghost"
              >
                Télécharger la brochure
              </a>
            </div>
          </div>
        </div>

        {/* Grille principale */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">

          {/* Colonne marque + contact */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-corp-blue">
                <Atom className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold tracking-wide text-white">
                REP MIND<span className="text-corp-gold">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/55 leading-relaxed">
              REP MIND Training Solutions forme depuis 1998 les ingénieurs qui
              dessinent l'avenir énergétique. Habilitée CTI, grade master européen.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-corp-gold shrink-0" />
                12 avenue de l'Atome, 91400 Saclay
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-corp-gold shrink-0" />
                +33 1 69 00 00 00
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-corp-gold shrink-0" />
                contact@repmind.fr
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Youtube,  href: '#', label: 'YouTube' },
                { Icon: Github,   href: '#', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:text-corp-gold hover:border-corp-gold/40 hover:bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes de liens */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bas de footer */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30">
          <p>© 2025 REP MIND Training Solutions. Tous droits réservés.</p>
          <p className="uppercase tracking-widest">
            Établissement d'enseignement supérieur reconnu par l'État
          </p>
        </div>
      </div>
    </footer>
  );
}
