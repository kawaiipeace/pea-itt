import ApproveForm from "../../../../components/mentors/approve-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "mentor",
};

const Mentor = () => {
  return (
    <>
      <ApproveForm />
    </>
  );
};

export default Mentor;