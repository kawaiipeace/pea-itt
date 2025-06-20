"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useAuthStore from "@/store/authStore"; // ⬅️ Store
import IconLockDots from "@/components/icon/icon-lock-dots";
import IconAccount from "@/components/icon/icon-user";

const ComponentsAuthLoginForm = () => {
  const router = useRouter();
  const { actionLogin } = useAuthStore(); // ✅ อยู่ในฟังก์ชันเท่านั้น

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    emailOrPhone?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: { emailOrPhone?: string; password?: string } = {};

    if (!emailOrPhone) {
      newErrors.emailOrPhone = "กรุณากรอกเบอร์โทรศัพท์หรืออีเมล";
    } else if (
      !phoneRegex.test(emailOrPhone) &&
      !emailRegex.test(emailOrPhone)
    ) {
      newErrors.emailOrPhone = "กรุณากรอกเบอร์โทรศัพท์หรืออีเมลให้ถูกต้อง";
    }

    if (!password) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    } else if (emailOrPhone.includes("@") && password.length < 8) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
    } else if (!emailOrPhone.includes("@") && password.length < 6) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!validate()) return;
    setLoading(true);

    try {
      // const payload = emailOrPhone.includes("@")
      // ? { email: emailOrPhone,  password_hash: password }       // ✅
      // : { phone_number: emailOrPhone,  password_hash: password };

      const payload = {
        email: emailOrPhone,
        password_hash: password,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}login`,
        payload
      );

      console.log(response);
      

      // if (response.status === 200 && response.data.user) {
      //   // ✅ บันทึก user ลง store
      //   actionLogin(response.data.user);

      //   const role = response.data.user.role;
      //   if (role === "STUDENT" || role === "mentor" || role === "admin") {
      //     router.push("/");
      //   }
      // } else {
      //   setErrors({ password: "เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบข้อมูล" });
      // }
    } catch (err: any) {
      console.error("Login error:", err);
      if (err?.response?.data?.message) {
        setErrors({ password: err.response.data.message });
      } else {
        setErrors({ password: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="font-nunito flex w-full flex-col items-center space-y-6 px-4 py-6 text-sm md:px-8"
    >
      {/* เบอร์โทรศัพท์หรืออีเมล */}
      <div className="min-h-[9px] w-full max-w-[340px] space-y-2">
        <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
          เบอร์โทรศัพท์หรืออีเมล
        </label>
        <div className="relative">
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="กรุณากรอกเบอร์โทรศัพท์หรืออีเมล"
            className={`pe-26 form-input h-[52px] w-full rounded-md border ps-14 text-black placeholder-gray-400 transition-colors ${
              errors.emailOrPhone
                ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-0"
                : "border-gray-300 focus:border-[#51158C]"
            }`}
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2 text-white-dark">
            <IconAccount />
          </span>
        </div>
        <div className="h-[16px]">
          {errors.emailOrPhone && (
            <p className="mt-1 text-xs text-danger">{errors.emailOrPhone}</p>
          )}
        </div>
      </div>

      {/* รหัสผ่าน */}
      <div className="min-h-[96px] w-full max-w-[340px] space-y-2 ">
        <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
          รหัสผ่าน
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="กรุณากรอกรหัสผ่าน"
            className={`pe-26 form-input h-[52px] w-full rounded-md border ps-14 text-black placeholder-gray-400 transition-colors ${
              errors.password
                ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-0"
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
          className="mt-3.5 h-[40px] w-full max-w-[218px] rounded-lg bg-[#B10073] text-sm font-semibold text-white"
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
