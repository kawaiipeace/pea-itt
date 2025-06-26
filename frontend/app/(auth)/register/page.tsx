import ComponentsAuthRegisterForm from "@/components/components-auth-register-form";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/images/PEAITT2.png";

export const metadata: Metadata = {
  title: "Register Boxed",
};

const BoxedSignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-2 py-6 ">
      {/* <div className="w-1/2 rounded-lg border border-gray-300 bg-white p-6 shadow-md"> */}
      <div className="px-6backdrop-blur-lg relative flex flex-col justify-center rounded-md border border-gray-300 bg-white bg-white/60 p-6 px-2 py-3 shadow-md dark:bg-black/50">
        <div className="mx-auto w-full">
          <div className="mb-2 text-center">
            <Image
              src={Logo}
              alt="Logo"
              className="mx-auto mt-5 w-72 object-contain"
            />
            <h2 className="mt-5 text-base font-semibold text-gray-800">
              PEA Internship Time Track
            </h2>
            <p className="text-xs text-gray-500">
              ระบบลงเวลาเข้า-ออกของนักศึกษาฝึกงาน
            </p>
          </div>

          <ComponentsAuthRegisterForm />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BoxedSignUp;
