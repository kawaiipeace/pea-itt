import * as departmentModel from "./deptModels";
import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";
import { logAction } from "../../common/utils/logger";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const validatedData = departmentModel.departmentSchema.parse(req.body);

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    if (req.user.role !== 3) {
      res.status(httpStatus.FORBIDDEN).json({
        error: "You do not have permission to create a department.",
      });
      return;
    }

    const department = await prisma.department.create({
      data: validatedData,
    });

    await logAction({
      admin_id: req.user.id,
      action: `Create department: ${validatedData.dept_name} by ${req.user.id}`,
    });

    res.status(httpStatus.CREATED).json({
      message: "Department created successfully",
      data: department,
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

export const getAllDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany();

    if (departments.length === 0) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "No departments found",
        data: [],
      });
    }

    res.status(httpStatus.OK).json({
      message: "Departments retrieved successfully",
      data: departments,
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

export const getDepartmentbyId = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;
    const department = await prisma.department.findUnique({
      where: { dept_id: Number(departmentId) },
    });

    if (!department) {
      res.status(httpStatus.NOT_FOUND).json({
        message: `Department id: ${departmentId} not found`,
        data: null,
      });
    }

    res.status(httpStatus.OK).json({
      message: "Department retrieved successfully",
      data: department,
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

export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;
    const validateData = departmentModel.departmentSchema.parse(req.body);

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    if (req.user.role !== 3) {
      res.status(httpStatus.FORBIDDEN).json({
        error: "You do not have permission to update a department.",
      });
      return;
    }

    const existingDepartment = await prisma.department.findUnique({
      where: { dept_id: Number(departmentId) },
    });

    if (!existingDepartment) {
      res.status(httpStatus.NOT_FOUND).json({
        message: `Department id: ${departmentId} not found`,
        data: null,
      });
      return;
    }

    await prisma.department.update({
      where: { dept_id: Number(departmentId) },
      data: validateData,
    });

    await logAction({
      admin_id: req.user.id,
      action: `Update department: ${validateData.dept_name} by ${req.user.id}`,
    });

    res.status(httpStatus.OK).json({
      message: "Department updated successfully",
      data: validateData,
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
}

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const departmentId = req.params.id;

    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    if (req.user.role !== 3) {
      res.status(httpStatus.FORBIDDEN).json({
        error: "You do not have permission to delete a department.",
      });
      return;
    }

    const existingDepartment = await prisma.department.findUnique({
      where: { dept_id: Number(departmentId) },
    });

    if (!existingDepartment) {
      res.status(httpStatus.NOT_FOUND).json({
        message: `Department id: ${departmentId} not found`,
        data: null,
      });
      return;
    }

    await prisma.department.delete({
      where: { dept_id: Number(departmentId) },
    });

    await logAction({
      admin_id: req.user.id,
      action: `Delete department id: ${departmentId} by ${req.user.id}`,
    });

    res.status(httpStatus.OK).json({
      message: "Department deleted successfully",
      data: null,
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
