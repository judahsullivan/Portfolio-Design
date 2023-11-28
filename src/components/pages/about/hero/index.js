import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import AboutImage from '@/public/assets/images/about.jpg';
import { useTextDifferentiation } from '@/utils/useTextDifferentation';

export default function AboutHero() {
  const heading = 'An Engineer, Thinker, and Father with a desire to change the world!';
  const description = [
    'Hello there! I’m a developer with a passion for design and a knack for problem-solving. Whether it’s crafting ',
    { text: 'beautiful user interfaces', key: 'beatiful' },
    ' for the web or developing ',
    { text: 'innovative mobile applications', key: 'innovative' },
    ', I am always eager to push myself and expand my skillset. With a focus on continual,',
    { text: ' learning ', key: 'learning' },
    'and',
    { text: 'growth', key: 'growth' },
    ' I strive to stay up-to-date with the latest',
    { text: ' technologies', key: 'technologies' },
    ' and ',
    { text: 'best practices', key: 'best practices' },
    ' ensuring that my work is always top-notch.'
  ];

  const renderedDescription = useTextDifferentiation(description);
  return (
    <div className="min-h-screen w-full  flex flex-col items-center gap-y-12 justify-center">
      <h1 className="text-4xl lg:text-6xl font-basement text-theme-accent">{heading}</h1>
      <div className="w-full">
        <hr className="w-full border-theme-base border" />
        <p className="w-full">
          <span className="text-xl font-basement text-theme-base">Here is a little about me</span>
        </p>
      </div>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="w-full justify-between pb-10 flex flex-col">
          <div className=" max-w-md flex-col flex justify-around h-full">
            <p className="leading-relaxed tracking-wide text-lg">
              <span className="relative overflow-hidden pb-1.5 text-md font-thin">
                {renderedDescription}
              </span>
            </p>
            <Link
              className=" inline-flex items-center gap-5 place-self-start lg:place-self-end rounded-full hover:underline hover:text-theme-accent transition-colors duration-150 ease-linear underline-offset-4   "
              href="/bio"
            >
              <span className="sr-only">Head to my Bio</span>
              <span className="text-lg relative ">Head to Bio</span>
              <FiArrowRight className="" />
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center p-12 justify-center">
          <Image
            src={AboutImage}
            alt="About"
            loading="eager"
            deoding="async"
            className="rounded-lg object-cover dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
}
