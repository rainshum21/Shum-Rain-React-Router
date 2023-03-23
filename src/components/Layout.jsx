import { Outlet, NavLink } from "react-router-dom";

function toggleMenu() {
  var toggleMenu = document.querySelector(".toggle-menu");
  toggleMenu.classList.toggle("show");
}

export default function Layout() {
  return (
    <div>
      <section className="header">
         {/* Horizontal menu */}
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="toggle">
        {/* logo-Rain Shum */}
          <svg viewBox="0 0 30 30" width="30" height="30" onClick={toggleMenu}>
            <rect x="0" y="0" width="30" height="4" />
            <rect x="0" y="13" width="30" height="4" />
            <rect x="0" y="26" width="30" height="4" />
          </svg>
           {/* Toggle menu-hidden when reach brealpoint 390px */}
          <ul className="toggle-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </div>
  );
}
