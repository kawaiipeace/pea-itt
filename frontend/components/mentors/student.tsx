"use client";
import React, { useEffect,useState } from "react";
import Card from "../card";
import axios from "axios";
import useAuthStore from "@/store/authStore";


const mockStudents = [
  {
    id: 1,
    name: "เดือนเพ็ญ โฉมฉาย",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
  {
    id: 2,
    name: "สุขหทัย พลยะเรศ",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
  {
    id: 3,
    name: "ปิยธิดา อันชม",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
  {
    id: 4,
    name: "นฤมล สีละมุด",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
  {
    id: 5,
    name: "ภูมิพัฒน์ เวฬฬุวัฬราช",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
  {
    id: 6,
    name: "อภิวัตน์ ลานทอง",
    startDate: "09/06/2568",
    endDate: "31/07/2568",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
  },
];

interface mystuData{
  
}

const Student = () => {
  const user = useAuthStore((state)=>state.user)
  const[mystu,setMystu]=useState()
  useEffect(() => {
    const hey = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${user?.mentor_profile?.id}`, {
        withCredentials: true,
      });
      console.log(res.data.data);
      
    };
    hey();
  }, []);
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-2xl">
        ข้อมูลนักศึกษาในความดูแล
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mockStudents.map((student) => (
          <Card student={student} />
        ))}
      </div>
    </div>
  );
};

export default Student;
