import Link from 'next/link';
import Image from 'next/image';
import About from '@/public/assets/images/about.jpg';

export default function AboutHero() {
  return (
    <div className="min-h-[100dvh] pt-[5rem] w-full flex flex-col items-center gap-y-12 justify-center ">
      <h1 className=" text-4xl lg:text-6xl font-basement">
        A Engineer, Thinker and Father with a desire to change the world!
      </h1>
      <hr className="w-full border-theme-base " />
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className=" w-full flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-2xl  font-bold leading-none">A little about me</p>
                <p className="leading-snug text-theme-muted tracking-widest text-md max-w-sm">
                  Hello there! I&apos;m a developer with a passion for design and a knack for
                  problem-solving. Whether it&apos;s crafting beautiful user interfaces for the web
                  or developing innovative mobile applications. I am always eager to push myself and
                  expand my skillset. With a focus on continual learning and growth, I strive to
                  stay up-to-date with the latest technologies and best practices, ensuring that my
                  work is always top-notch.
                </p>
                <button aria-label="link to bio">
                  <Link href="">My Bio</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 h-[500px] flex-1  dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <Image
                src={About}
                alt=""
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-lg   dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
