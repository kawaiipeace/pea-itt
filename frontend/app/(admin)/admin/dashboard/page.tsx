import { Metadata } from "next";
import SumDashboard from "../../../../components/admin/sum-dashboard";
export const metadata: Metadata = {
  title: "DASHBOARD",
};

const profile = () => {
  return (
    <>
      <SumDashboard/>
    </>
  );
};

export default profile;
