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
  picture:string;
  start_date: string;
  end_date: string;
  student_profile: any;

}

const Student = () => {
  const user = useAuthStore((state) => state.user);
  const [mystu, setMystu] = useState<mystuData[]>([]);
  useEffect(() => {
    const hey = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${user?.mentor_profile?.id}`,
        {
          withCredentials: true,
        }
      );
      setMystu(res.data.data);
    };
    hey();
  }, [user]);

  console.log(mystu);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-2xl">
        ข้อมูลนักศึกษาในความดูแล
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mystu.map((student) => (
          <Card student={student} />
        ))}
      </div>
    </div>
  );
};

export default Student;
