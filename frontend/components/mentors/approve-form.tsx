"use client";
import React, { useState, useEffect, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import { format } from "date-fns";
import axios from "axios";
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
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const fetchLeaveRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}leave-request?user_id=6`, );
      console.log("Fetched leave requests:", response.data);
     // setLeaveData(response.data.data); // ปรับตาม structure ของ response จริง
    } catch (error) {
      console.error("Error fetching leave requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeaveStatus = async (id: number, status: "approved" | "rejected") => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}leave-request/${id}`, { status });
      setLeaveData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

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
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm w-full dark:bg-black-dark-light/5 dark:border-gray-900">
          <div className="rounded-t-lg sm:grid grid-cols-4 font-semibold text-base text-gray-700 bg-gray-100 dark:bg-gray-900 dark:text-[#506690] px-6 py-3">
            <div>ชื่อ-นามสกุล</div>
            <div>หลักฐาน</div>
            <div>เหตุผล</div>
            <div>การอนุมัติ</div>
          </div>
          {leaveData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 items-start border-t border-gray-200 dark:border-gray-600 px-6 py-4 text-base text-gray-800 dark:text-[#506690]"
            >
              <div>
                <div className="sm:hidden text-sm text-gray-500">ชื่อ-นามสกุล</div>
                <div>{item.name}</div>
              </div>
              <div>
                <div className="sm:hidden text-sm text-gray-500">หลักฐาน</div>
                <div className="text-pink-600 underline cursor-pointer">{item.evidence}</div>
              </div>
              <div>
                <div className="sm:hidden text-sm text-gray-500">เหตุผล</div>
                <div>{item.reason}</div>
              </div>
              <div className="space-x-2">
                <button
                  className={`px-3 py-1 rounded text-white ${
                    item.status === "approved" ? "bg-green-700" : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={() => updateLeaveStatus(item.id, "approved")}
                >
                  อนุมัติ
                </button>
                <button
                  className={`px-3 py-1 rounded text-white ${
                    item.status === "rejected" ? "bg-red-700" : "bg-red-500 hover:bg-red-600"
                  }`}
                  onClick={() => updateLeaveStatus(item.id, "rejected")}
                >
                  ไม่อนุมัติ
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproveForm;
