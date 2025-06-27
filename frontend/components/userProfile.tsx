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
  const user = useAuthStore((state) => state.user);
  if (!value)
    return (
      <input
        onClick={onClick}
        className="w-full rounded border px-3 py-2 pr-10 text-sm"
        placeholder="เลือกวันที่"
        readOnly
      />
    );

  const [day, month, year] = value.split("/");
  const buddhistYear = String(parseInt(year) + 543);

  return (
    <input
      onClick={onClick}
      value={`${day}/${month}/${buddhistYear}`}
      readOnly
      className="w-full rounded border px-3 py-2 pr-10 text-sm"
    />
  );
});
CustomDateInput.displayName = "CustomDateInput";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    university: "",
    start_date: "",
    end_date: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  return (
    <div>
      <div className="flex h-[480px] w-full flex-col rounded-lg border bg-white p-6 text-black shadow-md">
        <div>
          <h1 className="mb-4 text-xl font-bold">โปรไฟล์</h1>
        </div>

        <form className="flex flex-row gap-4">
          <div className="w-1/6 bg-red-500">รูป</div>

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
                value="กองพัฒนาระบบงาน"
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
                name="university"
                value={formData.university}
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

            <div className="mb-4 gap-2 flex justify-between">
              <div className="relative xw-{1/2}">
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

              <div className="relative w-{1/2}">
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
                value="ยังไม่กำหนด"
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
