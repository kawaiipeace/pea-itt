import React from "react";
import { Metadata } from "next";
import Editstudent from "../../../../components/admin/edit-student";

export const metadata: Metadata = {
  title: "หน้านักเรียนของแอดมิน",
};

const profile = () => {
  return (
    <>
      <Editstudent id={0} />
    </>
  );
};

export default profile;
