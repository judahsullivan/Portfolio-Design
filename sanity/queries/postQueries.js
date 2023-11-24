import { groq } from 'next-sanity';

const postFields = groq`
 _type,
  title,
    description,
    featured,
 mainImage{
    alt,
   asset ->{
  url
   },
},
    publishedAt,
    body,
    tags[]->{
      title
    },
    categories[]->{
      title,
      description
    },
  author->{
    name,
  } 
`;

export const featuredArticlesQuery = groq`
*[_type == "post"] | order(publishedAt) | order(featured)[0..4]{
${postFields}
}
`;

export const ArticleQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    body,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    body,
    ${postFields}
  }
}`;
