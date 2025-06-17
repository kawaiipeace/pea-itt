"use client";

import IconLockDots from "@/components/icon/icon-lock-dots";
import IconAccount from "@/components/icon/icon-user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ComponentsAuthLoginForm = () => {
  // ประกาศ component หลัก
  const router = useRouter(); // ใช้เปลี่ยนหน้า
  const [emailOrPhone, setEmailOrPhone] = useState(""); // state สำหรับ input เบอร์/อีเมล
  const [password, setPassword] = useState(""); // state สำหรับรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false); // state สำหรับ toggle แสดงรหัสผ่าน
  const [errors, setErrors] = useState<{
    emailOrPhone?: string;
    password?: string;
  }>({}); // state สำหรับ error
  const [loading, setLoading] = useState(false); // state loading ตอน login

  const validate = () => {
    // ตรวจสอบความถูกต้องของข้อมูล
    const phoneRegex = /^[0-9]{10}$/; // regex สำหรับเบอร์โทรศัพท์
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex สำหรับอีเมล
    const newErrors: { emailOrPhone?: string; password?: string } = {}; // กำหนดตัวแปร error ใหม่

    if (!emailOrPhone) {
      // ถ้าไม่กรอก email หรือ เบอร์
      newErrors.emailOrPhone = "กรุณากรอกเบอร์โทรศัพท์หรืออีเมล";
    } else if (
      !phoneRegex.test(emailOrPhone) &&
      !emailRegex.test(emailOrPhone)
    ) {
      // ถ้าไม่ตรงเงื่อนไขทั้งคู่
      newErrors.emailOrPhone = "กรุณากรอกเบอร์โทรศัพท์หรืออีเมลให้ถูกต้อง";
    }

    if (!password) {
      // ถ้าไม่กรอกรหัสผ่าน
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 8) {
      // ถ้ารหัสสั้นเกินไป
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
    }

    setErrors(newErrors); // อัปเดต error
    return Object.keys(newErrors).length === 0; // คืนค่า true ถ้าไม่มี error
  };

  const submitForm = async (e: React.FormEvent) => {
    // ฟังก์ชันเมื่อกด submit
    e.preventDefault(); // ป้องกัน default form
    if (!validate()) return; // ถ้าไม่ผ่าน validation ไม่ต้องไปต่อ
    setLoading(true); // แสดง loading

    setTimeout(() => {
      // จำลองการ login
      setLoading(false); // ปิด loading
      router.push("/"); // ไปหน้า home
    }, 1500);
  };
return (
  <form
    onSubmit={submitForm}
    className="font-nunito space-y-6 text-sm px-4 md:px-8 py-6 w-full flex flex-col items-center"
  >
    {/* เบอร์โทรศัพท์หรืออีเมล */}
    <div className="w-full max-w-[340px] space-y-2 min-h-[9px]"> {/* จองพื้นที่ล่วงหน้า */}
      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
        เบอร์โทรศัพท์หรืออีเมล
      </label>
      <div className="relative">
        <input
          type="text"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          placeholder="กรุณากรอกเบอร์โทรศัพท์หรืออีเมล"
          className={`form-input pe-26 ps-14 w-full h-[52px] rounded-md border text-black placeholder-gray-400 transition-colors ${
            errors.emailOrPhone
              ? "border-red-500 bg-red-50 focus:ring-0 focus:border-red-500"
              : "border-gray-300 focus:border-[#51158C]"
          }`}
        />
        <span className="absolute start-4 top-1/2 -translate-y-1/2 text-white-dark">
          <IconAccount />
        </span>
      </div>
      <div className="h-[16px]"> {/* ความสูงเท่ากับ 1 บรรทัดข้อความ */}
        {errors.emailOrPhone && (
          <p className="mt-1 text-xs text-danger">{errors.emailOrPhone}</p>
        )}
      </div>
    </div>

    {/* รหัสผ่าน */}
    <div className="w-full max-w-[340px] space-y-2 min-h-[96px] ">
      <label className="block text-sm font-semibold text-black dark:text-white mb-2">
        รหัสผ่าน
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="กรุณากรอกรหัสผ่าน"
          className={`form-input pe-26 ps-14 w-full h-[52px] rounded-md border text-black placeholder-gray-400 transition-colors ${
            errors.password
              ? "border-red-500 bg-red-50 focus:ring-0 focus:border-red-500"
              : "border-gray-300 focus:border-[#51158C]"
          }`}
        />
        <span className="absolute start-4 top-1/2 -translate-y-1/2 text-white-dark">
          <IconLockDots fill />
        </span>
      </div>
      <div className="h-[16px]">
        {errors.password && (
          <p className="mt-1 text-xs text-danger">{errors.password}</p>
        )}
      </div>
    </div>

    {/* ปุ่มเข้าสู่ระบบ */}
    <div className="flex w-full items-center justify-center">
      <button
        type="submit"
        disabled={loading}
        className="bg-[#B10073] text-white rounded-lg h-[40px] w-full max-w-[218px] text-sm font-semibold mt-3.5"
      >
        {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
      </button>
    </div>

    {/* ลิงก์สมัคร */}
    <div className="text-center">
      <a
        href="/register"
        className="hover:text-primary-dark text-sm text-purple-900 underline "
      >
        สมัครเข้าใช้งาน
      </a>
    </div>
  </form>
);

};

export default ComponentsAuthLoginForm;
