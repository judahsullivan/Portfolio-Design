export default function ProjectsIndex() {
  return (
    <div className="min-h-screen justify-center space-y-10 flex flex-col items-center w-full">
      <h1 className=" text-4xl lg:text-6xl font-basement">
        Innovating Horizons: Crafting the Future of Digital Experiences
      </h1>
      <hr className="w-full border-theme-base mt-10" />
      {/* <h2 className="text-2xl lg:text-4xl text-center font-bold  ">Content coming soon</h2> */}
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <div className="space-x-2">
            <button className="rounded-full p-5 px-10 w-full border border-black ">All</button>
          </div>
          <div className="hidden md:block space-x-2">
            {/* <button className="rounded-full h-24 w-24 border border-black ">Table Button</button> */}
            {/* <button className="rounded-full h-24 w-24 border border-black ">Table Button</button> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
