import AppLayout from '@/components/layouts/appLayout';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isStudioPage = router.route.startsWith('/studio');
  return (
    <Fragment>
      {isStudioPage ? (
        <Fragment>
          <Component {...pageProps} />
          <Analytics />
        </Fragment>
      ) : (
        <AppLayout>
          <Component {...pageProps} />
          <Analytics />
        </AppLayout>
      )}
    </Fragment>
  );
}
