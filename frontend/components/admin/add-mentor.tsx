"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Swal from "sweetalert2";
import axios from "axios";

interface deptData {
  dept_id: number;
  dept_name: string;
}

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

  const [dept, setDept] = useState<deptData[]>([]);

  // ดึงข้อมูลชื่อกองจาก backend
  useEffect(() => {
    const fetchDept = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}dept`);
        setDept(res.data.data);
      } catch (err) {
        console.error("โหลดข้อมูลกองไม่สำเร็จ:", err);
      }
    };
    fetchDept();
  }, []);

  const divisionOptions = dept.map((d) => ({
    value: d.dept_id,
    label: d.dept_name,
  }));

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "กรุณากรอกชื่อจริง";
    if (!lastName.trim()) newErrors.lastName = "กรุณากรอกนามสกุล";
    if (!email.trim()) newErrors.email = "กรุณากรอกอีเมล";
    if (!phone.trim()) newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (phone.length !== 10)
      newErrors.phone = "เบอร์โทรศัพท์ต้องมี 10 หลัก";
    if (!password.trim()) newErrors.password = "กรุณากรอกรหัสผ่าน";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!division) newErrors.division = "กรุณาเลือกชื่อกอง";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}register/mentor`,
        {
          fname: firstName,
          lname: lastName,
          phone_number: phone,
          email: email,
          password_hash: password,
          department_id: division.value,
        },
        { withCredentials: true }
      );

      Swal.fire({
        icon: "success",
        title: "เพิ่มพี่เลี้ยงสำเร็จ",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#74045F",
      }).then(() => {
        router.push("/admin/mentor");
      });
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการส่งข้อมูล", error);
      Swal.fire({
        icon: "error",
        title: "ไม่สำเร็จ",
        text: "ไม่สามารถเพิ่มพี่เลี้ยงได้",
        confirmButtonText: "ปิด",
        confirmButtonColor: "#74045F",
      });
    }
  };

  return (
    <div className="relative bg-[#fafafa] px-4 py-6 dark:bg-black-dark-light/5 ">
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 flex items-center text-sm text-black hover:underline dark:text-white"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        ย้อนกลับ
      </button>

      <div className="mt-12 flex items-center justify-center">
        <div className="w-full max-w-screen-sm rounded-xl bg-white px-4 py-10 shadow-2xl dark:bg-gray-900 md:max-w-2xl md:px-12 lg:max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* ชื่อจริง */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                ชื่อจริง
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="กรุณากรอกชื่อจริง"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.firstName ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.firstName && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.firstName}
                </span>
              )}
            </div>

            {/* นามสกุล */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                นามสกุล
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="กรุณากรอกนามสกุล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.lastName ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.lastName && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.lastName}
                </span>
              )}
            </div>

            {/* อีเมล */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                อีเมล
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="กรุณากรอกอีเมล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.email ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            {/* เบอร์โทร */}
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
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.phone ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.phone && (
                <span className="mt-1 text-sm text-red-500">{errors.phone}</span>
              )}
            </div>

            {/* รหัสผ่าน */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                รหัสผ่าน
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="กรุณากรอกรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.password ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.password && (
                <span className="mt-1 text-sm text-red-500">{errors.password}</span>
              )}
            </div>

            {/* ยืนยันรหัสผ่าน */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-800 dark:text-gray-300">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="กรุณากรอกยืนยันรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white ${
                  errors.confirmPassword ? "border-red-500" : ""
                } focus:border-black focus:outline-none focus:ring-0`}
              />
              {errors.confirmPassword && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* ชื่อกอง */}
            <div className="col-span-1 flex flex-col md:col-span-2">
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
                <span className="mt-1 text-sm text-red-500">
                  {errors.division}
                </span>
              )}
            </div>

            {/* ปุ่ม submit */}
            <div className="col-span-1 mt-2 text-center md:col-span-2">
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
