import React from "react";
import { Metadata } from "next";
import Editstudent from "../../../../components/admin/edit-student";

export const metadata: Metadata = {
  title: "หน้านักเรียนของแอดมิน",
};

const profile = () => {
  return (
    <>
      <Editstudent />
    </>
  );
};

export default profile;
