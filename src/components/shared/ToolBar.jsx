import React from "react";
import IconJewellery from "../../assets/image.png";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const ToolBar = () => {
  return (
    <>
      <div className="max-w-screen-xl p-6 mx-auto  flex flex-wrap justify-between items-center  flex-col gap-5  md:flex-row  mt-0   ">
        <Logo />
        <form className=" w-[70vw] md:w-[50vw]">
          <div class="relative">
            <input
              type="search"
              id="search-dropdown"
              class="block p-3 z-20 text-sm w-full  rounded-full border-gray-500   border focus:ring-baseColor focus:border-baseColor  "
              placeholder="Search Product..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-black rounded-e-full border border-black hover:bg-baseColor focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-5">
          <div className="relative  ">
            <CiHeart size={30} />
            <span className="absolute top-[-1] right-0  items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-baseColor rounded-full">
              0
            </span>
          </div>
          <div className="relative ">
            <IoBagOutline size={30} />
            <span className="absolute top-[-1] right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-baseColor rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
export const Logo = () => {
  return (
    <>
      <div className="flex items-center  ">
        <img className="w-12" src={IconJewellery} />

        <p className="p-1 text-3xl font-extrabold ">
          <span className="text-baseColor">S</span>urose
        </p>
      </div>
    </>
  );
};
