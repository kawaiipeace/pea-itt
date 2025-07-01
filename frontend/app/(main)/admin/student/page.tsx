import StudentForm from "../../../../components/admin/student-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin",
};

const Admin = () => {
  return (
    <>
      <StudentForm />
    </>
  );
};

export default Admin;