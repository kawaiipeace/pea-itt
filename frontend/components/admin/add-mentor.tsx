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

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "100%",
    borderRadius: "8px",
    borderColor: "#D1D0D3",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#74045F",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: (provided: any) => ({
    ...provided,
    maxHeight: "none",
    overflow: "visible",
    borderRadius: "8px",
    border: "1.5px solid #D1D0D3",
    boxShadow: "none",
  }),
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: 150,
    overflowY: "auto",
    paddingRight: 0,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#74045F" : state.isFocused ? "#f3e6f0" : "white",
    cursor: "pointer",
    padding: "8px 12px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#999999",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "black",
  }),
};

const AddMentor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [division, setDivision] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "กรุณากรอกชื่อจริง";
    if (!lastName.trim()) newErrors.lastName = "กรุณากรอกนามสกุล";
    if (!email.trim()) newErrors.email = "กรุณากรอกอีเมล";
    if (!phone.trim()) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (phone.length !== 10) {
      newErrors.phone = "เบอร์โทรศัพท์ต้องมี 10 หลัก";
    }
    if (!password.trim()) newErrors.password = "กรุณากรอกรหัสผ่าน";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    if (password !== confirmPassword) newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!division.trim()) newErrors.division = "กรุณาเลือกชื่อกอง";

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
    <div className="relative bg-[#fafafa] px-4 py-6 min-h-screen">
      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-4 flex items-center text-sm text-black hover:underline"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        ย้อนกลับ
      </button>

      {/* ฟอร์ม */}
      <div className="mt-12 flex items-center justify-center">
        <div className="w-full max-w-screen-sm md:max-w-2xl lg:max-w-4xl bg-white shadow-2xl rounded-xl px-4 md:px-12 py-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2"
          >
            {/* ชื่อจริง */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">ชื่อจริง</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="กรุณากรอกชื่อจริง"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.firstName ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.firstName && (
                <span className="mt-1 text-sm text-red-500">{errors.firstName}</span>
              )}
            </div>

            {/* นามสกุล */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">นามสกุล</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="กรุณากรอกนามสกุล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.lastName ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.lastName && (
                <span className="mt-1 text-sm text-red-500">{errors.lastName}</span>
              )}
            </div>

            {/* อีเมล */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">อีเมล</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="กรุณากรอกอีเมล"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.email ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.email && (
                <span className="mt-1 text-sm text-red-500">{errors.email}</span>
              )}
            </div>

            {/* เบอร์โทรศัพท์ */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">เบอร์โทรศัพท์</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.phone ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.phone && (
                <span className="mt-1 text-sm text-red-500">{errors.phone}</span>
              )}
            </div>

            {/* รหัสผ่าน */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">รหัสผ่าน</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="กรุณากรอกรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.password ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.password && (
                <span className="mt-1 text-sm text-red-500">{errors.password}</span>
              )}
            </div>

            {/* ยืนยันรหัสผ่าน */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="กรุณากรอกยืนยันรหัสผ่าน"
                className={`rounded-[8px] border-[1.5px] border-[#D1D0D3] px-4 py-2 text-sm ${
                  errors.confirmPassword ? "border-red-500" : ""
                } focus:outline-none focus:ring-0 focus:border-black`}
              />
              {errors.confirmPassword && (
                <span className="mt-1 text-sm text-red-500">{errors.confirmPassword}</span>
              )}
            </div>

            {/* ชื่อกอง */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="mb-1 font-semibold">ชื่อกอง</label>
              <Select
                className="rounded-[8px] border border-[#D1D0D3]"
                options={divisionOptions}
                value={divisionOptions.find((d) => d.value === division) || null}
                onChange={(selected) => setDivision(selected?.value || "")}
                placeholder="กรุณาเลือกกอง"
                styles={customStyles}
                isClearable
              />
              {errors.division && (
                <span className="mt-1 text-sm text-red-500">{errors.division}</span>
              )}
            </div>

            {/* ปุ่ม submit */}
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
