import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className=" max-w-screen  border-gray-200 shadow-xl  sticky  p-1 border-t-2  mb-1   ">
        {/* <div className="flex flex-wrap items-center justify-center mx-auto p-1"> */}
        <div
          className="  flex flex-wrap items-center justify-center"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col justify-center  font-medium p-1 md:p-0 gap-4 md:gap-10 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <Link
                to="/"
                className="text-black hover:text-baseColor block py-2 px-3 focus:text-baseColor"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-black hover:text-baseColor block py-2 px-3 focus:text-baseColor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-black hover:text-baseColor block py-2 px-3 focus:text-baseColor"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black hover:text-baseColor block py-2 px-3 focus:text-baseColor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default NavBar;
