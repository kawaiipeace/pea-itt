"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import IconArrowBackward from "../../../../../../components/icon/icon-arrow-backward";
import axios from "axios";
import IconUsers from "@/components/icon/icon-users";

interface PageProps {
  params: { info: string };
}

interface stuPro {
  id: number;
  university: string;
  start_date: string;
  end_date: string;
}

interface detailStu {
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
  student_profile: stuPro;
  picture_url?: string | null;
}

const formatThaiDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "buddhist",
  }).format(date);
};

const formatThaiDateFromDMY = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  const isoString = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return formatThaiDate(isoString);
};

const InfoPage = ({ params }: PageProps) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const ITEMS = 10;

  const [personalInfo, setPersonalInfo] = useState<detailStu>();

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/${params.info}`,
          {
            withCredentials: true,
          }
        );
        const student = res.data.data;

        try {
          const imageRes = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}users/${student.student_profile.id}/picture`,
            {
              withCredentials: true,
              responseType: "blob",
            }
          );
          const imageUrl = URL.createObjectURL(imageRes.data);
          setPersonalInfo({ ...student, picture_url: imageUrl });
        } catch (err: any) {
          // ถ้ารูปไม่มี (404) หรือ error อื่น
          setPersonalInfo({ ...student, picture_url: null });
        }
      } catch (error) {
        console.error("โหลดข้อมูลผิดพลาด:", error);
      }
    };

    fetchPersonalInfo();
  }, []);

  const attendance = [
    {
      date: "09/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "10/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "11/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "12/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "13/06/2025",
      checkIn: "-",
      checkOut: "-",
      status: "ไม่มา",
      note: "-",
      approved: "-",
    },
    {
      date: "14/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "15/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "16/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "17/06/2025",
      checkIn: "08:30",
      checkOut: "16:30",
      status: "มา",
      note: "-",
      approved: "-",
    },
    {
      date: "18/06/2025",
      checkIn: "-",
      checkOut: "-",
      status: "ลา",
      note: "พบแพทย์",
      approved: "รอการอนุมัติ",
    },
  ];

  const renderBadge = (value?: string) => {
    if (!value || value === "-") return <>-</>;
    if (value === "อนุมัติ")
      return (
        <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
          อนุมัติ
        </span>
      );
    if (value === "ไม่อนุมัติ")
      return (
        <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-800">
          ไม่อนุมัติ
        </span>
      );
    return (
      <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
        รออนุมัติ
      </span>
    );
  };

  const pages = Math.ceil(attendance.length / ITEMS);
  const slice = attendance.slice((page - 1) * ITEMS, page * ITEMS);

  return (
    <section className="space-y-6 p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 flex w-max items-center gap-1 text-sm text-gray-600 hover:text-primary dark:border-[#506690] dark:bg-black-dark-light/5 dark:text-[#506690]"
      >
        <IconArrowBackward className="h-4 w-4" /> ย้อนกลับ
      </button>

      {/* ข้อมูลส่วนตัว */}
      <div className="flex items-center justify-center px-4">
        <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-6 rounded-lg bg-white p-6 shadow dark:border-[#506690] dark:bg-black-dark-light/55 dark:text-[#506690] md:h-[250px] md:grid-cols-3">
          <div className="flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              {personalInfo?.picture_url ? (
                <img
                  src={personalInfo?.picture_url}
                  alt="student-profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <IconUsers className="shrink-0 text-gray-400 group-hover:!text-primary" />
              )}
            </div>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <p>
              <strong>ชื่อจริง-นามสกุล:</strong> {personalInfo?.fname}{" "}
              {personalInfo?.lname}
            </p>
            <p>
              <strong>เบอร์โทรศัพท์:</strong> {personalInfo?.phone_number}
            </p>
            <p>
              <strong>อีเมล:</strong> {personalInfo?.email}
            </p>
            <p>
              <strong>มหาวิทยาลัยที่ศึกษาอยู่:</strong>{" "}
              {personalInfo?.student_profile.university}
            </p>
            <p>
              <strong>วันที่เริ่มฝึกงาน:</strong>{" "}
              {personalInfo?.student_profile.start_date &&
                formatThaiDate(personalInfo.student_profile.start_date)}
            </p>
            <p>
              <strong>วันที่สิ้นสุดฝึกงาน:</strong>{" "}
              {personalInfo?.student_profile.end_date &&
                formatThaiDate(personalInfo.student_profile.end_date)}
            </p>
          </div>
        </div>
      </div>

      {/* ตารางเวลาเข้างาน */}
      <div className="flex items-center justify-center">
        <div className="w-[1220px] overflow-auto rounded-lg border border-gray-200 bg-white dark:border-gray-900 dark:bg-black-dark-light/5 dark:text-[#506690] ">
          <div className="grid min-w-[820px] grid-cols-6 bg-gray-100 text-center text-sm font-semibold text-gray-800 dark:bg-gray-900 dark:text-[#506690] ">
            {[
              "วันที่",
              "เวลาเข้างาน",
              "เวลาออกงาน",
              "สถานะ",
              "หมายเหตุ",
              "อนุมัติการลา",
            ].map((h) => (
              <div key={h} className="p-3">
                {h}
              </div>
            ))}
          </div>

          <div className="divide-y text-center text-sm">
            {slice.map((entry, idx) => (
              <div key={idx} className="grid min-w-[820px] grid-cols-6">
                <div className="p-3">{formatThaiDateFromDMY(entry.date)}</div>
                <div className="p-3">{entry.checkIn}</div>
                <div className="p-3">{entry.checkOut}</div>
                <div className="p-3">{entry.status}</div>
                <div className="p-3">{entry.note}</div>
                <div className="p-3">
                  {entry.status === "ลา" ? renderBadge(entry.approved) : "-"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
            page === 1
              ? "cursor-not-allowed text-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          )}
        >
          &lt;
        </button>

        {Array.from({ length: pages }).map((_, i) => {
          const p = i + 1;
          return (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
                page === p
                  ? "bg-[#B10073] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              {p}
            </button>
          );
        })}

        <button
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
          disabled={page === pages}
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
            page === pages
              ? "cursor-not-allowed text-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          )}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default InfoPage;
