import { Fragment } from 'react';
import SEO from '../settings/seo';
import LenisProvider from './lenisProvider';

export default function PageLayout({ children, title, description, keywords, url }) {
  return (
    <Fragment>
      <SEO title={title} description={description} keywords={keywords} url={url} />
      <LenisProvider>
        <main data-scroll-container>{children}</main>
      </LenisProvider>
    </Fragment>
  );
}
