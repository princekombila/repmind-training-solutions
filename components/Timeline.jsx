'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STEPS = [
  {
    year: 'Année 1',
    title: 'Fondations scientifiques',
    text: 'Physique nucléaire, mathématiques avancées, thermodynamique, programmation scientifique. Visites de centrales et laboratoires partenaires.',
    tag: 'Tronc commun',
  },
  {
    year: 'Année 2',
    title: 'Spécialisation industrielle',
    text: 'Neutronique, thermohydraulique, matériaux sous irradiation, sûreté. Stage long en exploitation (EDF / Framatome).',
    tag: 'Industrie',
  },
  {
    year: 'Année 3',
    title: 'Expertise & innovation',
    text: 'Choix de filière (Sûreté, Démantèlement, Fusion, Maintenance), projet recherche au CEA ou en industrie, semestre international.',
    tag: 'Expertise',
  },
  {
    year: 'Diplôme',
    title: 'Insertion professionnelle',
    text: "Titre d'ingénieur habilité CTI, grade Master européen. 96 % d'insertion à 6 mois en CDI, doctorat CIFRE ou international.",
    tag: 'Carrière',
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const lineRef    = useRef(null);
  const stepsRef   = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Ligne de progression scrub
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 70%',
          scrub: 0.8,
        },
      });

      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          x: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="parcours" ref={sectionRef} className="relative bg-corp-bg py-24 md:py-32">
      <div className="container-x">

        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">— Parcours</span>
          <h2 className="section-title">Un cursus en 3 années, ancré sur le terrain.</h2>
          <p className="mt-4 text-corp-muted text-lg">
            De la théorie à l'expertise, en passant par les centrales, le CEA et
            l'international.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Piste de fond */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-corp-border" />
          {/* Piste animée */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-corp-blue via-corp-gold to-corp-blue/0"
          />

          <ul className="space-y-12 md:space-y-16">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.title}
                  ref={(el) => (stepsRef.current[i] = el)}
                  className={`relative grid md:grid-cols-2 gap-6 ${
                    left ? 'md:[&>*:first-child]:order-1' : ''
                  }`}
                >
                  {/* Point */}
                  <span className="absolute left-4 md:left-1/2 top-2 z-10 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-corp-blue ring-4 ring-corp-bg">
                    <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  {/* Espaceur desktop */}
                  <div className="hidden md:block" />

                  {/* Carte */}
                  <div className={`pl-12 md:pl-0 ${left ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card inline-block max-w-md text-left">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-corp-blue">
                          {s.year}
                        </span>
                        <span className="rounded-full border border-corp-border px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-corp-muted">
                          {s.tag}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold text-corp-navy">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-corp-muted leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
