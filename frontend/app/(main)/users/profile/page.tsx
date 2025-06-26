import React from 'react'
import { Metadata } from "next";
import UserProfile from "@/components/userProfile";

export const metadata: Metadata = {
  title: "หน้าโปรไฟล์",
};

const profile = () => {
  return (
    
    <UserProfile />

  );
}

export default profile;