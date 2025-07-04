"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import IconArrowBackward from "../components/icon/icon-arrow-backward";
import useAuthStore from "../store/authStore";

interface CheckRow {
  id: number;
  user_id: number;
  time: string;
  type_check: "in" | "out";
  note?: string;
}

interface LeaveRow {
  id: number;
  user_id: number;
  leave_datetime: string | null;
  reason: string;
  status: "approved" | "declined" | "pending";
}

interface ViewRow {
  dateKey: string;
  dateTH: string;
  inTime: string | "-";
  outTime: string | "-";
  status: "มา" | "ลา";
  note: string | "-";
  approval?: "approved" | "declined" | "pending";
}

const ITEMS = 8;

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

const Badge = ({ value }: { value?: string }) => {
  if (!value) return <>-</>;
  switch (value) {
    case "approved":
      return (
        <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
          อนุมัติ
        </span>
      );
    case "declined":
      return (
        <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-800 dark:bg-red-900 dark:text-red-200">
          ไม่อนุมัติ
        </span>
      );
    default:
      return (
        <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
          รออนุมัติ
        </span>
      );
  }
};

const HistoryForm: React.FC = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const [checks, setChecks] = useState<CheckRow[]>([]);
  const [leaves, setLeaves] = useState<LeaveRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!user || !user.student_profile?.id) return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const [checkRes, leaveRes] = await Promise.all([
          axios
            .get(
              `${process.env.NEXT_PUBLIC_API_URL}check-time?user_id=${user.id}`,
              { withCredentials: true }
            )
            .then((res) => (Array.isArray(res.data?.data) ? res.data.data : []))
            .catch(() => []),
          axios
            .get(
              `${process.env.NEXT_PUBLIC_API_URL}leave-request?user_id=${user.id}`,
              { withCredentials: true }
            )
            .then((res) =>
              Array.isArray(res.data?.data)
                ? res.data.data
                : res.data?.data
                ? [res.data.data]
                : []
            )
            .catch(() => []),
        ]);

        setChecks(checkRes);
        setLeaves(leaveRes);
        setError(null);
      } catch {
        setError("ไม่สามารถโหลดข้อมูลได้");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const viewRows: ViewRow[] = useMemo(() => {
    const map = new Map<string, ViewRow>();

    checks.forEach((r) => {
      const key = r.time.split("T")[0];
      if (!map.has(key)) {
        map.set(key, {
          dateKey: key,
          dateTH: fmtDate(r.time),
          inTime: "-",
          outTime: "-",
          status: "มา",
          note: "-",
        });
      }
      const row = map.get(key)!;
      if (r.type_check === "in") row.inTime = fmtTime(r.time);
      if (r.type_check === "out") row.outTime = fmtTime(r.time);
    });

    leaves.forEach((lv) => {
      const dateTime = lv.leave_datetime ?? new Date().toISOString();
      const key = dateTime.split("T")[0];
      map.set(key, {
        dateKey: key,
        dateTH: fmtDate(dateTime),
        inTime: "-",
        outTime: "-",
        status: "ลา",
        note: lv.reason || "-",
        approval: lv.status,
      });
    });

    return Array.from(map.values()).sort((a, b) =>
      b.dateKey.localeCompare(a.dateKey)
    );
  }, [checks, leaves]);

  const pages = Math.max(1, Math.ceil(viewRows.length / ITEMS));
  const slice = viewRows.slice((page - 1) * ITEMS, page * ITEMS);

  return (
    <section className="flex h-full flex-col px-6 py-4">
      <button
        onClick={() => router.back()}
        className="mb-4 flex w-max items-center gap-1 text-sm text-gray-600 hover:text-primary dark:border-[#506690] dark:bg-black-dark-light/5 dark:text-[#506690]"
      >
        <IconArrowBackward className="h-4 w-4" /> ย้อนกลับ
      </button>

      <div className="overflow-auto rounded-lg border border-gray-200 bg-white dark:border-gray-900 dark:bg-black-dark-light/5 dark:text-[#506690]">
        <div className="grid min-w-[820px] grid-cols-6 bg-gray-100 text-center text-sm font-semibold text-gray-800 dark:border-[#506690] dark:bg-black-dark-light/90 dark:text-[#506690]">
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
          {loading && (
            <p className="p-6 text-gray-500 dark:text-gray-400">
              กำลังโหลดข้อมูล...
            </p>
          )}
          {error && (
            <p className="p-6 text-red-500 dark:text-red-400">{error}</p>
          )}
          {!loading && !error && viewRows.length === 0 && (
            <p className="p-6 text-gray-500 dark:text-gray-400">ไม่มีข้อมูล</p>
          )}

          {!loading &&
            !error &&
            slice.map((r) => (
              <div key={r.dateKey} className="grid min-w-[820px] grid-cols-6">
                <div className="p-3">{r.dateTH}</div>
                <div className="p-3">{r.inTime}</div>
                <div className="p-3">{r.outTime}</div>
                <div className="p-3">{r.status}</div>
                <div className="p-3">{r.note}</div>
                <div className="p-3">
                  {r.status === "ลา" ? <Badge value={r.approval} /> : "-"}
                </div>
              </div>
            ))}
        </div>
      </div>

      {!loading && !error && viewRows.length > 0 && (
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
              page === 1
                ? "cursor-not-allowed text-gray-300 dark:text-gray-600"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
          >
            &lt;
          </button>

          {Array.from({ length: pages }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={clsx(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
                  page === p
                    ? "bg-[#B10073] text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                {p}
              </button>
            );
          })}

          <button
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm",
              page === pages
                ? "cursor-not-allowed text-gray-300 dark:text-gray-600"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
          >
            &gt;
          </button>
        </div>
      )}

      {!loading && !error && viewRows.length > 0 && (
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          แสดง {(page - 1) * ITEMS + 1}-
          {Math.min(page * ITEMS, viewRows.length)} จาก {viewRows.length} รายการ
        </p>
      )}
    </section>
  );
};

export default HistoryForm;
