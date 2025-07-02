import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import httpStatus from "http-status-codes";
import { ZodError } from "zod";
import * as usersModels from "./userModels";
import { logAction } from "../../common/utils/logger";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { department_id, mentor_id } = req.query;

    const departmentId = department_id ? Number(department_id) : undefined;
    const mentorId = mentor_id ? Number(mentor_id) : undefined;

    const users = await prisma.user.findMany({
      where: {
        student_profile: {
          ...(mentorId ? { mentor_id: mentorId } : {}),
        },
        ...(departmentId ? { department_id: departmentId } : {}),
      },
      include: {
        student_profile: true,
        mentor_profile: true,
      },
      orderBy: {
        fname: "asc",
      },
    });

    res.status(httpStatus.OK).json({
      success: true,
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve users",
      error: "Internal server error",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        role_id: true,
        department_id: true,
        fname: true,
        lname: true,
        email: true,
        phone_number: true,
        created_at: true,
        department: {
          select: {
            dept_id: true,
            dept_name: true,
          },
        },
        student_profile: {
          select: {
            id: true,
            university: true,
            start_date: true,
            end_date: true,
            picture: true,
            mentor_id: true,
          },
        },
        mentor_profile: {
          select: {
            id: true,
            user_id: true,
            student_profile:
            {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      data: user,
      message: "User retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve user",
      error: "Internal server error",
    });
  }
};

export const getMentors = async (req: Request, res: Response) => {
  try {
    const { department_id, user_id, mentor_id } = req.query;


    const departmentId = department_id ? Number(department_id) : undefined;
    const userId = user_id ? Number(user_id) : undefined;
    const mentorId = mentor_id ? Number(mentor_id) : undefined;

    const mentors = await prisma.user.findMany({
      where: {
        role_id: 2, // MENTOR role
        ...(departmentId !== undefined && { department_id: departmentId }),
        ...(userId !== undefined && { id: userId }),
        ...(mentorId !== undefined && {
          mentor_profile: {
            id: mentorId,
          },
        }),
      },
      select: {
        id: true,
        fname: true,
        lname: true,
        email: true,
        phone_number: true,
        department: {
          select: {
            dept_id: true,
            dept_name: true,
          },
        },
        mentor_profile: {
          select: {
            id: true,
          },
        },
      },
    });

    if (mentors.length === 0) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "No mentors found",
        data: null,
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      data: mentors,
      message: "Mentors retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to retrieve mentors",
      error: "Internal server error",
    });
  }
};

export const getStuPicture = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(httpStatus.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const intern = await prisma.student_profile.findUnique({
      where: { id },
      select: { picture: true },
    });

    if (!intern || !intern.picture) {
      res.status(httpStatus.NOT_FOUND).send("Image not found");
    }
    res.setHeader("Content-Type", "image/jpeg");
    res.send(intern?.picture);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Server error" });
  }
};

