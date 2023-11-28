import Head from 'next/head';

const SEO = ({ title, description, keywords, url }) => {
  const siteTitle = 'Judah Sullivan';
  const siteDescription =
    'Welcome to my Portfolio and Blog. Where I share my progress and knowledge as a Engineer and Passionate Developer.';
  const defaultKeywords =
    'Next.js, Tailwindcss, Portfolio, Web development, front-end development, back-end development, full-stack development,  React, JavaScript, HTML, CSS, Git, Agile, Scrum, responsive design';

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={`${defaultKeywords.join(', ')}, ${keywords}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteTitle} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://judahsullivan.dev/${url}`} />{' '}
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image" content="Link preview image URL" />
      <meta property="twitter:image" content="Twitter link preview image URL" />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image:alt" content={siteTitle} />
      <link rel="canonical" href={`https://judahsullivan.dev/${url}`} /> {/* Canonical URL */}
      <link rel="shortcut icon" href="/assets/images/memojis/navbar.png" type="image/png" />{' '}
    </Head>
  );
};

export default SEO;
