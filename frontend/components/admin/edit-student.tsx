"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import { format } from "date-fns";
import Select from "react-select";
import IconCalendar from "../icon/icon-calendar";
import IconArrowBackward from "../icon/icon-arrow-backward";
import useAuthStore from "../../store/authStore";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface stuPro {
  id: number;
  end_date: string;
  start_date: string;
  university: string;
  mentor_id: number;
}

interface deptData {
  dept_id: number;
  dept_name: string;
}

interface studentProfile {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
  department: deptData | null;
  student_profile: stuPro | null;
}

registerLocale("th", th);

const CustomDateInput = React.forwardRef(({ value, onClick }: any, ref) => {
  const [day, month, year] = value?.split("/") || ["", "", ""];
  const buddhistYear = year ? String(parseInt(year) + 543) : "";

  return (
    <div className="relative w-full">
      <input
        onClick={onClick}
        value={value ? `${day}/${month}/${buddhistYear}` : ""}
        readOnly
        placeholder="เลือกวันที่"
        className="w-full rounded border px-3 py-2 pr-10 text-sm dark:bg-gray-900 dark:border-gray-500 dark:text-gray-400 focus:outline-none focus:ring-0"
      />
      <IconCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
    </div>
  );
});
CustomDateInput.displayName = "CustomDateInput";

