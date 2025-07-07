import React from "react";
import EditStudent from "@/components/admin/edit-student";

interface PageProps {
  params: { info: number };
}
const page = ({ params }: PageProps) => {
  console.log("Page params:", params.info);
  
  return (
    <EditStudent id={params.info} />
  );
};

export default page;
