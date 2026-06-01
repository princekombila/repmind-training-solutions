import { ShieldCheck, Atom, Recycle, BadgeCheck, Scale } from 'lucide-react';
import Reveal from './Reveal';

const DOMAINS = [
  {
    icon: ShieldCheck,
    title: 'Sûreté nucléaire & culture sûreté',
    text: "Principes fondamentaux de sûreté et ancrage d'une culture sûreté partagée à tous les niveaux.",
  },
  {
    icon: Atom,
    title: 'Réacteurs REP & EPR',
    text: "Fonctionnement des réacteurs à eau pressurisée et de la technologie EPR.",
  },
  {
    icon: Recycle,
    title: 'Cycle du combustible français',
    text: "De l'amont à l'aval : maîtrise du cycle du combustible nucléaire français.",
  },
  {
    icon: BadgeCheck,
    title: 'Sûreté-qualité (ISO 19443)',
    text: "Exigences de management de la qualité spécifiques à la chaîne d'approvisionnement nucléaire.",
  },
  {
    icon: Scale,
    title: 'Réglementation FR & UE',
    text: "Cadre réglementaire qui encadre le nucléaire civil à l'échelle française et européenne.",
  },
];

export default function ExpertiseDomains() {
  return (
    <section className="relative overflow-hidden bg-corp-navy py-24 md:py-32">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-corp-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-corp-gold/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-corp-gold">
            — Domaines d'expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Une base de connaissances <span className="text-corp-gold">techniques et réglementaires</span>.
          </h2>
          <p className="mt-4 text-white/65 text-lg">
            Nos formations s'appuient sur les exigences du secteur et le retour d'expérience industriel.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 70}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-corp-gold/40 hover:bg-white/[0.08]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-corp-gold/15">
                <d.icon className="h-5 w-5 text-corp-gold" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
