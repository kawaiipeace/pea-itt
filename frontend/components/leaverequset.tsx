"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Leaverequest = () => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const newUrl = URL.createObjectURL(selectedFile);
      setImageURL(newUrl);
    }
  };

  const handleChooseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!reason.trim()) {
      Swal.fire("กรุณากรอกหมายเหตุการลา", "", "warning");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("reason", reason);
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

      Swal.fire("ส่งคำขอลาสำเร็จ", "", "success");
      setReason("");
      setFile(null);
      setImageURL(null);
    } catch (error) {
      console.error(error);
      Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถส่งคำขอลาได้", "error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-1 py-2 text-sm dark:bg-black-dark-light/5 dark:border-gray-900  dark:text-[#506690]">
      <form
        className="w-full max-w-[750px] rounded-md border mb-6 bg-white p-2 shadow-sm sm:p-4 md:p-6 dark:bg-gray-900 dark:border-gray-900"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold sm:text-base">
            หมายเหตุการลา
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="กรุณากรอกหมายเหตุ"
            className="w-full rounded-md border border-[#E0E6ED] bg-[#F1F2F3] px-3 py-2 text-sm focus:outline-none sm:px-4 sm:py-2 sm:text-base dark:bg-gray-900  dark:border-gray-500"
          />
        </div>

        
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
              className="flex-1 rounded-md border border-[#E0E6ED] bg-[#F1F2F3] px-3 py-2 text-sm sm:text-base dark:bg-gray-900  dark:border-gray-500" 
            />
            <button
              type="button"
              onClick={handleChooseClick}
              className="w-full rounded-md bg-[#D90080]/30 py-2 text-sm font-semibold text-[#74045F] sm:h-[37px] sm:w-[108px] dark:text-[#a4aeb8] sm:text-base hover:bg-[#D90080]/50 transition-colors"
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
              <div className="h-28 w-28 sm:h-40 sm:w-40 md:h-56 md:w-56 flex items-center justify-center rounded border border-dashed bg-gray-100 text-gray-500 text-sm dark:bg-gray-900  dark:border-gray-500">
                ไม่มีรูป
              </div>
            )}
          </div>
        </div>
      </form>

      
      <div className="w-full max-w-3xl px-4 sm:px-0">
        <button
          onClick={handleSubmit}
          className="w-full rounded-md  bg-[#74045F] py-3 text-base text-white transition hover:bg-[#B10073] sm:w-48 sm:text-lg mx-auto block dark:text-[#a4aeb8] hover:bg-[#D90080]/50 "
        >
          ยืนยันการลา
        </button>
      </div>
    </div>
  );
};

export default Leaverequest;
