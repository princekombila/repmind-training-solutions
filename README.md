# REP MIND Training Solutions — Site vitrine

Site vitrine corporate premium pour REP MIND Training Solutions,
école d'ingénieurs spécialisée dans le nucléaire civil.
Design institutionnel blanc/bleu, hero 3D atome (React Three Fiber),
animations scroll GSAP ScrollTrigger.

## Identité

| Champ         | Valeur                                    |
|---------------|-------------------------------------------|
| Nom complet   | REP MIND Training Solutions               |
| Nom court     | REP MIND                                  |
| Tagline       | Former les ingénieurs du nucléaire de demain |
| Email         | contact@repmind.fr                        |
| Domaine       | repmind.fr                                |

## Stack technique

- **Next.js 14** (App Router, JSX)
- **React 18**
- **Tailwind CSS 3.4** — tokens `corp-*`
- **React Three Fiber + drei** — scène 3D atome
- **GSAP + ScrollTrigger** — animations scroll
- **lucide-react** — icônes

## Palette

| Token          | Hex       | Usage                           |
|----------------|-----------|---------------------------------|
| `corp-white`   | `#ffffff` | Fond principal                  |
| `corp-bg`      | `#f8f9fa` | Fond secondaire (sections alt.) |
| `corp-blue`    | `#003f7f` | Bleu institutionnel / CTAs      |
| `corp-navy`    | `#1a1a2e` | Headers, footer, texte fort     |
| `corp-gold`    | `#c8a951` | Accent or corporate             |
| `corp-text`    | `#1a1a1a` | Texte principal                 |
| `corp-muted`   | `#4a4a4a` | Texte secondaire                |
| `corp-border`  | `#e5e7eb` | Bordures, séparateurs           |

## Installation

```bash
cd nucleaire-formation
npm install
npm run dev
```

Serveur disponible sur [http://localhost:3000](http://localhost:3000).

## Structure

```
nucleaire-formation/
├── app/
│   ├── globals.css        # Tokens CSS + composants Tailwind
│   ├── layout.jsx         # Métadonnées SEO REP MIND, fonts
│   └── page.jsx           # Composition de la home
├── components/
│   ├── Navbar.jsx         # Navigation sticky blanche + menu mobile
│   ├── Hero3D.jsx         # Hero blanc + Canvas R3F + GSAP intro
│   ├── Atom.jsx           # Atome 3D bleu/or (noyau + électrons)
│   ├── Formations.jsx     # 6 cartes formations (fond gris)
│   ├── Stats.jsx          # 4 stats (section fond bleu #003f7f)
│   ├── Timeline.jsx       # Parcours zigzag (fond gris)
│   ├── Partners.jsx       # EDF, CEA, Orano, Framatome, IRSN, ANDRA
│   └── Footer.jsx         # CTA + liens + contact (fond navy)
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Sections

1. **Hero 3D** — atome bleu/or animé, titre sobre, 2 CTAs (plein / outline)
2. **Formations** — 6 cartes sur fond `#f8f9fa`, icônes bleues, durées en or
3. **Chiffres clés** — section fond `#003f7f`, compteurs blancs, suffixes or
4. **Parcours** — timeline zigzag avec ligne scrub bleu→or, fond gris
5. **Partenaires** — EDF CEA Orano Framatome IRSN ANDRA, cards grayscale au hover
6. **Footer** — fond `#1a1a2e`, bande CTA bleue, contact@repmind.fr

## Responsive

Mobile-first, breakpoints Tailwind standards :
- `sm` (640px) — 2 colonnes
- `md` (768px) — menu desktop, timeline zigzag
- `lg` (1024px) — 3 colonnes formations / 4 stats

## Accessibilité

- HTML sémantique (`header`, `nav`, `main`, `section`, `footer`)
- `prefers-reduced-motion` respecté
- `aria-label` sur boutons icônes
- Contraste WCAG AA textes principaux

## À adapter

- Remplacer le logo par le vrai logo REP MIND dans `public/`
- Brancher `contact@repmind.fr` à une route API Next.js ou service tiers
- Ajouter `/formations/[slug]` pour le détail de chaque programme
- Déployer sur Vercel via `vercel deploy`
