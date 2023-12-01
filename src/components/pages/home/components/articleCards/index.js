import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import FormattedDate from '@/components/common/formattedDate';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ContentAnimations from '@/components/common/contentAnimations';
import StringSplitter from '@/components/common/stringSplitter';

const MdCard = ({ slug, title, publishedAt, mainImage, categories, alt }) => {
  const contentScope = ContentAnimations();
  return (
    <Link href={`${slug}`} ref={contentScope} className="w-full flex card flex-col p-5 ">
      <span className="sr-only">{`Read ${title}`}</span>
      <div className=" container h-[400px] flex items-center justify-center p-5 bg-theme-muted rounded-[5px]">
        <Image
          src={mainImage}
          loading={'eager'}
          decoding="async"
          width={1300}
          height={500}
          className="h-[220px] w-full  object-cover hover:scale-[101%] transition-all duration-200 rounded-[2px]"
          alt={alt}
        />
      </div>

      <div className="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold -tracking-wider">
              <h3 className="space-x-1">
                {title.split(' ').map((t, index) => {
                  return (
                    <span key={index} className="overflow-hidden inline-block">
                      <span className="text-theme-base card-description  text-lg inline-block">
                        {t}
                      </span>
                    </span>
                  );
                })}
              </h3>
            </div>
          </div>
          <hr className="card-line w-full border-theme-muted" />
          <div className="flex px-2 w-full justify-between items-center">
            <p>
              {categories && (
                <span className="">
                  {categories.title.split(' ').map((title, index) => {
                    return (
                      <span key={index} className="overflow-hidden inline-block">
                        <span className="card-description text-theme-base unset text-lg inline-block">
                          {title}
                        </span>
                      </span>
                    );
                  })}
                </span>
              )}
            </p>
            <p>
              <FormattedDate dateString={publishedAt} animationName={'card-description'} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
const DtCard = ({ contents }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();

    const width = rect?.width;
    const height = rect?.height;

    const mouseX = e.clientX - rect?.left;
    const mouseY = e.clientY - rect?.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };
  if (!contents) {
    return <div> no content</div>;
  }

  return (
    <div className="text-left  mx-auto rtl:text-right   w-full mt-[4rem]">
      {contents.map((content, index) => (
        <motion.div
          key={index}
          className="relative  overscroll-y-none border-b   border-theme-muted h-[150px]"
          onMouseMove={handleMouseMove}
          ref={ref}
          initial="initial"
          whileHover="whileHover"
        >
          <Link href={`${content.slug}`}>
            <span className="sr-only">{`Read ${content.title}`}</span>
            <motion.span className="space-x-1">
              {content.title.split(' ').map((t, index) => {
                return (
                  <span key={index} className="overflow-hidden inline-block">
                    <span className="table-description  font-aileron  text-2xl font-semibold text-theme-base transition-colors duration-500 group-hover:text-theme-accent inline-block">
                      {t}
                    </span>
                  </span>
                );
              })}
            </motion.span>
            <motion.div
              style={{
                top,
                left,
                translateX: '-60%',
                translateY: '-50%'
              }}
              variants={{
                initial: { scale: 0, rotate: '0' },
                whileHover: { scale: 1, rotate: '0' }
              }}
              transition={{ type: 'spring' }}
              className="w-[300px] h-[300px] flex items-center justify-center z-0 overflow-hidden absolute rounded-lg object-cover bg-theme-muted p-5"
            >
              <Image
                loading={'eager'}
                decoding="async"
                width={1000}
                height={500}
                src={content.mainImage.asset.url}
                alt={content.mainImage.alt}
                className="w-[400px] max-h-[400px]  object-cover"
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export { MdCard, DtCard };
