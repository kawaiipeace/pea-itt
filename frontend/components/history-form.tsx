"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ แปลงวันที่จาก YYYY-MM-DD เป็น dd/mm/yyyy
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // ✅ โหลดข้อมูลเมื่อ component ถูก mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}check-time`, {
          withCredentials: true,
        });

        // ✅ แก้ตรงนี้! ดึง array จาก res.data.data
        setAttendanceData(res.data?.data || []);
        setError(null);
      } catch (err) {
        console.error("❌ ดึงข้อมูลไม่สำเร็จ", err);
        setError("ไม่สามารถโหลดข้อมูลได้");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(attendanceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = attendanceData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">ประวัติการลงเวลา</h1>

      {loading && <p>กำลังโหลดข้อมูล...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && attendanceData.length === 0 && <p className="text-gray-500">ไม่มีข้อมูล</p>}

      {!loading && attendanceData.length > 0 && (
        <>
          <div className="overflow-x-auto rounded-md border">
            <div className="m-2 rounded-md bg-[#EEEEEE]">
              <div className="grid grid-cols-5 text-sm font-semibold text-gray-800">
                <div className="p-3">วันที่</div>
                <div className="p-3">เวลา</div>
                <div className="p-3">ประเภท</div>
                <div className="p-3">สถานที่</div>
                <div className="p-3">หมายเหตุ</div>
              </div>
            </div>

            <div className="px-4 divide-y">
              {currentData.map((row, index) => {
                const d = new Date(row.time);
                const time = d.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });

                return (
                  <div key={index} className="grid grid-cols-5 text-sm">
                    <div className="p-3">{formatDate(row.time)}</div>
                    <div className="p-3">{time}</div>
                    <div className="p-3">{row.type_check === "in" ? "เข้างาน" : "ออกงาน"}</div>
                    <div className="p-3">{row.location || "-"}</div>
                    <div className="p-3">{row.note || "-"}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <div>
              แสดง {startIndex + 1} - {Math.min(startIndex + itemsPerPage, attendanceData.length)} จาก {attendanceData.length} รายการ
            </div>
            <div className="flex items-center gap-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`rounded-full border px-3 py-1 ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceTable;
