import NotFound from '@/pages/404';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '@/components/common/richText';
import FormattedDate from '@/components/common/formattedDate';

export default function ArticleIndex({ article }) {
  const slug = article?.slug;
  if (!slug && !article) {
    NotFound();
  }
  return (
    <div className="flex min-h-screen w-full justify-center items-center ">
      {!article ? (
        <h1>Loading...</h1>
      ) : (
        <div className="min-h-screen w-full  flex flex-col items-center gap-y-4 justify-center">
          <h1 className="text-4xl lg:text-6xl font-basement">{article.title}</h1>
          <div className="w-full">
            <hr className="w-full border-theme-base border" />
            <p className="w-full">
              <span className="text-xl">{article.categories.title}</span>
            </p>
          </div>

          <section className="flex w-full flex-col items-center h-full  lg:flex-row">
            <div className="w-full justify-between pb-10 flex flex-col">
              <h2 className="text-2xl font-semibold ">{article.heading}</h2>

              <div className=" max-w-md flex-col flex items-center justify-between  gap-5 h-full">
                <p className="leading-relaxed tracking-widest text-lg">
                  <span className="text-theme-base relative overflow-hidden pb-1.5 text-md font-thin">
                    {article.description}
                  </span>
                </p>
                <p className="leading-relaxed flex flex-wrap space-x-5 tracking-widest text-lg">
                  {article.tags.map((tag) => (
                    <span
                      key={tag.title}
                      className=" bg-theme-muted rounded-md text-theme-muted-inverted relative overflow-hidden pb-1.5 text-xs p-2 font-thin"
                    >
                      {tag.title}
                    </span>
                  ))}
                </p>

                <p>
                  <FormattedDate dateString={article.publishedAt} />
                </p>
              </div>
            </div>

            <div className="w-full flex items-center p-12 bg-theme-muted rounded-md justify-center">
              <Image
                width={1000}
                height={500}
                src={article.mainImage.asset.url}
                alt={article.mainImage.alt}
                className="rounded-lg object-cover "
              />
            </div>
            <article>
              <PortableText components={RichTextComponent} content={article.body} />
            </article>
          </section>
        </div>
      )}
    </div>
  );
}
