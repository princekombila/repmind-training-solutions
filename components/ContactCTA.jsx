import { ArrowRight, Clock, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { MAILTO, WHATSAPP_HREF } from '@/lib/contact';

/**
 * Bandeau d'appel à l'action réutilisable (bas de page / fin de section).
 * Pointe vers l'ancre #contact présente dans le footer global.
 */
export default function ContactCTA({
  title = 'Vous avez un projet de formation ?',
  text = 'Décrivez-nous votre besoin : nous vous répondons sous 48 h.',
  cta = 'Contactez notre équipe',
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-2xl bg-corp-blue p-8 md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-16 h-52 w-52 rounded-full bg-corp-gold/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                <Clock className="h-3.5 w-3.5 text-corp-gold" />
                Réponse sous 48 h
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-white">
                {title}
              </h2>
              <p className="mt-3 text-white/75 leading-relaxed">{text}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 font-semibold text-corp-blue transition hover:bg-corp-bg hover:-translate-y-0.5"
              >
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
