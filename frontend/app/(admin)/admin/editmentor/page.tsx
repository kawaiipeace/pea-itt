import React from "react";
import { Metadata } from "next";
import Editmentor from "../../../../components/admin/edit-mentor";

export const metadata: Metadata = {
  title: "หน้าeditmentor",
};

const profile = () => {
  return (
    <>
      <Editmentor />
    </>
  );
};

export default profile;
