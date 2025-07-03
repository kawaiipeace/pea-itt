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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${user?.mentor_profile?.id}&show_ended=true`,
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
              // ถ้าไม่ใช่ 404 จึง log error
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

    if (user?.mentor_profile?.id) {
      fetchStudents();
    }
  }, [user]);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-2xl">
        ข้อมูลนักศึกษาในความดูแล
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mystu.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Student;
