import { Fragment } from 'react';
import { motion } from 'framer-motion';
import SEO from '../settings/seo';
import { LenisProvider } from './lenisProvider';

export default function PageLayout({ children, title, description, keywords, url }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 100
    }
  };
  return (
    <Fragment>
      <LenisProvider
        options={{
          lerp: 0.1,
          wheelMultiplier: 0.8,
          smoothWheel: true
        }}
      >
        <SEO title={title} description={description} keywords={keywords} url={url} />
        <motion.main variants={variants} initial={'hidden'} animate="visible" exit="exit">
          {children}
        </motion.main>
      </LenisProvider>
    </Fragment>
  );
}
