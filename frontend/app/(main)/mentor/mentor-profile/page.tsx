import MentorProfileForm from "../../../../components/mentors/mentor-profile-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "mentor",
};

const Mentor = () => {
  return (
    <>
      < MentorProfileForm/>
    </>
  );
};

export default Mentor;