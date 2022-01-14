import React from "react";

const Brand = () => {
  return (
    <div className="brand-wrapper">
      <img
        src="http://react-material.fusetheme.com/assets/images/logos/fuse.svg"
        alt=""
        className=" "
      />
      <div className="border-l pl-2 flex flex-col ">
        <span className="font-semibold text-2xl">FUSE</span>
        <span className="font-semibold text-gray-500 text-xl">REACT</span>
      </div>
    </div>
  );
};

export default Brand;
