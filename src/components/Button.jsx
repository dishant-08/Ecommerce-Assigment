import React from "react";

export const Button = ({ className, children }) => {
  return (
    <button
      className={`text-white p-4 bg-btn hover:shadow-lg shadow-shadowSupport active:shadow-lg transform hover:scale-96 uppercase text-center cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
