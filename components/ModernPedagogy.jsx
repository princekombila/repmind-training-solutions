import Reveal from './Reveal';

export default function ModernPedagogy() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">— Notre pédagogie</span>
          <h2 className="section-title">Une pédagogie moderne, ancrée dans le réel</h2>
          <p className="mt-5 text-lg text-corp-muted leading-relaxed">
            Transmettre la compétence est un enjeu stratégique. Notre approche combine rigueur
            technique et formats pédagogiques modernes pour rendre les concepts complexes
            immédiatement assimilables. Directement connectées à la réalité du terrain et
            nourries par le REX nucléaire national et international, nos formations transforment
            la théorie en réflexes opérationnels.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
