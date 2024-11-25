import { useLoaderData } from "react-router";
import { useState } from "react";
import TitlePages from "../components/TitlePages";
import { selectName } from "../utils/selectName";

export default function Technology() {
  const technology = useLoaderData()
  const [currentTech, setCurrentTech] = useState(technology[0])

  const TABLET_WIDTH = 768
  const DESKTOP_WIDTH = 1440

  return (
    <main className="h-screen bg-technology bg-no-repeat bg-cover bg-fixed mobile pt-24 text-white">
      <TitlePages title="space launch 101" numberPage="03" styles="md:mt-8 1xl:mt-24 pl-10 1xl:pl-36" />

      <div className="w-full max-w-lg md:max-w-4xl mx-auto 1xl:mx-0 1xl:mb-auto 1xl:ml-auto 1xl:mr-0 mt-16 1xl:min-w-[1275px] 1xl:w-full 1xl:flex 1xl:items-center 1xl:gap-10">
        <img className="w-full max-h-[376px] md:h-[360px] 1xl:min-h-[600px] 1xl:min-w-[600px]  1xl:order-1" 
          src={window.innerWidth < TABLET_WIDTH || window.innerWidth >= DESKTOP_WIDTH ? currentTech.images.portrait : currentTech.images.landscape} 
          alt={currentTech.name} 
          width="300" 
          height="300" 
          loading="lazy" 
        />
        <ul className="flex 1xl:flex-col gap-6 justify-center 1xl:justify-start my-7 1xl:m-0">
          {technology.map((t, index) => (
            <li key={t.name}>
              <button
                className={`size-[40px] md:size-[56px] 1xl:size-[80px] rounded-full transition-all font-bellefair
                    ${t.name.includes(currentTech.name) ? "bg-white text-primary" : "bg-transparent border border-white/25 hover:border-white text-white"}`}
                onClick={() => selectName(t.name, technology, setCurrentTech)}
              >{index + 1}</button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5 px-6 md:px-28 1xl:px-0">
          <span className="font-bellefair text-[18px] md:text-[24px] 1xl:text-[32px] text-white/50 tracking-normal text-center 1xl:text-left uppercase">the terminology...</span>
          <h2 className="font-bellefair text-[24px] md:text-[40px] 1xl:text-[56px] text-white tracking-normal text-center 1xl:text-left uppercase">{currentTech.name}</h2>
          <p className="font-barlow text-[15px] md:text-[16px] 1xl:text-[18px] text-secondary tracking-normal text-center 1xl:text-left leading-[180%]">{currentTech.description}</p>
        </div>
      </div>
    </main>
  )
}
