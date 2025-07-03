"use client";

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Swal from "sweetalert2";

const divisionOptions = [
  { value: "กอพ.1", label: "กอพ.1" },
  { value: "กอพ.2", label: "กอพ.2" },
  { value: "กอพ.3", label: "กอพ.3" },
  { value: "กอพ.4", label: "กอพ.4" },
  { value: "กอพ.5", label: "กอพ.5" },
  { value: "กอพ.6", label: "กอพ.6" },
  { value: "กอพ.7", label: "กอพ.7" },
  { value: "กอพ.8", label: "กอพ.8" },
  { value: "กอพ.9", label: "กอพ.9" },
  { value: "กอพ.10", label: "กอพ.10" },
];

const selectClassNames = {
  control: ({ isFocused }: any) =>
    `rounded-[8px] border-[1.5px] px-2 py-[2px] text-sm min-h-[40px] shadow-sm ${
      isFocused ? "border-[#74045F]" : "border-[#D1D0D3] dark:border-gray-600"
    } bg-white dark:bg-gray-800`,
  placeholder: () => "text-gray-500 dark:text-gray-400",
  singleValue: () => "text-gray-800 dark:text-gray-200",
  input: () => "text-gray-800 dark:text-gray-200",
  menu: () =>
    "mt-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 z-10",
  option: ({ isFocused, isSelected }: any) => {
    if (isSelected)
      return "bg-[#f3e6f0] text-[#74045F] dark:bg-[#74045F] dark:text-white";
    if (isFocused) return "bg-gray-100 dark:bg-gray-700";
    return "text-gray-800 dark:text-gray-200";
  },
  indicatorSeparator: () => "hidden",
};

const AddMentor = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [division, setDivision] = useState<any>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "กรุณากรอกชื่อจริง";
    if (!lastName.trim()) newErrors.lastName = "กรุณากรอกนามสกุล";
    if (!email.trim()) newErrors.email = "กรุณากรอกอีเมล";
    if (!phone.trim()) newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (phone.length !== 10) newErrors.phone = "เบอร์โทรศัพท์ต้องมี 10 หลัก";
    if (!password.trim()) newErrors.password = "กรุณากรอกรหัสผ่าน";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!division) newErrors.division = "กรุณาเลือกชื่อกอง";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: "success",
        title: "เพิ่มพี่เลี้ยงสำเร็จ",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#74045F",
      });
    }
  };

  return (
    <div className="relative bg-[#fafafa] px-4 py-6 dark:bg-black-dark-light/5 ">
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 flex items-center text-sm text-black dark:text-white hover:underline"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        ย้อนกลับ
      </button>

      <div className="mt-12 flex items-center justify-center">
        <div className="w-full max-w-screen-sm md:max-w-2xl lg:max-w-4xl bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-4 md:px-12 py-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* First Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                ชื่อจริง
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="กรุณากรอกชื่อจริง"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.firstName ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.firstName && (
                <span className="mt-1 text-sm text-red-500">{errors.firstName}</span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                นามสกุล
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="กรุณากรอกนามสกุล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.lastName ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.lastName && (
                <span className="mt-1 text-sm text-red-500">{errors.lastName}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                อีเมล
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="กรุณากรอกอีเมล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.email ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">{errors.email}</span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.phone ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.phone && (
                <span className="mt-1 text-sm text-red-500">{errors.phone}</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                รหัสผ่าน
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="กรุณากรอกรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.password ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.password && (
                <span className="mt-1 text-sm text-red-500">{errors.password}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="กรุณากรอกยืนยันรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] dark:border-gray-600 dark:bg-gray-800 px-4 py-2 text-sm text-black dark:text-white ${
                  errors.confirmPassword ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.confirmPassword && (
                <span className="mt-1 text-sm text-red-500">{errors.confirmPassword}</span>
              )}
            </div>

            {/* Division Select */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                ชื่อกอง
              </label>
              <Select
                options={divisionOptions}
                value={division}
                onChange={setDivision}
                placeholder="กรุณาเลือกกอง"
                isClearable
                classNames={selectClassNames}
              />
              {errors.division && (
                <span className="mt-1 text-sm text-red-500">{errors.division}</span>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 mt-2 text-center">
              <button
                type="submit"
                className="rounded bg-[#74045F] px-8 py-2 text-white transition hover:bg-purple-800"
              >
                เพิ่มพี่เลี้ยง
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMentor;
