import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `transition-colors duration-200 hover:text-white ${
    isActive ? "text-white" : "text-muted"
  }`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-nav-bg backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-300 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-[1.1rem] font-bold tracking-tight text-accent"
          >
            Sherdil
          </Link>

          <nav className="flex gap-6 text-sm">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/courses" className={linkClass}>
              Courses
            </NavLink>
            <NavLink to="/product" className={linkClass}>
              Product
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex min-w-50 cursor-pointer items-center justify-between gap-8 rounded-lg border border-nav-border bg-white/5 px-2.5 py-1.5 text-[0.85rem] text-muted transition hover:border-white/30 hover:bg-white/10 hover:text-white">
            <span>Search...</span>
            <kbd className="rounded-[5px] border border-nav-border px-1.5 py-0.5 text-[0.7rem] text-zinc-300">
              Ctrl K
            </kbd>
          </button>

          <button className="cursor-pointer rounded-lg border border-nav-border bg-white/5 px-3.5 py-1.5 text-[0.85rem] text-white transition hover:border-white/30 hover:bg-white/10">
            Ask AI
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
