"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import IconArrowBackward from "../../../../../../components/icon/icon-arrow-backward";
import IconLogout from "../../../../../../components/icon/icon-logout"; 
import axios from "axios";
import IconUsers from "@/components/icon/icon-users";
import wattdee from "../../../../../../public/assets/images/watdee.jpeg";
import Image from "next/image";
import * as XLSX from "xlsx";

interface PageProps {
  params: { info: string };
}

interface stuPro {
  id: number;
  university: string;
  start_date: string;
  end_date: string;
}

interface detailStu {
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
  student_profile: stuPro;
  picture_url?: string | null;
}

interface ViewRow {
  dateKey: string;
  dateTH: string;
  inTime: string | "-";
  outTime: string | "-";
  status: "มา" | "ลา";
  note: string | "-";
  approval?: "approved" | "rejected" | "pending";
}

const formatThaiDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "buddhist",
  }).format(date);
};

const InfoPage = ({ params }: PageProps) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const ITEMS = 10;

  const [personalInfo, setPersonalInfo] = useState<detailStu>();
  const [viewRows, setViewRows] = useState<ViewRow[]>([]);
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/${params.info}`,
          { withCredentials: true }
        );
        const student = res.data.data;

        let picture_url: string | null = null;

        try {
          const imageRes = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}users/${student.student_profile.id}/picture`,
            {
              withCredentials: true,
              responseType: "blob",
            }
          );
          picture_url = URL.createObjectURL(imageRes.data);
        } catch (err: any) {
          if (err?.response?.status !== 404) {
            console.error("โหลดรูปผิดพลาด:", err);
          }
          picture_url = null;
        }

        setPersonalInfo({ ...student, picture_url });

        let checkRes: any[] = [];
        let leaveRes: any[] = [];

        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}check-time?user_id=${params.info}`,
            { withCredentials: true }
          );
          checkRes = res.data.data || [];
        } catch (err) {
          console.warn("ไม่มีข้อมูลเข้างาน");
        }

        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}leave-request?user_id=${params.info}`,
            { withCredentials: true }
          );
          leaveRes = res.data.data || [];
        } catch (err) {
          console.warn("ไม่มีข้อมูลใบลา");
        }

        const map = new Map<string, ViewRow>();

        checkRes.forEach((r: any) => {
          const key = r.time.split("T")[0];
          if (!map.has(key)) {
            map.set(key, {
              dateKey: key,
              dateTH: formatThaiDate(r.time),
              inTime: "-",
              outTime: "-",
              status: "มา",
              note: "-",
            });
          }
          const row = map.get(key)!;
          const time = new Date(r.time).toLocaleTimeString("th-TH", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          if (r.type_check === "in") row.inTime = time;
          if (r.type_check === "out") row.outTime = time;
        });

        leaveRes.forEach((lv: any) => {
          const dateTime = lv.leave_datetime ?? new Date().toISOString();
          const key = dateTime.split("T")[0];
          map.set(key, {
            dateKey: key,
            dateTH: formatThaiDate(dateTime),
            inTime: "-",
            outTime: "-",
            status: "ลา",
            note: lv.reason || "-",
            approval: lv.status,
          });
        });

        const rows = Array.from(map.values()).sort((a, b) =>
          b.dateKey.localeCompare(a.dateKey)
        );

        setViewRows(rows);
      } catch (error) {
        console.error("โหลดข้อมูลผิดพลาดทั้งหมด:", error);
      }
    };

    fetchData();
  }, [params.info]);

  const handleExport = (format: "xlsx" | "csv") => {
    if (!personalInfo) return;

    // เตรียมข้อมูลส่งออกโดยเพิ่มชื่อ-นามสกุล
    const exportData = viewRows.map((row) => ({
      ชื่อ: personalInfo.fname,
      นามสกุล: personalInfo.lname,
      วันที่: row.dateTH,
      "เวลาเข้างาน": row.inTime,
      "เวลาออกงาน": row.outTime,
      สถานะ: row.status,
      หมายเหตุ: row.note,
      "อนุมัติการลา": row.approval || "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, personalInfo.fname);

    // สร้างชื่อไฟล์จากชื่อ-นามสกุล โดยแทนช่องว่างด้วย _
    const fileNameBase = `${personalInfo.fname}_${personalInfo.lname}`.replace(/\s+/g, "_");

    if (format === "xlsx") {
      XLSX.writeFile(workbook, `${fileNameBase}.xlsx`);
    } else if (format === "csv") {
      const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
      const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `${fileNameBase}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const pages = Math.ceil(viewRows.length / ITEMS);
  const slice = viewRows.slice((page - 1) * ITEMS, page * ITEMS);

  const renderBadge = (value?: string) => {
    if (!value) return <>-</>;
    switch (value) {
      case "approved":
        return (
          <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800">
            อนุมัติ
          </span>
        );
      case "rejected":
        return (
          <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-800">
            ไม่อนุมัติ
          </span>
        );
      default:
        return (
          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
            รออนุมัติ
          </span>
        );
    }
  };

  return (
    <section className="space-y-6 p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 flex w-max items-center gap-1 text-sm text-gray-600 hover:text-primary dark:border-[#506690] dark:bg-black-dark-light/5 dark:text-[#506690]"
      >
        <IconArrowBackward className="h-4 w-4" /> ย้อนกลับ
      </button>

      {/* ข้อมูลส่วนตัว */}
      <div className="flex items-center justify-center px-4">
        <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-6 rounded-lg bg-white p-6 shadow dark:border-[#506690] dark:bg-black-dark-light/55 dark:text-[#506690] md:h-[250px] md:grid-cols-3">
          <div className="flex justify-center">
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              {personalInfo?.picture_url ? (
                <img
                  src={personalInfo.picture_url}
                  alt="student-profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={wattdee}
                  alt={`watdee`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <p>
              <strong>ชื่อจริง-นามสกุล:</strong> {personalInfo?.fname}{" "}
              {personalInfo?.lname}
            </p>
            <p>
              <strong>เบอร์โทรศัพท์:</strong> {personalInfo?.phone_number}
            </p>
            <p>
              <strong>อีเมล:</strong> {personalInfo?.email}
            </p>
            <p>
              <strong>มหาวิทยาลัยที่ศึกษาอยู่:</strong>{" "}
              {personalInfo?.student_profile.university}
            </p>
            <p>
              <strong>วันที่เริ่มฝึกงาน:</strong>{" "}
              {personalInfo?.student_profile.start_date &&
                formatThaiDate(personalInfo.student_profile.start_date)}
            </p>
            <p>
              <strong>วันที่สิ้นสุดฝึกงาน:</strong>{" "}
              {personalInfo?.student_profile.end_date &&
                formatThaiDate(personalInfo.student_profile.end_date)}
            </p>
          </div>
        </div>
      </div>

      {/* ตารางเวลาเข้างาน */}
      <div className="flex items-center justify-center">
        <div className="w-[1220px] overflow-auto rounded-lg border border-gray-200 bg-white dark:border-gray-900 dark:bg-black-dark-light/5 dark:text-[#506690]">
          <div className="grid min-w-[820px] grid-cols-6 bg-gray-100 text-center text-sm font-semibold text-gray-800 dark:bg-gray-900 dark:text-[#506690]">
            {[
              "วันที่",
              "เวลาเข้างาน",
              "เวลาออกงาน",
              "สถานะ",
              "หมายเหตุ",
              "อนุมัติการลา",
            ].map((h) => (
              <div key={h} className="p-3">
                {h}
              </div>
            ))}
          </div>

          <div className="divide-y text-center text-sm">
            {slice.map((entry, idx) => (
              <div key={idx} className="grid min-w-[820px] grid-cols-6">
                <div className="p-3">{entry.dateTH}</div>
                <div className="p-3">{entry.inTime}</div>
                <div className="p-3">{entry.outTime}</div>
                <div className="p-3">{entry.status}</div>
                <div className="p-3">{entry.note}</div>
                <div className="p-3">
                  {entry.status === "ลา" ? renderBadge(entry.approval) : "-"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Dropdown Button และ Pagination ในแถวเดียวกัน */}
      <div className="mt-4 flex items-center justify-between">
        {/* Export Icon with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu((prev) => !prev)}
            className="mb-4 flex w-max items-center gap-2 text-sm text-gray-600 hover:text-[#ECB9DB] dark:border-[#506690] dark:bg-black-dark-light/5 dark:text-[#506690]"
            title="ส่งออกไฟล์"
          >
            <IconLogout className="h-10 w-5 font-extrabold text-[#B10073] hover:text-[#ECB9DB]" />
            ส่งออกตาราง
          </button>
          {showExportMenu && (
            <div className="absolute z-10 mt-2 w-32 rounded border bg-white p-2 text-sm shadow-lg dark:border-gray-700 dark:bg-black-dark-light/80">
              <button
                onClick={() => {
                  handleExport("xlsx");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Excel (.xlsx)
              </button>
              <button
                onClick={() => {
                  handleExport("csv");
                  setShowExportMenu(false);
                }}
                className="block w-full rounded px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                CSV (.csv)
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
              page === 1
                ? "cursor-not-allowed text-gray-300"
                : "text-gray-700 hover:bg-gray-200"
            )}
          >
            &lt;
          </button>

          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
                page === i + 1
                  ? "bg-[#B10073] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
              page === pages
                ? "cursor-not-allowed text-gray-300"
                : "text-gray-700 hover:bg-gray-200"
            )}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
