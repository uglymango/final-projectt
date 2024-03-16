import React from "react";
import { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";


const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <span className="lg:hidden ">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md ">
        <button
        onClick={()=> setTab('overview')}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor "
          } w-full btn mt-0 rounded-md hover:text-white`}
        >
          Overview
        </button>
        <button
        onClick={()=> setTab('appointments')}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor "
          } w-full btn mt-0 rounded-md  hover:text-white`}
        >
          Appointments
        </button>
        <button
        onClick={()=> setTab('settings')}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor "
          } w-full btn mt-0 rounded-md  hover:text-white`}
        >
          
          Profile
        </button>

        <div className="mt-[50px] md:mt-[100px]  ">
              <Link to="/login">
                <button
                 onClick={handleLogout}
                  className="w-full bg-[#181A1E] text-white p-3 text-[18px] leading-7 rounded-md "
                >
                  Logout
                </button>
              </Link>
              <button className="w-full bg-red-600 text-white mt-4  p-3 text-[18px] leading-7 rounded-md ">
              
                Delete Account
              </button>
            </div>
      </div>
    </>
  );
};

export default Tabs;
