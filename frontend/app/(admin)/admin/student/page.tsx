import React from "react";
import { Metadata } from "next";
import Studentform from "../../../../components/admin/student-form";

export const metadata: Metadata = {
  title: "หน้านักเรียนของแอดมิน",
};

const profile = () => {
  return (
    <>
      <Studentform />
    </>
  );
};

export default profile;
