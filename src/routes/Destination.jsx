import { useState } from "react"
import { useLoaderData } from "react-router"
import { selectName } from "../utils/selectName"
import Picture from "../components/Picture"
import InformationDestination from "../components/InformationDestination"
import TitlePages from "../components/TitlePages"

export default function Destination() {
  const destinations = useLoaderData()
  const [currentDestination, setCurrentDestination] = useState(destinations[0])

  return (
    <main className="h-screen bg-destination bg-no-repeat bg-cover bg-fixed px-6 md:px-10 pt-24 mobile text-white overflow-auto">
      <TitlePages title="Pick your destination" numberPage="01" styles="max-w-[90%] mx-auto md:mx-0 1xl:mx-auto md:mt-16 1xl:max-w-[80%]" />

      <div className="flex flex-col 1xl:flex-row w-full max-w-[90%] md:max-w-[70%] mt-10 1xl:mt-24 mx-auto gap-12">
        
        <Picture 
          imgs={currentDestination.images} 
          name={currentDestination.name} 
          styles="size-[150px] md:size-[300px] 1xl:size-[480px] mx-auto 1xl:basis-6/12" 
        />
        
        <div className="flex flex-col gap-2 justify-center items-center 1xl:items-start 1xl:basis-6/12">

          <ul className="flex gap-2 md:gap-10 w-full justify-evenly md:justify-center 1xl:justify-start">
            {destinations.map((d) => (
              <li key={d.name} className="text-secondary text-[14px] 1xl:text-[16px] font-barlowCondensed font-normal tracking-[15%]">
                <button
                  className={`uppercase pb-2 transition-all ${d.name.includes(currentDestination.name) ? "border-b-[3px]" : "hover:border-b-[3px] hover:border-white/50"}`}
                  onClick={() => selectName(d.name, destinations, setCurrentDestination)}
                >{d.name}</button>
              </li>
            ))}
          </ul>

          <h2 className="font-bellefair text-[56px] md:text-[80px] 1xl:text-[100px] tracking-normal uppercase">{currentDestination.name}</h2>

          <p className="font-barlowRegular text-[16px] 1xl:text-[18px] tracking-normal text-secondary text-center 1xl:text-left pb-6 1xl:pb-12 border-b border-b-white/25 md:leading-[180%]">{currentDestination.description}</p>

          <div className="flex flex-col md:flex-row gap-5 1xl:gap-14 mt-4 1xl:mt-8 md:justify-between md:w-full 1xl:justify-start">
            <InformationDestination 
              title="avg. distance"
              information={currentDestination.distance} 
            /> 
            <InformationDestination 
              title="est. travel time" 
              information={currentDestination.travel} 
            /> 
          </div>

        </div>
      </div>
    </main>
  )
}
