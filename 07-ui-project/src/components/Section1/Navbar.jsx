import React from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-5 px-15">
      <h4 className="bg-black text-white px-5 py-2 uppercase rounded-full">
        Target Audience
      </h4>
      <button className="bg-gray-100 py-2 px-5 uppercase rounded-full tracking-widest">
        <i className="ri-corner-down-right-fill"></i>
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
