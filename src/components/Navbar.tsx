import { useState } from "react"
import { NavLink } from "react-router-dom"
import Nexora from "../assets/Nexora.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-black px-4 py-3 sm:px-8 md:px-12">
      <div className="flex h-14 items-center justify-between">
        <NavLink to="/" onClick={closeMenu} aria-label="Home">
          <img src={Nexora} className="h-8 brightness-0 invert sm:h-10"/>
        </NavLink>
        <button
          type="button"
          className="font-bebas text-2xl font-bold uppercase text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? "close" : "menu"}
        </button>
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          <NavLink to="/profile" className="font-bebas text-2xl font-bold uppercase text-white transition duration-300 hover:scale-120">profile</NavLink>
          <NavLink to="/certificate" className="font-bebas text-2xl font-bold uppercase text-white transition duration-300 hover:scale-120">certificate</NavLink>
          <NavLink to="/repository" className="font-bebas text-2xl font-bold uppercase text-white transition duration-300 hover:scale-120">repository</NavLink>
          <NavLink to="/contact" className="font-bebas text-2xl font-bold uppercase text-white transition duration-300 hover:scale-120">contact</NavLink>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-navigation" className="flex flex-col gap-3 border-t border-white/30 pt-3 md:hidden">
          <NavLink to="/profile" onClick={closeMenu} className="font-bebas text-2xl font-bold uppercase text-white">profile</NavLink>
          <NavLink to="/certificate" onClick={closeMenu} className="font-bebas text-2xl font-bold uppercase text-white">certificate</NavLink>
          <NavLink to="/repository" onClick={closeMenu} className="font-bebas text-2xl font-bold uppercase text-white">repository</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="font-bebas text-2xl font-bold uppercase text-white">contact</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
