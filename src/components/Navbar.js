import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="topbar" aria-label="Primary navigation">
      <NavLink className="brand" to="/contact" aria-label="Smartlogix AI home">
        <span className="brand-mark">S</span>
        <span>Smartlogix AI</span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
