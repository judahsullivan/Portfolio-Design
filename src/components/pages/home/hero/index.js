import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link.js';

export default function Hero({ heading, roles }) {
  const phrase =
    'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.';
  const textSegments = [
    'The combination of my passion for pixel ',
    <span key="perfect">perfect design</span>,
    ', ',
    <span key="clean">clean code</span>,
    ' & ',
    <span key="interaction">user interaction</span>,
    ' gives me the skillset to set a new height ',
    <span key="web">web design world</span>,
    '.'
  ];
  return (
    <div className=" justify-center min-h-screen w-full flex flex-col">
      <div className=" space-y-10">
        <h3 className="text-3xl font-bold">{heading}</h3>
        <h1 className="inline-block text-6xl md:text-8xl w-full leading-tight tracking-tighest font-basement font-extrabold ">
          {roles}
        </h1>
        <hr className="w-full mx-auto  border-theme-muted" />
        <div className={' gap-5  max-w-5xl flex justify-between mx-auto flex-col md:flex-row  '}>
          <p className=" m-0 [&>*:nth-child(1)]:space-x-2 leading-[1.3] ">
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

          <div className=" gap-4 flex flex-col w-full justify-between">
            <p>{textSegments}</p>

            <Link
              href="/contact"
              className=" inline-flex items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
              aria-label="head to contact page"
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
