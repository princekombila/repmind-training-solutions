import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import ModernPedagogy from '@/components/ModernPedagogy';
import Founder from '@/components/Founder';
import ExpertiseDomains from '@/components/ExpertiseDomains';
import ActivitiesOverview from '@/components/ActivitiesOverview';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero3D />
      <About />
      <ModernPedagogy />
      <Founder />
      <ExpertiseDomains />
      <ActivitiesOverview />
      <ContactCTA />
    </main>
  );
}
