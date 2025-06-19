"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ComponentsAuthRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState<
    { value: number; label: string }[]
  >([]);
  const [mentorOptions, setMentorOptions] = useState<
    { value: number; label: string }[]
  >([]);

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    university: "",
    start_date: "",
    end_date: "",
    password_hash: "",
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
    password_hash: "",
  });

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}dept`);
        const mappedOptions = res.data.data.map((d: any) => ({
          value: d.dept_id,
          label: d.dept_name,
        }));
        setDepartmentOptions(mappedOptions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchMentor = async () => {
      if (!formData.department) {
        setMentorOptions([]);
        return;
      }

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}user/mentor?department_id=${formData.department}`
        );
        const mappedOptions = res.data.data.map((mentor: any) => ({
          value: mentor.mentor_profile?.id,
          label: `${mentor.fname} ${mentor.lname}`,
        }));
        setMentorOptions(mappedOptions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMentor();
  }, [formData.department]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

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
    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้อง 10 หลัก";
      valid = false;
    }

    if (password.length < 8) {
      newErrors.password_hash = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว";
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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}register/student`, {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        phone_number: formData.phone_number,
        password_hash: password,
        department_id: formData.department,
        university: formData.university,
        start_date: formData.start_date,
        end_date: formData.end_date,
        mentor_id: Number(formData.mentor_id),
      });

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
        password_hash: "",
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
        password_hash: "",
        confirmPassword: "",
        department: "",
        mentor_id: "",
      });
    } catch (error) {
      Swal.fire({
        title: "ปฏิเสธการบันทึกข้อมูล",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "ตกลง",
        width: "400px",
        customClass: {
          confirmButton: "swal2-confirm !bg-red-600 !text-white !px-6 !py-3",
        },
      });
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="grid grid-cols-1 gap-5 p-5 text-[15px] md:grid-cols-2"
    >
      <div>
        <label className="mb-1 block font-medium">ชื่อจริง</label>
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={formData.fname}
          placeholder="กรอกชื่อจริง"
          className={`w-full rounded border px-3 py-2 ${
            errors.fname ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
          }`}
        />
        {errors.fname && (
          <p className="mt-1 text-[11px] text-red-500 ">{errors.fname}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">นามสกุล</label>
        <input
          type="text"
          name="lname"
          onChange={handleChange}
          value={formData.lname}
          placeholder="กรอกนามสกุล"
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
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="example@email.com"
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
          name="phone_number"
          inputMode="numeric"
          maxLength={10}
          pattern="[0-9]*"
          onChange={handleChange}
          value={formData.phone_number}
          placeholder="0812345678"
          className={`w-full rounded border px-3 py-2 ${
            errors.phone_number ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.phone_number && (
          <p className="mt-1 text-[11px] text-red-500">{errors.phone_number}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">มหาวิทยาลัย</label>
        <input
          type="text"
          name="university"
          onChange={handleChange}
          value={formData.university}
          placeholder="ชื่อมหาวิทยาลัย"
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
            name="start_date"
            onChange={handleChange}
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
            name="end_date"
            onChange={handleChange}
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
            errors.password_hash ? "border-red-400" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[35px] text-xs text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password_hash && (
          <p className="mt-1 text-[11px] text-red-500">
            {errors.password_hash}
          </p>
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
        <label className="mb-1 block font-medium">ชื่อสถานที่ฝึกงาน</label>
        <Select
          options={departmentOptions}
          classNamePrefix="react-select"
          placeholder="เลือกหรือพิมพ์ค้นหา"
          value={
            departmentOptions.find(
              (opt) => opt.value === formData.department
            ) || null
          }
          onChange={(selected: { value: number; label: string } | null) =>
            setFormData((prev) => ({
              ...prev,
              department: selected ? selected.value : 0,
              mentor_id: 0, // reset พี่เลี้ยงเมื่อเปลี่ยนกอง
            }))
          }
          isClearable
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
          value={mentorOptions.find((opt) => opt.value === formData.mentor_id)}
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

      <div className="mt-2 text-center md:col-span-2">
        <button
          type="submit"
          className="rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073]"
        >
          สมัครเข้าใช้งาน
        </button>
      </div>
    </form>
  );
};

export default ComponentsAuthRegisterForm;
