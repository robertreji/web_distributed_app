import pendingIcon from "../assets/pending.png"
import patient from "../assets/patient.png"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full h-16 flex border-t border-gray-200">

      {/* Todo */}
      <NavLink
        to="/" 
        className={({ isActive }) =>
          `flex-1 flex items-center justify-center gap-1 rounded-2xl ${
            isActive ? "bg-blue-100" : ""
          }`
        }
      >
        <div className="flex flex-col gap-1 items-center">
          <img src={pendingIcon} className="h-8" alt="pending" />
          <p className="text-black font-serif font-extrabold">Todo</p>
        </div>
      </NavLink>

      {/* Patient */}
      <NavLink
        to="/patients"
        className={({ isActive }) =>
          `flex-1 flex items-center justify-center gap-1  rounded-2xl  ${
            isActive ? "bg-blue-200" : ""
          }`
        }
      >
        <div className="flex flex-col gap-1 items-center">
          <img src={patient} className="h-8" alt="patient" />
          <p className="text-black font-serif font-extrabold">Patient</p>
        </div>
      </NavLink>

    </footer>
  )
}

export { Footer }