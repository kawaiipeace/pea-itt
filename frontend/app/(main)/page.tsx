import CheckTime from "@/components/check-time";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "หน้าหลัก",
};

const Home = () => {
  return (
    <>
      <CheckTime />
    </>
  );
};

export default Home;
