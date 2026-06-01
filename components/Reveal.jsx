'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Révèle ses enfants (fondu + translation) lorsqu'ils entrent dans le viewport.
 * Léger (IntersectionObserver), respecte prefers-reduced-motion via globals.css.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 24,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...(rest.style || {}),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
