"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import InputField from "./elements/inputField";
import PasswordField from "./elements/PasswordField";
import SelectField, { OptionType } from "./elements/SelectField";
import { useRouter } from "next/navigation";

interface FormDataType {
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
  university: string;
  start_date: string;
  end_date: string;
  department: number;
  mentor_id: number;
}

interface ErrorType {
  [key: string]: string;
}

const ComponentsAuthRegisterForm = () => {

  const router = useRouter()

  const [formData, setFormData] = useState<FormDataType>({
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

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ErrorType>({});
  const [departmentOptions, setDepartmentOptions] = useState<OptionType[]>([]);
  const [mentorOptions, setMentorOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}dept`).then((res) => {
      setDepartmentOptions(
        res.data.data.map((d: any) => ({
          value: d.dept_id,
          label: d.dept_name,
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (!formData.department) return setMentorOptions([]);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}user/mentor?department_id=${formData.department}`
      )
      .then((res) => {
        setMentorOptions(
          res.data.data.map((m: any) => ({
            value: m.mentor_profile?.id,
            label: `${m.fname} ${m.lname}`,
          }))
        );
      });
  }, [formData.department]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErr: ErrorType = {};
    if (!formData.fname) newErr.fname = "กรุณากรอกชื่อจริง";
    if (!formData.lname) newErr.lname = "กรุณากรอกนามสกุล";
    if (!formData.email) newErr.email = "กรุณากรอกอีเมล";
    if (!/^0[0-9]{9}$/.test(formData.phone_number))
      newErr.phone_number = "กรุณากรอกเบอร์ 10 หลัก";
    if (!formData.university) newErr.university = "กรุณากรอกมหาวิทยาลัย";
    if (!formData.start_date) newErr.start_date = "กรุณากรอกวันที่เริ่มฝึก";
    if (!formData.end_date) newErr.end_date = "กรุณากรอกวันที่สิ้นสุดฝึก";
    if (!password || password.length < 8)
      newErr.password = "รหัสผ่านต้อง 8 ตัวขึ้นไป";
    if (password !== confirmPassword)
      newErr.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!formData.department) newErr.department = "กรุณาเลือกสถานที่ฝึก";
    if (!formData.mentor_id) newErr.mentor_id = "กรุณาเลือกพี่เลี้ยง";
    if(formData.phone_number.split("0")[0] >= formData.phone_number.split("0")[1]){
      newErr.phone_number = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"
    }
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}register/student`, {
        ...formData,
        department_id: Number(formData.department),
        password_hash: password,
      });
      router.push("/login")
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
    } catch (err: any) {
      console.log(err);

      Swal.fire({
        title: "ผิดพลาด",
        text: err?.message || "เกิดข้อผิดพลาด",
        icon: "error",
      });
    }
  };

  return (
    <form
      onSubmit={submit}
      className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2"
    >
      <InputField
        label="ชื่อจริง"
        name="fname"
        value={formData.fname}
        error={errors.fname}
        onChange={handleChange}
        placeholder="กรุณากรอกชื่อจริง"
        styles={`w-full rounded border px-3 py-2 ${
          errors.fname ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
        }`}
      />
      <InputField
        label="นามสกุล"
        name="lname"
        value={formData.lname}
        error={errors.lname}
        onChange={handleChange}
        placeholder="กรุณากรอกนามสกุล"
        styles={`w-full rounded border px-3 py-2 ${
          errors.lname ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
        }`}
      />
      <InputField
        label="อีเมล"
        name="email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
        type="email"
        placeholder="กรุณากรอกอีเมล"
        styles={`w-full rounded border px-3 py-2 ${
          errors.email ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
        }`}
      />

      <div>
        <label className="mb-1 block font-medium">เบอร์โทรศัพท์</label>
        <input
          type="tel"
          name="phone_number"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={handleChange}
          maxLength={10}
          value={formData.phone_number}
          placeholder="กรุณากรอกเบอร์โทรศัพท์"
          className={`w-full rounded border px-3 py-2 ${
            errors.phone_number ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.phone_number && (
          <p className="mt-1 text-[11px] text-red-500">{errors.phone_number}</p>
        )}
      </div>
      <InputField
        label="มหาวิทยาลัย"
        name="university"
        value={formData.university}
        error={errors.university}
        onChange={handleChange}
        placeholder="กรุณากรอกชื่อมหาวิทยาลัย"
        styles={`w-full rounded border px-3 py-2 ${
          errors.university ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
        }`}
      />
      <div className="flex gap-1">
        <InputField
          label="วันที่เริ่มฝึกงาน"
          name="start_date"
          value={formData.start_date}
          error={errors.start_date}
          onChange={handleChange}
          type="date"
          styles={`w-full rounded border px-3 py-2 ${
            errors.start_date
              ? "border-red-400 bg-[#FFEBEE]"
              : "border-gray-300"
          }`}
        />
        <InputField
          label="วันที่สิ้นสุดฝึกงาน"
          name="end_date"
          value={formData.end_date}
          error={errors.end_date}
          onChange={handleChange}
          type="date"
          styles={`w-full rounded border px-3 py-2 ${
            errors.end_date ? "border-red-400 bg-[#FFEBEE]" : "border-gray-300"
          }`}
        />
      </div>
      <PasswordField
        label="รหัสผ่าน"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="กรุณากรอกรหัสผ่าน"
        error={errors.password}
      />
      <PasswordField
        label="ยืนยันรหัสผ่าน"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="กรุณากรอกรหัสผ่านอีกครั้ง"
        error={errors.confirmPassword}
      />
      <SelectField
        label="ชื่อสถานที่ฝึกงาน"
        options={departmentOptions}
        placeholder="เลือกสถานที่ฝึกงาน (กอง)"
        value={departmentOptions.find((o) => o.value === formData.department)}
        onChange={(sel) =>
          setFormData((f) => ({
            ...f,
            department: sel?.value || 0,
            mentor_id: 0,
          }))
        }
        error={errors.department}
      />
      <SelectField
        label="ชื่อพี่เลี้ยง"
        options={mentorOptions}
        placeholder="เลือกพี่เลี้ยง"
        value={mentorOptions.find((o) => o.value === formData.mentor_id)}
        onChange={(sel) =>
          setFormData((f) => ({ ...f, mentor_id: sel?.value || 0 }))
        }
        error={errors.mentor_id}
      />
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
