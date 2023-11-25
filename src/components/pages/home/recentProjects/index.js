import React, { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { DtCard, MdCard } from '../components/articleCards';

export default function RecentProjects({ projects }) {
  return (
    <section className="w-full mx-auto min-h-screen flex-col gap-10 flex justify-around overflow-hidden ">
      <h4 className="font-basement text-theme-muted text-lg tracking-tight font-extrabold">
        Recent Projects
      </h4>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:block">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <MdCard
              title={project.title}
              publishedAt={project._publishedAt}
              mainImage={project.mainImage.asset.url}
              alt={project.mainImage.alt}
            />
            <DtCard
              title={project.title}
              publishedAt={project.publishedAt}
              mainImage={project.mainImage.asset.url}
              alt={project.mainImage.alt}
            />
          </Fragment>
        ))}
      </div>

      {/* <h1 className="text-5xl text-center ">Project Case Studies Coming Soon!</h1> */}
      <button className="inline-flex items-center gap-2 place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   ">
        View All Projects
        <FiArrowRight className="" />
      </button>
    </section>
  );
}
