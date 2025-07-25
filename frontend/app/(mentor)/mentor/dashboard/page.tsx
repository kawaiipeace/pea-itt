import { Metadata } from "next";
import DashboardTable from "../../../../components/mentors/dashboard-table";
export const metadata: Metadata = {
  title: "DASHBORD",
};

const profile = () => {
  return (
    <>
      <DashboardTable />
    </>
  );
};

export default profile;

