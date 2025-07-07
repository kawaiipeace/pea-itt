"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const EditMentor = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mentorId = searchParams.get("id");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
  });
  const [division, setDivision] = useState<number | "">("");
  const [divisions, setDivisions] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}dept`, {
          withCredentials: true,
        });
        const mapped = data.data.map((d: any) => ({ label: d.dept_name, value: d.dept_id }));
        setDivisions(mapped);
      } catch (err) {
        console.error("โหลดรายชื่อกองล้มเหลว", err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!mentorId) return;
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}user/mentor`,
          {
            withCredentials: true,
          }
        );

        const mentorList = data.data;
        const user = mentorList.find((m: any) => m.id === Number(mentorId));

        if (!user) {
          console.error("ไม่พบพี่เลี้ยงในรายการ");
          return;
        }

        setFormData({
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          phone_number: user.phone_number,
        });

        setDivision(user.department?.dept_id || "");
      } catch (error: any) {
        console.error("โหลดข้อมูลพี่เลี้ยงล้มเหลว:", error?.response || error);
      }
    })();
  }, [mentorId]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!mentorId || division === "") return;

      const payload = {
        department_id: division,
        mentor_id: Number(mentorId),
      };

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}users/admin/${mentorId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      Swal.fire({
        title: "สำเร็จ",
        text: "บันทึกข้อมูลพี่เลี้ยงสำเร็จ",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => {
        router.push("/admin/mentor");
      });
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      Swal.fire({
        title: "ไม่สำเร็จ",
        text: "ไม่สามารถบันทึกข้อมูลได้",
        icon: "error",
        confirmButtonText: "ปิด",
      });
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
      <div
        className="mb-4 flex cursor-pointer items-center gap-2 px-4 text-sm text-gray-600 hover:text-black dark:text-[#506690] dark:hover:text-white"
        onClick={() => router.back()}
      >
        <ChevronLeft size={20} />
        <span>ย้อนกลับ</span>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded border bg-white p-6 shadow-md dark:text-[#506690] dark:border-gray-800 dark:bg-gray-900">
          <h1 className="mb-6 text-xl font-bold dark:text-gray-400">โปรไฟล์</h1>
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">ชื่อจริง</label>
              <input
                type="text"
                value={formData.fname}
                onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                readOnly
                className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">นามสกุล</label>
              <input
                type="text"
                value={formData.lname}
                onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                readOnly
                className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">อีเมล</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                readOnly
                className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">เบอร์โทรศัพท์</label>
              <input
                type="text"
                inputMode="numeric"
                value={formData.phone_number}
                onChange={handlePhoneChange}
                readOnly
                className="w-full rounded border bg-gray-100 border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-[#506690]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">ชื่อกอง</label>
              <select
                value={division}
                onChange={(e) => setDivision(Number(e.target.value))}
                className={`w-full sm:w-[49%] rounded border border-gray-300 p-2 text-black dark:border-gray-600 dark:bg-gray-800 ${
                  division === "" ? "text-gray-400 dark:text-gray-400" : "dark:text-white"
                }`}
              >
                <option value="" disabled hidden>
                  เลือกชื่อกอง
                </option>
                {divisions.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <div className="mt-6">
            <button
              type="submit"
              onClick={handleClick}
              disabled={division === ""}
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
