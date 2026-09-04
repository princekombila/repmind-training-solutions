import { FileText, ClipboardCheck, Wrench, RefreshCw, KeyRound } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ContactCTA from '@/components/ContactCTA';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Accompagnement & ingénierie pédagogique',
  description:
    "Construction d'un dispositif de formation complet et autonome pour le nucléaire civil : de l'audit des besoins au pilotage en pleine autonomie.",
};

const STEPS = [
  {
    title: 'Audit de vos besoins en formation',
    text: "Mené avec vos responsables formation, RH et managers opérationnels, l'audit aboutit à une cartographie claire de vos besoins, hiérarchisés par priorité et alignés sur vos enjeux métiers.",
    items: [
      "Analyse de vos obligations réglementaires et des exigences propres au nucléaire",
      "Identification des écarts entre le niveau actuel et le niveau attendu",
      "Inventaire des formations en place et évaluation de leur efficacité",
      "Prise en compte de vos contraintes : effectifs, disponibilités, organisation, budget",
    ],
  },
  {
    title: 'Construction du plan de formation',
    text: "Sur la base de l'audit, nous co-construisons un plan annuel ou pluriannuel, votre feuille de route formation, présentable à votre direction, vos partenaires sociaux ou vos donneurs d'ordre.",
    items: [
      "Les thématiques à couvrir et leur ordre de déploiement",
      "Le choix des formats : présentiel, eLearning, micro-learning ou combinaison",
      "Le séquençage des sessions selon vos cycles d'activité",
      "Les indicateurs de suivi pour mesurer l'avancement et l'impact",
    ],
  },
  {
    title: 'Déploiement accompagné',
    text: "Nous restons à vos côtés pour faire vivre le programme dans votre réalité quotidienne.",
    items: [
      "Appui à la planification et à la communication interne",
      "Mobilisation des bons formateurs internes ou issus de notre réseau",
      "Coordination des interventions pour garantir cohérence et continuité",
      "Points d'étape réguliers pour suivre l'avancement et lever les obstacles",
    ],
  },
  {
    title: 'Ajustements & amélioration continue',
    text: "Un programme pérenne n'est pas figé. Lors de rendez-vous de suivi planifiés, nous assurons un pilotage dans la durée pour vous permettre d'anticiper plutôt que de subir.",
    items: [
      "Analyse des résultats d'évaluation et des indicateurs de formation",
      "Identification des thématiques à renforcer ou à faire évoluer",
      "Mise à jour des contenus en cas de changement réglementaire ou technique",
      "Révision annuelle du plan en concertation avec vos équipes",
    ],
  },
];

const AUTONOMY = [
  { icon: FileText, text: "Un programme de formation documenté, structuré et directement opérationnel" },
  { icon: ClipboardCheck, text: "Des outils de suivi pour piloter l'avancement et mesurer l'impact" },
  { icon: Wrench, text: "Des ressources pédagogiques adaptées à vos équipes et votre contexte" },
  { icon: RefreshCw, text: "Des processus clairs pour faire évoluer votre dispositif par vous-même" },
];

export default function AccompagnementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Nos activités — Choix 3"
        title="Accompagnement & ingénierie pédagogique"
        lead="Nous accompagnons nos partenaires dans la mise en place de programmes de formation pérennes et adaptés à leurs réalités terrain. Construire une politique de formation solide, c'est investir dans la durabilité de vos compétences."
        breadcrumb={[{ label: 'Nos activités', href: '/nos-activites' }, { label: 'Accompagnement & ingénierie' }]}
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-corp-text">
              Nous ne nous contentons pas de vous vendre des formations à la carte. Nous vous
              accompagnons dans la construction d'un <strong className="text-corp-navy">dispositif de
              formation complet, structuré et autonome</strong>, ancré dans les réalités de votre
              organisation et conçu pour durer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Démarche */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">— Notre démarche</span>
            <h2 className="section-title">De l'audit des besoins à votre autonomie.</h2>
            <p className="mt-4 text-corp-muted leading-relaxed">
              Une démarche complète et transparente, jalonnée de points d'étape, pour un dispositif
              qui reste en phase avec l'évolution de vos besoins et de votre environnement réglementaire.
            </p>
          </Reveal>
          <div>
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* Autonomie */}
      <section className="relative overflow-hidden bg-corp-navy py-20 md:py-28">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-corp-blue/30 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-corp-gold">
              <KeyRound className="h-4 w-4" /> Votre autonomie
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Notre ambition : vous rendre <span className="text-corp-gold">pleinement autonome</span>.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Au terme de notre accompagnement, vous repartez avec un dispositif qui vous appartient,
              que vous pouvez faire vivre en interne et qui continue de produire ses effets bien au-delà
              de notre intervention.
            </p>
          </Reveal>
          <Reveal delay={120} className="space-y-3">
            {AUTONOMY.map((a) => (
              <div key={a.text} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-corp-gold/15">
                  <a.icon className="h-5 w-5 text-corp-gold" />
                </div>
                <p className="text-sm leading-relaxed text-white/85">{a.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Vous souhaitez structurer votre politique de formation ?"
        text="Parlons de votre projet : nous vous répondons sous 48 h."
      />
    </main>
  );
}
