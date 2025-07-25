"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import IconArrowBackward from "@/components/icon/icon-arrow-backward";

const AddDepartment = () => {
  const router = useRouter();

  const [deptName, setDeptName] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (!deptName.trim()) {
      setErrors("กรุณากรอกชื่อกอง");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}dept`,
        {
          dept_name: deptName,
        },
        {
          withCredentials: true,
        }
      );

      Swal.fire({
        icon: "success",
        title: "เพิ่มกองสำเร็จ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#74045F",
      }).then(() => {
        router.push("/admin/department");
      });
    } catch (error) {
      console.error("เพิ่มกองไม่สำเร็จ:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเพิ่มกองได้ อาจมีชื่อซ้ำ หรือเกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#74045F",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-black px-4 py-6 top-0">
      {/* ปุ่มย้อนกลับ */}
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:text-black dark:text-[#506690] dark:hover:text-white self-start"
        onClick={() => router.back()}
      >
        <IconArrowBackward className="h-4 w-4" />
        ย้อนกลับ
      </div>

      {/* ฟอร์มเพิ่มชื่อกอง */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg shadow-md p-6 w-full max-w-4xl dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ชื่อย่อกอง
            </label>
            <input
              type="text"
              name="deptName"
              value={deptName}
              onChange={(e) => setDeptName(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="กรุณากรอกชื่อย่อกอง"
            />
            {errors && (
              <p className="text-red-500 text-sm mt-1">{errors}</p>
            )}
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

export default AddDepartment;
