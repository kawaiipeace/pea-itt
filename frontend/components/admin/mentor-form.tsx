"use client";

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Trash2 } from "lucide-react";
import IconUser from "../../components/icon/icon-user";
import IconUserPlus from "../../components/icon/icon-user-plus";
import Swal from "sweetalert2";

interface Option {
  value: number;
  label: string;
}

interface Mentor {
  id: number;
  fname: string;
  lname: string;
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

export default function MentorForm() {
  const router = useRouter();

  const [divisionOpts, setDivisionOpts] = useState<Option[]>([]);
  const [mentorOpts, setMentorOpts] = useState<Option[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<Option | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<Option | null>(null);
  const [mentors, setMentors] = useState<Mentor[]>([]);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("dept");
        setDivisionOpts(
          data.data.map((d: any) => ({ value: d.dept_id, label: d.dept_name }))
        );
      } catch (err) {
        console.error("fetch divisions", err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedDivision) return;
    (async () => {
      try {
        const { data } = await api.get("user/mentor", {
          params: { department_id: selectedDivision.value },
        });
        setMentorOpts(
          data.data.map((m: any) => ({
            value: m.id,
            label: `${m.fname} ${m.lname}`,
          }))
        );
        setMentors(data.data as Mentor[]);
        setSelectedMentor(null);
      } catch (err) {
        console.error("fetch mentors", err);
      }
    })();
  }, [selectedDivision]);

  const listMentors = useMemo(() => {
    if (!selectedDivision) return [];
    if (!selectedMentor) return mentors;
    return mentors.filter((m) => m.id === selectedMentor.value);
  }, [mentors, selectedDivision, selectedMentor]);

  const handleDelete = async (m: Mentor, e: React.MouseEvent) => {
    e.stopPropagation();

    const confirmResult = await Swal.fire({
      title: `ยืนยันการลบพี่เลี้ยง`,
      text: `คุณแน่ใจหรือไม่ว่าต้องการลบ ${m.fname} ${m.lname}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#74045F",
      cancelButtonColor: "#d33",
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      await api.delete(`/users/admin/${m.id}`);
      setMentors((prev) => prev.filter((x) => x.id !== m.id));
      if (selectedMentor?.value === m.id) setSelectedMentor(null);

      Swal.fire({
        icon: "success",
        title: "ลบพี่เลี้ยงสำเร็จ",
        confirmButtonColor: "#74045F",
        confirmButtonText: "ปิด",
      });
    } catch (err) {
      console.error("ลบพี่เลี้ยงล้มเหลว", err);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถลบพี่เลี้ยงได้",
        confirmButtonColor: "#74045F",
        confirmButtonText: "ปิด",
      });
    }
  };

  return (
    <>
      <div className="bg-gray-50 px-4 pb-10 pt-6 dark:bg-black-dark-light/5 sm:px-6 md:px-10">
        <h1 className="mb-4 text-2xl font-semibold dark:text-gray-400 sm:text-3xl md:text-[32px]">
          ข้อมูลพี่เลี้ยง
        </h1>

        <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6 sm:px-6">
          <div>
            <label className="mb-2 block text-base font-medium dark:text-[#506690]">
              ชื่อกอง
            </label>
            <Select<Option, false>
              options={divisionOpts}
              value={selectedDivision}
              onChange={setSelectedDivision}
              placeholder="เลือกกอง"
              className="w-[200px] sm:w-[240px] md:w-[280px]"
              classNames={selectClassNames as any}
              isClearable
            />
          </div>
          <div>
            <label className="mb-2 block text-base font-medium dark:text-[#506690]">
              ชื่อพี่เลี้ยง
            </label>
            <Select<Option, false>
              options={mentorOpts}
              value={selectedMentor}
              onChange={setSelectedMentor}
              placeholder="เลือกพี่เลี้ยง"
              className="w-[200px] sm:w-[240px] md:w-[280px]"
              classNames={selectClassNames as any}
              isClearable
              isDisabled={!selectedDivision}
            />
          </div>
        </div>

        <div className="-mt-4 flex h-[350px] w-full max-w-[900px] flex-col justify-start rounded-lg bg-[#eae9eb] p-4 shadow dark:border dark:border-gray-500 dark:bg-gray-900 sm:mx-auto sm:p-6">
          {selectedDivision ? (
            listMentors.length ? (
              <div className="flex-1 overflow-y-auto">
                <div className="flex w-full flex-col gap-3 sm:gap-4">
                  {listMentors.map((m) => (
                    <div
                      key={m.id}
                      className={`flex items-center gap-3 rounded-md border border-transparent bg-white p-3 duration-150 hover:border-[#B10073] hover:bg-[#F7E3F0] hover:shadow-lg dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-500 sm:gap-4 sm:p-4 ${
                        selectedMentor?.value === m.id
                          ? "border-[#B10073] bg-[#F7E3F0] dark:bg-[#593049]"
                          : ""
                      }`}
                    >
                      <div
                        className="flex flex-1 cursor-pointer items-center gap-3"
                        onClick={() =>
                          router.push(`/admin/editmentor?id=${m.id}`)
                        }
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 sm:h-10 sm:w-10">
                          <IconUser />
                        </div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-400 sm:text-base">
                          {m.fname} {m.lname}
                        </p>
                      </div>

                      <button
                        onClick={(e) => handleDelete(m, e)}
                        className="borde ml-auto rounded p-2 transition-colors"
                        aria-label="ลบ"
                      >
                        <Trash2 className="h-4 w-4 text-black" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <p className="text-center text-sm text-gray-500 dark:text-[#506690] sm:text-base">
                  ไม่พบพี่เลี้ยงที่ตรงกับเงื่อนไข
                </p>
              </div>
            )
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center text-sm text-gray-400 dark:text-[#506690] sm:text-base">
                เลือกกองและพี่เลี้ยงเพื่อดูข้อมูล
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-10 md:right-12">
        <button
          type="button"
          onClick={() => router.push("/admin/addmentor")}
          className="flex h-[48px] w-[128px] items-center justify-center gap-2 rounded-lg bg-[#74045F] px-4 py-2 text-white shadow-lg transition-colors hover:bg-[#B10073]"
        >
          <IconUserPlus />
          เพิ่มพี่เลี้ยง
        </button>
      </div>
    </>
  );
}
