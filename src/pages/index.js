import Hero from "@/components/pages/home/hero";
import OverView from "@/components/pages/home/overview";
import PageLayout from "@/components/layouts/pageLayout";
import { homeData } from "@/utils/data";
import FeaturedArticles from "@/components/pages/home/featuredArticles";
import RecentProjects from "@/components/pages/home/recentProjects";

export default function Home() {
  return (
    <PageLayout
      title={homeData.title}
      description={homeData.description}
      keywords={homeData.keywords}
    >
      <Hero {...homeData.hero} />
      <OverView {...homeData.overview} />
      {/* <FeaturedArticles /> */}
      <RecentProjects />
    </PageLayout>
  );
}
