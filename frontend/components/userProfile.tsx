"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import { format } from "date-fns";
import IconCalendar from "../components/icon/icon-calendar";
import useAuthStore from "../store/authStore";

registerLocale("th", th);

const CustomDateInput = React.forwardRef(({ value, onClick }: any, ref) => {
  const [day, month, year] = value?.split("/") || ["", "", ""];
  const buddhistYear = year ? String(parseInt(year) + 543) : "";

  return (
    <input
      onClick={onClick}
      value={value ? `${day}/${month}/${buddhistYear}` : ""}
      readOnly
      placeholder="เลือกวันที่"
      className="w-full rounded border px-3 py-2 pr-10 text-sm"
    />
  );
});
CustomDateInput.displayName = "CustomDateInput";

const UserProfile = () => {
  const user = useAuthStore((state) => state.user);
  const [formData, setFormData] = useState({
    name: user?.fname || "",
    surname: user?.lname || "",
    email: user?.email || "",
    university: user?.student_profile.university || "",
    phone: user?.phone_number || "",
    start_date: user?.student_profile.start_date || "",
    end_date: user?.student_profile.end_date || "",
    mentor_id: user?.student_profile.mentor_id || "",
    department: user?.department_id || "",
  });

  const [imageSrc, setImageSrc] = useState<string>("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setImageSrc(result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl p-4">
      <div className="flex flex-col gap-6 rounded-lg border bg-white p-6 text-black shadow-md md:flex-row">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center md:w-1/5 md:items-start">
          <h1 className="mb-4 text-xl font-bold">โปรไฟล์</h1>
          <div className="relative mb-4 h-[160px] w-[160px]">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border bg-gray-100">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <svg
                  className="h-full w-full text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </div>
            <label className="absolute bottom-1 right-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#9B006C] bg-[#F7E3F0] shadow">
              <svg
                className="h-4 w-4 text-[#9B006C]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
            </label>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-2 w-full md:flex-1">
          <form className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">ชื่อจริง</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">นามสกุล</label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">อีเมล</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">เบอร์โทรศัพท์</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded border border-gray-300 p-2"
              />
            </div>

            <div className="w-full md:col-span-2">
              <div className="flex w-full flex-col gap-4 md:flex-row md:gap-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium">
                    มหาวิทยาลัยที่ศึกษาอยู่
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) =>
                      setFormData({ ...formData, university: e.target.value })
                    }
                    className="w-full rounded border border-gray-300 p-2"
                  />
                </div>
                <div className="flex w-full flex-col gap-4 md:w-1/2 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium">
                      วันที่เริ่มฝึกงาน
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={
                          formData.start_date
                            ? new Date(formData.start_date)
                            : null
                        }
                        onChange={(date: Date | null) =>
                          setFormData({
                            ...formData,
                            start_date: date ? format(date, "yyyy-MM-dd") : "",
                          })
                        }
                        dateFormat="dd/MM/yyyy"
                        locale="th"
                        customInput={<CustomDateInput />}
                      />
                      <IconCalendar className="absolute right-3 top-2 text-gray-500" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium">
                      วันที่สิ้นสุดฝึกงาน
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={
                          formData.end_date ? new Date(formData.end_date) : null
                        }
                        onChange={(date: Date | null) =>
                          setFormData({
                            ...formData,
                            end_date: date ? format(date, "yyyy-MM-dd") : "",
                          })
                        }
                        minDate={
                          formData.start_date
                            ? new Date(formData.start_date)
                            : undefined
                        }
                        dateFormat="dd/MM/yyyy"
                        locale="th"
                        customInput={<CustomDateInput />}
                      />
                      <IconCalendar className="absolute right-3 top-2 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">กองที่สังกัด</label>
              <input
                type="text"
                value={formData.department}
                readOnly
                className="w-full rounded border border-gray-300 bg-gray-100 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ชื่อพี่เลี้ยง</label>
              <input
                type="text"
                value={formData.mentor_id}
                readOnly
                className="w-full rounded border border-gray-300 bg-gray-100 p-2"
              />
            </div>

            <div className="mt-4 md:col-span-2">
              <button
                type="submit"
                className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073]"
              >
                บันทึก
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
