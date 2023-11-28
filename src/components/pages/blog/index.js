import { Fragment, useEffect, useState } from 'react';
import { MdCard, DtCard } from '../home/components/articleCards';
import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { useResize } from '@/utils/useResize';

export default function BlogIndex({ articles }) {
  const title =
    'Join us in a visionary exploration of the digital landscape, where we delve into the unfolding future, unraveling innovations, and groundbreaking trends that elevate our understanding of the digital realm. Discover the forefront of technological evolution and expand your horizons as we navigate the ever-evolving digital world together';
  const description =
    'Join us in a visionary exploration of the digital landscape, where we delve into the unfolding future, unraveling innovations, and groundbreaking trends that elevate our understanding of the digital realm. Discover the forefront of technological evolution and expand your horizons as we navigate the ever-evolving digital world together';
  const metaKeywords = [
    'Future Technology',
    'Digital Trends',
    'Innovation Insights',
    'Technological Evolution',
    'Digital Transformation',
    'Emerging Technologies',
    'Futuristic Perspectives',
    'Tech Exploration',
    'Digital Innovations',
    'Cyberworld Insights'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const { viewMode, toggleViewMode } = useResize(); // Use the custom hook

  const filterArticles = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Extract unique categories from projects
    const categories = [...new Set(articles.map((article) => article.categories.title))];
    setUniqueCategories(categories);
  }, [articles]);

  const getArticleCount = (category) => {
    if (category === 'All') {
      return articles.length;
    } else {
      return articles.filter((article) => article.categories.title === category).length;
    }
  };
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.categories.title === selectedCategory);

  return (
    <div className="min-h-screen justify-center space-y-10 flex flex-col items-center w-full">
      <h1 className=" text-4xl lg:text-6xl font-basement">
        Elevating Perspectives by Exploring the Future of the Digital World{' '}
      </h1>
      <hr className="w-full border-theme-base mt-10" />
      <div className="w-full">
        <div className="flex px-5 flex-col justify-between items-center md:flex-row">
          <div className="flex relative w-full flex-wrap text-xl gap-10 items-center">
            <button role="filter" aria-label="All " onClick={() => filterArticles('All')}>
              All
              <span className="text-xs ml-2 absolute">{getArticleCount('All')}</span>
              <span className="sr-only">All categories</span>
            </button>

            {uniqueCategories.map((category, index) => (
              <button
                role="filter"
                aria-label="Filtered categories"
                key={index}
                onClick={() => filterArticles(category)}
              >
                {category}
                <span className="text-xs ml-1 absolute">{getArticleCount(category)}</span>
              </button>
            ))}
          </div>
          <div className="hidden items-center  lg:flex  space-x-2">
            <button
              onClick={() => toggleViewMode('list')}
              className="text-center rounded-full h-24 w-24 border border-black "
            >
              <FaList className=" w-full text-2xl text-theme-base" />
            </button>
            <button
              onClick={() => toggleViewMode('grid')}
              className="rounded-full h-24 w-24 border border-black "
            >
              <MdGridView className="w-full text-2xl text-theme-base" />
            </button>
          </div>
        </div>
        <div className="pt-[4rem]">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredArticles.map((article, index) => (
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
            <div className=" w-full relative  mx-auto ">
              <table className="text-left  rtl:text-right table-auto   w-full mt-[4rem]">
                <thead className=" bg-theme-muted rounded-md border text-theme-muted-inverted">
                  <tr className="font-basement">
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
                  {filteredArticles.map((article, index) => (
                    <Fragment key={index}>
                      <DtCard
                        title={article.title}
                        publishedAt={article.publishedAt}
                        mainImage={article.mainImage.asset.url}
                        alt={article.mainImage.alt}
                        slug={`/blog/${article.slug}`}
                        categories={article.categories}
                      />
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
