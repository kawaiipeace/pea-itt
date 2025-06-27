import React from "react";
import { Metadata } from "next";
import Leaverequset from "../../../../components/leaverequset";

export const metadata: Metadata = {
  title: "หน้าใบลา",
};

const profile = () => {
  return (
    <>
      <Leaverequset />
    </>
  );
};

export default profile;
