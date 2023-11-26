import { DtCard, MdCard } from '../home/components/articleCards';
import { Fragment } from 'react';

import { MdGridView } from 'react-icons/md';
import { FaList } from 'react-icons/fa';

export default function ProjectsIndex({ projects }) {
  return (
    <div className="min-h-screen justify-center space-y-10 flex flex-col items-center w-full">
      <h1 className=" text-4xl lg:text-6xl font-basement">
        Innovating Horizons: Crafting the Future of Digital Experiences
      </h1>
      <hr className="w-full border-theme-base mt-10" />
      <div className="w-full">
        <div className="flex px-5 flex-col justify-between items-center md:flex-row">
          <div className="space-x-2">
            <button className="rounded-full p-5 px-10 w-full border border-black ">All</button>
          </div>
          <div className="hidden items-center  lg:flex  space-x-2">
            <button className="text-center rounded-full h-24 w-24 border border-black ">
              <FaList className=" w-full text-2xl text-theme-base" />
            </button>
            <button className="rounded-full h-24 w-24 border border-black ">
              <MdGridView className="w-full text-2xl text-theme-base" />
            </button>
          </div>
        </div>
        <div className="pt-[4rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {projects.map((project, index) => (
              <Fragment key={index}>
                <MdCard
                  title={project.title}
                  publishedAt={project._publishedAt}
                  mainImage={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
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
                {projects.map((project, index) => (
                  <Fragment key={index}>
                    <DtCard
                      title={project.title}
                      publishedAt={project.publishedAt}
                      mainImage={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      categories={project.projectCategory} // Pass projectCategories to MdCard
                    />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
