import PageLayout from '@/components/layouts/pageLayout';
import {
  getAllProjectSlugs,
  getProjectAndMoreProjectCases
} from '../../../sanity/queries/projectQueries';
import { client } from '../../../sanity/lib/client';
import ProjectCase from '@/components/pages/projects/projectCase';

export default function Project({ project, moreProjects }) {
  if (!project || !moreProjects) {
    return <div>Loading...</div>; // Or handle this scenario as needed
  }

  return (
    <PageLayout title={''} description={''} keywords={''}>
      <ProjectCase project={project} moreProjects={moreProjects} />
    </PageLayout>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  try {
    const { project, moreProjects } = await getProjectAndMoreProjectCases(client, params.slug);

    // Ensure project and moreProjects are defined
    if (!project || !moreProjects) {
      return {
        notFound: true // Or handle this scenario as needed
      };
    }

    return {
      props: {
        project,
        moreProjects
      }
    };
  } catch (error) {
    return {
      notFound: true // Handle errors or return custom error page
    };
  }
}

export async function getStaticPaths() {
  const slugs = await getAllProjectSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/projects/${slug}`) || [],
    fallback: 'blocking'
  };
}
