export default function InformationDestination({title, information}) {
  return (
    <p className="font-normal uppercase flex flex-col items-center 1xl:items-start gap-2 mx-auto 1xl:mx-0">
      <span className="font-barlowCondensed text-secondary text-[14px] tracking-[15%] font-normal">{title}</span>
      <span className="font-bellefair text-[28px] tracking-normal">{information}</span>
    </p>
  )
}
