'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Briefcase, Globe2, Award } from 'lucide-react';

const STATS = [
  { icon: Users,    value: 2400, suffix: '+', label: 'Étudiants formés',       note: 'depuis 1998' },
  { icon: Briefcase,value: 96,   suffix: '%', label: 'Insertion à 6 mois',     note: 'CDI ou doctorat' },
  { icon: Globe2,   value: 38,   suffix: '',  label: 'Nationalités',            note: 'sur le campus' },
  { icon: Award,    value: 120,  suffix: '+', label: 'Partenaires industriels', note: 'EDF, CEA, Orano…' },
];

function StatCard({ stat, index }) {
  const valueRef = useRef(null);
  const cardRef  = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: stat.value,
      duration: 2,
      ease: 'power2.out',
      delay: index * 0.08,
      onUpdate: () => {
        if (valueRef.current) {
          valueRef.current.textContent = Math.round(obj.v).toLocaleString('fr-FR');
        }
      },
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(cardRef.current, {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', delay: index * 0.08,
      scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
    });

    return () => { tween.kill(); };
  }, [stat.value, index]);

  return (
    <div ref={cardRef} className="text-center px-4 py-2">
      <stat.icon className="mx-auto h-7 w-7 text-white/40 mb-4" />
      <div className="flex items-baseline justify-center gap-0.5">
        <span
          ref={valueRef}
          className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white tabular-nums"
        >
          0
        </span>
        <span className="font-display text-3xl font-bold text-corp-gold">
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-base font-semibold text-white">{stat.label}</p>
      <p className="mt-0.5 text-sm text-white/50">{stat.note}</p>
    </div>
  );
}

export default function Stats() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="chiffres" className="bg-corp-blue py-24 md:py-32">
      <div className="container-x">

        {/* En-tête */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center mb-16">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-corp-gold">
            — Chiffres clés
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Une école reconnue{' '}
            <span className="text-corp-gold">par la filière</span>.
          </h2>
        </div>

        {/* Grille chiffres */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x divide-white/10">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
