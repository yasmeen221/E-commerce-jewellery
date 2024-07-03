import React from "react";
import { SlPlane } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const SliderFooter = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  ">
        <ContentFooter
          icon={<SlPlane size={40} />}
          title="Free Shipping"
          desc={
            <>
              We provide free shipping for all orders <br /> over $200.00
            </>
          }
        />

        <ContentFooter
          icon={<TbTruckDelivery size={50} />}
          title="Fast Delivery"
          desc={
            <>
              We always deliver our customers very
              <br /> quickly.
            </>
          }
        />

        <ContentFooter
          icon={<BiSupport size={40} />}
          title="24/7 Support"
          desc={
            <>
              We provide support to our customers <br /> within 24 hours
            </>
          }
        />
      </div>
    </>
  );
};

export default SliderFooter;

const ContentFooter = ({ icon, title, desc }) => {
  return (
    <>
      <div className="bg-[#f7f7f7] w-full    ">
        <div className="w-full px-10  md:w-1/3 flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:p-6  ">
          <div className="p-5 text-baseColor">
            {icon}
            {/* <SlPlane size={50} /> */}
          </div>
          <div>
            <p className="text-xl font-bold py-1">{title}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
