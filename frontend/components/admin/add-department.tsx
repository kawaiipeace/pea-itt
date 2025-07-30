"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import { ChevronLeft } from "lucide-react";

const AddDepartment = () => {
  const router = useRouter();

  const [deptName, setDeptName] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเพิ่มกองได้ อาจมีชื่อซ้ำ หรือเกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#74045F",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-black dark:text-[#506690] dark:hover:text-white"
        onClick={() => router.back()}
      >
        <ChevronLeft size={20} />
        <span>ย้อนกลับ</span>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded border bg-white p-6 shadow-md dark:text-[#506690] dark:border-gray-800 dark:bg-gray-900">
          <h1 className="mb-6 text-xl font-bold dark:text-gray-400">เพิ่มกอง</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">ชื่อกอง</label>
              <input
                type="text"
                name="dept_name"
                value={deptName}
                onChange={(e) => setDeptName(e.target.value)}
                required
                className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
                placeholder="กรุณากรอกชื่อกอง"
              />
              {errors && (
                <p className="text-red-500 text-xs mt-1">{errors}</p>
              )}
            </div>
            <div className="sm:col-span-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073] disabled:opacity-50"
              >
                {loading ? "กำลังบันทึก..." : "บันทึก"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
