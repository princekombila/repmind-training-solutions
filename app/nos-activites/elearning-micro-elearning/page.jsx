import PageHeader from '@/components/PageHeader';
import ProcessSteps from '@/components/ProcessSteps';
import ContactCTA from '@/components/ContactCTA';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'E-learning & micro-eLearning',
  description:
    "Production de modules e-learning et micro-eLearning conformes SCORM / xAPI pour le nucléaire civil : du cadrage du besoin au module finalisé.",
};

const STEPS = [
  {
    title: 'Analyse du besoin client',
    text: "Un ou plusieurs ateliers de cadrage pour comprendre votre contexte, puis la co-rédaction d'un cahier des charges pédagogique qui engage les deux parties sur une vision commune.",
    items: [
      'Le contexte de votre organisation et les enjeux de formation',
      'Les compétences cibles et les publics apprenants',
      'Les contraintes techniques, budgétaires et de délais',
      'Les contenus existants réutilisables (supports, procédures, présentations)',
    ],
  },
  {
    title: 'Conception pédagogique & scénarisation',
    text: "Le cœur intellectuel du projet : nos ingénieurs transforment vos contenus bruts en une architecture d'apprentissage structurée, validée formellement avant toute production.",
    items: [
      'Définition des objectifs pédagogiques par module et par séquence',
      'Rédaction du synopsis : la trame générale du parcours',
      'Élaboration du storyboard : le plan détaillé écran par écran',
      'Choix du format : module complet, capsule micro-eLearning, vidéo animée, quiz, scénario ramifié',
    ],
  },
  {
    title: 'Production multimédia',
    text: "Notre équipe de production donne vie au storyboard validé.",
    items: [
      'Intégration dans un outil auteur (Articulate Storyline, Rise ou équivalent)',
      'Création des visuels, illustrations et animations',
      'Enregistrement et montage des voix off si nécessaire',
      'Micro-eLearning : capsules courtes (3 à 7 min), pensées pour une consultation mobile',
    ],
  },
  {
    title: 'Révisions & validation client',
    text: "Un prototype ou une version bêta vous est soumis pour recette : commission de validation (expert métier, panel d'apprenants tests, notre équipe), allers-retours structurés et vérification de la cohérence pédagogique, par cycles définis contractuellement.",
  },
  {
    title: 'Contrôle qualité & tests techniques',
    text: "Avant toute livraison, chaque module passe par une phase rigoureuse de QA (Quality Assurance).",
    items: [
      'Test de navigation et de toutes les interactions',
      'Vérification de la conformité aux normes SCORM / xAPI pour intégration LMS',
      'Contrôle de l’accessibilité et de la compatibilité multi-supports',
      'Correction de toute anomalie détectée',
    ],
  },
  {
    title: 'Livraison & déploiement',
    text: "Le module validé vous est livré dans le format convenu : fichier SCORM ou xAPI, vidéo MP4, lien de consultation hébergé, documentation technique et guide d'utilisation. Nous pouvons vous accompagner dans le déploiement sur votre LMS et le suivi des apprenants (complétion, scores, temps passé).",
  },
  {
    title: 'Suivi et évolution',
    text: "Un module est un actif vivant : analyse des données d'usage, mise à jour en cas d'évolution réglementaire ou métier, et évolution du parcours selon les retours terrain de vos apprenants.",
  },
];

const COMPARISON = [
  { crit: 'Durée', e: '20 à 60 min', m: '2 à 7 min' },
  { crit: 'Objectif', e: 'Parcours complet et montée en compétence', m: 'Un seul objectif ciblé' },
  { crit: 'Usage', e: 'Formation initiale et certification', m: 'Ancrage mémoriel, formation continue, juste-à-temps' },
  { crit: 'Format', e: 'Modules interactifs, scénarios et évaluations', m: 'Capsules vidéo et quiz' },
  { crit: 'Avantage', e: 'Profondeur pédagogique', m: 'Flexibilité et engagement maximal' },
];

export default function ELearningPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Nos activités — Choix 2"
        title="E-learning & micro-eLearning"
        lead="Nous développons des solutions pédagogiques numériques pour faciliter l'apprentissage et le maintien des compétences — une méthode rigoureuse, de votre besoin au module finalisé."
        breadcrumb={[{ label: 'Nos activités', href: '/nos-activites' }, { label: 'E-learning & micro-eLearning' }]}
      />

      {/* Processus 7 étapes */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">— Notre processus de production</span>
            <h2 className="section-title">Sept étapes, de votre besoin au module finalisé.</h2>
            <p className="mt-4 text-corp-muted leading-relaxed">
              Notre approche garantit des contenus alignés sur vos objectifs métier, engageants
              pour vos apprenants et immédiatement opérationnels dans votre environnement.
            </p>
          </Reveal>
          <div>
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="bg-corp-bg py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="section-eyebrow">— Comparatif</span>
            <h2 className="section-title">E-learning ou micro-eLearning : quelle différence ?</h2>
          </Reveal>

          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-corp-border bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-corp-navy text-white">
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-white/60">Critère</th>
                    <th className="px-6 py-5 font-display text-base font-semibold">E-learning</th>
                    <th className="px-6 py-5 font-display text-base font-semibold">
                      Micro-eLearning
                      <span className="ml-2 rounded-full bg-corp-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-corp-gold">
                        Mobile
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.crit} className={i % 2 === 1 ? 'bg-corp-bg/60' : 'bg-white'}>
                      <th className="px-6 py-4 align-top text-xs font-bold uppercase tracking-widest text-corp-blue">
                        {row.crit}
                      </th>
                      <td className="px-6 py-4 align-top text-sm leading-relaxed text-corp-text">{row.e}</td>
                      <td className="px-6 py-4 align-top text-sm leading-relaxed text-corp-text">{row.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Vous avez un projet de formation digitale ?"
        text="Parlons-en : décrivez-nous votre besoin et nous vous répondons sous 48 h."
      />
    </main>
  );
}
