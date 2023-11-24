import AppLayout from '@/components/layouts/appLayout';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isStudioPage = router.route.startsWith('/studio');
  return (
    <Fragment>
      {isStudioPage ? (
        <Component {...pageProps} />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </Fragment>
  );
}
