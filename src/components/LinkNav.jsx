import { NavLink } from "react-router"

export default function LinkNav({url, number}) {
  return (
    <li className="text-white font-barlowCondensed text-[16px] uppercase flex">
      <NavLink
        to={url}
        className={({ isActive }) => isActive ? "border-r-4 md:border-0 md:border-b-4 w-full transition-all md:py-8" : "w-full border-r-4 md:border-0 md:border-b-4 border-transparent hover:border-r-white/50 md:hover:border-b-white/50 transition-all md:py-8"}
      >
        <span className="tracking-[2.7px] font-bold pl-8 md:pl-0">{number}</span>
        <span className="tracking-[2px] font-extralight ml-2 md:ml-3">{url === '/' ? "home" : url}</span>
      </NavLink>
    </li>
  )
}
