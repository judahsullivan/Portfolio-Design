import { groq } from 'next-sanity';
import { client } from '../lib/client';

const postFields = groq`
_type,
  title,
heading,
    description,
      mainImage{
        alt,
        asset ->{
          url
          },
      },
  publishedAt,
    body,
      "tags": tags[]->{
        title
      },
  'categories': categories->{
        title,
          description
        },
      "author": author->{
          name,
      },

      "slug": slug.current,


`;

const featuredArticlesQuery = groq`
*[_type == "post"] | order(publishedAt desc) | order(featured)[0..4]{
${postFields}
}
`;

const articleQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`;

const articleAndMoreArticlesQueries = groq`
{
  "article": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    body,
    ${postFields}
  },
  "moreArticles": *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...2] {
    body,
    ${postFields}
  }
}`;

const articleSlugQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

const articleBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export async function getFeaturedArticles() {
  const data = await client.fetch(featuredArticlesQuery);
  return data;
}

export async function getAllArticles() {
  const data = await client.fetch(articleQuery);
  return data;
}

export async function getAllArticlesSlug() {
  const slugs = (await client.fetch(articleSlugQuery)) || [];
  return slugs.map((slug) => ({ _type: 'slug', current: slug }));
}

export async function getArticleBySlug(client, slug) {
  return (await client.fetch(articleBySlugQuery, { slug })) || {}; // Handle response types appropriately
}

export async function getArticleAndMoreArticles(client, slug) {
  const data = await client.fetch(articleAndMoreArticlesQueries, { slug });
  return data;
}
