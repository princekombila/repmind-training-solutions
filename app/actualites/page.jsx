import { Newspaper } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
  title: 'Actualités',
  description: "Les actualités de REP Mind Training Solutions sont en cours d'élaboration.",
};

export default function ActualitesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Actualités"
        title="Actualités"
        lead="Suivez l'actualité de REP Mind Training Solutions, du secteur nucléaire et de nos formations."
        breadcrumb={[{ label: 'Actualités' }]}
      />
      <ComingSoon
        icon={Newspaper}
        title="Actualités en cours d'élaboration"
        text="Cette rubrique accueillera prochainement nos articles, retours d'expérience et informations sur le secteur du nucléaire civil."
      />
    </main>
  );
}
