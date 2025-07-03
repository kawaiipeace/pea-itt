"use client";
import React, { useState } from "react";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import Swal from "sweetalert2";

const EditMentor = () => {
  const user = useAuthStore((state) => state.user);
  const refreshUser = useAuthStore((state) => state.refreshUser);

  const [formData, setFormData] = useState({
    fname: user?.fname || "",
    lname: user?.lname || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
  });

  const [division, setDivision] = useState(user?.division || "");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("fname", formData.fname);
      form.append("lname", formData.lname);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone_number);
      form.append("division", division);

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

  const handleReset = () => {
    Swal.fire({
      title: "ลบข้อมูล?",
      text: "คุณแน่ใจหรือไม่ว่าต้องการล้างข้อมูลทั้งหมด?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({ fname: "", lname: "", email: "", phone_number: "" });
        setDivision("");
      }
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, ""); // เอาเฉพาะตัวเลข
    if (onlyNums.length <= 10) {
      setFormData({ ...formData, phone_number: onlyNums });
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl p-4 dark:rounded-lg dark:bg-black-dark-light/5 dark:text-[#506690] sm:p-6 md:p-8">
      <div className="rounded-lg border bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-6">
        <h1 className="mb-6 text-center text-lg font-bold sm:text-left sm:text-xl">
          โปรไฟล์
        </h1>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">ชื่อจริง</label>
            <input
              type="text"
              value={formData.fname}
              onChange={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">นามสกุล</label>
            <input
              type="text"
              value={formData.lname}
              onChange={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">อีเมล</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={formData.phone_number}
              onChange={handlePhoneChange}
              className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">ชื่อกอง</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className={`w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-900 ${
                division === ""
                  ? "text-gray-400 dark:text-gray-400"
                  : "dark:text-gray-200"
              }`}
            >
              <option
                value=""
                disabled
                hidden
                className="text-gray-400 dark:text-gray-400"
              >
                เลือกชื่อกอง
              </option>
              <option value="กอง 1">กอง 1</option>
              <option value="กอง 2">กอง 2</option>
              <option value="กอง 3">กอง 3</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center gap-4 md:col-span-2">
            <button
              type="submit"
              onClick={handleClick}
              className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073]"
            >
              บันทึก
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded bg-red-500 px-6 py-2.5 font-medium text-white hover:bg-red-600"
            >
              ลบข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMentor;
