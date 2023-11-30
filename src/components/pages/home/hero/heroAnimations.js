import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroAnimations() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = [
      [
        '.line',
        {
          width: ['0%', '100%']
        },
        {
          duration: 0.5
        }
      ],
      [
        '.name',
        { y: ['-100%', '0%'] },
        { duration: 1, delay: stagger(0.1), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.title',
        { y: ['100%', '0%'] },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.desc',
        { y: ['100%', '0%'] },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ],

      ['.contact', { x: ['-100%', '0%'] }, { duration: 1, ease: [0.22, 1, 0.36, 1] }],
      ['.arrow', { x: ['100%', '0%'] }, { duration: 1, ease: [0.22, 1, 0.36, 1] }]
    ];

    animate(sequence, { delay: 0.5 });
  }, [animate]);
  return scope;
}
