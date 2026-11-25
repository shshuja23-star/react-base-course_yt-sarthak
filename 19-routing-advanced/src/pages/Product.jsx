import { NavLink, Outlet } from "react-router-dom";

const tabClass = ({ isActive }) =>
  `text-sm font-semibold pb-1 border-b-2 hover:text-blue-500 ${
    isActive
      ? "text-blue-500 border-blue-500"
      : "text-gray-400 border-transparent"
  }`;

const Product = () => {
  return (
    <main className="flex flex-1 flex-col items-center">
      {/* Tabs stay at the top */}
      <div className="flex justify-center gap-10 py-4 pr-7">
        <NavLink to="women" className={tabClass}>
          Women
        </NavLink>
        <NavLink to="men" className={tabClass}>
          Men
        </NavLink>
        <NavLink to="kids" className={tabClass}>
          Kids
        </NavLink>
      </div>

      {/* Heading + Women/Men content centered in the remaining space */}
      <div className="flex w-full flex-1 pb-35 flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-white">Product</h1>
        <div className="mt-8 w-full max-w-4xl">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Product;
