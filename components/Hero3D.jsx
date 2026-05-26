'use client';

import { Suspense, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ArrowRight, Award } from 'lucide-react';

const Atom = dynamic(() => import('./Atom'), { ssr: false });

export default function Hero3D() {
  const eyebrowRef = useRef(null);
  const titleRef   = useRef(null);
  const subRef     = useRef(null);
  const ctaRef     = useRef(null);
  const badgesRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(eyebrowRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(titleRef.current,   { y: 50, opacity: 0, duration: 1   }, '-=0.3')
        .from(subRef.current,     { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(ctaRef.current?.children || [], {
          y: 20, opacity: 0, duration: 0.6, stagger: 0.1,
        }, '-=0.4')
        .from(badgesRef.current?.children || [], {
          y: 20, opacity: 0, duration: 0.5, stagger: 0.08,
        }, '-=0.3');
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">

      {/* 3D Canvas — transparent, atome seul sur fond blanc */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0.6, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={2.5} color="#ffffff" />
          <pointLight position={[5,  5,  5]} intensity={2.0} color="#003f7f" />
          <pointLight position={[-5, -3, -2]} intensity={0.8} color="#c8a951" />
          <Suspense fallback={null}>
            <Atom />
          </Suspense>
        </Canvas>
      </div>

      {/* Décors flous */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-corp-blue/6 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0  -left-24  h-64 w-64 rounded-full bg-corp-gold/8  blur-3xl -z-10" />

      {/* Contenu */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20 md:pt-32">
        <div className="max-w-3xl">

          <div ref={eyebrowRef} className="section-eyebrow">
            <span className="inline-block h-[2px] w-6 bg-corp-gold rounded-full" />
            REP MIND Training Solutions
          </div>

          <h1
            ref={titleRef}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            <span className="block text-corp-navy">Former les ingénieurs</span>
            <span className="block text-corp-blue">du nucléaire</span>
            <span className="block text-corp-gold">de demain.</span>
          </h1>

          <p ref={subRef} className="mt-6 max-w-2xl text-lg md:text-xl text-corp-muted leading-relaxed">
            L'école d'ingénieurs nucléaires qui forme les talents de la
            transition énergétique. Sûreté, démantèlement, fusion, exploitation —
            apprenez auprès des leaders du secteur.
          </p>

          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#formations" className="btn-primary">
              Découvrir les formations
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#parcours" className="btn-outline">
              Notre parcours
            </a>
          </div>

          <div
            ref={badgesRef}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-corp-muted/50"
          >
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-corp-gold" />
              Habilitation CTI
            </span>
            <span className="h-1 w-1 rounded-full bg-corp-border" />
            <span>Grade Master</span>
            <span className="h-1 w-1 rounded-full bg-corp-border" />
            <span>Top 5 Energy Europe</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-corp-muted/30">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-corp-blue/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
