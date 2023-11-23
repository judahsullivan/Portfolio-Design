import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function OverView() {
  const phrase =
    'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.';
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className={' pt-[6rem] min-h-screen flex flex-col gap-20  mx-auto '}>
      <div
        ref={description}
        className={' gap-5  max-w-5xl flex justify-between mx-auto flex-col md:flex-row  '}
      >
        <p className=" m-0 [&>*:nth-child(1)]:space-x-2 leading-[1.3] ">
          {phrase.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                className={'relative overflow-hidden pb-1.5 mx-w-sm text-4xl inline-flex'}
              >
                <motion.span
                  custom={index}
                  className={'mr-1.5  normal-case text-theme-muted'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p className="">
          The combination of my passion for pixel <span>perfect design</span> ,{' '}
          <span> clean code</span> & <span>user interaction</span> gives me the skillset to set a
          new height <span>web design world</span>.
        </motion.p>
      </div>
    </div>
  );
}
