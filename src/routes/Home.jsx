import { Link } from "react-router";

export default function Home() {
  return (
    <main className="h-screen bg-home bg-no-repeat bg-cover bg-fixed">
      <div className="pt-32 md:pt-60 px-6 md:px-10 1xl:px-0 w-full mx-auto 1xl:flex 1xl:items-center 1xl:justify-between 1xl:max-w-[1200px]">
        
        <div className="text-center 1xl:text-left md:max-w-[500px] mx-auto 1xl:mx-0">
          <h1 className="uppercase text-secondary font-barlowCondensed text-[16px] md:text-[28px] font-normal tracking-[15%] 1xl:tracking-[4px]">
            so, you want to travel to
            <span className="text-white text-[80px] md:text-[144px] block font-bellefair tracking-[0px] my-5 md:my-0">
              space
            </span>
          </h1>
          <p className="text-secondary text-[15px] md:text-[16px] 1xl:text-[18px] font-barlowRegular leading-[180%] tracking-[0px]">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back and relax because we'll give you a truly out of this world experience!
          </p>
        </div>

        <div className="mt-32 md:mt-12 1xl:mt-0 flex justify-center 1xl:justify-end w-full">
          <button className="min-w-[144px] md:min-w-[272px] min-h-[144px] md:min-h-[272px] bg-white rounded-full transition-all duration-500 ease hover:shadow-[0_0_0_70px_rgba(255,255,255,0.1)]">
            <Link className="uppercase font-bellefair text-[18px] md:text-[32px] text-primary flex items-center justify-center" to="destination">
              explore
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
