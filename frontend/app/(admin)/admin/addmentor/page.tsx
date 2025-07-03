import React from "react";
import { Metadata } from "next";
import Addmentor from "../../../../components/admin/add-mentor";

export const metadata: Metadata = {
  title: "หน้านักเรียนของแอดมิน",
};

const profile = () => {
  return (
    <>
      <Addmentor />
    </>
  );
};

export default profile;
