import SumDashboard from "../../../../components/admin/sum-dashboard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "admin",
};

const Admin = () => {
  return (
    <>
      <SumDashboard />
    </>
  );
};

export default Admin;