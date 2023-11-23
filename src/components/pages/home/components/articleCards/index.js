import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';

const MdCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden items-center justify-center gap-4">
      <Link href="">
        <Image
          src="https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={500}
          height={400}
          className="w-full object-cover rounded-md"
        />
        <div className="flex-col gap-4 flex">
          <h4 className="text-4xl font-basement">Title</h4>
          <hr className="w-full border-black" />
          <div className="flex text-theme-muted justify-between">
            <p>Category</p>
            <p>2023</p>
          </div>
        </div>
      </Link>
      <Link href="">
        <Image
          src="https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={500}
          height={400}
          className="w-full object-cover rounded-md"
        />
        <div className="flex-col gap-4 flex">
          <h4 className="text-4xl font-basement">Title</h4>
          <hr className="w-full border-black" />
          <div className="flex text-theme-muted justify-between">
            <p>Category</p>
            <p>2023</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const DtCard = ({ heading, imgSrc, subheading, href }) => {
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
    <div className="hidden lg:flex max-w-4xl mx-auto flex-col ">
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
            <motion.span className="inline-block">Title</motion.span>
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
          src={
            'https://images.unsplash.com/photo-1682685797168-613fd0cae41d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
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
