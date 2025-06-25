import * as leaveModels from "./leaveModels";
import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";

export const createLeaveRequest = async (req: Request, res: Response) => {
  try {
    const validatedData = leaveModels.leaveSchema.parse({
      ...req.body,
      file: req.file ? req.file.buffer : undefined,
    });
    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    const leaveRequest = await prisma.leave_request.create({
      data: {
        ...validatedData,
        user_id: req.user.id,
      },
    });

    res.status(httpStatus.CREATED).json({
      message: "Leave request created successfully",
      data: leaveRequest,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: "Validation error",
        errors: error,
      });
    } else if (error instanceof Error) {
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

export const getLeaveRequests = async (req: Request, res: Response) => {};

export const getLeaveRequestByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const leaveRequest = await prisma.leave_request.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!leaveRequest) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "Leave request not found",
      });
    }

    res.status(httpStatus.OK).json({
      message: "Leave request retrieved successfully",
      data: leaveRequest,
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

export const updateLeaveRequest = async (req: Request, res: Response) => {};
