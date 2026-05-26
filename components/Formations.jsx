'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck,
  Atom as AtomIcon,
  Wrench,
  Zap,
  Recycle,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

const FORMATIONS = [
  {
    icon: AtomIcon,
    title: 'Cycle Ingénieur Nucléaire',
    duration: '3 ans · Bac+5',
    level: 'Master',
    description:
      'Formation généraliste couvrant la physique des réacteurs, neutronique, thermohydraulique et exploitation des centrales.',
    tags: ['Physique', 'Thermohydraulique', 'Neutronique'],
  },
  {
    icon: ShieldCheck,
    title: 'MSc Sûreté Nucléaire',
    duration: '18 mois · Bac+6',
    level: 'Mastère Spécialisé',
    description:
      'Expertise en analyse de sûreté, gestion des risques, facteurs humains et réglementation ASN/IAEA.',
    tags: ['Sûreté', 'Réglementation', 'Risques'],
  },
  {
    icon: Recycle,
    title: 'Démantèlement & Déchets',
    duration: '2 ans · Bac+5',
    level: 'Spécialisation',
    description:
      'Conduite de projets de démantèlement, traitement des déchets radioactifs, radioprotection avancée.',
    tags: ['Démantèlement', 'Radioprotection'],
  },
  {
    icon: Zap,
    title: 'Fusion & Réacteurs IV',
    duration: '2 ans · Bac+5',
    level: 'Recherche',
    description:
      'Réacteurs de 4ème génération, SMR, fusion magnétique (ITER), nouveaux concepts énergétiques.',
    tags: ['ITER', 'SMR', 'Gen IV'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Exploitation',
    duration: '1 an · Bac+5/+6',
    level: 'Pro',
    description:
      "Optimisation de la disponibilité des tranches, maintenance prédictive, conduite d'unité.",
    tags: ['Maintenance', 'Exploitation'],
  },
  {
    icon: GraduationCap,
    title: 'Executive Education',
    duration: '4–12 mois',
    level: 'Continue',
    description:
      'Formations courtes et certifiantes pour les professionnels du nucléaire civil et défense.',
    tags: ['Pro', 'Certifiant'],
  },
];

export default function Formations() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const gridRef    = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      });
      gsap.from(gridRef.current?.children || [], {
        y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="formations" ref={sectionRef} className="relative bg-corp-bg py-24 md:py-32">
      <div className="container-x">

        <div ref={headerRef} className="max-w-2xl">
          <span className="section-eyebrow">
            <AtomIcon className="h-4 w-4" /> Nos programmes
          </span>
          <h2 className="section-title">
            Six parcours d'excellence pour faire avancer la filière nucléaire.
          </h2>
          <p className="mt-4 text-corp-muted text-lg">
            Des programmes conçus avec les industriels du secteur, ancrés
            recherche, ouverts à l'international.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATIONS.map((f) => (
            <article key={f.title} className="card group">

              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-corp-blue/10">
                  <f.icon className="h-5 w-5 text-corp-blue" />
                </div>
                <span className="rounded-full border border-corp-border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-corp-muted">
                  {f.level}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-corp-navy">
                {f.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-corp-gold">{f.duration}</p>
              <p className="mt-3 text-sm text-corp-muted leading-relaxed">{f.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-corp-blue/10 px-2.5 py-1 text-[11px] font-medium text-corp-blue"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-corp-blue transition group-hover:text-corp-navy"
              >
                Voir le programme
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
