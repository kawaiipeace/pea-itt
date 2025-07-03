"use client";
import React, { useState, useEffect, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("th", th);

interface LeaveItem {
  id: number;
  name: string;
  evidence: string;
  reason: string;
  status?: "approved" | "rejected";
}

const CustomDateButton = forwardRef<HTMLButtonElement, any>(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-[#506690] hover:underline"
  >
    {value}
    <svg
      className="w-4 h-4 text-gray-600 dark:text-[#506690]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
));
CustomDateButton.displayName = "CustomDateButton";

const ApproveForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [leaveData, setLeaveData] = useState<LeaveItem[]>([]);
  const [loading, setLoading] = useState(false);

  const formatDateThai = (date: Date | null) => {
    if (!date) return "";
    const thaiYear = date.getFullYear() + 543;
    const formatted = format(date, "d MMMM", { locale: th });
    return `${formatted} ${thaiYear}`;
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLeaveData([
        {
          id: 1,
          name: "เปรมวิทย์ โชควัฒนา",
          evidence: "ไฟล์แนบ",
          reason: "พาน้องหมาไปหาหมอ",
        },
        {
          id: 2,
          name: "จุมพล ทองระย้า",
          evidence: "เปิดไฟล์",
          reason: "ไข้ขึ้น",
        },
        {
          id: 3,
          name: "ปิติพงษ์ อับดุล",
          evidence: "เปิดไฟล์",
          reason: "ท้องเสีย",
        },
        {
          id: 4,
          name: "เบญจพร ธำรงบุญ",
          evidence: "เปิดไฟล์",
          reason: "ภารกิจส่วนตัว",
        },
        {
          id: 5,
          name: "ชุติมา อนวัชวราวรรณ",
          evidence: "เปิดไฟล์",
          reason: "นัดฉีดวัคซีน",
        },
      ]);
      setLoading(false);
    }, 800);
  }, [selectedDate]);

  const handleStatusChange = (index: number, status: "approved" | "rejected") => {
    const item = leaveData[index];
    if (!item || item.status === status) return;
    setLeaveData((prev) =>
      prev.map((it, i) => (i === index ? { ...it, status } : it))
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto text-gray-900 dark:text-[#506690]">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale="th"
          dateFormat="dd MMMM yyyy"
          customInput={<CustomDateButton />}
        />
      </div>

      {loading ? (
        <div className="text-center py-6 text-gray-500 dark:text-[#506690]">กำลังโหลดข้อมูล...</div>
      ) : leaveData.length === 0 ? (
        <div className="text-center py-6 text-gray-500 dark:text-[#506690]">ไม่พบข้อมูลการลา</div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white  shadow-sm w-full dark:bg-black-dark-light/5 dark:border-gray-900">
          {/* Header */}
          <div className=" rounded-t-lg borderhidden sm:grid grid-cols-4 font-semibold text-base text-gray-700  bg-gray-100 dark:bg-gray-900  dark:text-[#506690] px-6 py-3">
            <div>ชื่อ-นามสกุล</div>
            <div>หลักฐาน</div>
            <div>เหตุผล</div>
            <div>การอนุมัติ</div>
          </div>

          {/* รายการข้อมูล */}
          {leaveData.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 sm:gap-y-0 items-start border-t border-gray-200 dark:border-gray-600 px-6 py-4 text-base text-gray-800 dark:text-[#506690] dark:bg-black-dark-light/5"
            >
              {/* ชื่อ */}
              <div>
                <div className="sm:hidden text-sm text-gray-500 dark:text-[#506690]">ชื่อ-นามสกุล</div>
                <div>{item.name}</div>
              </div>

              {/* หลักฐาน */}
              <div>
                <div className="sm:hidden text-sm text-gray-500 dark:text-[#506690]">หลักฐาน</div>
                <div className="text-pink-600 underline cursor-pointer">{item.evidence}</div>
              </div>

              {/* เหตุผล */}
              <div>
                <div className="sm:hidden text-sm text-gray-500 dark:text-[#506690]">เหตุผล</div>
                <div>{item.reason}</div>
              </div>

              {/* ปุ่ม */}
              <div>
                <div className="sm:hidden text-sm text-gray-500 dark:text-[#506690] mb-1">การอนุมัติ</div>
                <div className="space-x-2">
                  <button
                    className={`px-3 py-1 rounded text-white ${
                      item.status === "approved"
                        ? "bg-green-700"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => handleStatusChange(index, "approved")}
                  >
                    อนุมัติ
                  </button>
                  <button
                    className={`px-3 py-1 rounded text-white ${
                      item.status === "rejected"
                        ? "bg-red-700"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                    onClick={() => handleStatusChange(index, "rejected")}
                  >
                    ไม่อนุมัติ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproveForm;
