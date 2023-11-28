import React, { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { DtCard, MdCard } from '../components/articleCards';
import { useResize } from '@/utils/useResize';
import Link from 'next/link';

export default function RecentProjects({ projects }) {
  const { viewMode } = useResize();

  function getProjectCount() {
    return projects.length;
  }

  return (
    <section className="w-full mx-auto min-h-screen flex-col gap-10 flex justify-around overflow-hidden ">
      <h2 className="font-basement text-theme-muted text-lg tracking-tight font-extrabold">
        Recent Projects
      </h2>
      <div className="">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {projects.map((project, index) => (
              <Fragment key={index}>
                <MdCard
                  title={project.title}
                  publishedAt={project.publishedAt}
                  slug={`/projects/${project.slug}`}
                  mainImage={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
                  categories={project.projectCategory}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className=" w-full relative  mx-auto ">
            <table className="text-left  rtl:text-right table-auto  w-full mt-[4rem]">
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
                {projects.map((project, index) => (
                  <Fragment key={index}>
                    <DtCard
                      title={project.title}
                      publishedAt={project.publishedAt}
                      mainImage={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      categories={project.projectCategory} // Pass projectCategories to MdCard
                      slug={`/projects/${project.slug}`}
                    />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* <h1 className="text-5xl text-center ">Project Case Studies Coming Soon!</h1> */}
      <Link
        className=" inline-flex items-center gap-5 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
        passHref
        role="link"
        href="/projects"
        aria-label="View all projects"
      >
        <span className="text-lg relative">
          View All Projects
          <span className="text-xs ml-1 absolute">{getProjectCount()}</span>
        </span>
        <FiArrowRight className="" />
      </Link>
    </section>
  );
}
