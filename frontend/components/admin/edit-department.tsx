"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { ChevronLeft } from "lucide-react";

const EditDepartment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const deptId = searchParams.get("id");

  const [formData, setFormData] = useState({ dept_name: "" });
  const [loading, setLoading] = useState(false);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

  // ดึงข้อมูลกองจาก API
  useEffect(() => {
    async function fetchDepartment() {
      if (!deptId) return;
      try {
        const res = await api.get(`/dept/${deptId}`);
        setFormData({ dept_name: res.data.data.dept_name });
      } catch (err) {
        console.error(err);
        Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถโหลดข้อมูลได้", "error");
      }
    }

    fetchDepartment();
  }, [deptId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!deptId) return;

    try {
      setLoading(true);
      await api.put(`/dept/${deptId}`, formData);
      Swal.fire("สำเร็จ", "อัปเดตกองเรียบร้อยแล้ว", "success").then(() =>
        router.push("/admin/department")
      );
    } catch (err) {
      console.error(err);
      Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถอัปเดตข้อมูลได้", "error");
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
                <h1 className="mb-6 text-xl font-bold dark:text-gray-400">แก้ไขข้อมูลกอง</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className="mb-1 block text-sm font-medium">ชื่อกอง</label>
                        <input
                            type="text"
                            name="dept_name"
                            value={formData.dept_name}
                            onChange={handleChange}
                            required
                            className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
                        />
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

export default EditDepartment;
