import PageLayout from '@/components/layouts/pageLayout';
import BlogIndex from '@/components/pages/blog';
import { getAllArticles } from '../../../sanity/queries/postQueries';

export default function Blog({ articles }) {
  return (
    <PageLayout title="Blog" description="" keywords={['']} url="blog">
      <BlogIndex articles={articles} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles
    },
    revalidate: 300
  };
}
