import { useState, useEffect, Fragment } from 'react';
import { MdCard, DtCard } from '../home/components/articleCards';
import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { useResize } from '@/utils/useResize';

export default function ProjectsIndex({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const { viewMode, toggleViewMode } = useResize(); // Use the custom hook

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    // Extract unique categories from projects
    const categories = [...new Set(projects.map((project) => project.projectCategory.title))];
    setUniqueCategories(categories);
  }, [projects]);

  const getProjectsCount = (category) => {
    if (category === 'All') {
      return projects.length;
    } else {
      return projects.filter((project) => project.projectCategory.title === category).length;
    }
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.projectCategory.title === selectedCategory);

  return (
    <div className="min-h-screen justify-center space-y-10 flex flex-col items-center w-full">
      <h1 className="text-4xl lg:text-6xl font-basement">
        Innovating Horizons: Crafting the Future of Digital Experiences
      </h1>
      <hr className="w-full border-theme-base mt-10" />
      <div className="w-full">
        <div className="flex px-5 flex-col justify-between items-center md:flex-row">
          <div className="flex relative w-full flex-wrap text-xl gap-10 items-center">
            <button onClick={() => filterProjects('All')}>
              All
              <span className="text-xs ml-1 absolute">{getProjectsCount('All')}</span>
            </button>
            {uniqueCategories.map((category, index) => (
              <button key={index} onClick={() => filterProjects(category)}>
                {category}
                <span className="text-xs ml-1 absolute">{getProjectsCount(category)}</span>
              </button>
            ))}
          </div>
          <div className="hidden items-center lg:flex space-x-2">
            <button
              onClick={() => toggleViewMode('list')}
              className="text-center rounded-full h-24 w-24 border border-black"
            >
              <FaList className="w-full text-2xl text-theme-base" />
            </button>
            <button
              onClick={() => toggleViewMode('grid')}
              className="rounded-full h-24 w-24 border border-black"
            >
              <MdGridView className="w-full text-2xl text-theme-base" />
            </button>
          </div>
        </div>
        <div className="pt-[4rem]">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredProjects.map((project, index) => (
                <Fragment key={index}>
                  <MdCard
                    title={project.title}
                    publishedAt={project.publishedAt}
                    mainImage={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                    categories={project.projectCategory}
                    slug={`/projects/${project.slug}`}
                  />
                </Fragment>
              ))}
            </div>
          ) : (
            <div className="w-full relative block mx-auto">
              <table className="text-left rtl:text-right table-auto w-full mt-[4rem]">
                <thead className="bg-theme-muted rounded-md border text-theme-muted-inverted">
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
                  {filteredProjects.map((project, index) => (
                    <Fragment key={index}>
                      <DtCard
                        title={project.title}
                        publishedAt={project.publishedAt}
                        mainImage={project.mainImage.asset.url}
                        alt={project.mainImage.alt}
                        categories={project.projectCategory}
                        slug={`/projects/${project.slug}`}
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
