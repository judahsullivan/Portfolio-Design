import HeroAnimations from './heroAnimations';

export default function Hero({ location, heading, fullstack, enthusiast, phrase }) {
  const scope = HeroAnimations();

  return (
    <div
      ref={scope}
      className=" p-2 flex-col gap-y-10 lg:gap-y-5 w-full min-h-[100dvh] justify-center  flex items-center "
    >
      <div className=" gap-5  w-fit flex flex-col items-center">
        <div>
          <div className="w-full pl-2.5">
            <h1 className="text-left font-semibold ">{heading}</h1>
          </div>
          <h2 className="text-5xl lg:text-[12dvw] font-basement uppercase   leading-0 text-theme-accent">
            <span className="sr-only">{fullstack}</span>
            {fullstack.split('').map((heading, index) => (
              <span className="inline-flex overflow-hidden" key={index}>
                <span className="title inline-flex ">{heading}</span>
              </span>
            ))}
          </h2>
          <h2 className="text-5xl lg:text-[12dvw] font-basement uppercase text-theme-accent leading-0 ">
            <span className="sr-only">{enthusiast}</span>
            {enthusiast.split('').map((heading, index) => (
              <span className="inline-flex overflow-hidden" key={index}>
                <span className="titletwo inline-flex">{heading}</span>
              </span>
            ))}
          </h2>
          <hr className="w-full heroline border-theme-muted" />
        </div>

        <div className="p-5 w-full herocontent mb-4 flex flex-col   lg:gap-0 items-center  justify-between md:flex-col lg:flex-row">
          <p className=" max-w-md text-lg">{phrase}</p>
          <button className="place-self-start">Get In Touch</button>
        </div>
      </div>

      <div className="absolute bottom-[20px] herocontent items-center right-0 flex gap-2">
        <p>{location}</p>
        <hr className="w-[50px] border-theme-base" />
      </div>
    </div>
  );
}
