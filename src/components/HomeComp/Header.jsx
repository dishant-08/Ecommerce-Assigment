import React, { useState } from "react";
import Logo from "../../assets/shopping-cart.png";
import { FiShoppingCart } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
// import { CgMenu, CgClose } from "react-icons/cg";

const Header = () => {
  const [isMenu, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    setMenuOpen(!isMenu);
  };
  return (
    <div className=" flex justify-between pl-[4.8rem]  min-h-32 w-100% shadow-xl  items-center  ">
      <img src={Logo} alt="logo" srcset="" className=" w-30 h-20  " />
      <ul className=" flex gap-10 md:mr-32 justify-center items-center ">
        <div className=" text-3xl flex flex-col md:flex-row font-serif font-bold  gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </div>

        <li className=" relative mx-10 ">
          <FiShoppingCart
            onClick={() => navigate("/cart")}
            className=" w-10 h-10 relative  "
          />
          <span className=" w-6 h-7 flex justify-center items-center text-sm   absolute rounded-[50%] top-[-30%] left-[70%] bg-btn text-white ">
            8
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
