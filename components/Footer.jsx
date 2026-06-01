import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, ArrowRight, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { ACTIVITIES } from '@/lib/nav';
import {
  EMAIL,
  MAILTO,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  ADDRESS_LINES,
  MAPS_HREF,
} from '@/lib/contact';

const COMPANY = [
  { href: '/', label: 'Accueil' },
  { href: '/nos-activites', label: 'Nos activités' },
  { href: '/notre-catalogue', label: 'Notre catalogue' },
  { href: '/actualites', label: 'Actualités' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-corp-navy scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corp-gold/50 to-transparent" />

      <div className="container-x py-16 md:py-20">
        {/* Bandeau contact */}
        <div className="relative overflow-hidden rounded-2xl bg-corp-blue p-8 md:p-12">
          <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Clock className="h-3.5 w-3.5 text-corp-gold" /> Réponse sous 48 h
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                Parlons de votre projet de formation
              </h3>
              <p className="mt-2 text-white/70">
                Décrivez-nous votre besoin : un expert du nucléaire civil vous recontacte sous 48 heures.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-corp-blue transition hover:bg-corp-bg hover:-translate-y-0.5"
              >
                Contactez notre équipe
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Grille principale */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Marque + contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white">
                <Image src="/logo-rep-mind.png" alt="REP Mind" width={36} height={36} className="h-8 w-8 object-contain" />
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-white leading-tight">
                REP MIND
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Training Solutions
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55 leading-relaxed">
              Organisme de formation spécialisé dans le nucléaire civil. Nous développons
              les compétences des entreprises de la chaîne d'approvisionnement nucléaire et
              accompagnons les établissements d'enseignement supérieur.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-corp-gold" />
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-corp-gold" />
                <a href={PHONE_HREF} className="transition hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-corp-gold" />
                <a href={MAILTO} className="transition hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <a
                aria-label="WhatsApp"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:text-corp-gold hover:border-corp-gold/40 hover:bg-white/5"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition hover:text-corp-gold hover:border-corp-gold/40 hover:bg-white/5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nos activités */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Nos activités</h4>
            <ul className="mt-4 space-y-2">
              {ACTIVITIES.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-sm text-white/50 transition hover:text-white">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Entreprise</h4>
            <ul className="mt-4 space-y-2">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/50 transition hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domaines */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Expertise</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Sûreté & culture sûreté</li>
              <li>Réacteurs REP & EPR</li>
              <li>Cycle du combustible</li>
              <li>Sûreté-qualité (ISO 19443)</li>
              <li>Réglementation FR & UE</li>
            </ul>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} REP Mind Training Solutions. Tous droits réservés.</p>
          <p className="uppercase tracking-widest">Formation professionnelle · Nucléaire civil</p>
        </div>
      </div>
    </footer>
  );
}
