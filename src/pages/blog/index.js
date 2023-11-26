import PageLayout from '@/components/layouts/pageLayout';
import BlogIndex from '@/components/pages/blog';
import { client } from '../../../sanity/lib/client';
import { ArticleQuery } from '../../../sanity/queries/postQueries';

export default function Blog({ articles }) {
  return (
    <PageLayout>
      <BlogIndex articles={articles} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const articles = await client.fetch(ArticleQuery);

  return {
    props: {
      articles
    },
    revalidate: 10
  };
}
