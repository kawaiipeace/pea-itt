"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import IconUser from "@/components/icon/icon-user";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

interface DepartmentOption {
  value: number;
  label: string;
}

interface MentorOption {
  value: number;
  label: string;
}

interface Student {
  id: number;
  fname: string;
  lname: string;
  department_id: number;
  mentor_id: number;
}

const StudentForm = () => {
  const [selectedDivision, setSelectedDivision] = useState<DepartmentOption | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<MentorOption | null>(null);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [departmentOptions, setDepartmentOptions] = useState<DepartmentOption[]>([]);
  const [mentorOptions, setMentorOptions] = useState<MentorOption[]>([]);
  const router = useRouter();

  // โหลดกอง
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}dept`)
      .then((res) => {
        const departments = res.data?.data || [];
        setDepartmentOptions(
          departments.map((d: any) => ({
            value: d.dept_id,
            label: d.dept_name,
          }))
        );
      })
      .catch(() => {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลกองได้",
          icon: "error",
        });
      });
  }, []);

  // โหลดพี่เลี้ยงเมื่อเลือกกอง
  useEffect(() => {
    if (!selectedDivision) return;

    setSelectedMentor(null);
    setFilteredStudents([]);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}user/mentor?department_id=${selectedDivision.value}`)
      .then((res) => {
        const mentors = res.data?.data || [];
        setMentorOptions(
          mentors.map((m: any) => ({
            value: m.mentor_profile?.id || m.id,
            label: `${m.fname} ${m.lname}`,
          }))
        );
      })
      .catch(() => {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลพี่เลี้ยงได้",
          icon: "error",
        });
      });
  }, [selectedDivision]);

  // โหลดนักศึกษาตามพี่เลี้ยงที่เลือก
  useEffect(() => {
    if (!selectedMentor) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${selectedMentor.value}&show_ended=false`)
      .then((res) => {
        setFilteredStudents(res.data?.data || []);
      })
      .catch(() => {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลนักศึกษาได้",
          icon: "error",
        });
      });
  }, [selectedMentor]);

  // ตรวจ dark mode
  useEffect(() => {
    const updateDarkMode = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark);
    };

    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateDarkMode);
    };
  }, []);

  const customSelectClassNames = {
    control: ({ isFocused }: any) =>
      `border rounded-lg shadow-sm min-h-[42px] px-2 py-1 ${
        isFocused
          ? "border-blue-500 ring-1 ring-blue-300"
          : "border-gray-300 dark:border-gray-600"
      } bg-white dark:bg-gray-800`,
    placeholder: () => "text-gray-500 dark:text-gray-400",
    singleValue: () => "text-gray-800 dark:text-gray-200",
    input: () => "text-gray-800 dark:text-gray-200",
    menu: () =>
      "mt-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 z-10",
    option: ({ isFocused, isSelected }: any) => {
      if (isSelected) return "bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white";
      if (isFocused) return "bg-gray-100 dark:bg-gray-700";
      return "text-gray-800 dark:text-gray-200";
    },
    dropdownIndicator: () => "text-gray-500 dark:text-gray-300",
    clearIndicator: () => "text-gray-500 dark:text-gray-300",
    indicatorSeparator: () => "hidden",
  };

  return (
    <div className="bg-gray-50 px-4 pb-10 pt-6 sm:px-6 md:px-10 dark:bg-black-dark-light/5">
      <h1 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-[32px] dark:text-gray-400">
        ข้อมูลนักศึกษาฝึกงาน
      </h1>

      <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6 sm:px-6">
        <div>
          <label className="mb-2 block text-base font-medium dark:text-[#506690]">ชื่อกอง</label>
          <Select
            options={departmentOptions}
            value={selectedDivision}
            onChange={setSelectedDivision}
            placeholder="เลือกกอง"
            className="w-[200px] sm:w-[240px] md:w-[280px]"
            classNames={customSelectClassNames}
            isClearable
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-medium dark:text-[#506690]">ชื่อพี่เลี้ยง</label>
          <Select
            options={mentorOptions}
            value={selectedMentor}
            onChange={setSelectedMentor}
            placeholder="เลือกพี่เลี้ยง"
            className="w-[200px] sm:w-[240px] md:w-[280px]"
            classNames={customSelectClassNames}
            isClearable
          />
        </div>
      </div>

      <div className="-mt-4 flex h-[350px] w-full max-w-[900px] flex-col justify-start rounded-lg bg-[#eae9eb] p-3 shadow sm:mx-auto sm:p-6 dark:border dark:border-gray-500 dark:bg-gray-900">
        {selectedDivision && selectedMentor ? (
          filteredStudents.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <div className="flex w-full flex-col gap-3 sm:gap-4">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    onClick={() => router.push(`/users/profile/${student.id}`)}
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent bg-white p-3 duration-150 hover:border-[#B10073] hover:bg-[#F7E3F0] hover:shadow-lg sm:gap-4 sm:p-4 dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-500"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 sm:h-10 sm:w-10 dark:bg-gray-700">
                      <IconUser />
                    </div>
                    <p className="text-sm font-medium text-gray-800 sm:text-base dark:text-gray-400">
                      {student.fname} {student.lname}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center text-sm text-gray-500 sm:text-base dark:text-[#506690]">
                ไม่พบนักศึกษาที่ตรงกับเงื่อนไข
              </p>
            </div>
          )
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center text-sm text-gray-400 sm:text-base dark:text-[#506690]">
              ข้อมูลนักศึกษาฝึกงานจะปรากฏตรงนี้
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
