import React, { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { DtCard, MdCard } from '../components/articleCards';
import { useResize } from '@/utils/useResize';
import Link from 'next/link';
import ContentAnimations from '@/components/common/contentAnimations/index.js';

export default function RecentProjects({ projects }) {
  const { viewMode } = useResize();
  const contentScope = ContentAnimations();

  const title = 'Recent Projects';
  const description =
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
  function getProjectCount() {
    return projects.length;
  }

  return (
    <section
      ref={contentScope}
      className="w-full mx-auto min-h-screen flex-col gap-10 flex justify-around overflow-hidden "
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
      >
        <span className="sr-only">Browse all Projects I have created</span>
        <span className="text-lg relative">
          View all Projects
          <span className="text-xs ml-1 absolute">{getProjectCount()}</span>
        </span>
        <FiArrowRight className="" />
      </Link>
    </section>
  );
}
