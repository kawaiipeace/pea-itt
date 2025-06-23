import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as checkModels from "./checkModels";
import { logAction } from "../../common/utils/logger";

export const check = async (req: Request, res: Response) => {
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
