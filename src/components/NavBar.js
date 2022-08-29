import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/">
            <span className="nav-title">About me</span>
            <i className="nav-icon fa-solid fa-user"></i>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/projects">
            <span className="nav-title">Programming</span>
            <i className="nav-icon fa-solid fa-code"></i>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/psyc">
            <span className="nav-title">Psychology</span>
            <i className="nav-icon fa-solid fa-brain"></i>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/photos">
            <span className="nav-title">Photography</span>
            <i className="nav-icon fa-solid fa-camera"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
