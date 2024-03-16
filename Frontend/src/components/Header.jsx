import React, { useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../context/AuthContext";
import Dropdown from "../components/Dropdown/Dropdown";
import mainLogo from "../assets/images/mainlogo.png";

const Header = () => {
  const navLinks = [
    {
      path: "/Home",
      display: "Home",
    },
    {
      path: "/Doctors",
      display: "Find a Doctor",
    },
    {
      path: "/Services",
      display: "Services",
    },
    {
      path: "/Contact",
      display: "Contact",
    },
  ];

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

  return (
    <>
      <div className="header files items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src={mainLogo} className=" h-10" alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(NavClass) =>
                        NavClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              {token && user ? (
                <Dropdown role={role} user={user} />
              ) : (
                <Link to="/Login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]  ">
                    Login
                  </button>
                </Link>
              )}

              <span className="lg:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
