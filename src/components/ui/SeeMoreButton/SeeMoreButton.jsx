import React, { useState } from "react";

const SeeMoreButton = ({ children, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
      onClick={onClick}
      className="btn-info hover:bg-cyan-800 text-white text-center btn-xs md:btn-md lg:btn-md xl:btn-md normal-case"
    >
      {children}
    </button>
    </div>
  );
};
export default SeeMoreButton;
