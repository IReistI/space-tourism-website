export default function TitlePages({title, numberPage, styles}) {
  return (
    <h1 className={`font-barlowCondensed text-white text-[16px] md:text-[20px] 1xl:text-[28px] tracking-[15%] 1xl:tracking-[4px] font-normal uppercase text-center md:text-left w-full ${styles}`}><span className="font-bold opacity-25 mr-4">{numberPage}</span>{title}</h1>
  )
}
