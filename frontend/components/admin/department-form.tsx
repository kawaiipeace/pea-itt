"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import IconUser from "@/components/icon/icon-user";
import IconUserPlus from "@/components/icon/icon-user-plus";
import Swal from "sweetalert2";

interface department {
  dept_id: number;
  dept_name: string;
}

interface Option {
  value: number;
  label: string;
}

const selectClassNames = {
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

export default function DepartmentForm() {
  const router = useRouter();

  const [departments, setDepartments] = useState<department[]>([]);
  const [deptOpts, setDeptOpts] = useState<Option[]>([]);
  const [selectedDept, setSelectedDept] = useState<Option | null>(null);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await api.get("/dept");
        setDepartments(response.data.data as department[]);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }
    fetchDepartments();
  }, []);

  useEffect(() => {
    setDeptOpts(
      departments.map((dept) => ({
        value: dept.dept_id,
        label: dept.dept_name,
      }))
    );
  }, [departments]);

  const handleDeptDelete = async (d: department, e: React.MouseEvent) => {
    e.stopPropagation();

    const result = await Swal.fire({
      title: "ต้องการลบ",
      text: `ต้องการลบ ${d.dept_name} หรือไม่?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/dept/${d.dept_id}`);
      setDepartments((prev) =>
        prev.filter((dept) => dept.dept_id !== d.dept_id)
      );
      setSelectedDept(null);

      await Swal.fire({
        title: "ลบสำเร็จ",
        text: `ลบ ${d.dept_name} สำเร็จแล้ว`,
        icon: "success",
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error("ลบไม่สำเร็จ:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถลบข้อมูลได้ กรุณาลองใหม่",
        icon: "error",
        confirmButtonText: "ปิด",
      });
    }
  };

  return (
    <>
      {/* หัวเรื่อง และ หาชื่อกอง */}
      <div className="bg-gray-50 px-4 pb-10 pt-6 dark:bg-black-dark-light/5 sm:px-6 md:px-10">
        <h1 className="mb-[40px] text-2xl font-semibold dark:text-gray-400 sm:text-3xl md:text-[32px]">
          ข้อมูลกอง
        </h1>
        <div className="mb-2 flex flex-wrap gap-4 px-0 sm:gap-6">
          <div>
            <label className="mb-2 block text-base font-medium dark:text-[#506690]">
              ค้นหากอง
            </label>
            <Select<Option, false>
              options={deptOpts}
              value={selectedDept}
              onChange={setSelectedDept}
              placeholder="ค้นหากอง"
              className="w-[200px] sm:w-[240px] md:w-[280px]"
              classNames={selectClassNames as any}
              isClearable
            />
          </div>
        </div>
      </div>

      {/* list container */}
      <div className="-mt-4 flex h-[350px] w-full max-w-[900px] flex-col justify-start rounded-lg bg-[#eae9eb] p-4 shadow dark:border dark:border-gray-500 dark:bg-gray-900 sm:mx-auto sm:p-6">
        {departments.length > 0 ? (
          <div className="flex-1 overflow-y-auto">
            <div className="flex w-full flex-col gap-3 sm:gap-4">
              {(selectedDept
                ? departments.filter(
                    (dept) => dept.dept_id === selectedDept.value
                  )
                : departments
              ).map((dept) => (
                <div
                  key={dept.dept_id}
                  className="flex items-center gap-3 rounded-md border border-transparent bg-white p-3 duration-150 hover:border-[#B10073] hover:bg-[#F7E3F0] hover:shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-500 sm:gap-4 sm:p-4"
                >
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 sm:h-10 sm:w-10">
                      <IconUser />
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-400 sm:text-base">
                      {dept.dept_name}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={(e) => handleDeptDelete(dept, e)}
                      className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center text-sm text-gray-400 dark:text-[#506690] sm:text-base">
              ไม่พบข้อมูลกองในระบบ
            </p>
          </div>
        )}
      </div>

      {/* ปุ่มเพิ่มกอง */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-10 md:right-12">
        <button
          type="button"
          onClick={() => router.push("/admin/department/add")}
          className="flex h-[48px] w-[128px] items-center justify-center gap-2 rounded-lg bg-[#74045F] px-4 py-2 text-[14px] text-white shadow-lg transition-colors hover:bg-[#B10073]"
        >
          <IconUserPlus />
          เพิ่มกอง
        </button>
      </div>
    </>
  );
}
