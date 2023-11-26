import { RichTextComponent } from '@/components/common/richText';
import NotFound from '@/pages/404';
import { PortableText } from '@portabletext/react';

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
        <article>
          <h1 className="text-5xl  font-basement">{project.title}</h1>
          <PortableText content={project.body} components={RichTextComponent} />
        </article>
      )}
    </div>
  );
}
