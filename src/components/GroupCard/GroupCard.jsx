import React from "react";
import TitlePage from "../TitlePage";
import image from "../../assets/images/img5.png";
import { dataCardGroup } from "../../data";

const GroupCard = () => {
  return (
    <>
      <div className="container m-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {dataCardGroup.map((card, index) => (
          <GroupCardContent
            key={index}
            title={card.title}
            price={card.price}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </>
  );
};

export default GroupCard;

const GroupCardContent = ({ title, price, imageSrc }) => {
  return (
    <>
      <div className=" p-4 bg-[#f7f8fd]  flex gap-4 hover:bg-[#f5eee3]   ">
        <img className="w-[140px]" src={imageSrc} />
        <div className="flex flex-col gap-10 items-center ">
          <div>
            <h1 className="py-1 font-bold text-base">{title}</h1>
            <p className="font-bold text-baseColor border-b-2 py-2 border-black w-10 ">
              {price}
            </p>
          </div>
          <button
            type="button"
            class=" outline-none font-medium text-sm px-5 py-2 text-center inline-flex items-center "
          >
            Shop Now
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
