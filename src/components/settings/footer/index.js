import Image from 'next/image';
import HeroImage from '@/public/assets/images/hero.webp';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { settings } from '@/utils/data';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  // const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.footer
      ref={container}
      className=" w-full min-h-screen
      bg-theme-muted flex flex-col relative justify-between  text-theme-base "
    ></motion.footer>
  );
}
