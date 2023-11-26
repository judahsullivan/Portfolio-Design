import PageLayout from '@/components/layouts/pageLayout';
import ProjectsIndex from '@/components/pages/projects';
import { ArticleQuery } from '../../../sanity/queries/postQueries';
import { client } from '../../../sanity/lib/client';
import { ProjectCaseQueries } from '../../../sanity/queries/projectQueries';

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <PageLayout>
      <ProjectsIndex projects={projects} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(ProjectCaseQueries);

  return {
    props: {
      projects
    },
    revalidate: 100
  };
}
