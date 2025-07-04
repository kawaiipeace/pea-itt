"use client";
import React, { useState } from "react";
import axios from "axios";
import useAuthStore from "../../store/authStore";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const EditMentor = () => {
  const router = useRouter();
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    if (onlyNums.length <= 10) {
      setFormData({ ...formData, phone_number: onlyNums });
    }
  };

  return (
    <div className="w-full">
      {/* ปุ่มย้อนกลับอยู่นอก container และไม่โดน padding ใด ๆ */}
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-black dark:text-[#506690] dark:hover:text-white"
        onClick={() => router.back()}
      >
        <ChevronLeft size={20} />
        <span>ย้อนกลับ</span>
      </div>

      {/* กล่องฟอร์มอยู่ใน container มี padding */}
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded border bg-white p-6 shadow-md dark:text-[#506690] dark:border-gray-800 dark:bg-gray-900">
          <h1 className="mb-6 text-xl font-bold dark:text-gray-400">โปรไฟล์</h1>
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">ชื่อจริง</label>
              <input
                type="text"
                value={formData.fname}
                onChange={(e) =>
                  setFormData({ ...formData, fname: e.target.value })
                }
                className="w-full rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                className="w-full rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                className="w-full rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">เบอร์โทรศัพท์</label>
              <input
                type="text"
                inputMode="numeric"
                value={formData.phone_number}
                onChange={handlePhoneChange}
                className="w-full rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">ชื่อกอง</label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className={`w-full sm:w-[49%] rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 ${
                  division === ""
                    ? "text-gray-400 dark:text-gray-400"
                    : "dark:text-white"
                }`}
              >
                <option value="" disabled hidden>
                  เลือกชื่อกอง
                </option>
                <option value="กอง 1">กอง 1</option>
                <option value="กอง 2">กอง 2</option>
                <option value="กอง 3">กอง 3</option>
              </select>
            </div>
          </form>

          <div className="mt-6">
            <button
              type="submit"
              onClick={handleClick}
              className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073]"
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMentor;
