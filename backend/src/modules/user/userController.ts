import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import httpStatus from "http-status-codes";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
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
        role: {
          select: {
            id: true,
            name: true,
          },
        },
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
        role: {
          select: {
            id: true,
            name: true,
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
    const { department_id } = req.query;

    const departmentId = department_id ? Number(department_id) : undefined;

    const mentors = await prisma.user.findMany({
      where: {
        role_id: 2, // MENTOR role
        department_id: departmentId,
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
