import { Fragment } from 'react';
import SEO from '../settings/seo';
import { LenisProvider } from './lenisProvider';

export default function PageLayout({ children, title, description, keywords, url }) {
  return (
    <LenisProvider
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.8,
        smoothWheel: true
      }}
    >
      <SEO title={title} description={description} keywords={keywords} url={url} />
      <main>{children}</main>
    </LenisProvider>
  );
}
