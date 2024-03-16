import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import DoctorCard from "../../components/DrComponent/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-[55px] text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You don't have any bookings yet!
        </h2>
      )}
    </>
  );
};

export default MyBookings;
