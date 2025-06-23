import ComponentsAuthRegisterForm from "@/components/components-auth-register-form";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title: "Register Boxed",
};

const BoxedSignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-2 py-6 ">
      {/* <div className="w-1/2 rounded-lg border border-gray-300 bg-white p-6 shadow-md"> */}
        <div className="px-6backdrop-blur-lg relative flex flex-col justify-center py-3 px-2 rounded-md bg-white/60 dark:bg-black/50 border border-gray-300 bg-white p-6 shadow-md">
          <div className="mx-auto w-full">
            <div className="mb-2 text-center">
              <img
                src="/assets/images/PEAITT-LOGO2.PNG"
                alt="Logo"
                className="mx-auto w-72 mt-5 object-contain"
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
