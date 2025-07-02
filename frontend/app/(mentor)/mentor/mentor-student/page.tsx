import Student from "../../../../components/mentors/student"
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "mentor",
};

const Mentor = () => {
  return (
    <>
      <Student />
    </>
  );
};

export default Mentor;