"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserType {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
}

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

const MentorProfileForm = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}user/mentor?mentor_id=1`, 
          { withCredentials: true }
        );
        const userData = response.data.data;
        setUser(userData);
        setFormData({
          name: userData.fname || "",
          surname: userData.lname || "",
          email: userData.email || "",
          phone: userData.phone_number || "",
        });
      } catch (error) {
        console.error("โหลดข้อมูลผู้ใช้ล้มเหลว:", error);
      }
    };

    fetchUser();
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) {
      alert("ยังไม่มีข้อมูลผู้ใช้");
      return;
    }

    try {
      const form = new FormData();
      form.append("fname", formData.name);
      form.append("lname", formData.surname);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone);

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}users/${user.id}`,
        form,
        { withCredentials: true }
      );

      alert("บันทึกข้อมูลเรียบร้อยแล้ว!");
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
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">นามสกุล</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
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
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
