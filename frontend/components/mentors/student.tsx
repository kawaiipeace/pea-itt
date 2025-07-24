"use client";

import React, { useEffect, useState } from "react";
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

const Student = () => {
  const user = useAuthStore((state) => state.user);
  const [mystu, setMystu] = useState<mystuData[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("false");

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user?.mentor_profile?.id) return;

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${user.mentor_profile.id}&show_ended=${selectedFilter}`,
          {
            withCredentials: true,
          }
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
              if (error?.response?.status == 404) {
                console.log("ไม่มีรูปภาพ");
              }
              if (error?.response?.status !== 404) {
                console.error("เกิดข้อผิดพลาดในการโหลดรูป:", student.id, error);
              }
              
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
      <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <h2 className="text-center text-xl font-semibold md:text-left md:text-[40px]">
          ข้อมูลนักศึกษาในความดูแล
        </h2>

        {/* dropdown filter */}
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="false">นักศึกษาที่กำลังฝึกงาน</option>
          <option value="true">ทั้งหมด</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mystu.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Student;
