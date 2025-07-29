import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as checkModels from "./checkModels";
import getClientIp from "../../common/utils/ipUtils";
import { startOfDay, endOfDay, addDays } from "date-fns";


export const checkTime = async (req: Request, res: Response) => {
  try {
    const validatedData = checkModels.checkTimeschema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const leaveToday = await prisma.leave_request.findFirst({
      where: {
        user_id: user.id,
        leave_datetime: {
          gte: startOfDay,
          lte: endOfDay,
        },
        status: "approved",
      },
    });

    if (leaveToday) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "คุณได้ลาวันนี้แล้ว ไม่สามารถเช็กเวลาได้",
      });
      return;
    }

    const existingSameTypeCheck = await prisma.check_time.findFirst({
      where: {
        user_id: user.id,
        type_check: validatedData.type_check,
        time: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (existingSameTypeCheck) {
      res.status(httpStatus.BAD_REQUEST).json({
        message:
          validatedData.type_check === "in"
            ? "คุณเช็กอินไปแล้ววันนี้"
            : "คุณเช็กเอาต์ไปแล้ววันนี้",
      });
      return;
    }

    if (validatedData.type_check === "out") {
      const existingCheckIn = await prisma.check_time.findFirst({
        where: {
          user_id: user.id,
          type_check: "in",
          time: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      if (!existingCheckIn) {
        res.status(httpStatus.BAD_REQUEST).json({
          message: "ยังไม่ได้เช็กอินวันนี้ จึงไม่สามารถเช็กเอาต์ได้",
        });
        return;
      }
    }

    const ip = getClientIp(req);

    const checkTimeData = {
      user_id: user.id,
      type_check: validatedData.type_check,
      location: validatedData.location,
      ip: ip,
      note:
        validatedData.type_check === "in"
          ? `${user.fname} ${user.lname} checked in at ${new Date().toLocaleString()} from IP: ${ip}`
          : `${user.fname} ${user.lname} checked out at ${new Date().toLocaleString()} from IP: ${ip}`,
      latitude: validatedData.latitude,
      longitude: validatedData.longitude,
    };

    const checkTime = await prisma.check_time.create({
      data: checkTimeData,
    });

    if (validatedData.type_check === "out") {
      const checkInToday = await prisma.check_time.findFirst({
        where: {
          user_id: user.id,
          type_check: "in",
          time: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
        orderBy: {
          time: "asc",
        },
      });


      if (checkInToday && checkInToday.time) {
        const durationMs = new Date().getTime() - checkInToday.time.getTime();
        const durationHours = durationMs / (1000 * 60 * 60);

        await prisma.student_profile.updateMany({
          where: { user_id: user.id },
          data: {
            hours: {
              increment: parseFloat(durationHours.toFixed(2)),
            },
          },
        });
      }
    }

    res.status(httpStatus.OK).json({
      message:
        validatedData.type_check === "in"
          ? "Check-in successful"
          : "Check-out successful",
      data: checkTime,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "Validation error",
        errors: error.errors,
      });
    } else if (error instanceof Error) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "Something went wrong!",
        errors: error.message,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  }
};


export const getTimeCheck = async (req: Request, res: Response) => {
  try {
    const { type_check, sort = "time", order = "desc", user_id, page = "1",
      limit = "10", } = req.query;

    const typeCheck = type_check ? String(type_check) : undefined;
    const userID = user_id ? Number(user_id) : undefined;

    const checkTime = await prisma.check_time.findMany({
      where: {
        type_check: typeCheck,
        user_id: userID,
      },
      orderBy: {
        [sort as string]: order === "asc" ? "asc" : "desc",
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    if (checkTime.length === 0) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "No check time records found.",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      message: "Check time data fetched successfully.",
      data: checkTime,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "Something went wrong!",
        errors: error,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  }
};

export const getCheckTimeSummary = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const studentProfile = await prisma.student_profile.findUnique({
      where: { user_id: Number(userId) },
    });

    if (!studentProfile?.start_date || !studentProfile?.end_date) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "ยังไม่มีข้อมูลวันเริ่มและสิ้นสุดการฝึกงาน",
      });
      return
    }

    const startDate = startOfDay(studentProfile.start_date);
    const endDate = endOfDay(studentProfile.end_date);

    const totalDays =
      Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    // ------------------ ดึงวันที่เช็กอิน ------------------
    const checkIns = await prisma.check_time.findMany({
      where: {
        user_id: Number(userId),
        type_check: "in",
        time: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        time: true,
      },
    });

    const uniqueCheckInDays = new Set(
      checkIns
        .filter((c) => c.time !== null)
        .map((c) => startOfDay(c.time!).toDateString())
    );

    // ------------------ ดึงวันที่ลา ------------------
    const approvedLeaves = await prisma.leave_request.findMany({
      where: {
        user_id: Number(userId),
        status: "approved",
        leave_datetime: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        leave_datetime: true,
      },
    });

    const uniqueLeaveDays = new Set(
      approvedLeaves
        .filter((l) => l.leave_datetime !== null)
        .map((l) => startOfDay(l.leave_datetime!).toDateString())
    );

    // ------------------ คำนวณวันไม่มาและไม่ลา ------------------
    const allDates = Array.from({ length: totalDays }, (_, i) => {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      return d.toDateString();
    });

    const daysAbsent = allDates.filter(
      (d) => !uniqueCheckInDays.has(d) && !uniqueLeaveDays.has(d)
    );

    res.status(httpStatus.OK).json({
      message: "สรุปการเข้าเช็กชื่อสำเร็จ",
      start_date: startDate,
      end_date: endDate,
      total_days: totalDays,
      days_checked_in: uniqueCheckInDays.size,
      check_in_dates: Array.from(uniqueCheckInDays),
      days_leave: uniqueLeaveDays.size,
      leave_dates: Array.from(uniqueLeaveDays),
      days_absent: daysAbsent.length,
      absent_dates: daysAbsent,
    });
  } catch (error) {
    console.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "ไม่สามารถสรุปข้อมูลการเช็กชื่อได้",
    });
  }
};


