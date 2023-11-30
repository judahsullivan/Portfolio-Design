import { useResize } from '@/utils/useResize';
import { useAnimate, useInView, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function ContentAnimations() {
  const [contentScope, animate] = useAnimate();
  const isInView = useInView(contentScope);
  const { width, viewMode, toggleViewMode } = useResize();

  useEffect(() => {
    const dTSequence = [
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
        '.title',
        {
          y: ['100%', '0%']
        },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ],
      []
    ];

    if (isInView) {
      if (width && width <= 1008) {
      } else {
        animate(dTSequence);
      }
    }
  }, [isInView, animate, viewMode, width, toggleViewMode]);

  return contentScope;
}