export const updateUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        message:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    if (userId !== req.user.id) {
      res.status(httpStatus.FORBIDDEN).json({
        message: "เฉพาะเจ้าของบัญชี (ตัวเอง) เท่านั้นที่มีสิทธิ์อัปเดตข้อมูล",
      });
      return;
    }

    const validatedData = usersModels.updateUserSchema.parse({
      ...req.body,
      picture: req.file?.buffer,
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { student_profile: true },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
    }

    // ตรวจสอบอีเมลซ้ำ
    const existingEmail = await prisma.user.findFirst({
      where: {
        email: validatedData.email,
        NOT: { id: userId },
      },
    });

    if (existingEmail) {
      res.status(httpStatus.CONFLICT).json({
        message: "Email already exists",
      });
    }

    // ตรวจสอบเบอร์โทรซ้ำ
    const existingPhone = await prisma.user.findFirst({
      where: {
        phone_number: validatedData.phone_number,
        NOT: { id: userId },
      },
    });

    if (existingPhone) {
      res.status(httpStatus.CONFLICT).json({
        message: "Phone number already exists",
      });
    }

    const updatedData = await prisma.$transaction(async (tx) => {
      const updatedUser = await tx.user.update({
        where: { id: userId },
        data: {
          fname: validatedData.fname,
          lname: validatedData.lname,
          email: validatedData.email,
          phone_number: validatedData.phone_number,
        },
        select: {
          fname: true,
          lname: true,
          email: true,
          phone_number: true,
          department_id: true,
        },
      });

      const updatedStudentProfile = await tx.student_profile.update({
        where: { user_id: userId },
        data: {
          university: validatedData.university,
          start_date: validatedData.start_date,
          end_date: validatedData.end_date,
          picture: validatedData.picture,
        },
        select: {
          university: true,
          mentor_id: true,
          start_date: true,
          end_date: true,
        },
      });

      const data = {
        ...updatedUser,
        ...updatedStudentProfile,
      };

      return data;
    });

    res.status(httpStatus.OK).json({
      message: "User and student profile updated successfully",
      data: updatedData,
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

export const updateMentor = async (req: Request, res: Response) => {
  try {

    const validateData = usersModels.updateMentorSchema.parse(req.body);
    const { id } = req.params;
    const userId = parseInt(id);

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        message:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    if (userId !== req.user.id) {
      res.status(httpStatus.FORBIDDEN).json({
        message: "เฉพาะเจ้าของบัญชี (ตัวเอง) เท่านั้นที่มีสิทธิ์อัปเดตข้อมูล",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { mentor_profile: true },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
      return;
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: validateData.email,
        NOT: { id: userId },
      },
    });

    if (existingEmail) {
      res.status(httpStatus.CONFLICT).json({
        message: "Email already exists",
      });
      return;
    }

    const existingPhone = await prisma.user.findFirst({
      where: {
        phone_number: validateData.phone_number,
        NOT: { id: userId },
      },
    });

    if (existingPhone) {
      res.status(httpStatus.CONFLICT).json({
        message: "Phone number already exists",
      });
      return;
    }

    const updatedData = await prisma.$transaction(async (tx) => {
      const updatedUser = await tx.user.update({
        where: { id: userId },
        data: {
          fname: validateData.fname,
          lname: validateData.lname,
          email: validateData.email,
          phone_number: validateData.phone_number,
        },
        select: {
          fname: true,
          lname: true,
          email: true,
          phone_number: true,
        },
      });
    });

    res.status(httpStatus.OK).json({
      message: "User and mentor profile updated successfully",
      data: updatedData,
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
}

export const updateDeptMent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    const validatedData = usersModels.updateDeptMentSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student_profile: true,
      },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        department_id: validatedData.department_id,
      },
    });

    if (validatedData.mentor_id && user?.student_profile) {
      await prisma.student_profile.update({
        where: {
          user_id: userId,
        },
        data: {
          mentor_id: validatedData.mentor_id,
        },
      });
    }

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    await logAction({
      admin_id: req.user.id,
      action: `Updated department and/or mentor for user ID ${userId}`,
    });

    res.status(httpStatus.OK).json({
      message: "User department and/or mentor updated successfully",
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student_profile: true,
        mentor_profile: {
          include: {
            student_profile: true,
          },
        },
      },
    });

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "User not found",
      });
      return;
    }

    await prisma.$transaction(async (tx) => {
      if (user.student_profile) {
        await tx.student_profile.delete({
          where: { user_id: userId },
        });
      }

      if (user.mentor_profile) {
        await tx.student_profile.updateMany({
          where: { mentor_id: user.mentor_profile.id },
          data: { mentor_id: null },
        });

        await tx.mentor_profile.delete({
          where: { user_id: userId },
        });
      }

      await tx.user.delete({
        where: { id: userId },
      });
    });

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    await logAction({
      admin_id: req.user.id,
      action: `Deleted user: ${user.fname ?? ""} ${user.lname ?? ""} (email: ${user.email ?? "N/A"
        })`,
    });

    res.status(httpStatus.OK).json({
      message: "User deleted successfully",
    });
  } catch (error) {
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
