import { useState } from "react"
import { useLoaderData } from "react-router"
import { selectName } from "../utils/selectName"
import TitlePages from "../components/TitlePages"
import Picture from "../components/Picture"

export default function Crew() {
  const crew = useLoaderData()
  const [currentCrew, setCurrentCrew] = useState(crew[0])
  
  return (
    <main className="h-screen bg-crew bg-no-repeat bg-cover bg-fixed mobile px-6 md:px-10 pt-24 text-white">
      <TitlePages title="meet your crew" numberPage="02" styles="md:mt-8 1xl:mt-24 1xl:max-w-[80%] md:mx-auto" />

      <div className="flex w-full md:max-w-[80%] md:mx-auto flex-col 1xl:md:flex-row mt-12 1xl:mt-16">
        <div className="basis-2/4 flex flex-col justify-between 1xl:place-content-around gap-14">
          <div> 
            <span className="font-bellefair text-[18px] md:text-[24px] 1xl:text-[32px] text-white/50 tracking-normal uppercase text-center 1xl:text-left block">{currentCrew.role}</span>
            <h2 className="font-bellefair text-[24px] md:text-[40px] 1xl:text-[56px] text-white tracking-normal uppercase text-center 1xl:text-left">{currentCrew.name}</h2>
            <p className="font-barlowRegular text-[15px] md:text-[18px] text-secondary tracking-normal leading-[180%] text-center 1xl:text-left mt-5">{currentCrew.bio}</p>
          </div>


          <ul className="flex gap-6 justify-center 1xl:justify-start">
            {crew.map((c) => (
              <li key={c.name}>
                <button
                  className={`size-[10px] 1xl:size-[15px] rounded-full transition-all 
                    ${c.name.includes(currentCrew.name) ? "bg-white" : "bg-white/15 hover:bg-white/50"}`}
                  onClick={() => selectName(c.name, crew, setCurrentCrew)}
                ></button>
              </li>
            ))}
          </ul>
        </div>

        <Picture 
          imgs={currentCrew.images} 
          name={currentCrew.name} 
          styles="max-h-[340px] md:min-h-[560px] 1xl:h-[676px] 1xl:w-full object-contain mx-auto 1xl:m-0 mt-6 mask-image-fade" 
        />      
      </div>
    </main>
  )
}
