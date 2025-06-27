"use client";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const Leaverequest = () => {
  const [images, setImages] = useState<any>([]);
  const [reason, setReason] = useState("");
  const maxNumber = 1;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ยืนยันการลาแล้ว");
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-[#F9F9F9] px-4">
      <form
        onSubmit={handleSubmit}
        className="h-[575px] w-[879px] rounded-lg border bg-white p-8 shadow"
      >
        {/* หมายเหตุการลา */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">หมายเหตุการลา</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="กรุณากรอกหมายเหตุ"
            className="w-full bg-[#F1F2F3] rounded-md border border-[#E0E6ED] px-4 py-2 focus:outline-none"
          />
        </div>

        {/* แนบหลักฐานการลา */}
        <div className="relative">
          <label className="mb-2 block font-semibold">แนบหลักฐานการลา</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="กรุณากรอกหมายเหตุ"
            className="w-full rounded-md bg-[#F1F2F3] border border-[#E0E6ED] px-4 py-2 mb-5"
          />

          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="dataURL"
            acceptType={["jpg", "png", "jpeg"]}
          >
            {({ imageList, onImageUpload }) => (
              <div className="flex w-full flex-col items-start space-y-4">
                <button
                  type="button"
                  onClick={onImageUpload}
                  className="absolute right-0 top-7 rounded-md  bg-[#D90080]/30 w-[108.4754409790039px] h-[37px] font-semibold text-[#74045F]"
                >
                  Choose
                </button>

                {imageList.length > 0 ? (
                  <img
                    src={imageList[0].dataURL}
                    alt="preview"
                    className="mx-auto  h-80 w-80  rounded-md border object-cover"
                  />
                ) : (
                  <img
                    src="/file-preview.svg"
                    alt="default preview"
                    className="mx-auto h-80 w-80 rounded-md border object-cover"
                  />
                )}
              </div>
            )}
          </ImageUploading>
        </div>
      </form>
      {/* ปุ่มยืนยัน */}
      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="h-[50px] w-[200px] rounded-md bg-[#74045F] text-[20px] text-white transition hover:bg-[#B10073]"
        >
          ยืนยันการลา
        </button>
      </div>
    </div>
  );
};

export default Leaverequest;
