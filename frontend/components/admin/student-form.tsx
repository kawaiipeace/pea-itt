"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import IconUser from "@/components/icon/icon-user";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";

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
  student_profile: any;
  picture_url?: string | null;
}

const StudentForm = () => {
  const [selectedDivision, setSelectedDivision] =
    useState<DepartmentOption | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<MentorOption | null>(
    null
  );
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [departmentOptions, setDepartmentOptions] = useState<
    DepartmentOption[]
  >([]);
  const [mentorOptions, setMentorOptions] = useState<MentorOption[]>([]);
  const router = useRouter();

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

  useEffect(() => {
    if (!selectedDivision) return;
    setSelectedMentor(null);
    setFilteredStudents([]);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}user/mentor?department_id=${selectedDivision.value}`
      )
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

  useEffect(() => {
    if (!selectedMentor) return;

    const fetchStudentsWithPicture = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users?mentor_id=${selectedMentor.value}&show_ended=false`,
          { withCredentials: true }
        );

        const students: Student[] = res.data?.data || [];

        const studentsWithPictures = await Promise.all(
          students.map(async (student) => {
            try {
              const imgRes = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}users/${student.student_profile.id}/picture`,
                { responseType: "blob", withCredentials: true }
              );
              const imageUrl = URL.createObjectURL(imgRes.data);
              return { ...student, picture_url: imageUrl };
            } catch {
              return { ...student, picture_url: null };
            }
          })
        );

        setFilteredStudents(studentsWithPictures);
      } catch {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถโหลดข้อมูลนักศึกษาได้",
          icon: "error",
        });
      }
    };

    fetchStudentsWithPicture();
  }, [selectedMentor]);

  useEffect(() => {
    const updateDarkMode = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark);
    };

    updateDarkMode();
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateDarkMode);
    };
  }, []);

  const handleDelete = (student: Student) => {
    Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: `ต้องการลบนักศึกษา ${student.fname} ${student.lname} ใช่ไหม?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#74045F",
      cancelButtonColor: "#d33",
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.NEXT_PUBLIC_API_URL}users/admin/${student.id}`,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setFilteredStudents((prev) =>
              prev.filter((s) => s.id !== student.id)
            );
            Swal.fire("ลบสำเร็จ!", "นักศึกษาได้ถูกลบแล้ว", "success");
          })
          .catch(() => {
            Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถลบนักศึกษาได้", "error");
          });
      }
    });
  };

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
      if (isSelected)
        return "bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white";
      if (isFocused) return "bg-gray-100 dark:bg-gray-700";
      return "text-gray-800 dark:text-gray-200";
    },
    dropdownIndicator: () => "text-gray-500 dark:text-gray-300",
    clearIndicator: () => "text-gray-500 dark:text-gray-300",
    indicatorSeparator: () => "hidden",
  };

  return (
    <div className="bg-gray-50 px-4 pb-10 pt-6 dark:bg-black-dark-light/5 sm:px-6 md:px-10">
      <h1 className="mb-4 text-2xl font-semibold dark:text-gray-400 sm:text-3xl md:text-[32px]">
        ข้อมูลนักศึกษาฝึกงาน
      </h1>

      <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6 sm:px-6">
        <div>
          <label className="mb-2 block text-base font-medium dark:text-[#506690]">
            ชื่อกอง
          </label>
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
          <label className="mb-2 block text-base font-medium dark:text-[#506690]">
            ชื่อพี่เลี้ยง
          </label>
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

      <div className="-mt-4 flex h-[350px] w-full max-w-[900px] flex-col justify-start rounded-lg bg-[#eae9eb] p-3 shadow dark:border dark:border-gray-500 dark:bg-gray-900 sm:mx-auto sm:p-6">
        {selectedDivision && selectedMentor ? (
          filteredStudents.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <div className="flex w-full flex-col gap-3 sm:gap-4">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between gap-3 rounded-md border border-transparent bg-white p-3 duration-150 hover:border-[#B10073] hover:bg-[#F7E3F0] hover:shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-500 sm:gap-4 sm:p-4"
                  >
                    <div
                      onClick={() =>
                        router.push(`/admin/student/${student.id}`)
                      }
                    >
                      <div className="flex cursor-pointer items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          {student.picture_url ? (
                            <img
                              src={student.picture_url}
                              alt="student"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <IconUser />
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-400 sm:text-base">
                          {student.fname} {student.lname}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button onClick={() => handleDelete(student)}>
                        <Trash2
                          className="h-5 w-5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500"
                          style={{ textDecoration: "line-through" }}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center text-sm text-gray-500 dark:text-[#506690] sm:text-base">
                ไม่พบนักศึกษาที่ตรงกับเงื่อนไข
              </p>
            </div>
          )
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center text-sm text-gray-400 dark:text-[#506690] sm:text-base">
              ข้อมูลนักศึกษาฝึกงานจะปรากฏตรงนี้
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
