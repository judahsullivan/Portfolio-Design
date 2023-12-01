import { useResize } from '@/utils/useResize';
import { useAnimate, useInView, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function ContentAnimations() {
  const [contentScope, animate] = useAnimate();
  const isInView = useInView(contentScope, { once: true, margin: '100px' });
  const { viewMode, toggleViewMode } = useResize();

  useEffect(() => {
    const mDSequenence = [
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
      [
        '.container',
        {
          width: ['0%', '100%']
        },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.card-line',
        {
          width: ['0%', '100%']
        },
        {
          duration: 0.5
        }
      ],
      [
        '.card-description',
        {
          y: ['100%', '0%']
        },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ]
    ];

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
      [
        '.table-head',
        {
          height: ['0px'],
          overflow: 'hidden'
        },
        { duration: 0.8, delay: stagger(0.0765), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.table-heading',
        {
          y: ['100%', '0%']
        },
        { duration: 0.8, delay: stagger(0.0165), ease: [0.22, 1, 0.36, 1] }
      ],
      [
        '.table-description',
        {
          y: ['100%', '0%']
        },

        { duration: 0.8, delay: stagger(0.0165), ease: [0.22, 1, 0.36, 1] }
      ]
    ];

    if (isInView) {
      if (viewMode === 'grid') {
        animate(mDSequenence);
      } else {
        animate(dTSequence);
      }
    }
  }, [isInView, animate, viewMode, toggleViewMode]);

  return contentScope;
}