const EditStudent = ({ id }: { id: number }) => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.actionSetUser);
  const refreshUser = useAuthStore((state) => state.refreshUser);
  const router = useRouter();

  const [stuInfo, setStuInfo] = useState<studentProfile>();
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [mentorOptions, setMentorOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [departmentOptions, setDepartmentOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    university: "",
    phone: "",
    start_date: "",
    end_date: "",
    mentor_id: "",
    department: "",
  });

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/${id}`,
          {
            withCredentials: true,
          }
        );
        setStuInfo(response.data.data);

        const dept = response.data.data.department;
        if (dept) {
          setDepartmentOptions((prev) => [
            { value: dept.dept_id.toString(), label: dept.dept_name },
            ...prev.filter((d) => d.value !== dept.dept_id.toString()),
          ]);
        }
        const IDSTU = response.data.data.student_profile.id;

        const responseImg = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/${IDSTU}/picture`,
          {
            responseType: "blob",
            withCredentials: true,
          }
        );
        const blob = new Blob([responseImg.data], { type: "image/jpeg" });
        const image = URL.createObjectURL(blob);
        setImageSrc(image);
      } catch (error) {
        console.error("Error fetching student info:", error);
      }
    };
    fetchStudentInfo();
  }, [id]);

  useEffect(() => {
    if (stuInfo) {
      setFormData({
        name: stuInfo.fname || "",
        surname: stuInfo.lname || "",
        email: stuInfo.email || "",
        university: stuInfo.student_profile?.university || "",
        phone: stuInfo.phone_number || "",
        start_date: stuInfo.student_profile?.start_date || "",
        end_date: stuInfo.student_profile?.end_date || "",
        mentor_id: stuInfo.student_profile?.mentor_id?.toString() || "",
        department: stuInfo.department?.dept_id.toString() || "",
      });
    }
  }, [stuInfo]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setImageSrc(result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const mentorRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}user/mentor`,
          {
            withCredentials: true,
          }
        );
        const mentors = mentorRes.data.data.map((m: any) => ({
          label: `${m.fname} ${m.lname}`,
          value: m.id.toString(),
        }));
        setMentorOptions(mentors);

        // แก้ URL ให้แน่ใจว่ามี / ตรงกลางระหว่าง base กับ endpoint
        const deptRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}dept`,
          {
            withCredentials: true,
          }
        );
        const depts = deptRes.data.data.map((d: any) => ({
          label: d.dept_name,
          value: (d.dept_id).toString(), // รองรับทั้ง dept_id หรือ id
        }));

        setDepartmentOptions(depts);
      } catch (err) {
        console.error("โหลดข้อมูล mentor/department ล้มเหลว:", err);
      }
    };
    fetchOptions();
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) {
      alert("กรุณาเข้าสู่ระบบก่อน");
      return;
    }

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}users/${formData.mentor_id}`, { withCredentials: true })
      const mentID = res.data.data.mentor_profile.id
  


       axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}users/admin/${id}`, // ✅ ใช้ id จาก props
        {
          "department_id": formData.department,
          "mentor_id": mentID
        },
        { withCredentials: true }
      );

      Swal.fire({
        title: "สำเร็จ",
        text: "บันทึกข้อมูลโปรไฟล์สำเร็จ",
        icon: "success",
        confirmButtonText: "ตกลง",
      }).then(() => {
        refreshUser();
      });
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูลโปรไฟล์");
    }
  };

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="mb-4 flex w-max items-center gap-1 text-sm text-gray-600 hover:text-primary dark:border-[#506690] dark:bg-black-dark-light/5 dark:text-[#506690]"
      >
        <IconArrowBackward className="h-4 w-4" /> ย้อนกลับ
      </button>

      <div className="mx-auto w-full max-w-6xl p-4 dark:rounded-lg dark:bg-black-dark-light/5">
        <div className="flex flex-col gap-6 rounded-lg border bg-white p-6 shadow-md dark:border-gray-900 dark:bg-gray-900 dark:text-[#506690] md:flex-row">
          <div className="flex w-full flex-col items-center text-center md:w-1/5 md:items-start md:text-left">
            <h1 className="mb-4 text-xl font-bold">โปรไฟล์</h1>
            <div className="relative mb-4 h-28 w-28 md:h-40 md:w-40">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border bg-gray-100 dark:border-gray-500 dark:bg-gray-900">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <svg
                    className="h-full w-full text-gray-300 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )}
              </div>
              <label className="absolute bottom-1 right-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#9B006C] bg-[#F7E3F0] shadow dark:border-gray-500 dark:bg-gray-900">
                <svg
                  className="h-4 w-4 text-[#9B006C] dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  readOnly
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
              </label>
            </div>
          </div>
          <div className="mt-2 w-full md:flex-1">
            <form className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: "ชื่อจริง", field: "name" },
                { label: "นามสกุล", field: "surname" },
                { label: "อีเมล", field: "email", type: "email" },
                { label: "เบอร์โทรศัพท์", field: "phone" },
              ].map(({ label, field, type }) => (
                <div key={field}>
                  <label className="block text-sm font-medium">{label}</label>
                  <input
                    type={type || "text"}
                    value={(formData as any)[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    readOnly
                    className="w-full rounded border p-2 dark:border-gray-500 dark:bg-gray-900 dark:text-[#506690]"
                  />
                </div>
              ))}
              <div className="flex w-full flex-col gap-4 md:col-span-2 md:flex-row md:items-end">
                <div className="w-full md:w-[50%]">
                  <label className="block text-sm font-medium">
                    มหาวิทยาลัยที่ศึกษาอยู่
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    readOnly
                    onChange={(e) =>
                      setFormData({ ...formData, university: e.target.value })
                    }
                    className="w-full rounded border p-2 dark:border-gray-500 dark:bg-gray-900  dark:text-[#506690]"
                  />
                </div>
                
                {["start_date", "end_date"].map((field, index) => (
                  <div className="w-full md:flex-1" key={field}>
                    <label className="block text-sm font-medium dark:text-[#506690]">
                      {index === 0
                        ? "วันที่เริ่มฝึกงาน"
                        : "วันที่สิ้นสุดฝึกงาน"}
                    </label>
                    <DatePicker
                      selected={
                        //@ts-ignore
                        formData[field] ? new Date(formData[field]) : null
                      }
                      onChange={(date: Date | null) =>
                        setFormData({
                          ...formData,
                          [field]: date ? format(date, "yyyy-MM-dd") : "",
                        })
                      }
                      readOnly
                      dateFormat="dd/MM/yyyy"
                      locale="th"
                      minDate={
                        field === "end_date" && formData.start_date
                          ? new Date(formData.start_date)
                          : undefined
                      }
                      customInput={<CustomDateInput />}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">
                  กองที่สังกัด
                </label>
                <Select
                  options={departmentOptions}
                  value={departmentOptions.find(
                    (opt) => opt.value === formData.department
                  )}
                  //@ts-ignore
                  onChange={(option) =>
                    setFormData({
                      ...formData,
                      department: option?.value || "",
                    })
                  }
                  placeholder="เลือกกอง"
                  classNames={{
                    //@ts-ignore
                    control: ({ isFocused }) =>
                      `rounded border text-sm ${isFocused
                        ? "border-[#9B006C] bg-white dark:bg-gray-900"
                        : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900"
                      } text-gray-900 dark:text-gray-300`,
                    singleValue: () => "text-gray-900 dark:text-gray-300",
                    placeholder: () => "text-gray-400 dark:text-gray-500",
                    menu: () =>
                      "z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 rounded shadow-md",
                    //@ts-ignore
                    option: ({ isFocused, isSelected }) =>
                      `cursor-pointer ${isSelected
                        ? "bg-[#9B006C] text-white"
                        : isFocused
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                          : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"
                      }`,
                  }}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">
                  ชื่อพี่เลี้ยง
                </label>
                <Select
                  options={mentorOptions}
                  value={mentorOptions.find(
                    (opt) => opt.value === formData.mentor_id
                  )}
                  //@ts-ignore
                  onChange={(option) =>
                    setFormData({ ...formData, mentor_id: option?.value || "" })
                  }
                  placeholder="เลือกพี่เลี้ยง"
                  classNames={{
                    //@ts-ignore
                    control: ({ isFocused }) =>
                      `rounded border text-sm ${isFocused
                        ? "border-[#9B006C] bg-white dark:bg-gray-900"
                        : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900"
                      } text-gray-900 dark:text-gray-300`,
                    singleValue: () => "text-gray-900 dark:text-gray-300",
                    placeholder: () => "text-gray-400 dark:text-gray-500",
                    menu: () =>
                      "z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 rounded shadow-md",
                    //@ts-ignore
                    option: ({ isFocused, isSelected }) =>
                      `cursor-pointer ${isSelected
                        ? "bg-[#9B006C] text-white"
                        : isFocused
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                          : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"
                      }`,
                  }}
                />
              </div>
              <div className="mt-4 md:col-span-2">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="w-full rounded bg-[#74045F] px-6 py-2.5 font-medium text-white hover:bg-[#B10073] md:w-auto"
                >
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
