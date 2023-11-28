import { motion } from 'framer-motion';
import { useTextDifferentiation } from '@/utils/useTextDifferentation';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link.js';

export default function Hero({ heading, roles }) {
  const phrase =
    'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.';
  const callToAction = [
    'The combination of my passion for pixel ',
    { text: 'perfect design', key: 'perfect' },
    ', ',
    { text: 'clean code', key: 'clean' },
    ' & ',
    { text: 'user interaction', key: 'interaction' },
    ' gives me the skillset to set a new height in the ',
    { text: 'web design world', key: 'web' },
    '.'
  ];
  const cta = useTextDifferentiation(callToAction);

  return (
    <div className="md:justify-center min-h-screen w-full flex flex-col">
      <div className="space-y-7 lg:space-y-10">
        <h1 className="text-4xl lg:text-6xl font-basement text-theme-accent">{roles}</h1>
        <div className="w-full">
          <hr className="w-full border-theme-base border" />
          <p className="w-full">
            <span className="text-xl font-basement text-theme-base">{heading}</span>
          </p>
        </div>
        <div className={' gap-5  max-w-5xl flex justify-between mx-auto flex-col md:flex-row  '}>
          <p className=" m-0 [&>*:nth-child(1)]:space-x-2 font-bold tracking-wide leading-[1.3] ">
            {phrase.split(' ').map((word, index) => {
              return (
                <span
                  key={index}
                  className={'relative overflow-hidden pb-1.5 mx-w-sm text-2xl inline-flex'}
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

          <div className=" gap-2 flex flex-col w-full justify-between">
            <p className="leading-relaxed tracking-[2px] font-normal">{cta}</p>
            <Link
              href="/contact"
              role="link"
              passHref
              className=" inline-flex items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
              aria-label="Get in Touch"
            >
              <span className="text-lg relative">Get in Touch</span>
              <FiArrowRight className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
