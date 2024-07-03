import React, { useEffect } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { dataSidBar } from "./../data";
import image from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import AOS from "aos";
import SliderFooter from "./SliderFooter";
const Slider = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <TECarousel
        id="carouselExampleControls"
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ContantSlider
              image={image}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, nihil?"
              text="woman's jewellery"
            />
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ContantSlider
              image={image2}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nihil?"
              text="woman's jewellery"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ContantSlider
              image={image3}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nihil?"
              text="woman's jewellery"
            />
          </TECarouselItem>
        </div>
      </TECarousel>
      <SliderFooter />
    </>
  );
};
export default Slider;

const ContantSlider = ({ image, text, des }) => {
  // useEffect(() => {
  //   AOS.refresh();
  // }, []);
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <>
      <div className="bg-grayColor p-10">
        <div className="flex flex-col sm:flex-row  max-w-screen-xl mx-auto  h-[100%] p-6       ">
          <div
            className=" md:w-[100%]  sm:p-10  p-10 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="sm:text-4xl md:text-6xl w-full  text-6xl font-extrabold ">
              {text}
              <br /> collection
            </h1>
            <p className="sm:text-lg   sm:p-5 text-lg p-5">
              {des}
              <br />
              {des}
            </p>{" "}
            <button
              type="button"
              class=" text-black  bg-yellow-500  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-black duration-[400ms,700ms] transition-[color,box-shadow] "
            >
              Learn more
            </button>
          </div>
          <div className=" md:w-[50%] h-auto w-full  ">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
};
