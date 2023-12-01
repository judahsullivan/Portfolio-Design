import { FiArrowRight } from 'react-icons/fi';
import { MdCard, DtCard } from '../components/articleCards/index.js';
import { useResize } from '@/utils/useResize';
import Link from 'next/link.js';
import ContentAnimations from '@/components/common/contentAnimations/index.js';

export default function FeaturedArtices({ articles }) {
  const { viewMode } = useResize();
  const contentScopeRef = ContentAnimations();
  const title = 'Featured Articles';
  const description = 'Here are some of the recent articles I have written.';

  function getArticleCount() {
    return articles.length;
  }

  return (
    <section
      ref={contentScopeRef}
      className="w-full mx-auto min-h-screen flex-col gap-6 flex justify-center overflow-hidden "
    >
      <div>
        <h2 className="space-x-2 text-theme-accent font-basement text-2xl md:text-4xl tracking-tight font-extrabold">
          {title.split(' ').map((i, index) => {
            return (
              <span key={index} className="overflow-hidden inline-block">
                <span className="title inline-block">{i}</span>
              </span>
            );
          })}
        </h2>
        <div className="w-full">
          <hr className="w-full mx-auto my-auto line border-theme-base border" />
          <div>
            <p className="space-x-1">
              <span className="sr-only">{description}</span>
              {description.split(' ').map((name, key) => {
                return (
                  <span key={key} className="overflow-hidden inline-block">
                    <span className="text-xl   inline-block title  text-theme-base  ">{name}</span>
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="">
        {viewMode === 'grid' ? (
          <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-2">
            {articles.map((article, index) => (
              <span className=" overflow-hidden " key={index}>
                <MdCard
                  title={article.title}
                  publishedAt={article.publishedAt}
                  mainImage={article.mainImage.asset.url}
                  alt={article.mainImage.alt}
                  categories={article.categories}
                  slug={`/blog/${article.slug}`}
                />
              </span>
            ))}
          </div>
        ) : (
          <>
            <DtCard contents={articles} />
          </>
        )}
      </div>
      <Link
        href="/blog"
        role="link"
        className=" inline-flex items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
        passHref
      >
        <span className="sr-only">Explore all Articles I have created.</span>
        <span className="text-lg relative">
          View all Articles
          <span className="text-xs ml-1 absolute">{getArticleCount()}</span>
        </span>
        <FiArrowRight className="" />
      </Link>
    </section>
  );
}
