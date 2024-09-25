import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>
        <img src={logo} alt="Navbar logo"/>
        </Link>
        <ul className="nav__menu">
       <li> <Link to="/profile/:id">David John</Link></li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <li> <Link to="/create">Create Post</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <li> <Link to="/authors">Authors</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <li> <Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn">
    <AiOutlineCloseCircle/>
    {/* <FaBarsProgress/> */}
        </button>
      </div>

    </nav>
  )
}

export default Header