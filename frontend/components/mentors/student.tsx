"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select"; // เพิ่ม
import Card from "../card";
import axios from "axios";
import useAuthStore from "@/store/authStore";

interface mystuData {
  id: number;
  fname: string;
  lname: string;
  university: string;
  picture: string;
  start_date: string;
  end_date: string;
  student_profile: any;
  picture_url?: string | null;
}

// ตัวเลือก dropdown
const months = [
  { value: "ปัจจุบัน", label: "ปัจจุบัน" },
  { value: "มกราคม", label: "มกราคม" },
  { value: "กุมภาพันธ์", label: "กุมภาพันธ์" },
  { value: "มีนาคม", label: "มีนาคม" },
  { value: "เมษายน", label: "เมษายน" },
  { value: "พฤษภาคม", label: "พฤษภาคม" },
  { value: "มิถุนายน", label: "มิถุนายน" },
  { value: "กรกฎาคม", label: "กรกฎาคม" },
  { value: "สิงหาคม", label: "สิงหาคม" },
  { value: "กันยายน", label: "กันยายน" },
  { value: "ตุลาคม", label: "ตุลาคม" },
  { value: "พฤศจิกายน", label: "พฤศจิกายน" },
  { value: "ธันวาคม", label: "ธันวาคม" },
];

const years = [
  { value: "2568", label: "2568" },
  { value: "2567", label: "2567" },
  { value: "2566", label: "2566" },
  { value: "2565", label: "2565" },
  { value: "2564", label: "2564" },
];

const Student = () => {
  const user = useAuthStore((state) => state.user);
  const [mystu, setMystu] = useState<mystuData[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("false");

  const [startMonth, setStartMonth] = useState(months[0]);
  const [endMonth, setEndMonth] = useState(months[0]);
  const [year, setYear] = useState(years[0]);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user?.mentor_profile?.id) return;

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${user.mentor_profile.id}&show_ended=${selectedFilter}`,
          { withCredentials: true }
        );

        const students = res.data.data;

        const studentsWithPicture = await Promise.all(
          students.map(async (student: mystuData) => {
            try {
              const imageRes = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}users/${student.student_profile.id}/picture`,
                {
                  withCredentials: true,
                  responseType: "blob",
                }
              );
              const imageUrl = URL.createObjectURL(imageRes.data);
              return { ...student, picture_url: imageUrl };
            } catch (error: any) {
              if (error?.response?.status == 404) console.log("ไม่มีรูปภาพ");
              else console.error("เกิดข้อผิดพลาดในการโหลดรูป:", student.id, error);
              return { ...student, picture_url: null };
            }
          })
        );

        setMystu(studentsWithPicture);
      } catch (err) {
        console.error("โหลดรายชื่อนักศึกษาไม่สำเร็จ:", err);
      }
    };

    fetchStudents();
  }, [user?.mentor_profile?.id, selectedFilter]);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-4">
        <h2 className="mb-4 text-center text-xl font-semibold md:text-left md:text-[40px]">
          ข้อมูลนักศึกษาในความดูแล
        </h2>

        {/* ✅ Dropdowns แบบ scroll ได้แบบมี scrollbar เดียว */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-11">
          {/* เดือนเริ่มต้น */}
          <div className="flex flex-col">
            <h3 className="mb-1 text-[14px] font-semibold">เดือนเริ่มต้นฝึกงาน</h3>
            <Select
              options={months}
              value={startMonth}
              onChange={(val) => setStartMonth(val!)}
              classNames={{
                control: () =>
                  "border border-gray-300 dark:border-gray-600 shadow-sm rounded-md",
                
                menuList: () =>
                  "max-h-48 overflow-y-auto bg-white dark:bg-gray-800",
                option: () =>
                  "text-sm px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700",
              }}
            />
          </div>

          {/* ปี */}
          <div className="flex flex-col">
            <h3 className="mb-1 text-[14px] font-semibold">ปี</h3>
            <Select
              options={years}
              value={year}
              onChange={(val) => setYear(val!)}
              classNames={{
                control: () =>
                  "border border-gray-300 dark:border-gray-600 shadow-sm rounded-md",
        
                menuList: () =>
                  "max-h-48 overflow-y-auto bg-white dark:bg-gray-800",
                option: () =>
                  "text-sm px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700",
              }}
            />
          </div>
        </div>
      </div>

      {/* รายการนักศึกษา */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mystu.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Student;
