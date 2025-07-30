"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import { FiLogOut as IconLogout } from "react-icons/fi";

interface DepartmentOption {
  value: number;
  label: string;
}

interface Student {
  id: number;
  fname: string;
  lname: string;
  start_date: string | null;
  end_date: string | null;
  hours: number; // คำนวณจาก check-in/out logs
  present: number;
  absent: number;
  leave: number;
}

const selectClassNames = {
  control: ({ isFocused }: { isFocused: boolean }) =>
    `border rounded-lg shadow-sm min-h-[42px] px-2 py-1 ${isFocused
      ? "border-blue-500 ring-1 ring-blue-300"
      : "border-gray-300 dark:border-gray-600"
    } bg-white dark:bg-gray-800`,
  placeholder: () => "text-gray-500 dark:text-gray-400",
  singleValue: () => "text-gray-800 dark:text-gray-400",
  input: () => "text-gray-800 dark:text-gray-400",
  menu: () =>
    "mt-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 z-[9999]",
  option: ({
    isFocused,
    isSelected,
  }: {
    isFocused: boolean;
    isSelected: boolean;
  }) => {
    if (isSelected)
      return "bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white";
    if (isFocused) return "bg-gray-100 dark:bg-gray-700";
    return "text-gray-800 dark:text-gray-400";
  },
  dropdownIndicator: () => "text-gray-500 dark:text-gray-400",
  clearIndicator: () => "text-gray-500 dark:text-gray-400",
  indicatorSeparator: () => "hidden",
};

const months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const years = ["2568", "2567"];

const formatThaiDate = (isoDate: string | null): string => {
  if (!isoDate) return "-";
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear() + 543;
  return `${day}/${month}/${year}`;
};

// ฟังก์ชันคำนวณชั่วโมงรวมจาก logs
const calculateTotalHours = (logs: any[]) => {
  let totalMs = 0;
  logs.forEach((log) => {
    const { check_in, check_out } = log;
    if (check_in && check_out) {
      const checkIn = new Date(check_in);
      const checkOut = new Date(check_out);
      if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime())) {
        totalMs += checkOut.getTime() - checkIn.getTime();
      }
    }
  });

  const hours = totalMs / (1000 * 60 * 60); // มิลลิวินาที > ชั่วโมง
  return +hours.toFixed(2);
};



