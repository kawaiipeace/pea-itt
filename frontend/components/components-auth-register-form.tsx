"use client";
import Select from "react-select";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

const locationOptions = [
  { value: 1, label: "กอง.1" },
  { value: 2, label: "กอง.2" },
  { value: 3, label: "กอง.3" },
];

const mentorOptions = [
  { value: 101, label: "นายวิทยา สว่างวงษ์" },
  { value: 102, label: "นางสาวสุภัค สายทอง" },
];

const ComponentsAuthRegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    university: "",
    start_date: "",
    end_date: "",
    password: "",
    confirmPassword: "",
    department: "",
    mentor_id: "",
  });

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    university: "",
    start_date: "",
    end_date: "",
    department: 0,
    mentor_id: 0,
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fname: "",
      lname: "",
      email: "",
      phone_number: "",
      university: "",
      start_date: "",
      end_date: "",
      password: "",
      confirmPassword: "",
      department: "",
      mentor_id: "",
    };

    if (!formData.fname.trim()) {
      newErrors.fname = "กรุณากรอกชื่อจริง";
      valid = false;
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "กรุณากรอกนามสกุล";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล";
      valid = false;
    }

    if (!formData.university.trim()) {
      newErrors.university = "กรุณากรอกมหาวิทยาลัย";
      valid = false;
    }

    if (formData.phone_number.length < 10) {
      newErrors.phone_number = "กรุณากรอกเบอร์โทรศัพท์มือถือ 10 หลัก";
      valid = false;
    }

    if (password.length < 8) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
      valid = false;
    }

    if (!formData.start_date.trim()) {
      newErrors.start_date = "กรุณากรอกวันที่เริ่มฝึกงาน";
      valid = false;
    }

    if (!formData.end_date.trim()) {
      newErrors.end_date = "กรุณากรอกวันที่สิ้นสุดฝึกงาน";
      valid = false;
    }

    if (formData.department <= 0) {
      newErrors.department = "กรุณาเลือกชื่อสถานที่ฝึกงาน";
      valid = false;
    }

    if (formData.mentor_id <= 0) {
      newErrors.mentor_id = "กรุณาเลือกชื่อพี่เลี้ยง";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!validateForm()) return;

    console.log("Form Data:", { ...formData, password });
    // สามารถเพิ่มส่งข้อมูล API หรือเปลี่ยนหน้าได้ที่นี่

    Swal.fire({
      title: "บันทึกข้อมูลเรียบร้อย",
      icon: "success",
      confirmButtonText: "ตกลง",
      width: "400px",
      customClass: {
        confirmButton: "swal2-confirm !bg-purple-700 !text-white !px-6 !py-3",
      },
    });

    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone_number: "",
      university: "",
      start_date: "",
      end_date: "",
      department: 0,
      mentor_id: 0,
    });
    setPassword("");
    setConfirmPassword("");
    setErrors({
      fname: "",
      lname: "",
      email: "",
      phone_number: "",
      university: "",
      start_date: "",
      end_date: "",
      password: "",
      confirmPassword: "",
      department: "",
      mentor_id: "",
    });
  };

  return (
    <form
      onSubmit={submitForm}
      className="grid grid-cols-1 gap-5 text-[15px] md:grid-cols-2"
    >
      <div>
        <label className="mb-1 block font-medium">ชื่อจริง</label>
        <input
          type="text"
          onChange={handleChange}
          name="fname"
          placeholder="กรอกชื่อจริง"
          value={formData.fname}
          className={`w-full rounded border px-3 py-2 ${
            errors.fname ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.fname && (
          <p className="mt-1 text-[11px] text-red-500">{errors.fname}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">นามสกุล</label>
        <input
          type="text"
          onChange={handleChange}
          name="lname"
          placeholder="กรอกนามสกุล"
          value={formData.lname}
          className={`w-full rounded border px-3 py-2 ${
            errors.lname ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.lname && (
          <p className="mt-1 text-[11px] text-red-500">{errors.lname}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">อีเมล</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          className={`w-full rounded border px-3 py-2 ${
            errors.email ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">เบอร์โทรศัพท์</label>
        <input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          onChange={handleChange}
          name="phone_number"
          placeholder="0812345678"
          value={formData.phone_number}
          className={`w-full rounded border px-3 py-2 ${
            errors.phone_number ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.phone_number && (
          <p className="mt-1 text-[11px] text-red-500">{errors.phone_number}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">
          มหาวิทยาลัยที่ศึกษาอยู่
        </label>
        <input
          type="text"
          onChange={handleChange}
          name="university"
          placeholder="กรอกชื่อมหาวิทยาลัย"
          value={formData.university}
          className={`w-full rounded border px-3 py-2 ${
            errors.university ? "border-red-400" : "border-gray-300"
          }`}
        />

        {errors.university && (
          <p className="mt-1 text-[11px] text-red-500">{errors.university}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block font-medium">วันที่เริ่มฝึกงาน</label>
          <input
            type="date"
            onChange={handleChange}
            name="start_date"
            value={formData.start_date}
            className={`w-full rounded border px-3 py-2 ${
              errors.start_date ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.start_date && (
            <p className="mt-1 text-[11px] text-red-500">{errors.start_date}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block font-medium">วันที่สิ้นสุดฝึกงาน</label>
          <input
            type="date"
            onChange={handleChange}
            name="end_date"
            value={formData.end_date}
            className={`w-full rounded border px-3 py-2 ${
              errors.end_date ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.end_date && (
            <p className="mt-1 text-[11px] text-red-500">{errors.end_date}</p>
          )}
        </div>
      </div>

      <div className="relative">
        <label className="mb-1 block font-medium">รหัสผ่าน</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="อย่างน้อย 8 ตัว"
          className={`w-full rounded border px-3 py-2 pr-16 ${
            errors.password ? "border-red-400" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[35px] text-xs text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && (
          <p className="mt-1 text-[11px] text-red-500">{errors.password}</p>
        )}
      </div>

      <div className="relative">
        <label className="mb-1 block font-medium">ยืนยันรหัสผ่าน</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full rounded border px-3 py-2 pr-16 ${
            errors.confirmPassword ? "border-red-400" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={toggleConfirmPasswordVisibility}
          className="absolute right-3 top-[35px] text-xs text-blue-600"
        >
          {showConfirmPassword ? "Hide" : "Show"}
        </button>
        {errors.confirmPassword && (
          <p className="mt-1 text-[11px] text-red-500">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">
          ชื่อสถานที่ฝึกงาน (กฟภ.)
        </label>
        <Select
          options={locationOptions}
          classNamePrefix="react-select"
          placeholder="เลือกหรือพิมพ์ค้นหา"
          value={locationOptions.find(
            (option) => option.value === formData.department
          )}
          onChange={(selected: any) =>
            setFormData((prev) => ({
              ...prev,
              department: selected?.value || 0,
            }))
          }
        />
        {errors.department && (
          <p className="mt-1 text-[11px] text-red-500">{errors.department}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">ชื่อพี่เลี้ยง</label>
        <Select
          options={mentorOptions}
          classNamePrefix="react-select"
          placeholder="เลือกหรือพิมพ์ค้นหา"
          value={mentorOptions.find(
            (option) => option.value === formData.mentor_id
          )}
          onChange={(selected: any) =>
            setFormData((prev) => ({
              ...prev,
              mentor_id: selected?.value || 0,
            }))
          }
        />
        {errors.mentor_id && (
          <p className="mt-1 text-[11px] text-red-500">{errors.mentor_id}</p>
        )}
      </div>

      <div className="text-center md:col-span-2">
        <button
          type="submit"
          className="mt-3 rounded bg-purple-700 px-6 py-2.5 font-medium text-white hover:bg-purple-800"
        >
          สมัครเข้าใช้งาน
        </button>
      </div>
    </form>
  );
};

export default ComponentsAuthRegisterForm;
