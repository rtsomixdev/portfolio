import { NavLink } from "react-router-dom"
import Nexora from "../assets/Nexora.png"
function Navbar() {
  return (
    <div className="flex h-20 items-center bg-black justify-between">
      <NavLink to="/" className="uppercase font-bebas font-bold text-white text-3xl m-25 transition duration-300 hover:scale-120"><img src={Nexora} className="h-10 flex items-center brightness-0 invert"/></NavLink>
      <NavLink to="/profile" className="uppercase font-bebas font-bold text-white text-3xl m-25 transition duration-300 hover:scale-120">profile</NavLink>
      <NavLink to="/certificate" className="uppercase font-bebas font-bold text-white text-3xl m-25 transition duration-300 hover:scale-120">certificate</NavLink>
      <NavLink to="/repository" className="uppercase font-bebas font-bold text-white text-3xl m-25 transition duration-300 hover:scale-120">repository</NavLink>
      <NavLink to="/contact" className="uppercase font-bebas font-bold text-white text-3xl m-25 transition duration-300 hover:scale-120">contact</NavLink>
    </div>
  )
}

export default Navbar
