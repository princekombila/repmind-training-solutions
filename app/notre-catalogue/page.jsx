import { BookOpen } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Notre catalogue',
  description: "Le catalogue de formations REP Mind Training Solutions est en cours d'élaboration.",
};

export default function CataloguePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Notre catalogue"
        title="Notre catalogue de formations"
        lead="Des programmes éprouvés, mobilisables rapidement et adaptables à votre contexte."
        breadcrumb={[{ label: 'Notre catalogue' }]}
      />
      <ComingSoon
        icon={BookOpen}
        title="Catalogue en cours d'élaboration"
        text="Nos programmes de formation prêts à l'emploi seront bientôt disponibles ici. En attendant, décrivez-nous votre besoin : nous concevons aussi des formations entièrement sur-mesure."
      />
    </main>
  );
}
