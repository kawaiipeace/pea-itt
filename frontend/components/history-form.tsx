'use client';

import React, { useState } from "react";

const AttendanceTable = () => {
  const allData = [
    { date: "09/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "10/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "11/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "12/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "13/06/2025", inTime: "-", outTime: "-", status: "ไม่มา", reason: "-", approved: "-" },
    { date: "14/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "15/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "16/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "17/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "18/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "19/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
    { date: "20/06/2025", inTime: "08:30", outTime: "16:30", status: "มา", reason: "-", approved: "-" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      {/* ส่วนหัวบน มีปุ่ม < กับคำว่า "ย้อนกลับ" */}
      <div className="mb-4 flex items-center">
        <button
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          className="mr-2 rounded-full border px-3 py-1 text-gray-700 hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <h2 className="text-lg font-semibold">ย้อนกลับ</h2>
      </div>

      {/* ตาราง */}
      <div className="overflow-x-auto rounded-md border">
        {/* หัวตาราง */}
        <div className="m-2 rounded-md bg-[#EEEEEE]">
          <div className="grid grid-cols-6 text-sm font-semibold text-gray-800">
            <div className="p-3">วันที่</div>
            <div className="p-3">เวลาเข้างาน</div>
            <div className="p-3">เวลาออกงาน</div>
            <div className="p-3">สถานะ</div>
            <div className="p-3">หมายเหตุ</div>
            <div className="p-3">อนุมัติการลา</div>
          </div>
        </div>

        {/* ข้อมูลแต่ละแถว พร้อม divide-y และ padding ซ้าย-ขวา */}
        <div className="px-4 divide-y">
          {currentData.map((row, index) => (
            <div key={index} className="grid grid-cols-6 text-sm">
              <div className="p-3">{row.date}</div>
              <div className="p-3">{row.inTime}</div>
              <div className="p-3">{row.outTime}</div>
              <div className="p-3">{row.status}</div>
              <div className="p-3">{row.reason}</div>
              <div className="p-3">{row.approved}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination ด้านล่าง */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div>
          แสดงรายการ {startIndex + 1} ถึง{" "}
          {Math.min(startIndex + itemsPerPage, allData.length)} จาก{" "}
          {allData.length} รายการ
        </div>
        <div className="flex items-center gap-4">
          {/* หมายเลขหน้า */}
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`rounded-full border px-3 py-1 ${
                  currentPage === pageNum
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* ปุ่ม > */}
          <button
            onClick={() => {
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
            className={`rounded-full border px-3 py-1 ${
              currentPage === totalPages
                ? "cursor-not-allowed text-gray-400"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
