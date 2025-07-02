"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

const MentorProfileForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("fname", formData.name);
      form.append("lname", formData.surname);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone);

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}users/your_user_id`, // ← เปลี่ยนให้ใช้ user.id จริง
        form,
        {
          withCredentials: true,
        }
      );

      alert("บันทึกข้อมูลเรียบร้อยแล้ว!");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("ไม่สามารถบันทึกข้อมูลได้");
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4">
      <div className="rounded-lg border bg-white p-6 shadow-md">
        <h1 className="mb-4 text-xl font-bold">โปรไฟล์</h1>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">ชื่อจริง</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">นามสกุล</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">อีเมล</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">เบอร์โทรศัพท์</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="col-span-2 mt-2">
            <button
              type="submit"
              onClick={handleClick}
              className="rounded bg-[#74045F] px-4 py-2 text-white hover:bg-[#B10073]"
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
