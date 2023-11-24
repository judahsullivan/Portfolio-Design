import { FiArrowRight } from 'react-icons/fi';
import { MdCard, DtCard } from '../components/articleCards/index.js';
import { Fragment } from 'react';

export default function FeaturedArtices({ articles }) {
  return (
    <section className="w-full mx-auto min-h-screen flex-col gap-10 flex justify-around overflow-hidden ">
      <h4 className="font-basement text-theme-muted text-lg tracking-tight font-extrabold">
        Featured Articles
      </h4>
      <div className="w-full">
        {articles.map((article, index) => (
          <Fragment key={index}>
            <MdCard
              title={article.title}
              publishedAt={article._publishedAt}
              mainImage={article.mainImage.asset.url}
              alt={article.mainImage.alt}
              category={article.categories.title}
            />
            <DtCard
              title={article.title}
              publishedAt={article.publishedAt}
              mainImage={article.mainImage.asset.url}
              alt={article.mainImage.alt}
            />
          </Fragment>
        ))}
      </div>

      {/* <h1 className="text-5xl text-center ">Blog Articles Coming Soon!</h1> */}

      <button className="inline-flex font-thin items-center gap-2 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   ">
        view all Articles
        <FiArrowRight className="" />
      </button>
    </section>
  );
}
