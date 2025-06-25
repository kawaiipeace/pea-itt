import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { number, ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as checkModels from "./checkModels";

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

    const checkTimeData = {
      user_id: user.id,
      type_check: validatedData.type_check,
      location: validatedData.location,
      note:
        validatedData.type_check === "in"
          ? `${user.fname} ${
              user.lname
            } checked in at ${new Date().toLocaleString()}`
          : `${user.fname} ${
              user.lname
            } checked out at ${new Date().toLocaleString()}`,
      latitude: validatedData.latitude,
      longitude: validatedData.longitude,
    };

    const checkTime = await prisma.check_time.create({
      data: checkTimeData,
    });

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
    const { type_check, sort = "time", order = "desc", user_id } = req.query;

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
