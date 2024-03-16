import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { authContext } from "../../context/AuthContext";

const Dropdown = ({ role, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(authContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="p-2 border border-gray-300 rounded-lg flex items-center">
        <h2 className="text-lg mr-2">{user?.name}</h2>
        <FaAngleDown className="text-lg" />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-1 w-48 bg-white rounded-lg shadow-lg z-10 right-0">
          <Link
            to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            View Profile
          </Link >
          <Link to="/login">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Log Out
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
