import React from "react";
import mainImg from "../assets/images/hero-img01.png";
import mainImg2 from "../assets/images/hero-img02.png";
import mainImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import about from "../assets/images/about.png";
import faqImg from "../assets/images/faq-img.png";
import featureImg from "../assets/images/feature-img.png";
import aboutDesc from "../assets/images/about-card.png";
import videoImg from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import DoctorList from "../components/DrComponent/DoctorList";
import DoctorCard from "../components/DrComponent/DoctorCard";
import { BiSolidArrowToRight } from "react-icons/bi";
import ServiceList from "../components/Services/ServiceList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="main-section pt-[25px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col p-[10px] lg:flex-row gap-[90px] items-center justify-between">
            <div className="lg:pl-[30px]">
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[56px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  Bringing Healthcare to your Fingertips!
                </h1>
                <p className="text__para pt-[10px]">
                  Simplify booking, connect with top doctors, and prioritize
                  your well-being with our user-friendly platform.
                </p>
                <button className="btn">Book an Appointment</button>
              </div>

              <div className="mt-[20px] lg:mt-[70px] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap-[40px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]  "></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]  "></span>
                  <p className="text__para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]  "></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end ">
              <div>
                <img className="w-full" src={mainImg} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={mainImg2} alt="" className="w-full mb-[30px] " />
                <img src={mainImg3} alt="" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg: mx-auto ">
            <h2 className="heading text-center ">
              Providing the Best Medical Services
            </h2>
            <p className="text__para text-center ">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-black hover:border-none "
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-black hover:border-none "
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-black hover:border-none "
                >
                  <BiSolidArrowToRight className="group-hover:text-white w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[-50px]">
        <div className="container lg:px-[70px]">
          <div className="flex justify-between gap-[25px] lg:gap-[65px] xl:gap-0 flex-col lg:flex-row">
            <div
              id="content"
              class="relative w-3/4 lg:w-2-1/2 xl:w-[700px] z-10 order-2 lg:order-1"
            >
              <img src={about} alt="" />
              <div class="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[12%]">
                <img src={aboutDesc} alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 lg:ml-[-150px]">
              <h1 className="heading ">
                "Elevating excellence, Proud to stand among the best"
              </h1>
              <div className="mt-[30px]">
                <p className="text_para">
                  Dr. Mitchell Starc, a distinguished Chief Doctor, is deeply
                  honored to be collaborating with our esteemed doctor
                  appointment booking website. His extensive experience in the
                  field of medicine, combined with our innovative technology,
                  allows us to provide a seamless experience for patients
                  seeking medical appointments.
                </p>
                <p className="text_para mt-[30px]">
                  Our partnership with Dr. Starc marks an exciting milestone in
                  our mission to revolutionize the healthcare industry. With his
                  guidance and expertise, we are confident that our platform
                  will continue to evolve, providing patients with unparalleled
                  access to the best healthcare professionals and resources.
                </p>

                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px] ">
              <h2 className="heading">
                Get Virtual Treatment Anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/">
                {" "}
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative pr-[20px]  z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="W-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-lg">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3   ">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]  ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]  ">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]   ">
                    <img src={videoImg} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px[8px]  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full   ">
                
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]   ">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor  ">
                    Abraham Ozler
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="w-1/2 hidden md:block pl-[60px]">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2  lg:pr-[20px]">
              <h2 className="heading">Most Questions Asked By Our Patients!</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">What Our Patients Say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
