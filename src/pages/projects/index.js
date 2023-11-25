import PageLayout from '@/components/layouts/pageLayout';
import ProjectsIndex from '@/components/pages/projects';

export default function Projects({ projects }) {
  return (
    <PageLayout>
      <ProjectsIndex />
    </PageLayout>
  );
}

export async function getStaticProps() {
  // const projects = await client.fetch();

  return {
    props: {}
  };
}
