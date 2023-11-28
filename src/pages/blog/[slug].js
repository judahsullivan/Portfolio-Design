import PageLayout from '@/components/layouts/pageLayout';
import ArticleIndex from '@/components/pages/blog/Article';
import { getArticleAndMoreArticles, getAllArticlesSlug } from '../../../sanity/queries/postQueries';
import { client } from '../../../sanity/lib/client';

export default function Article({ article, moreArticles }) {
  if (!article || !moreArticles) {
    return <div>Loading...</div>; // Or handle this scenario as needed
  }
  const tagTitles = article ? article.tags.map((tag) => tag.title) : [];

  return (
    <PageLayout title={article.title} description={article.description} keywords={tagTitles}>
      <ArticleIndex article={article} moreArticles={moreArticles} />
    </PageLayout>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  try {
    const { article, moreArticles } = await getArticleAndMoreArticles(client, params.slug);

    // Ensure project and moreProjects are defined
    if (!article || !moreArticles) {
      return {
        notFound: true // Or handle this scenario as needed
      };
    }

    return {
      props: {
        article,
        moreArticles
      }
    };
  } catch (error) {
    return {
      notFound: true // Handle errors or return custom error page
    };
  }
}

export async function getStaticPaths() {
  const slugs = await getAllArticlesSlug();

  return {
    paths: slugs?.map(({ slug }) => `/blog/${slug}`) || [],
    fallback: 'blocking'
  };
}
