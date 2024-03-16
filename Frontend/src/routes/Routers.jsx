import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { Route, Routes } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />

    </Routes>
  );
};

export default Routers;