const SumDashboard = () => {
  const [departmentOptions, setDepartmentOptions] = useState<
    DepartmentOption[]
  >([]);
  const [selectedDept, setSelectedDept] = useState<DepartmentOption | null>(
    null
  );
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [startMonth, setStartMonth] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const router = useRouter();


  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = students.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(students.length / rowsPerPage);

  useEffect(() => {
    // โหลดกอง
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}dept`)
      .then((res) => {
        const data = res.data?.data || [];
        setDepartmentOptions(
          data.map((d: any) => ({ value: d.dept_id, label: d.dept_name }))
        );
      })
      .catch(() =>
        Swal.fire("เกิดข้อผิดพลาด", "โหลดข้อมูลกองไม่สำเร็จ", "error")
      );
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        let mentorUrl = `${process.env.NEXT_PUBLIC_API_URL}user/mentor`;
        if (selectedDept) mentorUrl += `?department_id=${selectedDept.value}`;
        const mentorRes = await axios.get(mentorUrl);
        const mentors = mentorRes.data?.data || [];

        let allStudents: Student[] = [];

        for (const m of mentors) {
          const mentorId = m.mentor_profile?.id || m.id;
          const studentRes = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}users?&show_ended=true`,
            { withCredentials: true }
          );

          const filteredStudents = studentRes.data.data.filter(
            (student: any) => student.student_profile !== null
          );

          console.log(filteredStudents, "เฉพาะที่มี student_profile");

          const studentsInMentor = filteredStudents || [];

          const studentsWithSummary = await Promise.all(
            studentsInMentor.map(async (s: any) => {
              try {
                const summaryRes = await axios.get(
                  `${process.env.NEXT_PUBLIC_API_URL}check-summary/${s.id}`,
                  { withCredentials: true }
                );
                const summary = summaryRes?.data?.data || summaryRes.data;

                const leaveRes = await axios.get(
                  `${process.env.NEXT_PUBLIC_API_URL}leave-request?user_id=${s.id}`,
                  { withCredentials: true }
                );
                const leaveRequests = leaveRes?.data?.data || [];

                const now = new Date();

                const filterDatesInRange = (
                  dates: string[] | undefined,
                  start: string | null,
                  end: string | null
                ) => {
                  if (!dates || !start || !end) return [];
                  const startDate = new Date(start);
                  startDate.setHours(0, 0, 0, 0);
                  const endDate = new Date(end);
                  endDate.setHours(23, 59, 59, 999);

                  return dates.filter((dateStr) => {
                    const d = new Date(dateStr);
                    d.setHours(12, 0, 0, 0);

                    const isToday =
                      d.getFullYear() === now.getFullYear() &&
                      d.getMonth() === now.getMonth() &&
                      d.getDate() === now.getDate();

                    if (isToday) return false;
                    return d >= startDate && d <= endDate && d <= now;
                  });
                };

                const filteredAbsent = filterDatesInRange(
                  summary.absent_dates,
                  s.student_profile?.start_date || null,
                  s.student_profile?.end_date || null
                );

                const approvedLeaveDates = (summary.leave_dates || [])
                  .filter(
                    (item: any) =>
                      item &&
                      typeof item.status === "string" &&
                      item.status.toLowerCase() === "approved"
                  )
                  .map((item: any) => item.date)
                  .filter((date: any) => typeof date === "string" && date);

                const approvedLeaveRequests = leaveRequests
                  .filter(
                    (lr: any) =>
                      lr &&
                      typeof lr.status === "string" &&
                      lr.status.toLowerCase() === "approved" &&
                      typeof lr.date === "string"
                  )
                  .map((lr: any) => lr.date);

                const combinedLeaveDates = Array.from(
                  new Set([...approvedLeaveDates, ...approvedLeaveRequests])
                );

                const filteredLeave = filterDatesInRange(
                  combinedLeaveDates,
                  s.student_profile?.start_date || null,
                  s.student_profile?.end_date || null
                );

                return {
                  id: s.id,
                  fname: s.fname,
                  lname: s.lname,
                  start_date: s.student_profile?.start_date || null,
                  end_date: s.student_profile?.end_date || null,
                  hours: s.student_profile?.hours ?? "0",
                  present: summary.days_checked_in ?? 0,
                  absent: filteredAbsent.length,
                  leave: leaveRequests.length,
                };
              } catch (error) {
                console.error(
                  `❌ Failed to fetch summary or leave for student ${s.id}:`,
                  error
                );
                return {
                  id: s.id,
                  fname: s.fname,
                  lname: s.lname,
                  start_date: s.student_profile?.start_date || null,
                  end_date: s.student_profile?.end_date || null,
                  hours: s.student_profile?.hours ?? "0",
                  present: 0,
                  absent: 0,
                  leave: 0,
                };
              }
            })
          );

          allStudents.push(...studentsWithSummary);
        }

        const matchMonth = (dateStr: string | null) => {
          if (!startMonth) return true;
          if (!dateStr) return false;
          const date = new Date(dateStr);
          return date.getMonth() === months.indexOf(startMonth);
        };

        const matchYear = (dateStr: string | null) => {
          if (!year) return true;
          if (!dateStr) return false;
          const date = new Date(dateStr);
          return date.getFullYear() === parseInt(year) - 543;
        };

        const filtered = allStudents.filter((s) => {
          const monthMatch = startMonth
            ? matchMonth(s.start_date) || matchMonth(s.end_date)
            : true;
          const yearMatch = year
            ? matchYear(s.start_date) || matchYear(s.end_date)
            : true;
          return monthMatch && yearMatch;
        });

        setStudents(filtered);
        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching students:", error);
        Swal.fire("เกิดข้อผิดพลาด", "โหลดนักศึกษาไม่สำเร็จ", "error");
      }
    };

    fetchStudents();
  }, [selectedDept, startMonth, year]);


  const handleExport = (type: "xlsx" | "csv") => {
    const exportData = students.map((row) => ({
      ชื่อ: `${row.fname} ${row.lname}`,
      วันที่เริ่มฝึกงาน: formatThaiDate(row.start_date),
      วันที่สิ้นสุดฝึกงาน: formatThaiDate(row.end_date),
      "มา (ครั้ง)": row.present,
      "ขาด (ครั้ง)": row.absent,
      "ลา (ครั้ง)": row.leave,
      ชั่วโมงการฝึกงาน: row.hours,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "นักศึกษา");

    const fileData =
      type === "xlsx"
        ? new Blob(
          [XLSX.write(workbook, { bookType: "xlsx", type: "array" })],
          { type: "application/octet-stream" }
        )
        : new Blob([XLSX.utils.sheet_to_csv(worksheet)], {
          type: "text/csv;charset=utf-8;",
        });

    saveAs(fileData, `student_report.${type}`);
  };

  return (
    <div className="max-w-full px-4 py-8 dark:bg-black-dark-light/5 md:px-10">
      <h1 className="mb-6 text-center text-2xl font-semibold dark:text-gray-400 md:text-left md:text-4xl">
        แดชบอร์ดนักศึกษา
      </h1>

      <div className="mb-6 mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-1 text-sm font-medium dark:text-[#506690]">
            ชื่อหน่วยงาน
          </label>
          <Select
            options={departmentOptions}
            value={selectedDept}
            onChange={setSelectedDept}
            className="text-sm"
            classNames={selectClassNames}
            isClearable
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-1 text-sm font-medium dark:text-[#506690]">
            เดือนเริ่มต้นฝึกงาน
          </label>
          <Select
            options={months.map((m) => ({ label: m, value: m }))}
            value={startMonth ? { label: startMonth, value: startMonth } : null}
            //@ts-ignore
            onChange={(opt) => setStartMonth(opt?.value || null)}
            className="text-sm"
            classNames={selectClassNames}
            isClearable
          />
        </div>
        <div className="flex w-full max-w-xs flex-col">
          <label className="mb-1 text-sm font-medium dark:text-[#506690]">
            ปี
          </label>
          <Select
            options={years.map((y) => ({ label: y, value: y }))}
            value={year ? { label: year, value: year } : null}
            //@ts-ignore
            onChange={(opt) => setYear(opt?.value || null)}
            className="text-sm"
            classNames={selectClassNames}
            isClearable
          />
        </div>
      </div>

      <div className="w-full max-w-full overflow-x-auto rounded-sm border border-gray-200 bg-white px-1 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <table className="mt-4 w-full min-w-[700px] border-collapse text-sm">
          <thead className="bg-[#EEEEEE] text-[14px] font-semibold text-black dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th className="w-[200px] px-3 py-3 text-left">ชื่อ</th>
              <th className="w-[150px] whitespace-nowrap px-3 py-3 text-left">
                วันที่เริ่มฝึกงาน
              </th>
              <th className="w-[150px] whitespace-nowrap px-3 py-3 text-left">
                วันที่สิ้นสุดฝึกงาน
              </th>
              <th className="whitespace-nowrap px-3 py-3 text-center">
                มา (ครั้ง)
              </th>
              <th className="whitespace-nowrap px-3 py-3 text-center">
                ขาด (ครั้ง)
              </th>
              <th className="whitespace-nowrap px-3 py-3 text-center">
                ลา (ครั้ง)
              </th>
              <th className="w-[140px] whitespace-nowrap px-3 py-3 text-center">
                ชั่วโมงการฝึกงาน
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentRows.map((item, index) => (
              <tr key={index} className="hover:bg-[#F7E3F0] dark:hover:bg-gray-700">
                <td
                  onClick={() => router.push(`/admin/admin-student/detail/${item.id}`)}
                  className="cursor-pointer px-3 py-2 text-[#000000] hover:underline dark:text-[#ECB9DB]"
                >
                  {item.fname} {item.lname}
                </td>
                <td className="px-3 py-2 text-gray-800 dark:text-gray-400">
                  {formatThaiDate(item.start_date)}
                </td>
                <td className="px-3 py-2 text-gray-800 dark:text-gray-400">
                  {formatThaiDate(item.end_date)}
                </td>
                <td className="px-3 py-2 text-center text-gray-800 dark:text-gray-400">
                  {item.present}
                </td>
                <td className="px-3 py-2 text-center text-gray-800 dark:text-gray-400">
                  {item.absent}
                </td>
                <td className="px-3 py-2 text-center text-gray-800 dark:text-gray-400">
                  {item.leave}
                </td>
                <td className="px-3 py-2 text-center text-gray-800 dark:text-gray-400">
                  {item.hours}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="mt-6 flex flex-row flex-nowrap items-center justify-between gap-4 overflow-x-auto">
        <div>
          <button
            onClick={() => setShowExportMenu((prev) => !prev)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#ECB9DB] dark:text-gray-400">
            {/* @ts-ignore */}
            <IconLogout className="h-5 w-5 rotate-[-90deg] text-[#B10073]" />
            ส่งออกตาราง
          </button>
          {showExportMenu && (
            <div className="z-[9999] mt-2 w-32 rounded border bg-white p-2 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <button
                onClick={() => {
                  handleExport("xlsx");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
              >
                Excel (.xlsx)
              </button>
              <button
                onClick={() => {
                  handleExport("csv");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
              >
                CSV (.csv)
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-nowrap gap-2 text-sm">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${currentPage === i + 1
                ? "bg-[#9B006C] text-white"
                : "bg-[#EEEEEE] text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SumDashboard;
