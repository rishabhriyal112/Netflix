import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import SearchBar from "../SearchBar/SearchBar"; // ✅ Search component import
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <Link to="/" className="list"><img src={logo} alt="Netflix Logo" className="logo-img" /></Link>

        <ul>
          <li ><Link to="/" className="list">Home</Link></li>
          <li ><Link to="/tvshows" className="list">TV Shows</Link></li>
          <li><Link to="/movies" className="list">Movies</Link></li>
          <li><Link to="/newpopular" className="list">New & Popular</Link></li>

        </ul>
      </div>

      <div className="navbar-right">
        {/* ✅ SearchBar integrated here */}
        <SearchBar onSelectMovie={(id) => console.log("clicked movie id:", id)} />

        
        <img src={bell_icon} alt="Notifications" className="icons" />

        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Caret" />
          <div className="dropdown">
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="list" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/tvshows" className="list" onClick={() => setMenuOpen(false)}>TV Shows</Link>
        <Link to="/movies" className="list" onClick={() => setMenuOpen(false)}>Movies</Link>
        <Link to="/newpopular" className="list" onClick={() => setMenuOpen(false)}>New & Popular</Link>
      </div>
    </div>
  );
};

export default Navbar;
