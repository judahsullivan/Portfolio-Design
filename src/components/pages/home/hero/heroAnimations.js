import { stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeroAnimations() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = [
      [
        '.heroline',
        {
          width: ['0%', '100%']
        },
        {
          duration: 0.7,
          ease: 'linear'
        }
      ],
      [
        '.title',
        { y: ['100%', '0%'] },
        { duration: 1, delay: stagger(0.0386), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.titletwo',
        { y: ['100%', '0%'] },
        { duration: 1, at: '<', delay: stagger(0.0386), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.herocontent',
        { opacity: [0, 1], y: ['100%', '0%'] },
        {
          duration: 0.5
        }
      ]
    ];

    animate(sequence);
  }, [animate]);
  return scope;
}
