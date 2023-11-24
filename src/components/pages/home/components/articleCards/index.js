import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const MdCard = ({ title, publishedAt, mainImage, category, alt }) => {
  return (
    <article className="grid grid-rows-[300px_auto] md:hidden min-h-full group">
      <a className="relative w-full h-full    bg-theme-muted rounded-[5px]" href={''}>
        <Image
          src={mainImage}
          width={600}
          height={200}
          className="h-full w-full  object-contain py-10 px-4 hover:scale-[101%] transition-all duration-200 rounded-[2px]"
          alt={alt}
        />
      </a>

      <div className="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <a className="text-2xl font-semibold -tracking-wider" href={``}>
              {title}
            </a>
          </div>
          <hr className="w-full border-theme-muted" />
          <div className="flex w-full justify-between items-center">
            <p className="overflow-hidden line-clamp-3 text-gray-700 dark:text-white mb-5 font-[400] md:pr-[15%]">
              {category}
            </p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const DtCard = ({ title, alt, publishedAt, mainImage, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div className="hidden md:flex max-w-4xl mx-auto flex-col ">
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-900  transition-colors duration-500 hover:border-neutral-900 md:py-8"
      >
        <div>
          <motion.span className="relative z-10 font-aileron block text-5xl font-extrabold text-theme-base transition-colors duration-500 group-hover:text-theme-accent ">
            <motion.span className="inline-block">{title}</motion.span>
          </motion.span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: '-50%',
            translateY: '-50%'
          }}
          variants={{
            initial: { scale: 0, rotate: '-12.5deg' },
            whileHover: { scale: 1, rotate: '12.5deg' }
          }}
          transition={{ type: 'spring' }}
          src={mainImage}
          className="absolute z-0 h-[400px] w-[400px] rounded-lg object-contain bg-theme-muted p-5 "
          alt={alt}
        />

        <motion.div
          variants={{
            initial: {
              x: '25%',
              opacity: 0
            },
            whileHover: {
              x: '0%',
              opacity: 1
            }
          }}
          transition={{ type: 'spring' }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-them-accent" />
        </motion.div>
      </motion.a>
    </div>
  );
};

export { MdCard, DtCard };
