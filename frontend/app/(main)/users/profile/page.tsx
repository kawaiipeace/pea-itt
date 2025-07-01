import React from 'react'
import { Metadata } from "next";
import UserProfile from "../../../../components/userProfile";
export const metadata: Metadata = {
  title: "หน้าประวัติ",
};

const profile:React.FC = () => {
  return (
    <>
    <UserProfile  />
    </>

  );
}

export default profile;