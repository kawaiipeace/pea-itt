"use client";

import React from "react";
import { useRouter } from "next/navigation";
import IconUsers from "@/components/icon/icon-users";

// ฟังก์ชันแปลงวันที่เป็นไทย
const formatThaiDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Card = ({ student }: any) => {
  const router = useRouter();

  const clickme = (id: string) => {
    router.push(`/mentor/mentor-student/detail/${id}`);
  };

  return (
    <div
      onClick={() => clickme(student.id)}
      className="cursor-pointer flex h-[300px] flex-col items-center rounded-2xl border border-transparent bg-white p-4
        text-center shadow transition-colors hover:border-[#B10073] hover:bg-[#F7E3F0]
        hover:shadow-md dark:border-gray-900 dark:bg-gray-900 dark:text-[#506690]
        dark:hover:border-white dark:hover:bg-gray-900"
    >
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-100">
        {student.picture_url ? (
          <img
            src={student.picture_url}
            alt={`${student.fname} ${student.lname}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src="../public/assets/images/watdee.jpeg"
            alt={`${student.fname} ${student.lname}`}
            className="h-full w-full object-cover"
          />)}
      </div>

      <div className="mb-6 my-6 text-base font-semibold md:text-lg">
        {student.fname} {student.lname}
      </div>

      <div className="mt-1 text-sm text-gray-500">
        วันที่เริ่มต้นฝึกงาน:{" "}
        {formatThaiDate(student.student_profile.start_date)}
      </div>
      <div className="text-sm text-gray-500">
        วันที่สิ้นสุดฝึกงาน:{" "}
        {formatThaiDate(student.student_profile.end_date)}
      </div>
      <div className="mt-1 text-sm text-gray-500">
        {student.student_profile.university}
      </div>
    </div>
  );
};

export default Card;
