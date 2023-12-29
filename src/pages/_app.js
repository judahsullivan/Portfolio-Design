import AppLayout from '@/components/layouts/appLayout';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isStudioPage = router.route.startsWith('/studio');
  return (
    <Fragment>
      {isStudioPage ? (
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <AppLayout>
          <AnimatePresence mode="wait" initial={true} onExitComplete={() => scrollTo(0, 0)}>
            <motion.div key={router.asPath}>
              <Component {...pageProps} />
            </motion.div>
            <Analytics />
          </AnimatePresence>
        </AppLayout>
      )}
    </Fragment>
  );
}
