import React from "react";

const Button = ({ children, onClick }) => {

    console.log(onClick);

  return (
    <button
      onClick={onClick}
      className="btn-info hover:bg-cyan-800 text-white text-center btn-xs md:btn-md lg:btn-md xl:btn-md normal-case"
    >
      {children}
    </button>
  );
};

export default Button;
