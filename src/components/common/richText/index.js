import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponent = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image className="object-contain" src={value} alt="Blog post Image" fill></Image>
        </div>
      );
    }
  },
  list: {
    bullet: ({ children }) => <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg list-decimal">{children}</ol>
  },
  block: {
    h1: ({ children }) => <h1 className="py-10 text-5xl font-basement ">{children}</h1>,
    h2: ({ children }) => <h2 className="py-10 text-4xl font-basement ">{children}</h2>,
    h3: ({ children }) => <h3 className="py-10 text-3xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="py-10 text-2xl font-bold">{children}</h4>,

    blockquote: ({ children }) => (
      <blockquote className="my-5 border-l-4 border-l-emphasize py-5 pl-5">{children}</blockquote>
    )
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;

      return (
        <Link
          href={value.href}
          target="_blank"
          rel={rel}
          className="underline decoration-emphasize hover:decoration-black"
        >
          {children}
        </Link>
      );
    }
  }
};
