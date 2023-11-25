import { motion } from 'framer-motion';
import MouseIcon from '../components/mouseIcon';

export default function Hero({ heading, description, roles }) {
  return (
    <div className="  justify-evenly min-h-screen w-full flex flex-col">
      <div className="relative space-y-10">
        <h3 className="text-3xl font-bold">{heading}</h3>
        <h1 className="inline-block text-6xl md:text-8xl w-full leading-tight tracking-tighest font-basement font-extrabold ">
          {roles}
        </h1>
        <div className={'relative  flex  justify-between mx-auto flex-col gap-5 '}>
          <p className="m-0 [&>*:nth-child(1)]:space-x-2 leading-[1.3] ">
            {description.split(' ').map((word, index) => {
              return (
                <span key={index} className={' overflow-hidden text-xl inline-block'}>
                  <motion.span
                    key={index}
                    className={'title mr-1.5 tracking-widest font-thin normal-case text-gray-900'}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <div className="flex w-full justify-between">
            <button className="w-[150px] h-[150px] rounded-full bg-gray-600 text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
