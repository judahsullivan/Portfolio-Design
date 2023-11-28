import { skills } from '@/utils/data';

export default function Skills() {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-center w-full  dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-lg font-bold font-basement text-theme-accent place-self-start">
        What do I bring?
      </h2>
      <div className=" p-4 my-6 space-y-2 text-center"></div>
      <div className="w-full grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} className=" w-[300px] h-[300px] items-center flex flex-col  p-4">
            <div className="w-full">
              <p className="font-normal text-theme-base">{skill.number}.</p>
            </div>
            <hr className="border-theme-muted w-full" />
            <div>
              <h3 className="my-3 text-2xl text-theme-accent font-semibold">{skill.title}</h3>
              <p className=" text-md p-2 tracking-wide font-thin text-theme-muted leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
