import ComponentsAuthLoginForm from '@/components/components-auth-login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4 font-nunito">
      <div className="w-full max-w-[460px] sm:h-[652px] rounded-[20px] bg-white px-6  py-10 shadow-2xl border border-[#e5e7eb] flex flex-col">
        {/* โลโก้และหัวข้อ */}
        <div className="text-center mb-4">
          <img
            src="/assets/images/PEAITT-LOGO.png"
            alt="PEA Logo"
            className="mx-auto h-[50px] w-[20x] sm:w-[200px] mt-4"
          />
          <h1 className="text-base font-semibold text-black mt-9 ">
            PEA Internship Time Track
          </h1>
          <p className="text-sm text-[#64748B] mt-1/2">
            ระบบลงเวลาเข้า-ออกของนักศึกษาฝึกงาน
          </p>
        </div>

        {/* ฟอร์มจัดให้อยู่กึ่งกลางของกล่อง */}
        <div className="flex-1 flex flex-col items-center justify-center mb-7">
          <ComponentsAuthLoginForm />
        </div>
      </div>
    </div>
  );
}
