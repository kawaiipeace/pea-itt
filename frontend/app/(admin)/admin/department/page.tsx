import React from "react";
import { Metadata } from "next";
import DepartmentForm from "../../../../components/admin/department-form";

export const metadata: Metadata = {
  title: "หน้าแก้ไขแผนก",
};

const profile = () => {
  return (
    <>
      <DepartmentForm />
    </>
  );
};

export default profile;
