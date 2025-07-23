import { Metadata } from "next";
import SumDashbord from "../../../../components/admin/sum-dashbord";
export const metadata: Metadata = {
  title: "DASHBORD",
};

const profile = () => {
  return (
    <>
      <SumDashbord/>
    </>
  );
};

export default profile;
