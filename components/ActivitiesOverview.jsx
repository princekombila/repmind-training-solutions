import Link from 'next/link';
import { PencilRuler, MonitorPlay, Compass, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export const ACTIVITY_CARDS = [
  {
    n: '01',
    icon: PencilRuler,
    href: '/nos-activites/conception-et-animation',
    title: 'Conception & animation de formations',
    text: "Des formations techniques adaptées à vos besoins : du recueil du besoin à l'évaluation des acquis, animées par des formateurs experts du secteur.",
    tags: ['Sur-mesure', 'Présentiel', 'Évaluation'],
  },
  {
    n: '02',
    icon: MonitorPlay,
    href: '/nos-activites/elearning-micro-elearning',
    title: 'E-learning & micro-eLearning',
    text: 'Solutions pédagogiques numériques engageantes et conformes aux normes SCORM / xAPI, du cadrage du besoin au module finalisé.',
    tags: ['SCORM / xAPI', 'Micro-learning', 'LMS'],
  },
  {
    n: '03',
    icon: Compass,
    href: '/nos-activites/accompagnement-pedagogique',
    title: 'Accompagnement & ingénierie pédagogique',
    text: "La construction d'un dispositif de formation complet, structuré et autonome — de l'audit des besoins jusqu'à votre pleine autonomie.",
    tags: ['Audit', 'Plan de formation', 'Autonomie'],
  },
];

export default function ActivitiesOverview() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="section-eyebrow">— Nos activités</span>
          <h2 className="section-title">Trois axes pour développer vos compétences.</h2>
          <p className="mt-4 text-corp-muted text-lg">
            Les activités de REP Mind Training Solutions s'articulent autour de trois axes
            complémentaires, du présentiel au digital.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ACTIVITY_CARDS.map((a, i) => (
            <Reveal key={a.href} delay={i * 90}>
              <Link href={a.href} className="card group flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-corp-blue/10">
                    <a.icon className="h-5 w-5 text-corp-blue" />
                  </div>
                  <span className="font-display text-3xl font-bold text-corp-border">{a.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-corp-navy">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-corp-muted">{a.text}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {a.tags.map((t) => (
                    <span key={t} className="rounded-full bg-corp-blue/10 px-2.5 py-1 text-[11px] font-medium text-corp-blue">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-corp-blue transition group-hover:text-corp-navy">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
