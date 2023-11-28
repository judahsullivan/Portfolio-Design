import FormattedDate from '@/components/common/formattedDate';
import { RichTextComponent } from '@/components/common/richText';
import NotFound from '@/pages/404';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default function ProjectCase({ project }) {
  const slug = project?.slug;
  if (!slug && !project) {
    NotFound();
  }
  return (
    <div className="flex min-h-screen w-full justify-center items-center ">
      {!project ? (
        <h1>Loading...</h1>
      ) : (
        <div className="min-h-screen w-full  flex flex-col items-center gap-y-4 justify-center">
          <h1 className="text-4xl lg:text-6xl text-theme-accent font-basement">{project.title}</h1>
          <div className="w-full">
            <hr className="w-full border-theme-base border" />
            <p className="w-full">
              <span className="text-xl font-basement text-theme-accent">
                {project.projectCategory.title}
              </span>
            </p>
          </div>

          <section className="flex w-full flex-col items-center h-full  lg:flex-row">
            <div className="w-full justify-between pb-10 flex flex-col">
              <div className=" max-w-md flex-col flex items-center justify-between  gap-5 h-full">
                <h2 className="text-2xl font-semibold ">{project.heading}</h2>
                <p className="leading-relaxed tracking-wide text-lg">
                  <span className="text-theme-base relative overflow-hidden pb-1.5 text-md font-thin">
                    {project.description}
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-center items-center lg:items-start  w-full ">
                  <div className="flex flex-wrap justify-center lg:justify-normal items-center gap-2">
                    {project.projectTags.map((tag) => (
                      <span
                        key={tag.title}
                        className=" bg-theme-accent rounded-md text-theme-muted-inverted relative overflow-hidden pb-1.5 text-xs p-2 font-thin"
                      >
                        {tag.title}
                      </span>
                    ))}
                  </div>

                  <p className="text-center lg:text-start w-full">
                    <FormattedDate dateString={project.publishedAt} />
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center p-12 bg-theme-muted rounded-md justify-center">
              <Image
                width={1000}
                height={500}
                priority
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt}
                className="rounded-lg object-cover "
              />
            </div>
            <project>
              <PortableText components={RichTextComponent} content={project.body} />
            </project>
          </section>
        </div>
      )}
    </div>
  );
}
