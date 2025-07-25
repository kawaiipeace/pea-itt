"use client";
import React, { useState } from "react";
import { FiLogOut as IconLogout } from "react-icons/fi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Select from "react-select";

const data = [
  { name: "เทพพิศมัย ปลากะวงศ์ ณ อยุธยา", startDate: "04 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 32, absent: 0, leave: 2, hours: 200 },
  { name: "อนุสรณ์ ชื่นจิตต์", startDate: "01 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 30, absent: 2, leave: 0, hours: 190 },
  { name: "จารุวรรณ สวัสดี", startDate: "05 มิถุนายน 2568", endDate: "30 กรกฎาคม 2568", present: 28, absent: 4, leave: 0, hours: 180 },
  { name: "สมชาย ใจดี", startDate: "10 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 31, absent: 1, leave: 0, hours: 195 },
  { name: "สุนีย์ ศรีสวัสดิ์", startDate: "03 มิถุนายน 2568", endDate: "29 กรกฎาคม 2568", present: 29, absent: 3, leave: 1, hours: 185 },
  { name: "วิภาวี แก้วใส", startDate: "07 มิถุนายน 2568", endDate: "30 กรกฎาคม 2568", present: 30, absent: 1, leave: 2, hours: 188 },
  { name: "ธวัชชัย ยอดดี", startDate: "06 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 32, absent: 0, leave: 0, hours: 200 },
  { name: "สุทธิพงษ์ มีสุข", startDate: "05 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 31, absent: 1, leave: 1, hours: 190 },
  { name: "ปิยะรัตน์ แสงทอง", startDate: "04 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 29, absent: 2, leave: 2, hours: 185 },
  { name: "พิมพ์ชนก ศรีวิชัย", startDate: "03 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 28, absent: 3, leave: 1, hours: 180 },
  { name: "อดุลย์ ทองดี", startDate: "01 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 30, absent: 0, leave: 2, hours: 190 },
  { name: "นงลักษณ์ บุญญา", startDate: "02 มิถุนายน 2568", endDate: "31 กรกฎาคม 2568", present: 27, absent: 5, leave: 0, hours: 175 },
];


const DashboardTable = () => {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [year, setYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const rowsPerPage = 10;
  const months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];
  const years = ["2568", "2567"];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleExport = (type) => {
    const exportData = data.map((row) => ({
      ชื่อ: row.name,
      "วันที่เริ่มฝึกงาน": row.startDate,
      "วันที่สิ้นสุดฝึกงาน": row.endDate,
      "มา (ครั้ง)": row.present,
      "ไม่มา (ครั้ง)": row.absent,
      "ลา (ครั้ง)": row.leave,
      "ชั่วโมงการฝึกงาน": row.hours,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "นักศึกษา");

    const fileData =
      type === "xlsx"
        ? new Blob([XLSX.write(workbook, { bookType: "xlsx", type: "array" })], {
            type: "application/octet-stream",
          })
        : new Blob([XLSX.utils.sheet_to_csv(worksheet)], {
            type: "text/csv;charset=utf-8;",
          });

    saveAs(fileData, `student_report.${type}`);
  };

  const toSelectOptions = (arr) => arr.map((v) => ({ label: v, value: v }));

    return (
    <div className="max-w-full px-4 py-8 md:px-10">
    <h1 className="mb-6 text-left text-[40px] font-semibold md:text-left md:text-4xl dark:text-white">
      แดชบอร์ดนักศึกษา
    </h1>

    {/* Filter Dropdowns */}
    <div className="mb-6 mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
      {[{
        label: "เดือนเริ่มต้นฝึกงาน",
        value: startMonth,
        setValue: setStartMonth,
        options: toSelectOptions(months),
      },{
          label: "ปี",
          value: year,
          setValue: setYear,
          options: toSelectOptions(years),
        }].map((selectField, i) => (
          <div key={i} className="flex w-full max-w-xs flex-grow flex-col sm:w-auto">
            <label className="mb-1 text-sm font-medium dark:text-gray-200">{selectField.label}</label>
            <Select
              options={selectField.options}
              value={
                selectField.value
                  ? { label: selectField.value, value: selectField.value }
                  : null
              }
              onChange={(opt) => selectField.setValue(opt.value)}
              className="text-sm"
              classNames={{
                menu: () => "z-[9999] dark:bg-gray-900 dark:text-gray-100",
                menuList: () => "max-h-32 overflow-y-auto dark:bg-gray-900 dark:text-gray-100",
                control: () => "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",
                singleValue: () => "dark:text-gray-100",
                option: ({ isFocused, isSelected }) =>
                  `${
                    isSelected
                      ? "bg-[#B10073] text-white dark:bg-[#B10073] dark:text-white"
                      : isFocused
                      ? "bg-[#F7E3F0] dark:bg-[#9B006C] dark:text-white"
                      : "dark:bg-gray-900 dark:text-gray-100"
                  }`,
              }}
              theme={(theme) => {
                const isDark =
                  typeof window !== "undefined" &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches;
                return {
                  ...theme,
                  colors: {
                    ...theme.colors,
                    neutral0: isDark ? "#1a202c" : "#fff",
                    neutral80: isDark ? "#f3f4f6" : "#333",
                    primary25: isDark ? "#9B006C" : "#F7E3F0", // hover
                    primary: "#B10073", // selected
                  },
                };
              }}
            />
          </div>
        ))}
      </div>

      {/* Table */}
    <div className="w-full max-w-full overflow-x-auto rounded-sm border border-gray-200 bg-white shadow-sm px-1 dark:border-gray-700 dark:bg-gray-900">
        <table className="w-full min-w-[700px] border-collapse text-sm mt-4">
          <thead className="bg-[#EEEEEE] font-semibold text-black dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th className="w-[200px] px-3 py-3 text-left">ชื่อ</th>
              <th className="w-[150px] whitespace-nowrap px-3 py-3 text-left">วันที่เริ่มฝึกงาน</th>
              <th className="w-[150px] whitespace-nowrap px-3 py-3 text-left">วันที่สิ้นสุดฝึกงาน</th>
              <th className="whitespace-nowrap px-3 py-3 text-center min-w-[70px]">มา (ครั้ง)</th>
              <th className="whitespace-nowrap px-3 py-3 text-center min-w-[70px]">ไม่มา (ครั้ง)</th>
              <th className="whitespace-nowrap px-3 py-3 text-center min-w-[70px]">ลา (ครั้ง)</th>
              <th className="w-[140px] whitespace-nowrap px-3 py-3 text-center">ชั่วโมงการฝึกงาน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentRows.map((item, index) => (
              <tr key={index} className="hover:bg-[#F7E3F0]">
                <td className="max-w-[200px] break-words px-3 py-2">{item.name}</td>
                <td className="max-w-[120px] whitespace-nowrap px-3 py-2">{item.startDate}</td>
                <td className="max-w-[120px] whitespace-nowrap px-3 py-2">{item.endDate}</td>
                <td className="px-3 py-2 text-center min-w-[70px]">{item.present}</td>
                <td className="px-3 py-2 text-center min-w-[70px]">{item.absent}</td>
                <td className="px-3 py-2 text-center min-w-[70px]">{item.leave}</td>
                <td className="px-3 py-2 text-center min-w-[70px]">{item.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Export Dropdown */}
        <div className="relative self-center md:self-auto">
          <button
            onClick={() => setShowExportMenu((prev) => !prev)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#ECB9DB]"
            title="ส่งออกไฟล์"
          >
            <IconLogout className="h-5 w-5 rotate-[-90deg] text-[#B10073]" />
            ส่งออกตาราง
          </button>
          {showExportMenu && (
            <div className="absolute z-10 mt-2 w-32 rounded border bg-white p-2 text-sm shadow-lg">
              <button
                onClick={() => {
                  handleExport("xlsx");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100"
              >
                Excel (.xlsx)
              </button>
              <button
                onClick={() => {
                  handleExport("csv");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100"
              >
                CSV (.csv)
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center gap-2 text-sm md:justify-start">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentPage === i + 1
                  ? "bg-[#9B006C] text-white"
                  : "bg-[#EEEEEE] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEEEEE] text-gray-600 hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
