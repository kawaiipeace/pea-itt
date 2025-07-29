import { Metadata } from "next";
import AddDepartment from "../../../../../components/admin/add-department";
export const metadata: Metadata = {
  title: "ADDMENTOR",
};

const profile = () => {
  return (
    <>
      <AddDepartment/>
    </>
  );
};

export default profile;
