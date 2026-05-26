import './globals.css';

export const metadata = {
  title: 'REP MIND Training Solutions | Formation Ingénieurs Nucléaires',
  description:
    'Former les ingénieurs du nucléaire de demain. Sûreté, démantèlement, fusion, exploitation des centrales. Partenaire EDF, CEA, Orano.',
  keywords: [
    'formation nucléaire',
    'ingénieur nucléaire',
    'école nucléaire',
    'REP MIND',
    'EDF',
    'CEA',
    'Orano',
    'sûreté nucléaire',
    'REP MIND Training Solutions',
  ],
  openGraph: {
    title: 'REP MIND Training Solutions | Formation Ingénieurs Nucléaires',
    description: 'Former les ingénieurs du nucléaire de demain.',
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
      <body>{children}</body>
    </html>
  );
}
