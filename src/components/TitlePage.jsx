import React from "react";

const TitlePage = ({ headLine, Desc }) => {
  return (
    <>
      <div className="text-center m-10">
        <h1 className="text-2xl font-extrabold py-4 uppercase">{headLine}</h1>
        <p className=" w-1/2 mx-auto text-center  px-4">{Desc}</p>
      </div>
    </>
  );
};

export default TitlePage;
