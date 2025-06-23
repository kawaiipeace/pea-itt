"use client";
import React, { useEffect, useState } from "react";

const CheckTime = () => {
  const [time, setTime] = useState(new Date());
  const [canCheckIn, setCanCheckIn] = useState(false);
  const [canCheckOut, setCanCheckOut] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  function getDistanceFromLatLonInMeters(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  const peaLat = 13.852364495404673;
  const peaLon = 100.55824556746184;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);

      if (userLocation) {
        const distance = getDistanceFromLatLonInMeters(
          userLocation.lat,
          userLocation.lon,
          peaLat,
          peaLon
        );

        const hour = now.getHours();
        const isWithinDistance = distance <= 11831;

        // เช็คช่วงเวลา 
        const canCheckInNow = isWithinDistance && hour === 8;
        const canCheckOutNow = isWithinDistance && hour === 16;

        setCanCheckIn(canCheckInNow);
        setCanCheckOut(canCheckOutNow);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [userLocation]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("ไม่สามารถดึงพิกัดได้:", error);
        }
      );
    } else {
      alert("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงตำแหน่ง");
    }
  }, []);

  const formatThaiDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("th-TH", { month: "long" });
    const year = date.getFullYear() + 543;
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="relative flex h-[calc(100vh-150px)] flex-col items-center justify-center text-center">
      <div className="absolute left-4 top-4 text-xs text-gray-500 sm:text-sm">
        {canCheckIn
          ? "คุณอยู่ในพื้นที่และสามารถลงเวลาเข้างานได้ (8 โมงเช้า)"
          : canCheckOut
          ? "คุณอยู่ในพื้นที่และสามารถลงเวลาออกงานได้ (4 โมงเย็น)"
          : "ไม่สามารถลงเวลาได้ (อยู่นอกพื้นที่หรือไม่ใช่ช่วงเวลาที่กำหนด)"}
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-widest sm:text-6xl md:text-7xl">
        {time.toLocaleTimeString("th-TH", { hour12: false })}
      </h1>

      <h2 className="mb-8 text-lg sm:text-2xl">{formatThaiDate(time)}</h2>

      <div className="mb-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <button
          disabled={!canCheckIn}
          className={`${
            canCheckIn
              ? "bg-purple-700 text-white hover:bg-purple-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          } w-full rounded px-6 py-3 sm:w-auto`}
        >
          ลงเวลาเข้างาน
        </button>
        <button
          disabled={!canCheckOut}
          className={`${
            canCheckOut
              ? "bg-purple-700 text-white hover:bg-purple-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          } w-full rounded px-6 py-3 sm:w-auto`}
        >
          ลงเวลาออกงาน
        </button>
      </div>

      <a href="#" className="mb-10 text-sm text-purple-700 underline">
        ประวัติการลงเวลา
      </a>
    </div>
  );
};

export default CheckTime;
