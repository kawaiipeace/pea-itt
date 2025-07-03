"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import IconUserPlus from "@/components/icon/icon-user-plus";
import IconUser from "@/components/icon/icon-user";

const divisionOptions = [
  { value: "กอง1", label: "กอง1" },
  { value: "กอง2", label: "กอง2" },
  { value: "กอง3", label: "กอง3" },
  { value: "กอง4", label: "กอง4" },
  { value: "กอง5", label: "กอง5" },
  { value: "กอง6", label: "กอง6" },
  { value: "กอง7", label: "กอง7" },
  { value: "กอง8", label: "กอง8" },
  { value: "กอง9", label: "กอง9" },
];

const mentorOptions = [
  { value: "พี่พีช", label: "พี่พีช" },
  { value: "พี่วิทย์", label: "พี่วิทย์" },
  { value: "พี่ปอนด์", label: "พี่ปอนด์" },
];

const mockStudents = [
  { name: "เดือนเพ็ญ โฉมฉาย", division: "กอง1", mentor: "พี่พีช" },
  { name: "สุขหทัย พลยะเรศ", division: "กอง2", mentor: "พี่วิทย์" },
  { name: "อภิวัฒน์ ลานทอง", division: "กอง3", mentor: "พี่ปอนด์" },
  { name: "ภูมิพัฒน์ เวฬุฬฐ์วรรณราช", division: "กอง3", mentor: "พี่ปอนด์" },
  { name: "นฤมล สีละมุด", division: "กอง3", mentor: "พี่ปอนด์" },
  { name: "นฤมล สีละมุด", division: "กอง3", mentor: "พี่ปอนด์" },
];

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

const MentorForm = () => {
  const [selectedDivision, setSelectedDivision] = useState<any>(null);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [filteredStudents, setFilteredStudents] = useState<typeof mockStudents>([]);

  useEffect(() => {
    if (selectedDivision && selectedMentor) {
      const results = mockStudents.filter(
        (student) =>
          student.division === selectedDivision.value &&
          student.mentor === selectedMentor.value
      );
      setFilteredStudents(results);
    } else {
      setFilteredStudents([]);
    }
  }, [selectedDivision, selectedMentor]);

  return (
    <>
      <div className="bg-gray-50 px-4 pb-10 pt-6 sm:px-6 md:px-10 dark:bg-black-dark-light/5">
        <h1 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-[32px] dark:text-gray-400">
          ข้อมูลพี่เลี้ยง
        </h1>

        {/* Dropdowns */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6 sm:px-6">
          <div>
            <label className="mb-2 block text-base font-medium dark:text-[#506690]">
              ชื่อกอง
            </label>
            <Select
              options={divisionOptions}
              value={selectedDivision}
              onChange={setSelectedDivision}
              placeholder="เลือกกอง"
              className="w-[200px] sm:w-[240px] md:w-[280px]"
              classNames={selectClassNames}
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
              classNames={selectClassNames}
              isClearable
            />
          </div>
        </div>

        {/* Result Section */}
        <div className="-mt-4 flex h-[350px] w-full max-w-[900px] flex-col justify-start rounded-lg bg-[#eae9eb] p-4 shadow sm:mx-auto sm:p-6 dark:border dark:border-gray-500 dark:bg-gray-900">
          {selectedDivision && selectedMentor ? (
            filteredStudents.length > 0 ? (
              <div className="flex-1 overflow-y-auto">
                <div className="flex w-full flex-col gap-3 sm:gap-4">
                  {filteredStudents.map((student, idx) => (
                    <div
                      key={idx}
                      className="flex cursor-pointer items-center gap-3 rounded-md border border-transparent bg-white p-3 duration-150 hover:border-[#B10073] hover:bg-[#F7E3F0] hover:shadow-lg sm:gap-4 sm:p-4 dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-500"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 sm:h-10 sm:w-10 dark:bg-gray-700">
                        <IconUser className="" />
                      </div>
                      <p className="text-sm font-medium text-gray-800 sm:text-base dark:text-gray-400">
                        {student.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <p className="text-center text-sm text-gray-500 sm:text-base dark:text-[#506690]">
                  ไม่พบพี่เลี้ยงที่ตรงกับเงื่อนไข
                </p>
              </div>
            )
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-center text-sm text-gray-400 sm:text-base dark:text-[#506690]">
                ข้อมูลพี่เลี้ยงจะปรากฏตรงนี้
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ปุ่มเพิ่มพี่เลี้ยงที่มุมล่างขวา */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-12 z-50">
        <button
          type="button"
          className="flex items-center gap-2 w-[128px] h-[48px] rounded-lg bg-[#74045F] px-4 py-2 text-white shadow-lg hover:bg-[#B10073]"
        >
          <IconUserPlus className="" />
          เพิ่มพี่เลี้ยง
        </button>
      </div>
    </>
  );
};

export default MentorForm;
