import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import LinkNav from "./LinkNav"

export default function Header() {
  const ICON_HAMBURGER = "/icons/icon-hamburger.svg"
  const ICON_CLOSE = "/icons/icon-close.svg"
  const WIDTH_MOBILE = 768

  const [icon, setIcon] = useState(ICON_HAMBURGER)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > WIDTH_MOBILE) {
        setMenu(false)
        setIcon(ICON_HAMBURGER)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = () => {
    if(icon === ICON_HAMBURGER) {
      setIcon(ICON_CLOSE)
      setMenu(true)
    } else {
      setIcon(ICON_HAMBURGER)
      setMenu(false)
    }
  }

  return (
    <header className="w-full bg-transparent fixed flex justify-between items-center p-6 md:p-0 md:h-24 1xl:pt-10">
      <NavLink to="/">
        <img className="h-[40px] md:h-[48px] md:px-10 1xl:px-16" src="/icons/logo.svg" alt="logo" />
      </NavLink>
      <span className="hidden 1xl:inline-block 1xl:bg-white/25 1xl:min-w-[590px] 1xl:max-w-[700px] 1xl:w-full 1xl:h-[1px] 1xl:-mr-20 1xl:z-30"></span>
      <div className="relative md:flex-grow md:px-10 1xl:px-16 md:bg-white/5 md:backdrop-blur-[80px] md:max-w-2xl">
        <button
          className={`md:hidden ${icon.includes(ICON_CLOSE) ? "z-50 relative" : ""}`}
          onClick={handleClick}
        >
          <img
            className="flex"
            src={icon}
            alt="icon menu mobile"
          />
        </button>
        <nav className={`${menu ? "bg-transparent backdrop-blur-md fixed h-screen top-0 bottom-0 right-0 left-[100] w-64" : "md:flex md:justify-end"}`}>
          <ul className={`${menu ? "flex flex-col gap-10 mt-32" : "hidden md:flex md:h-full md:gap-9"}`}>
            <LinkNav url="/" number="00" />
            <LinkNav url="destination" number="01" />
            <LinkNav url="crew" number="02" />
            <LinkNav url="technology" number="03" />
          </ul>
        </nav>
      </div>
    </header>
  )
}
