import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function OverView({}) {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.9', 'start .1']
  });

  const paragraph =
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat';
  const words = paragraph.split(' ');
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <p
        ref={textRef}
        className={'flex flex-wrap text-3xl md:text-5xl leading-1 p-5 text-theme-accent'}
      >
        <span className="sr-only">{paragraph}</span>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={'relative mr-2 mt-4 '}>
      {children.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={'absolute text-theme-muted opacity-[20%]'}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
