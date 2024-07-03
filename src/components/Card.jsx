import React, { useEffect, useState } from "react";
import img from "../assets/images/img1.png";
import imgHover from "../assets/images/img2.png";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import axiosInstance from "../api/InstanceApi";
import { Spinner } from "./Layout";
import TitlePage from "./TitlePage";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Card = () => {
  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await axiosInstance.get("/jewellery");
        setJewelry(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchJewelry();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <TitlePage
        Desc="   Our popular products are so beautyful to see that the shoppers are
          easily attracted to them."
        headLine="POPULAR PRODUCTS"
      />
      <div className="max-w-screen-xl p-6 mx-auto">
        <Swiper
          // spaceBetween={30}
          slidesPerView={1}
          spaceBetween={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          // grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // scrollbar={true}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation, Scrollbar, Keyboard]}
          // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 m-auto lg:grid-cols-4 gap-6 p-6 max-w-screen-xl"
        >
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 m-auto lg:grid-cols-4 gap-6 p-6 max-w-screen-xl"
          >
            {jewelry.map((item) => (
              <SwiperSlide>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  // className="container-sm"
                  // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 m-auto lg:grid-cols-4 gap-6 p-6 max-w-screen-xl"
                >
                  <div key={item.id} className="relative group">
                    <div className="relative overflow-hidden bg-gray-100 py-20 flex justify-center items-center">
                      <img
                        src={img}
                        alt="Product"
                        className="object-cover w-full h-full group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                      />
                      <img
                        src={imgHover}
                        alt="Product Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      />
                    </div>
                    <div className="py-2 px-4">
                      <h1 className="py-1 font-bold text-base hover:text-baseColor">
                        {item.name}
                      </h1>
                      <div className="flex justify-between font-bold text-baseColor">
                        <p>${item.price}</p>
                        <div className="flex items-center">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon color="text-black" />
                        </div>
                      </div>
                    </div>
                    <CollectionButton />
                    <Badge />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Card;

const StarIcon = ({ color = "text-baseColor" }) => {
  return (
    <svg
      className={`w-4 h-4 ms-1 ${color}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

const CollectionButton = () => {
  return (
    <div className="space-x-2 text-white absolute bottom-[100px] left-0 right-0 justify-center flex-row flex  py-5 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
      <button
        type="button"
        className="bg-yellow-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
      >
        <IoMdCart size={15} className="mr-1" />
        Add to Cart
      </button>
      <button
        type="button"
        className="bg-yellow-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
      >
        <FaHeart size={15} />
      </button>
      <button
        type="button"
        className="bg-yellow-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
      >
        <IoIosEye size={15} />
      </button>
    </div>
  );
};

const Badge = () => {
  return (
    <div className="text-white absolute top-3 left-5 transform flex flex-col items-center space-y-1">
      <p className="bg-baseColor px-2">New</p>
      <p className="bg-baseColor px-1">Sale</p>
    </div>
  );
};
