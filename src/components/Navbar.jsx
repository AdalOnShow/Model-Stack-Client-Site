import React, { useEffect, useState } from 'react'
import { Link, Links, NavLink } from 'react-router'
import { toast } from 'sonner';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import SecondaryBtn from './SecondaryBtn';
import PrimaryBtn from './PrimaryBtn';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { user, logOutFunc, loading } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    Swal.fire({
      title: "Do Want To Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        logOutFunc()
          .then(() => {
            toast.success("Logout successful!")
          })
          .catch((error) => {
            toast.error(error.message)
          });
      }
    });
  }

  const navLinks = (<>
    <li><NavLink className='hover:bg-white hover:text-primary font-medium' to="/">Home</NavLink></li>
    <li><NavLink className='hover:bg-white hover:text-primary font-medium' to="/add-model">Add Model</NavLink></li>
    <li><NavLink className='hover:bg-white hover:text-primary font-medium' to="/models">View Models</NavLink></li>
  </>)

  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-medium">Model Stack</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <label className="toggle toggle-lg text-base-content">
          <input
            type="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <FiMoon />
          <FiSun />
        </label>
        {user ? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className='font-bold ml-2 text-base'>{user.displayName}</li>
            <li className='font-medium ml-2 text-base mb-4 break-all whitespace-normal'>{user.email}</li>
            <li><NavLink className='hover:bg-white hover:text-primary font-medium text-base' to="/my-purchase">Model Purchase</NavLink></li>
            <li><NavLink className='hover:bg-white hover:text-primary font-medium text-base mb-4' to="/my-models">My Models</NavLink></li>
            <li><PrimaryBtn onClick={handleLogOut}>Logout</PrimaryBtn></li>
          </ul>
        </div> : loading ? <d className="skeleton size-10 shrink-0 rounded-full" /> : <Link to="/login"><SecondaryBtn icon>Login</SecondaryBtn></Link>}
      </div>
    </div>
  )
}

export default Navbar