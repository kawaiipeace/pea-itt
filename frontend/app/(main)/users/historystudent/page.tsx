import React from 'react'
import { Metadata } from "next";
import Historyform from "../../../../components/history-form";

export const metadata: Metadata = {
  title: "หน้าโปรไฟล์",
};

const profile = () => {
  return (
    
    <Historyform />

  );
}

export default profile;