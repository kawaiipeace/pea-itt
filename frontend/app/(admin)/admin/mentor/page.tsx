import React from "react";
import { Metadata } from "next";
import Mentorform from "../../../../components/admin/mentor-form";

export const metadata: Metadata = {
  title: "หน้านักเรียนของแอดมิน",
};

const profile = () => {
  return (
    <>
      <Mentorform />
    </>
  );
};

export default profile;
