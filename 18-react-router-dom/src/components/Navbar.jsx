import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="logo">Sheriyans</Link>
          <nav className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/product">Product</NavLink>
          </nav>
        </div>

        <div className="navbar-right">
          <button className="search-btn">
            <span>Search...</span>
            <kbd>Ctrl K</kbd>
          </button>
          <button className="ask-btn">Ask AI</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
