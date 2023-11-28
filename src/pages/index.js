import Hero from '@/components/pages/home/hero';
import PageLayout from '@/components/layouts/pageLayout';
import { homeData } from '@/utils/data';
import RecentProjects from '@/components/pages/home/recentProjects';
import FeaturedArtices from '@/components/pages/home/featuredArticles';
import { client } from '../../sanity/lib/client';
import { featuredArticlesQuery, getFeaturedArticles } from '../../sanity/queries/postQueries';
import { getRecentProjects, recentProjectsQuery } from '../../sanity/queries/projectQueries';

export default function Home({ homeData, featuredPost, recentProjects }) {
  return (
    <PageLayout
      title={homeData.title}
      description={homeData.description}
      keywords={homeData.keywords}
    >
      <Hero {...homeData.hero} />
      <FeaturedArtices articles={featuredPost} />
      <RecentProjects projects={recentProjects} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const featuredPost = await getFeaturedArticles();
  const recentProjects = await getRecentProjects();

  return {
    props: {
      homeData,
      featuredPost,
      recentProjects
    },
    revalidate: 300
  };
}
