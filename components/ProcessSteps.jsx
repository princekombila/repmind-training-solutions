import { Check } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Timeline verticale numérotée.
 * steps: [{ title, text?, items?: string[] }]
 */
export default function ProcessSteps({ steps, startAt = 1 }) {
  return (
    <ol className="relative space-y-8">
      {/* ligne verticale */}
      <span className="absolute left-[19px] top-2 bottom-2 w-px bg-corp-border md:left-[23px]" aria-hidden />
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 60} className="relative pl-14 md:pl-16">
          <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-corp-blue font-display text-sm font-bold text-white ring-4 ring-white md:h-12 md:w-12 md:text-base">
            {String(startAt + i).padStart(2, '0')}
          </span>
          <h3 className="font-display text-lg md:text-xl font-semibold text-corp-navy">{s.title}</h3>
          {s.text && <p className="mt-2 text-sm md:text-base leading-relaxed text-corp-muted">{s.text}</p>}
          {s.items && (
            <ul className="mt-3 space-y-2">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-corp-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-corp-gold" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
