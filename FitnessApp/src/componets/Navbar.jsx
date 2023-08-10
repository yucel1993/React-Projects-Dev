import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

import {FaBars} from "react-icons/fa" 
import {MdOutlineClose} from "react-icons/md" 
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [isNavShoving , setIsNavShoving ] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={()=>setIsNavShoving(!isNavShoving)}>
          
        </Link>
        <ul className={`nav__links ${isNavShoving ? "show_nav" : "hide__nav"}`}>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path} className={({isActive})=>isActive ? "active-nav" : ""} onClick={()=>setIsNavShoving(!isNavShoving)} >{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle-btn" onClick={()=>setIsNavShoving(!isNavShoving)}>
          
          {isNavShoving? <MdOutlineClose/> :<FaBars/>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
