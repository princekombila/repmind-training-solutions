import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import Formations from '@/components/Formations';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero3D />
      <Formations />
      <Stats />
      <Timeline />
      <Partners />
      <Footer />
    </main>
  );
}
