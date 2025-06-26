"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

interface checkTime {
  type_check: string;
  location: string;
  latitude: string;
  longitude: string;
}

const CheckTime = () => {
  const [time, setTime] = useState(new Date());
  const [canCheckIn, setCanCheckIn] = useState(false);
  const [canCheckOut, setCanCheckOut] = useState(false);
  const [checkTimeForm, setCheckTimeForm] = useState<checkTime>({
    type_check: "",
    location: "",
    latitude: "",
    longitude: "",
  });
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  const peaLat = 13.852364495404673;
  const peaLon = 100.55824556746184;

  const getDistanceFromLatLonInMeters = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
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
  };

  const reverseGeocodeGoogle = async (
    lat: number,
    lon: number
  ): Promise<string> => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}&language=th`
      );
      const data = await response.json();
      return data?.results?.[0]?.formatted_address || "ไม่สามารถระบุสถานที่ได้";
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      return "ไม่สามารถระบุสถานที่ได้";
    }
  };

  const showSuccessSwal = () => {
    Swal.fire({
      title: "บันทึกข้อมูลเรียบร้อย",
      icon: "success",
      confirmButtonText: "ตกลง",
      width: "400px",
      customClass: {
        confirmButton: "swal2-confirm !bg-purple-700 !text-white !px-6 !py-3",
      },
    });
  };

  const handleCheckIn = async () => {
  if (!userLocation) return;

  const locationName = await reverseGeocodeGoogle(
    userLocation.lat,
    userLocation.lon
  );

  const newForm = {
    type_check: "in",
    location: locationName,
    latitude: userLocation.lat.toString(),
    longitude: userLocation.lon.toString(),
  };

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}check-time`, newForm, {
      withCredentials: true,
    });
    showSuccessSwal();
  } catch (error: any) {
    Swal.fire({
      title: "ไม่สามารถเช็กอินได้",
      text:
        error.response?.data?.message ||
        "เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่",
      icon: "error",
      confirmButtonText: "ตกลง",
    });
  }
};

  const handleCheckOut = async () => {
  if (!userLocation) return;

  const locationName = await reverseGeocodeGoogle(
    userLocation.lat,
    userLocation.lon
  );

  const newForm = {
    type_check: "out",
    location: locationName,
    latitude: userLocation.lat.toString(),
    longitude: userLocation.lon.toString(),
  };

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}check-time`, newForm, {
      withCredentials: true,
    });
    showSuccessSwal();
  } catch (error: any) {
    Swal.fire({
      title: "ไม่สามารถเช็กเอาต์ได้",
      text:
        error.response?.data?.message ||
        "เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่",
      icon: "error",
      confirmButtonText: "ตกลง",
    });
  }
};

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
        const isWithin = distance <= 500;

        setCanCheckIn(isWithin && hour === 9);
        setCanCheckOut(isWithin && hour === 16);
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
        {canCheckIn ? (
          <div className="flex items-center gap-2">
            <img
              className="ml-[5px] w-[30px]"
              src="/assets/images/LocationSuccess.png"
              alt="logo"
            />
            <p>คุณอยู่ในพื้นที่และสามารถลงเวลาเข้างานได้</p>
          </div>
        ) : canCheckOut ? (
          "คุณอยู่ในพื้นที่และสามารถลงเวลาออกงานได้ (4 โมงเย็น)"
        ) : (
          <div className="flex items-center gap-2">
            <img
              className="ml-[5px] w-[30px]"
              src="/assets/images/Location.png"
              alt="logo"
            />
            <p>ไม่สามารถลงเวลาได้ (อยู่นอกพื้นที่หรือไม่ใช่ช่วงเวลาที่กำหนด)</p>
          </div>
        )}
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-widest sm:text-6xl md:text-7xl">
        {time.toLocaleTimeString("th-TH", { hour12: false })}
      </h1>
      <h2 className="mb-8 text-lg sm:text-2xl">{formatThaiDate(time)}</h2>

      <div className="mb-6 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <button
          disabled={!canCheckIn}
          onClick={handleCheckIn}
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
          onClick={handleCheckOut}
          className={`${
            canCheckOut
              ? "bg-purple-700 text-white hover:bg-purple-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          } w-full rounded px-6 py-3 sm:w-auto`}
        >
          ลงเวลาออกงาน
        </button>
      </div>

      <a href="#" className="mb-4 text-sm text-purple-700 underline">
        ประวัติการลงเวลา
      </a>
    </div>
  );
};

export default CheckTime;
