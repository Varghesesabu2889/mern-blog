import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>
          <img src={logo} alt="Navbar logo"  onClick={closeNavHandler}/>
        </Link>
        {isNavShowing && <ul className={`nav__menu ${isNavShowing ? 'show' : 'hide'}`}>
          <li><Link to="/profile/252" onClick={closeNavHandler}>David John</Link></li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineCloseCircle /> : <FaBarsProgress />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
