import { useTextDifferentiation } from '@/utils/useTextDifferentation';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link.js';
import HeroAnimations from './heroAnimations';
import { useScroll, useSpring } from 'framer-motion';

export default function Hero({ heading, roles, callToAction, phrase }) {
  const cta = useTextDifferentiation(callToAction);
  const scope = HeroAnimations();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start start', 'end end']
  // });
  // const scrollYProgressSpring = useSpring(scrollYProgress, {
  //   stiffness: 300,
  //   damping: 40
  // });
  // const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  // const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  // const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

  return (
    <div ref={scope} className="md:justify-center min-h-screen w-full flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          <span className="sr-only">{roles}</span>
          {roles.split(' ').map((role, key) => {
            return (
              <span key={key} className="overflow-hidden inline-block">
                <span className="text-4xl  lg:text-6xl  inline-block  font-basement text-theme-accent title ">
                  {role}
                </span>
              </span>
            );
          })}
        </div>
        <div className="w-full">
          <hr className="w-full mx-auto my-auto line border-theme-base border" />
          <div>
            <h1 className="space-x-2">
              <span className="sr-only">{heading}</span>
              {heading.split(' ').map((name, key) => {
                return (
                  <span key={key} className="overflow-hidden inline-block">
                    <span className="text-xl   inline-block  font-basement text-theme-base  name  ">
                      {name}
                    </span>
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
        <div className={' gap-5  max-w-5xl flex justify-between mx-auto flex-col md:flex-row  '}>
          <p className=" m-0 [&>*:nth-child(1)]:space-x-2 font-bold tracking-wide leading-[1.3] ">
            <span className="sr-only">{phrase}</span>
            {phrase.split(' ').map((word, index) => {
              return (
                <span
                  key={index}
                  className={'relative overflow-hidden  mx-w-sm text-2xl inline-flex'}
                >
                  <span className={'mr-1.5 desc  normal-case text-theme-muted'}>{word}</span>
                </span>
              );
            })}
          </p>
          <div className=" gap-2 flex flex-col w-full justify-between">
            <p className="">
              <span className="sr-only">{cta}</span>
              {cta.map((word, index) => {
                return (
                  <span key={index} className={' overflow-hidden inline-flex'}>
                    <span className={'mr-1.5 desc normal-case text-theme-muted'}>{word}</span>
                  </span>
                );
              })}
            </p>
            <Link
              href="/contact"
              role="link"
              passHref
              className=" items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
            >
              <span className="sr-only">Get in touch</span>
              <span className="inline-flex items-center gap-2 overflow-hidden">
                <span className="contact text-lg relative">Get in Touch</span>
                <FiArrowRight className="arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
