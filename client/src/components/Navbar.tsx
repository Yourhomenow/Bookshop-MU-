
import '../App.css'
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar bg-base-100 shadow-sm gap-10 min-h-0 h-10 bg-secondary">
      <a className="btn btn-ghost text-sm h-8 text-white">daisyUI</a>
      <input type="text" placeholder="Search" className="grow input input-sm h-6 text-xm w-24 md:w-auto rounded-full" />
      <div role="button" className="btn btn-ghost btn-circle avatar h-8 w-8">
          <div className="w-6 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="" />
          </div>
      </div>
    </div>
  )
}

export default NavBar
