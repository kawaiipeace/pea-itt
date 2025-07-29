import { Metadata } from "next";
import EditDepartment from "../../../../../components/admin/edit-department";
export const metadata: Metadata = {
  title: "EDIT DEPARTMENT",
};

const profile = () => {
  return (
    <>
      <EditDepartment/>
    </>
  );
};

export default profile;