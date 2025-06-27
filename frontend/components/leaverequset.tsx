"use client";
import React, { useState, useRef } from "react";

const Leaverequest = () => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setImageURL(newUrl);
    }
  };

  const handleChooseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ยืนยันการลาแล้ว");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-4 py-6 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-lg border bg-white p-6 sm:p-8 shadow"
      >
        {/* หมายเหตุการลา */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold text-base sm:text-lg">
            หมายเหตุการลา
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="กรุณากรอกหมายเหตุ"
            className="w-full bg-[#F1F2F3] rounded-md border border-[#E0E6ED] px-4 py-2 text-sm sm:text-base focus:outline-none"
          />
        </div>

        {/* แนบหลักฐานการลา */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold text-base sm:text-lg">
            แนบหลักฐานการลา
          </label>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="กรุณากรอกหมายเหตุ"
              className="flex-1 rounded-md bg-[#F1F2F3] border border-[#E0E6ED] px-4 py-2 text-sm sm:text-base"
            />

            <button
              type="button"
              onClick={handleChooseClick}
              className="w-[108px] h-[37px] rounded-md bg-[#D90080]/30 font-semibold text-[#74045F] text-sm sm:text-base"
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

          {/* แสดงรูป */}
          <div className="flex w-full flex-col items-center space-y-4 mt-4">
            {imageURL ? (
              <img
                src={imageURL}
                alt="preview"
                className="h-64 w-64 sm:h-80 sm:w-80 rounded-md border object-cover"
              />
            ) : (
              <img
                src="/file-preview.svg"
                alt="default preview"
                className="h-64 w-64 sm:h-80 sm:w-80 rounded-md border object-cover"
              />
            )}
          </div>
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="h-12 w-48 rounded-md bg-[#74045F] text-lg text-white transition hover:bg-[#B10073]"
          >
            ยืนยันการลา
          </button>
        </div>
      </form>
    </div>
  );
};

export default Leaverequest;
