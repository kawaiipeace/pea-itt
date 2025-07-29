"use client";
import useAuthStore from "../store/authStore";
import React, { useState, useRef, forwardRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker, { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

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
      className="flex items-center gap-2 rounded border bg-[#F1F2F3] px-3 py-2 text-sm text-gray-800 dark:border-gray-500 dark:bg-gray-900 dark:text-[#a4aeb8] sm:text-base"
    >
      {value || "เลือกวันที่ลา"}
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

const Leaverequest = () => {
  const user = useAuthStore((s) => s.user);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [leaveDate, setLeaveDate] = useState<Date | null>(new Date());
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [noti, setNoti] = useState<notileave>();
  const [menID, setMenID] = useState<number>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const newUrl = URL.createObjectURL(selectedFile);
      setImageURL(newUrl);
    }
  };

  useEffect(() => {}, []);

  const handleChooseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!reason.trim()) {
      Swal.fire("กรุณากรอกหมายเหตุการลา", "", "warning");
      return;
    }

    if (!leaveDate) {
      Swal.fire("กรุณาเลือกวันที่ลา", "", "warning");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("reason", reason);
      formData.append("leave_datetime", leaveDate.toISOString());

      if (file) {
        formData.append("file", file);
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}leave-request`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      const mentorData = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}user/mentor?mentor_id=${user?.student_profile?.mentor_id}`
      );

      const res = mentorData.data.data;
      const menID = res[0].id;

      // ✅ แปลงวันที่ให้อ่านง่ายแบบไทย + เวลา
      const formattedLeaveDate = leaveDate.toLocaleString("th-TH", {
        dateStyle: "long",
        timeStyle: "short",
        hour12: false,
      }) + " น.";

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}noti`,
        {
          user_id: menID,
          title: `${user?.fname} ${user?.lname}`,
          message: `ยื่นลาเมื่อวันที่ ${formattedLeaveDate}`,
        },
        { withCredentials: true }
      );

      Swal.fire("ส่งคำขอลาสำเร็จ", "", "success");
      setReason("");
      setFile(null);
      setImageURL(null);
      setLeaveDate(new Date());
    } catch (error) {
      console.error(error);
      Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถส่งคำขอลาได้", "error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-1 py-2 text-sm dark:bg-black-dark-light/5 dark:text-[#506690]">
      <form
        className="mb-6 w-full max-w-[750px] rounded-md border bg-white p-2 shadow-sm dark:border-gray-900 dark:bg-gray-900 sm:p-4 md:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* 📅 วันที่ลา */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold sm:text-base">
            วันที่ลา
          </label>
          <DatePicker
            selected={leaveDate}
            onChange={(date) => setLeaveDate(date)}
            locale="th"
            dateFormat="dd MMMM yyyy"
            customInput={<CustomDateButton />}
            className="w-full"
          />
        </div>

        {/* 📝 เหตุผล */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold sm:text-base">
            หมายเหตุการลา
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="กรุณากรอกหมายเหตุ"
            className="w-full rounded-md border border-[#E0E6ED] bg-[#F1F2F3] px-3 py-2 text-sm focus:outline-none dark:border-gray-500 dark:bg-gray-900 sm:px-4 sm:py-2  sm:text-base"
          />
        </div>

        {/* 📎 แนบหลักฐาน */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold sm:text-base">
            แนบหลักฐานการลา
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={file?.name || ""}
              readOnly
              placeholder="ยังไม่ได้เลือกไฟล์"
              className="flex-1 rounded-md border border-[#E0E6ED] bg-[#F1F2F3] px-3 py-2 text-sm dark:border-gray-500 dark:bg-gray-900  sm:text-base"
            />
            <button
              type="button"
              onClick={handleChooseClick}
              className="w-full rounded-md bg-[#D90080]/30 py-2 text-sm font-semibold text-[#74045F] transition-colors hover:bg-[#D90080]/50 dark:text-[#a4aeb8] sm:h-[37px] sm:w-[108px] sm:text-base"
            >
              Choose
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />

          <div className="mt-4 flex w-full flex-col items-center space-y-4">
            {imageURL ? (
              <img
                src={imageURL}
                alt="preview"
                className="h-28 w-28 rounded-md border object-contain sm:h-40 sm:w-40 md:h-56 md:w-56"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded border border-dashed bg-gray-100 text-sm text-gray-500 dark:border-gray-500 dark:bg-gray-900 sm:h-40 sm:w-40 md:h-56  md:w-56">
                ไม่มีรูป
              </div>
            )}
          </div>
        </div>
      </form>

      {/* ✅ ปุ่ม Submit */}
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <button
          onClick={handleSubmit}
          className="mx-auto block w-full rounded-md bg-[#74045F] py-3 text-base text-white transition hover:bg-[#B10073] hover:bg-[#D90080]/50 dark:text-[#a4aeb8] sm:w-48 sm:text-lg"
        >
          ยืนยันการลา
        </button>
      </div>
    </div>
  );
};

export default Leaverequest;
