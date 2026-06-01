import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { MAILTO } from '@/lib/contact';

/**
 * Bloc "En cours d'élaboration" pour les rubriques à venir.
 */
export default function ComingSoon({ icon: Icon, title, text }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-corp-border bg-corp-bg px-8 py-16 text-center md:py-20">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-corp-blue/10">
            <Icon className="h-7 w-7 text-corp-blue" />
          </div>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-corp-gold/40 bg-corp-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-corp-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-corp-gold" />
            En cours d'élaboration
          </span>
          <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold text-corp-navy">{title}</h2>
          <p className="mx-auto mt-3 max-w-md text-corp-muted leading-relaxed">{text}</p>
          <a href={MAILTO} className="btn-primary mt-8">
            Être informé de sa mise en ligne
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
