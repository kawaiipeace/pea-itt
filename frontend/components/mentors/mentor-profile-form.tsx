"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import Swal from "sweetalert2";


const MentorProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const [formData, setFormData] = useState({
    fname: user?.fname || "",
    lname: user?.lname || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
  });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("fname", formData.fname);
      form.append("lname", formData.lname);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone_number);

      if (!user || !user.id) {
        console.error("User ID is not available");
        alert("ไม่สามารถบันทึกข้อมูลได้ เนื่องจากไม่มีข้อมูลผู้ใช้");
        return;
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}users/mentor/${user.id}`,
        form,
        { withCredentials: true }
      );

      Swal.fire({
        title: "สำเร็จ",
        text: "บันทึกข้อมูลโปรไฟล์สำเร็จ",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => {
        refreshUser(); 
      });
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("ไม่สามารถบันทึกข้อมูลได้");
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 md:p-8 dark:bg-black-dark-light/5 dark:rounded-lg dark:text-[#506690]">
      <div className="rounded-lg border bg-white p-4 sm:p-6 shadow-md dark:bg-gray-900 dark:border-gray-800">
        <h1 className="mb-6 text-lg sm:text-xl font-bold text-center sm:text-left">โปรไฟล์</h1>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">ชื่อจริง</label>
            <input
              type="text"
              value={formData.fname}
              onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">นามสกุล</label>
            <input
              type="text"
              value={formData.lname}
              onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">อีเมล</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">เบอร์โทรศัพท์</label>
            <input
              type="text"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div className="mt-4 md:col-span-2">
              <button
                type="submit"
                onClick={(e) => {
                  handleClick(e);
                }}
                className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073] "
              >
                บันทึก
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default MentorProfileForm;
