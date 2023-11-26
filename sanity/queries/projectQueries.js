import { groq } from 'next-sanity';
import { client } from '../lib/client';

const projectFields = groq`
_type,
  title,
    description,
      mainImage{
        alt,
        asset ->{
          url
          },
      },
  publishedAt,
    body,
      "projectTags": projectTags[]->{
        title
      },
  'projectCategory': projectCategory->{
        title,
          description
        },
      "slug": slug.current,
      "author": author->{
          name,
      } 
`;

export const recentProjectsQuery = groq`
*[_type == "project"] | order(publishedAt desc) [0..4]{
${projectFields}
}
`;

export const projectCaseQueries = groq`
*[_type == "project"] | order(publishedAt desc) {
  ${projectFields}
}`;

export const projectsAndMoreProjectQueries = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(publishedAt desc) [0] {
    body,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    body,
    ${projectFields}
  }
}`;

export const projectSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${projectFields}
}
`;

export async function getRecentProjects() {
  const data = await client.fetch(recentProjectsQuery);
  return data;
}

export async function getAllProjects() {
  const data = await client.fetch(projectCaseQueries);
  return data;
}

export async function getAllProjectSlugs() {
  const slugs = (await client.fetch(projectSlugsQuery)) || [];
  return slugs.map((slug) => ({ _type: 'slug', current: slug }));
}

export async function getProjectBySlug(client, slug) {
  return (await client.fetch(projectBySlugQuery, { slug })) || {}; // Handle response types appropriately
}

export async function getProjectAndMoreProjectCases(client, slug) {
  const data = await client.fetch(projectsAndMoreProjectQueries, { slug });
  return data;
}
