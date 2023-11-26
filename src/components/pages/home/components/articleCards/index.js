import PostDate from '@/components/common/postDate';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const MdCard = ({ title, publishedAt, mainImage, categories, alt }) => {
  return (
    <div className=" flex flex-col lg:hidden">
      <a className=" w-full h-full  bg-theme-muted rounded-[5px]" href={''}>
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
              <h4>{title}</h4>
            </a>
          </div>
          <hr className="w-full border-theme-muted" />
          <div className="flex px-2 w-full justify-between items-center">
            <p>{categories && <span className="text-lg">{categories.title}</span>}</p>
            <p>
              <PostDate dateString={publishedAt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const DtCard = ({ title, publishedAt, mainImage, categories, alt }) => {
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

  return (
    <motion.tr
      className="relative overscroll-y-none h-full"
      onMouseMove={handleMouseMove}
      ref={ref}
      initial="initial"
      whileHover="whileHover"
    >
      <th scope="row" className="px-6 py-4 ">
        <motion.span className=" z-10 font-aileron block text-5xl font-semibold text-theme-base transition-colors duration-500 group-hover:text-theme-accent ">
          <motion.span className="inline-block">{title}</motion.span>
        </motion.span>
        <motion.img
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
          src={mainImage}
          className=" w-[300px] h-[200px] z-0 absolute rounded-lg object-cover bg-theme-muted p-5"
          alt={alt}
        />
      </th>
      <td className="px-6 py-4 ">
        {categories && <span className="text-lg">{categories.title}</span>}
      </td>
      <td className="px-6 py-4 ">
        <PostDate dateString={publishedAt} />
      </td>
    </motion.tr>
  );
};

export { MdCard, DtCard };
