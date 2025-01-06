import React from "react";
import Breadcrumb from "../components/BookAppointment/BookAppointment";
import AppointmentServices from "../components/BookAppointment/AppointmentServices";

const BookAppointmentPage = () => {
  return (
    <>
      <Breadcrumb />
      <div>
        <AppointmentServices/>
      </div>
    </>
  );
};

export default BookAppointmentPage;
