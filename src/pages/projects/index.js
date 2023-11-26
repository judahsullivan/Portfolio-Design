import PageLayout from '@/components/layouts/pageLayout';
import ProjectsIndex from '@/components/pages/projects';
import { ArticleQuery } from '../../../sanity/queries/postQueries';
import { client } from '../../../sanity/lib/client';
import { ProjectCaseQueries, getAllProjects } from '../../../sanity/queries/projectQueries';

export default function Projects({ projects }) {
  return (
    <PageLayout
      title={'Projects'}
      description={'List of Projects I have created over my time of being a Software Engineer'}
      keywords={['', '', '', '', '', '', '']}
    >
      <ProjectsIndex projects={projects} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects
    },
    revalidate: 100
  };
}
