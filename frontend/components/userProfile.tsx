"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import { format } from "date-fns";
import IconCalendar from "@/components/icon/icon-calendar";
import useAuthStore from "@/store/authStore";

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
console.log("user", user);

  const [formData, setFormData] = useState({
    name: user?.fname || "",
    surname: user?.lname || "",
    email: user?.email || "",
    university: user?.student_profile.university || "",
    phone: user?.phone_number || "",
    start_date:  user?.student_profile.start_date || "",
    end_date: user?.student_profile.end_date || "",
    metor_id: user?.student_profile.mentor_id || "",
    department: user?.department_id || "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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
    <div>
      <div className="flex h-[480px] w-full flex-col rounded-lg border bg-white p-6 text-black shadow-md">
        <div>
          <h1 className="mb-4 text-xl font-bold">โปรไฟล์</h1>
        </div>

        <form className="flex flex-row gap-4">
          {/* รูปโปรไฟล์ */}
          <div className="w-1/6">
            <div className="relative h-32 w-32">
              <div className="h-full w-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border">
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
              <label className="absolute bottom-0 right-0 h-8 w-8 cursor-pointer rounded-full bg-[#F7E3F0] border border-[#9B006C] flex items-center justify-center shadow">
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
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* ช่องกรอกข้อมูล */}
          <div className="w-1/2">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">ชื่อ</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded border border-gray-300 p-2"
                placeholder="กรุณากรอกชื่อ"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">อีเมล</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded border border-gray-300 p-2"
                placeholder="กรุณากรอกอีเมล"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                มหาวิทยาลัยที่ศึกษาอยู่
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    university: e.target.value,
                  }))
                }
                className="w-full rounded border border-gray-300 p-2"
                placeholder="มหาวิทยาลัยที่ศึกษาอยู่"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">กอง</label>
              <input
                type="text"
                name="department"
                className="w-full rounded border border-gray-300 bg-gray-300 p-2"
                value={formData.department}
                readOnly
              />
            </div>

            <div>
              <button
                type="submit"
                className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073]"
              >
                บันทึก
              </button>
            </div>
          </div>

          {/* ช่องฝั่งขวา */}
          <div className="w-1/2">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">นามสกุล</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, surname: e.target.value }))
                }
                className="w-full rounded border border-gray-300 p-2"
                placeholder="นามสกุล"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    university: e.target.value,
                  }))
                }
                className="w-full rounded border border-gray-300 p-2"
                placeholder="เบอร์โทรศัพท์"
              />
            </div>

            <div className="mb-4 flex justify-between gap-2">
              <div className="w[70%] relative ">
                <label className="mb-2 block font-medium">
                  วันที่เริ่มฝึกงาน
                </label>
                <DatePicker
                  selected={
                    formData.start_date ? new Date(formData.start_date) : null
                  }
                  onChange={(date: Date | null) =>
                    setFormData((prev) => ({
                      ...prev,
                      start_date: date ? format(date, "yyyy-MM-dd") : "",
                    }))
                  }
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  locale="th"
                  customInput={<CustomDateInput />}
                  placeholderText="เลือกวันที่เริ่ม"
                />
                <IconCalendar className="pointer-events-none absolute right-3 top-9 text-gray-500" />
                {errors.start_date && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.start_date}
                  </p>
                )}
              </div>

              <div className="w[70%] relative">
                <label className="mb-2 block font-medium">
                  วันที่สิ้นสุดฝึกงาน
                </label>
                <DatePicker
                  selected={
                    formData.end_date ? new Date(formData.end_date) : null
                  }
                  onChange={(date: Date | null) =>
                    setFormData((prev) => ({
                      ...prev,
                      end_date: date ? format(date, "yyyy-MM-dd") : "",
                    }))
                  }
                  minDate={
                    formData.start_date
                      ? new Date(formData.start_date)
                      : undefined
                  }
                  dateFormat="dd/MM/yyyy"
                  locale="th"
                  customInput={<CustomDateInput />}
                  placeholderText="เลือกวันที่สิ้นสุด"
                />
                <IconCalendar className="pointer-events-none absolute right-3 top-9 text-gray-500" />
                {errors.end_date && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.end_date}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1 block text-sm font-medium">
                ชื่อพี่เลี้ยง
              </label>
              <input
                type="text"
                name="mentor"
                className="w-full rounded border border-gray-300 bg-gray-300 p-2"
                value={formData.metor_id}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
