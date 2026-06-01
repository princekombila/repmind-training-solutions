import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import Reveal from '@/components/Reveal';
import { ACTIVITY_CARDS } from '@/components/ActivitiesOverview';

export const metadata = {
  title: 'Nos activités',
  description:
    "Conception et animation de formations, e-learning et micro-eLearning, ingénierie et accompagnement pédagogique pour le nucléaire civil.",
};

export default function NosActivitesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Nos activités"
        title="Développer les compétences nucléaires, du présentiel au digital."
        lead="Les activités de REP Mind Training Solutions s'articulent autour de trois axes principaux, complémentaires et adaptés aux exigences du secteur nucléaire."
        breadcrumb={[{ label: 'Nos activités' }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {ACTIVITY_CARDS.map((a, i) => (
              <Reveal key={a.href} delay={i * 90}>
                <Link href={a.href} className="card group flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-md bg-corp-blue/10">
                      <a.icon className="h-5 w-5 text-corp-blue" />
                    </div>
                    <span className="font-display text-3xl font-bold text-corp-border">{a.n}</span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-corp-navy">{a.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-corp-muted">{a.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full bg-corp-blue/10 px-2.5 py-1 text-[11px] font-medium text-corp-blue">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-corp-blue transition group-hover:text-corp-navy">
                    Découvrir
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
