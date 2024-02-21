import React from "react";

export const Button = ({ className, children }) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded-xl bg-btn hover:shadow-lg shadow-shadowSupport active:shadow-lg transform hover:scale-96 uppercase text-center cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
