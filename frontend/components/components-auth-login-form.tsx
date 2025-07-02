"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useAuthStore from "../store/authStore";
import IconLockDots from "../components/icon/icon-lock-dots";
import IconAccount from "../components/icon/icon-user";
import Swal from "sweetalert2";
const ComponentsAuthLoginForm = () => {
  const router = useRouter();
  const { actionLogin, actionSetUser } = useAuthStore();
  const user = useAuthStore((state) => state.user)
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ emailOrPhone?: string; password?: string; general?: string }>({});
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const validate = () => {
    const newErrors: typeof errors = {};
    const isEmail = emailOrPhone.includes("@");

    if (!emailOrPhone) {
      newErrors.emailOrPhone = "กรุณากรอกเบอร์โทรศัพท์หรืออีเมล";
    } else if (isEmail && !emailRegex.test(emailOrPhone)) {
      newErrors.emailOrPhone = "รูปแบบอีเมลไม่ถูกต้อง เช่น example@gmail.com"
    } else if (!isEmail && (!/^\d+$/.test(emailOrPhone) || emailOrPhone.length !== 10)) {
      newErrors.emailOrPhone = "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก";
    }

    if (!password) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    } else if (isEmail && password.length < 8) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัว";
    } else if (!isEmail && password.length < 6) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัว";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      console.warn("Validation failed: ข้อมูลไม่ครบหรือไม่ถูกต้อง");
      return;
    }

    setLoading(true);
    const isEmail = emailOrPhone.includes("@");

    const payload: any = {
      password_hash: password,
    };

    if (isEmail) {
      payload.email = emailOrPhone;
    } else {
      payload.phone_number = emailOrPhone;
    }


    try {
      await actionLogin(payload).then(() => {
        const me = async () => {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}me`, {
            withCredentials: true
          })
          const myinfo = res.data.data
          actionSetUser(myinfo)
        }
        me().then(() => {
          if (user?.role_id === 3) {
            router.push("/admin/student")
          } else if (user?.role_id === 2) {
            router.push("/mentor/mentor-student")
          } else {
            router.push("/")
          }
        }).catch((err) => {
          console.log(err);
        })
      }).catch((err) => {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: err.message,
          icon: "error",
        });
      });
    } catch (err: any) {
      const apiMessage = err?.response?.data?.message || "";
      const status = err?.response?.status;

      console.error("Login error:", {
        status,
        message: apiMessage,
      });

      if (status === 404) {
        if (apiMessage.includes("อีเมล")) {
          setErrors({ emailOrPhone: "อีเมลนี้ไม่มีอยู่ในระบบ" });
        } else if (apiMessage.includes("เบอร์")) {
          setErrors({ emailOrPhone: "เบอร์โทรศัพท์นี้ไม่มีอยู่ในระบบ" });
        } else {
          setErrors({ emailOrPhone: "ไม่พบผู้ใช้งานในระบบ" });
        }
      } else if (status === 401) {
        setErrors({ password: "รหัสผ่านไม่ถูกต้อง" });
      } else if (status === 400) {
        setErrors({ general: apiMessage || "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง" });
      } else {
        setErrors({ general: "เกิดข้อผิดพลาดจากระบบ กรุณาลองใหม่ภายหลัง" });
      }
    } finally {
      setLoading(false);
    }
  };


  // -------------------------------------------------- UI
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
            className={`form-input pe-26 ps-14 w-full h-[52px] rounded-md border text-black placeholder-gray-400 transition-colors ${errors.emailOrPhone
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
            className={`form-input pe-26 ps-14 w-full h-[52px] rounded-md border text-black placeholder-gray-400 transition-colors ${errors.password
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
