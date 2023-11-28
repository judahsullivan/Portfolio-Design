import { FiArrowRight } from 'react-icons/fi';
import { MdCard, DtCard } from '../components/articleCards/index.js';
import { Fragment } from 'react';
import { useResize } from '@/utils/useResize';
import Link from 'next/link.js';

export default function FeaturedArtices({ articles }) {
  const { viewMode } = useResize();

  function getArticleCount() {
    return articles.length;
  }

  return (
    <section className="w-full mx-auto min-h-screen flex-col gap-6 flex justify-center overflow-hidden ">
      <h2 className="font-basement text-theme-muted text-lg tracking-tight font-extrabold">
        Featured Articles
      </h2>
      <div className="">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {articles.map((article, index) => (
              <Fragment key={index}>
                <MdCard
                  title={article.title}
                  publishedAt={article.publishedAt}
                  mainImage={article.mainImage.asset.url}
                  alt={article.mainImage.alt}
                  categories={article.categories}
                  slug={`/blog/${article.slug}`}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className=" w-full relative mx-auto ">
            <table className="text-left  rtl:text-right table-auto  w-full mt-[4rem]">
              <thead className=" bg-theme-muted rounded-md  text-theme-muted-inverted">
                <tr className="font-basement ">
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categories
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <Fragment key={index}>
                    <DtCard
                      title={article.title}
                      publishedAt={article.publishedAt}
                      mainImage={article.mainImage.asset.url}
                      slug={`/blog/${article.slug}`}
                      alt={article.mainImage.alt}
                      categories={article.categories}
                    />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Link
        href="/blog"
        role="link"
        className=" inline-flex items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
        passHref
        aria-label="View all articles"
      >
        <span className="text-lg relative">
          View all Articles
          <span className="text-xs ml-1 absolute">{getArticleCount()}</span>
        </span>
        <FiArrowRight className="" />
      </Link>
    </section>
  );
}
