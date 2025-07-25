"use client";
import React, { useState, useEffect, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import useAuthStore from "../../store/authStore";
import Swal from "sweetalert2";

registerLocale("th", th);

interface notileave {
  user_id: number;
  title: string;
  message: string;
}

const CustomDateButton = forwardRef<HTMLButtonElement, any>(
  ({ value, onClick }, ref) => (
    <button
      onClick={onClick}
      ref={ref}
      className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:underline dark:text-[#506690]"
    >
      {value}
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
);
CustomDateButton.displayName = "CustomDateButton";

interface LeaveItem {
  id: number;
  leave_datetime: string | null;
  reason: string;
  status?: "approved" | "rejected" | "pending";
  user_id: number;
}

interface UserData {
  id: number;
  fname: string;
  lname: string;
}

const ApproveForm = () => {
  const [noti, setNoti] = useState<notileave>();
  const [menID, setMenID] = useState<number>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [leaveData, setLeaveData] = useState<
    (LeaveItem & { user?: UserData })[]
  >([]);
  const [loading, setLoading] = useState(false);
  const user = useAuthStore((state) => state.user);

  const fetchLeaveRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}leave-request?mentor_id=${user?.id}&status=pending`,
        { withCredentials: true }
      );

      const requests: LeaveItem[] = response.data.data;

      const withUserData = await Promise.all(
        requests.map(async (leave) => {
          try {
            const userResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}users/${leave.user_id}`,
              { withCredentials: true }
            );
            return { ...leave, user: userResponse.data.data };
          } catch (err) {
            console.error(`Error fetching user ${leave.user_id}`, err);
            return { ...leave };
          }
        })
      );

      setLeaveData(withUserData);
    } catch (error) {
      console.error("Error fetching leave requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeaveStatus = async (
    id: number,
    status: "approved" | "rejected",
    user_id: number,
    leave_datetime: any
  ) => {
    try {
      await axios
        .put(
          `${process.env.NEXT_PUBLIC_API_URL}leave-request/${id}`,
          { status },
          { withCredentials: true }
        )
        .then(async () => {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}noti`,
            {
              user_id: user_id,
              title: `ผลการอนุมัติการลา`,
              message: `สถานะ: ${
                status === "approved"
                  ? "ได้รับการอนุมัติ"
                  : "ไม่ได้รับการอนุมัติ"
              } ฉบับของวันที่ ${new Date(leave_datetime).toLocaleString("th-TH", {
                dateStyle: "long",
                timeStyle: "short",
              })} เมื่อวันที่ ${new Date().toLocaleString("th-TH", {
                dateStyle: "long",
                timeStyle: "short",
              })}`,
            },
            { withCredentials: true }
          );
        });
      setLeaveData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, [selectedDate]);

  const isSameDay = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  // ✅ filter เฉพาะ status pending
  const filteredLeaveData = leaveData.filter((item) => {
    if (!item.leave_datetime || !selectedDate) return false;
    const leaveDate = new Date(item.leave_datetime);
    return (
      isSameDay(leaveDate, selectedDate) &&
      (item.status === "pending" || !item.status)
    );
  });

  return (
    <div className="mx-auto max-w-6xl p-4 text-gray-900 dark:text-[#506690]">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale="th"
          dateFormat="dd MMMM yyyy"
          customInput={<CustomDateButton />}
        />
      </div>

      {loading ? (
        <div className="py-6 text-center text-gray-500 dark:text-[#506690]">
          กำลังโหลดข้อมูล...
        </div>
      ) : filteredLeaveData.length === 0 ? (
        <div className="py-6 text-center text-gray-500 dark:text-[#506690]">
          ไม่พบข้อมูลการลาในวันที่เลือก
        </div>
      ) : (
        <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-900 dark:bg-black-dark-light/5">
          <div className="grid-cols-4 rounded-t-lg bg-gray-100 px-6 py-3 text-base font-semibold text-gray-700 dark:bg-gray-900 dark:text-[#506690] sm:grid">
            <div>ชื่อ-นามสกุล</div>
            <div>หลักฐาน</div>
            <div>เหตุผล</div>
            <div>การอนุมัติ</div>
          </div>
          {filteredLeaveData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 items-start gap-y-2 border-t border-gray-200 px-6 py-4 text-base text-gray-800 dark:border-gray-600 dark:text-[#506690] sm:grid-cols-4"
            >
              <div>
                <div className="text-sm text-gray-500 sm:hidden">
                  ชื่อ-นามสกุล
                </div>
                <div>
                  {item.user
                    ? `${item.user.fname} ${item.user.lname}`
                    : "ไม่พบชื่อ"}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 sm:hidden">หลักฐาน</div>
                <a
                  href={`${process.env.NEXT_PUBLIC_API_URL}leave-request/picture/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline"
                >
                  เปิดหลักฐาน
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 sm:hidden">เหตุผล</div>
                <div>{item.reason}</div>
              </div>
              <div className="space-x-2">
                <button
                  className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                  onClick={() => {
                    Swal.fire({
                      title: "บันทึกข้อมูลการอนุมัติ",
                      icon: "success",
                      confirmButtonText: "ตกลง",
                      width: "400px",
                      customClass: {
                        confirmButton:
                          "swal2-confirm !bg-purple-700 !text-white !px-6 !py-3",
                      },
                    }).then(() => {
                      updateLeaveStatus(
                        item.id,
                        "approved",
                        item.user_id,
                        item.leave_datetime
                      );
                    });
                  }}
                >
                  อนุมัติ
                </button>
                <button
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  onClick={() => {
                    Swal.fire({
                      title: "บันทึกข้อมูลการอนุมัติ",
                      icon: "success",
                      confirmButtonText: "ตกลง",
                      width: "400px",
                      customClass: {
                        confirmButton:
                          "swal2-confirm !bg-purple-700 !text-white !px-6 !py-3",
                      },
                    }).then(() => {
                      updateLeaveStatus(
                        item.id,
                        "rejected",
                        item.user_id,
                        item.leave_datetime
                      );
                    });
                  }}
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
