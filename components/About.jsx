import { Building2, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const AUDIENCES = [
  {
    icon: Building2,
    title: 'Entreprises de la filière',
    text: "Nous accompagnons les entreprises de la chaîne d'approvisionnement nucléaire dans le développement des compétences de leurs collaborateurs, avec des formations adaptées aux exigences du secteur.",
  },
  {
    icon: GraduationCap,
    title: 'Enseignement supérieur',
    text: "Nous intervenons auprès des écoles, universités et centres de formation pour préparer les futurs talents du nucléaire et diffuser les connaissances liées aux enjeux énergétiques et industriels.",
  },
];

export default function About() {
  return (
    <section id="qui-sommes-nous" className="relative bg-white py-24 md:py-32 scroll-mt-20">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">— Qui sommes-nous</span>
          <h2 className="section-title">
            Un partenaire de formation dédié au nucléaire civil.
          </h2>
          <p className="mt-5 text-lg text-corp-muted leading-relaxed">
            Un partenaire de formation dédié au service de l'excellence du nucléaire. REP Mind
            Training Solutions est une entreprise spécialisée dans la formation professionnelle
            et l'ingénierie pédagogique. Nos modules et parcours de formation sont conçus au plus
            près du terrain : ils intègrent le retour d'expérience (REX) industriel, répondent
            aux exigences strictes du secteur et s'alignent sur les pratiques actuelles des
            professionnels de la filière.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} className="card">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-corp-blue/10">
                <a.icon className="h-5 w-5 text-corp-blue" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-corp-navy">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-corp-muted">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
