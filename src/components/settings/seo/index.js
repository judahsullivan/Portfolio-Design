import Head from 'next/head';
import { meta } from '@/utils/data';

const SEO = ({ title, description, keywords }) => {
  const { siteTitle, siteDescription, defaultKeywords } = meta;

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={`${defaultKeywords.join(', ')}, ${keywords}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content={siteTitle} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Judah Sullvian" />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image:alt" content={siteTitle} />
      <link rel="shortcut icon" href="/assets/images/memojis/navbar.png" type="images/lion" />
    </Head>
  );
};

export default SEO;
