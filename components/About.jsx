import { Building2, GraduationCap, Lightbulb } from 'lucide-react';
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
  {
    icon: Lightbulb,
    title: 'Une pédagogie moderne',
    text: "Notre approche est rigoureuse, interactive et directement connectée aux réalités industrielles du terrain : rendre le nucléaire plus accessible, plus concret et plus efficacement transmissible.",
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
            REP Mind Training Solutions est une entreprise spécialisée dans la formation
            professionnelle du secteur du nucléaire civil. Nos contenus sont construits à
            partir du retour d'expérience industriel, des exigences du secteur et des
            pratiques actuelles de la filière.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
