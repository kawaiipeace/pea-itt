import React from "react";
import EditStudent from "@/components/admin/edit-student";

interface PageProps {
  params: { id: number };
}
const page = ({ params }: PageProps) => {
  return <EditStudent />;
};

export default page;
