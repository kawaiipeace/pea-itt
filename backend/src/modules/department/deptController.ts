import * as departmentModel from "./deptModels";
import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";

export const createDepartment = async (req: Request, res: Response) => {
  try {
    const validatedData = departmentModel.departmentSchema.parse(req.body);

    const department = await prisma.department.create({
      data: validatedData,
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
