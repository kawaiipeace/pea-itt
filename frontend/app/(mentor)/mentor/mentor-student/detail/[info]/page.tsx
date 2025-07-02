"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface PageProps {
  params: { info: string };
}

const InfoPage = ({ params }: PageProps) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const ITEMS = 10;

  const personalInfo = {
    name: "เธียรพงษ์ โฆษณาย",
    phone: "094030xxxx",
    email: "tt@gmail.com",
    university: "มหาวิทยาลัยธุรกิจบัณฑิตย์",
    startDate: "9 มิถุนายน 2568",
    endDate: "31 กรกฎาคม 2568",
  };

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
    <div className="space-y-6 p-4">
      {/* ข้อมูลส่วนตัว */}
      <div className="flex items-center justify-center px-4">
        <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-6 rounded-lg bg-white p-6 shadow dark:border-[#506690] dark:bg-black-dark-light/55 dark:text-[#506690] md:h-[250px] md:grid-cols-3">
          <div className="flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 text-6xl text-gray-400">
              👤
            </div>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <p>
              <strong>ชื่อจริง-นามสกุล:</strong> {personalInfo.name}
            </p>
            <p>
              <strong>เบอร์โทรศัพท์:</strong> {personalInfo.phone}
            </p>
            <p>
              <strong>อีเมล:</strong> {personalInfo.email}
            </p>
            <p>
              <strong>มหาวิทยาลัยที่ศึกษาอยู่:</strong>{" "}
              {personalInfo.university}
            </p>
            <p>
              <strong>วันที่เริ่มฝึกงาน:</strong> {personalInfo.startDate}
            </p>
            <p>
              <strong>วันที่สิ้นสุดฝึกงาน:</strong> {personalInfo.endDate}
            </p>
          </div>
        </div>
      </div>

      {/* ตารางเวลาเข้างาน */}
      <div className="flex items-center justify-center">

      <div className="overflow-auto rounded-lg border border-gray-200 bg-white dark:border-gray-900 dark:bg-black-dark-light/5 dark:text-[#506690] w-[1220px] ">
        <div className="grid min-w-[820px] grid-cols-6 bg-gray-100 dark:bg-gray-900 dark:text-[#506690]  text-center text-sm font-semibold text-gray-800 ">
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
              <div className="p-3">{entry.date}</div>
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
    </div>
  );
};

export default InfoPage;
