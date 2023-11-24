import { groq } from 'next-sanity';

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
projectTags[]->{
title
},
projectCategories[]->{
title,
description
},
author->{
name,
} 
`;

export const recentProjectsQuery = groq`
*[_type == "project"] | order(publishedAt)[0..4]{
${projectFields}
}
`;

export const ArticleQuery = groq`
*[_type == "project"] | order(publishedAt desc) {
  ${projectFields}
}`;

export const ProjectsAndMoreProjectQueries = groq`
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
