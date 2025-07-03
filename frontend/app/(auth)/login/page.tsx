import ComponentsAuthLoginForm from '@/components/components-auth-login-form';
import Image from "next/image";
import Logo from "../../../public/assets/images/PEAITT2.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4 font-nunito">
      <div className="w-full max-w-[460px] sm:h-[652px] rounded-[20px] bg-white px-6  py-10 shadow-2xl border border-[#e5e7eb] flex flex-col">
        {/* โลโก้และหัวข้อ */}
        <div className="text-center mb-4">
          <Image
            src={Logo}
            alt="PEA Logo"
            className="mx-auto mt-6  w-34 sm:w-42 md:w-48  max-w-[220px] md:max-w-[240px] lg:max-w-[260px]  h-auto  object-contain select-none"
          />
          <h1 className="text-base font-semibold text-black mt-9 ">
            PEA Internship Time Track
          </h1>
          <p className="text-sm text-[#64748B] mt-1/2">
            ระบบลงเวลาเข้า-ออกของนักศึกษาฝึกงาน
          </p>
        </div>

        {/* ฟอร์มจัดให้อยู่กึ่งกลางของกล่อง */}
        <div className="flex-1 flex flex-col items-center justify-center mb-2">
          <ComponentsAuthLoginForm />
        </div>
      </div>
    </div>
  );
}
