import Image from 'next/image';
import { Quote } from 'lucide-react';
import Reveal from './Reveal';

const FACTS = [
  { value: '2024', label: 'Année de création' },
  { value: '8+', label: "Années d'expérience" },
  { value: '100 %', label: 'Dédié au nucléaire civil' },
];

export default function Founder() {
  return (
    <section className="relative bg-corp-bg py-24 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visuel */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-corp-border bg-white shadow-card">
              <Image
                src="/founder.jpeg"
                alt="Ivan MBOME, fondateur de REP Mind Training Solutions"
                width={720}
                height={820}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-2xl bg-corp-gold/20 blur-2xl" />
          </Reveal>

          {/* Texte */}
          <Reveal delay={120}>
            <span className="section-eyebrow">— Le fondateur</span>
            <h2 className="section-title">
              Une vision moderne de la formation technique.
            </h2>

            <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-corp-gold bg-white p-5 shadow-card">
              <Quote className="h-6 w-6 shrink-0 text-corp-gold" />
              <p className="text-corp-text italic leading-relaxed">
                « Une formation plus interactive, plus accessible, plus innovante et
                davantage adaptée aux réalités opérationnelles des entreprises et des
                apprenants. »
              </p>
            </div>

            <p className="mt-6 text-corp-muted leading-relaxed">
              REP Mind Training Solutions a été créée en 2024 par <strong className="text-corp-navy">Ivan MBOME</strong>,
              ingénieur d'études nucléaires et formateur spécialisé dans le nucléaire civil.
              Fort de plus de 8 années d'expérience dans la formation professionnelle en
              milieu nucléaire, il a développé une expertise solide autour de la transmission
              des compétences techniques, de la pédagogie appliquée et des exigences du secteur.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {FACTS.map((f) => (
                <div key={f.label} className="rounded-lg border border-corp-border bg-white px-4 py-4 text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-corp-blue">{f.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-corp-muted">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
