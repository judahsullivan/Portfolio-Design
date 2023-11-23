import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../settings/navigation';
import Footer from '../settings/footer';
import { settings } from '@/utils/data';
import styles from './appLayout.module.css';

export default function AppLayout({ children }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div className="min-h-screen overflow-hidden  w-full flex flex-col ">
      <Navbar />
      <div>
        <div ref={container} className=" min-h-[100dvh] pt-[4rem] p-4 max-w-6xl mx-auto">
          {children}
        </div>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={`${styles.circle} bg-theme-base`}></div>
        </motion.div>
      </div>

      <Footer {...settings} />
    </div>
  );
}
