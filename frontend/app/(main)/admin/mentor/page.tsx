import MentorForm from "../../../../components/admin/mentor-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin",
};

const Admin = () => {
  return (
    <>
      <MentorForm />
    </>
  );
};

export default Admin;