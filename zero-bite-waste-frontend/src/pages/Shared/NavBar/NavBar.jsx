import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import { useUser } from "../../../api/contextApi/ContextAPi";

const NavBar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null)
    navigate("/signin");
  };

  const menuItems = (
    <>
      <li>
        <Link className="mx-1" to="/">Home</Link>
      </li>
      <li>
        <Link className="mx-1" to="/donate">Donate</Link>
      </li>
      <li>
        <Link className="mx-1" to="/volunteer">Volunteer</Link>
      </li>
      <li>
        <Link className="mx-1" to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="mx-1" to="/top-contributor">Top Contributor</Link>
      </li>
      <li>
        <Link to="/charity-activities">Charity Activities</Link>
      </li>
      {!user && (
        <>
          <li>
            <Link className="mx-1" to="/signin">Sign In</Link>
          </li>
        
        </>
      )}
      {user && (
        <li>
          <button onClick={handleLogout} className="mx-1  px-3 py-1 rounded text-white hover:bg-gray-50">
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="text-gray navbar bg-[#264E01] z-50 w-full text-white backdrop-blur-lg backdrop-filter">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn-ghost btn lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-lg text-white shadow">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-16 lg:w-16" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center ml-auto hidden lg:flex">
        <ul className="text-light menu menu-horizontal px-1 text-lg">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
