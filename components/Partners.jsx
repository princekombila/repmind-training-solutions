'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PARTNERS = [
  {
    name: 'EDF',
    short: 'Électricité de France',
    desc: 'Premier exploitant nucléaire mondial : stages, chaires industrielles, thèses CIFRE.',
  },
  {
    name: 'CEA',
    short: "Commissariat à l'énergie atomique",
    desc: 'Recherche fondamentale et appliquée : accès aux laboratoires Saclay, Cadarache, Marcoule.',
  },
  {
    name: 'Orano',
    short: 'Cycle du combustible',
    desc: 'Mines, conversion, enrichissement, recyclage : la maîtrise complète du cycle nucléaire.',
  },
  {
    name: 'Framatome',
    short: 'Conception réacteurs',
    desc: 'Conception et services pour les centrales : EPR2, SMR, instrumentation et contrôle.',
  },
  {
    name: 'IRSN',
    short: 'Sûreté & radioprotection',
    desc: "Expertise indépendante en sûreté nucléaire : projets de recherche et formation continue.",
  },
  {
    name: 'ANDRA',
    short: 'Gestion des déchets radioactifs',
    desc: "Conception et exploitation des centres de stockage : métiers spécialisés de la fin du cycle.",
  },
];

const ORGS = ['SFEN', 'IAEA', 'WANO', 'ASN', 'NRC', 'EURATOM', 'ANDRA', 'TechnicAtome'];

export default function Partners() {
  const sectionRef = useRef(null);
  const gridRef    = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current?.children || [], {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="partenaires" ref={sectionRef} className="relative bg-white py-24 md:py-32">
      <div className="container-x">

        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">— Partenaires</span>
          <h2 className="section-title">Nos partenaires institutionnels.</h2>
          <p className="mt-4 text-corp-muted text-lg">
            Plus de 120 partenaires industriels et de recherche, des stages dès
            la première année, des chaires d'enseignement co-construites.
          </p>
        </div>

        {/* Cards partenaires */}
        <div ref={gridRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="card group"
              style={{ filter: 'grayscale(1)', transition: 'filter 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(1)')}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-corp-navy">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-corp-muted/60">
                    {p.short}
                  </p>
                </div>
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-corp-gold transition-colors group-hover:bg-corp-blue" />
              </div>
              <p className="mt-4 text-sm text-corp-muted leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Bandeau organismes */}
        <div className="mt-16 overflow-hidden rounded-lg border border-corp-border bg-corp-bg">
          <div className="flex items-center gap-8 whitespace-nowrap py-5 px-8 text-sm uppercase tracking-[0.3em] text-corp-muted/50 overflow-x-auto">
            {ORGS.flatMap((org, i) =>
              i < ORGS.length - 1
                ? [<span key={org}>{org}</span>, <span key={`d${i}`} aria-hidden>·</span>]
                : [<span key={org}>{org}</span>]
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
