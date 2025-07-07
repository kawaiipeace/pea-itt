"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import IconArrowBackward from "../../../../../components/icon/icon-arrow-backward";

const Page = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "กองออกแบบและพัฒนาระบบดิจิทัล 1",
    shortName: "กวพ.1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2)); // mock ส่งข้อมูล
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50 dark:bg-black px-4 py-6 top-0">
      {/* ปุ่มย้อนกลับ */}
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:text-black dark:text-[#506690] dark:hover:text-white self-start"
        onClick={() => router.back()}
      >
        <IconArrowBackward className="h-4 w-4" />
        ย้อนกลับ
      </div>

      {/* หัวเรื่อง */}
      <h1 className="text-2xl w-full max-w-4xl text-start sm:text-3xl font-bold text-gray-800 dark:text-gray-300 mb-6 ">
        {form.fullName}
      </h1>

      {/* กล่องฟอร์ม */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg shadow-md p-6 w-full max-w-4xl dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ">
              ชื่อเต็มกอง
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ชื่อย่อกอง
            </label>
            <input
              type="text"
              name="shortName"
              value={form.shortName}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <button
            type="submit"
            className="bg-[#74045F] hover:bg-[#B10073] text-white px-6 py-2 rounded font-medium transition"
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
