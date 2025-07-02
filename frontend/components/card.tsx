import React from "react";
import useAuthStore from "@/store/authStore";

const Card = ({ student }: any) => {
  const user = useAuthStore((s) => s.user);
  return (
    <div
      key={student.id}
      className="flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow transition hover:shadow-md"
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"
        // style={{
        //   backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}user/${user?.student_profile.id}/picture')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      ></div>
      <div className="mt-3 text-base font-semibold md:text-lg">
        {student.name}
      </div>
      <div className="mt-1 text-sm text-gray-500">
        วันที่เริ่มต้นฝึกงาน: {student.startDate}
      </div>
      <div className="text-sm text-gray-500">
        วันที่สิ้นสุดฝึกงาน: {student.endDate}
      </div>
      <div className="mt-1 text-sm text-gray-500">{student.university}</div>
    </div>
  );
};

export default Card;
