import { FiArrowRight } from 'react-icons/fi';
import { MdCard, DtCard } from '../components/articleCards/index.js';
import { Fragment } from 'react';

export default function FeaturedArtices({ articles }) {
  return (
    <section className="w-full mx-auto min-h-screen flex-col gap-10 flex justify-around overflow-hidden ">
      <h4 className="font-basement text-theme-muted text-lg tracking-tight font-extrabold">
        Featured Articles
      </h4>
      <div className="pt-[4rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {articles.map((article, index) => (
            <Fragment key={index}>
              <MdCard
                title={article.title}
                publishedAt={article.publishedAt}
                mainImage={article.mainImage.asset.url}
                alt={article.mainImage.alt}
                categories={article.categories}
              />
            </Fragment>
          ))}
        </div>
        <div className="hidden w-full relative lg:block mx-auto ">
          <table className="text-left  rtl:text-right table-auto  w-full mt-[4rem]">
            <thead>
              <tr className="font-basement">
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Categories
                </th>
                <th scope="col" class="px-6 py-3">
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
                    alt={article.mainImage.alt}
                    categories={article.categories}
                  />
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="inline-flex font-thin items-center gap-2 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   ">
        view all Articles
        <FiArrowRight className="" />
      </button>
    </section>
  );
}
