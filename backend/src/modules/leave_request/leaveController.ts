import * as leaveModels from "./leaveModels";
import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";

export const createLeaveRequest = async (req: Request, res: Response) => {
  try {
    const validatedData = leaveModels.leaveRequestSchema.parse({
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

export const getLeaveRequests = async (req: Request, res: Response) => {
  try {
    const { user_id, mentor_id, status, sort = "leave_datetime", order = "desc" } = req.query;

    const Status = status ? String(status) : undefined;
    const userId = user_id ? Number(user_id) : undefined;
    const mentorUserId = mentor_id ? Number(mentor_id) : undefined;

    let studentUserIds: number[] | undefined = undefined;

    // ถ้ามี mentor_id → ดึง user_id ของ student ที่ mentor ดูแล
    if (mentorUserId) {
      const mentor = await prisma.mentor_profile.findUnique({
        where: { user_id: mentorUserId },
        include: {
          student_profile: {
            select: { user_id: true },
          },
        },
      });

      if (!mentor || mentor.student_profile.length === 0) {
        res.status(httpStatus.NOT_FOUND).json({
          message: "No students found for this mentor",
        });
        return;
      }

      studentUserIds = mentor.student_profile.map((sp) => sp.user_id);
    }

    const whereCondition: any = {
      ...(Status ? { status: Status } : {}),
    };

    if (userId) {
      whereCondition.user_id = userId;
    } else if (studentUserIds) {
      whereCondition.user_id = { in: studentUserIds };
    }

    const leaveRequests = await prisma.leave_request.findMany({
      where: whereCondition,
      select: {
        id: true,
        user_id: true,
        leave_datetime: true,
        reason: true,
        status: true,
        user_leave_request_user_idTouser: {
          select: {
            fname: true,
            lname: true,
          },
        },
      },
      orderBy: {
        [sort as string]: order === "asc" ? "asc" : "desc",
      },
    });

    res.status(httpStatus.OK).json({
      message: "Leave requests retrieved successfully",
      data: leaveRequests,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
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



export const getLeaveRequestByID = async (req: Request, res: Response) => {
  try {
    const leaveRequest = await prisma.leave_request.findUnique({
      where: {
        id: parseInt(req.params.id, 10),
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

export const updateLeaveRequest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedData = leaveModels.approvLeaveRequestSchema.parse(req.body);

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    const leaveRequest = await prisma.leave_request.update({
      where: { id: parseInt(id, 10) },
      data: {
        status: validatedData.status,
        approver: Number(req.user.id),
        approved_at: new Date(),
      },
      select: {
        id: true,
        user_id: true,
        leave_datetime: true,
        reason: true,
        status: true,
      },
    });

    res.status(httpStatus.OK).json({
      message: `Leave request ${validatedData.status} successfully`,
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

export const leaveRequestPicture = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const leaveRequest = await prisma.leave_request.findUnique({
      where: { id },
      select: { file: true },
    });

    if (!leaveRequest || !leaveRequest.file) {
      res.status(httpStatus.NOT_FOUND).send("Image not found");
    }
    res.setHeader("Content-Type", "image/jpeg");
    res.send(leaveRequest?.file);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Server error" });
  }
};
