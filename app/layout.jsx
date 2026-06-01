import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://repmind.fr'),
  title: {
    default: 'REP Mind Training Solutions | Formation nucléaire civil',
    template: '%s | REP Mind Training Solutions',
  },
  description:
    "Organisme de formation spécialisé dans le nucléaire civil : conception et animation de formations, e-learning et micro-eLearning, ingénierie et accompagnement pédagogique. Sûreté nucléaire, réacteurs REP/EPR, cycle du combustible, ISO 19443.",
  keywords: [
    'formation nucléaire civil',
    'REP Mind Training Solutions',
    'sûreté nucléaire',
    'culture sûreté',
    'réacteurs REP EPR',
    'cycle du combustible',
    'ISO 19443',
    'e-learning nucléaire',
    'ingénierie pédagogique',
    'Ivan MBOME',
  ],
  authors: [{ name: 'REP Mind Training Solutions' }],
  openGraph: {
    title: 'REP Mind Training Solutions | Formation nucléaire civil',
    description:
      'Former les compétences nucléaires de demain. Formations techniques, e-learning et ingénierie pédagogique pour le secteur du nucléaire civil.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export const viewport = {
  themeColor: '#003f7f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
