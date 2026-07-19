import { Link, NavLink } from 'react-router-dom';
import { FaGift, FaUser, FaArrowRight } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-left">
            <FaGift className="announcement-icon" />
            <span>Registration for the Uganda Robotics League 2026 season is now open!</span>
          </div>
          <a href="/register" className="announcement-link">
            Learn More <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <div className="logo-wrapper">
              <img 
                src="/logourl.png" 
                alt="Uganda Robotics League Logo" 
                className="logo-image"
              />
              <span className="logo-sub">URL</span>
            </div>
          </Link>

          <ul className="nav-menu">
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/programs">Programs</NavLink>
            </li>
            <li>
              <NavLink to="/competitions">Competitions</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/partners">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn-signin">
              <FaUser /> Sign In
            </button>
            <Link to="/register" className="btn-register-team">
              Register a Team
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;