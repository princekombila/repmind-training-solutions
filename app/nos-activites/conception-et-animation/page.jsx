import { ClipboardList, FileCheck2, CalendarClock, Users, Award, Layers, Repeat, Timer } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ContactCTA from '@/components/ContactCTA';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Conception & animation de formations',
  description:
    "Formations techniques sur-mesure pour le nucléaire civil : du recueil du besoin à l'évaluation des acquis, animées par des formateurs experts.",
};

const STEPS = [
  {
    title: 'Recueil & cadrage de votre besoin',
    text: "Tout projet commence par une écoute approfondie. Nous organisons un échange dédié pour cerner précisément votre contexte, puis nous co-construisons un cahier des charges formation, document de référence tout au long du projet.",
    items: [
      "Le contexte opérationnel et réglementaire de votre besoin",
      "Les compétences à développer et les situations de travail visées",
      "Le profil de vos collaborateurs : niveau initial, expérience, disponibilité",
      "Les objectifs attendus à l'issue de la formation",
    ],
  },
  {
    title: 'Conception du programme pédagogique',
    text: "Nos ingénieurs pédagogiques conçoivent le programme le plus adapté : adaptation d'une formation de notre catalogue à votre contexte, ou conception entièrement sur-mesure (objectifs, séquences progressives, méthodes d'animation, supports). Le programme finalisé vous est soumis pour validation avant toute planification.",
  },
  {
    title: 'Planification de la session',
    text: "Nous définissons avec vous les modalités pratiques les plus adaptées à votre organisation.",
    items: [
      "Choix des dates selon les contraintes opérationnelles de vos équipes",
      "Définition du lieu d'intervention (vos locaux ou un espace partenaire)",
      "Constitution du groupe de participants selon les objectifs pédagogiques",
      "Envoi des convocations et des documents préparatoires",
    ],
  },
  {
    title: 'Animation par un formateur expert',
    text: "Le jour J, l'un de nos formateurs spécialisés anime la session en garantissant trois engagements fondamentaux.",
    items: [
      "La qualité de l'animation : apprentissage actif, rythme soutenu, alternance des méthodes",
      "La pertinence du contenu : exemples concrets, directement transposables sur le terrain",
      "Le partage et l'intelligence collective : échanges d'expériences et confrontation des pratiques",
    ],
  },
  {
    title: 'Évaluation des acquis',
    text: "À la fin de chaque session, les apprentissages sont évalués de manière rigoureuse et équitable via un questionnaire en ligne. Les résultats sont consolidés dans un rapport d'évaluation mesurant le niveau d'acquisition des compétences.",
  },
];

const WHY = [
  { icon: Award, title: 'Expertise sectorielle', text: "Nos formateurs connaissent les contraintes, référentiels et la culture propres au nucléaire." },
  { icon: Layers, title: 'Approche sur-mesure', text: "Chaque formation est pensée pour votre contexte, jamais reproduite mécaniquement." },
  { icon: FileCheck2, title: 'Processus structuré', text: "Du cadrage à l'évaluation, chaque étape est formalisée pour votre visibilité et votre sérénité." },
  { icon: ClipboardList, title: 'Catalogue disponible', text: "Des programmes déjà éprouvés, rapidement mobilisables et adaptables pour vos besoins récurrents." },
];

const EVAL = [
  { icon: Timer, title: 'Délai de réponse', text: '3 jours ouvrables à compter de la réception du questionnaire.' },
  { icon: ClipboardList, title: 'Format', text: 'Questionnaire en ligne, accessible depuis tout support numérique.' },
  { icon: CalendarClock, title: 'Durée limitée', text: "Le temps de réponse est contrôlé pour garantir l'authenticité des résultats." },
  { icon: Repeat, title: 'Tentative unique', text: "Une seule passation possible, assurant la fiabilité et l'intégrité de l'évaluation." },
];

export default function ConceptionAnimationPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Activités 1"
        title="Conception & animation de formations"
        lead="Nous concevons et animons des formations adaptées aux besoins spécifiques de nos partenaires : entreprises, établissements d'enseignement supérieur et centres de formation."
        breadcrumb={[{ label: 'Nos activités', href: '/nos-activites' }, { label: 'Conception & animation' }]}
      />

      {/* Processus */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">— Notre méthode</span>
            <h2 className="section-title">Un processus en 5 étapes, du besoin à l'évaluation.</h2>
            <p className="mt-4 text-corp-muted leading-relaxed">
              Chaque étape est formalisée pour garantir l'alignement entre vos attentes et notre
              intervention. Le programme finalisé est toujours validé avec vous avant toute session.
            </p>
          </Reveal>
          <div>
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* Évaluation en ligne */}
      <section className="bg-corp-bg py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="section-eyebrow">— Évaluation des acquis</span>
            <h2 className="section-title">Une évaluation rigoureuse et équitable.</h2>
            <p className="mt-4 text-corp-muted leading-relaxed">
              Chaque participant reçoit un questionnaire d'évaluation en ligne dès la clôture de la session.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EVAL.map((e, i) => (
              <Reveal key={e.title} delay={i * 70} className="card">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-corp-blue/10">
                  <e.icon className="h-5 w-5 text-corp-blue" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-corp-navy">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-corp-muted">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="section-eyebrow">— Pourquoi nous choisir</span>
            <h2 className="section-title">Quatre raisons de nous confier vos formations.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 70} className="card flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-corp-gold/15">
                  <w.icon className="h-5 w-5 text-corp-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-corp-navy">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-corp-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Vous avez un projet de formation ?"
        text="Décrivez-nous votre besoin et nous vous répondons sous 48 h."
      />
    </main>
  );
}
