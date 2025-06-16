import * as departmentModel from './departmentModels';
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
                errors: error.errors,
            });
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: "Internal server error",
            });
        }
        
    }
}
export const getAllDepartments = async (req: Request, res: Response) => {
    try {
        const departments = await prisma.department.findMany();

        res.status(httpStatus.OK).json({
            message: "Departments retrieved successfully",
            data: departments,
        });
        
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
        });
        
    }
}
export const getDepartmentbyId = async (req: Request, res: Response) => {
    try {
        const departmentId = req.params.id;
        const department = await prisma.department.findUnique({
            where: { dept_id: Number(departmentId) },
        });
        res.status(httpStatus.OK).json({
            message: "Department retrieved successfully",
            data: department,
        });
        
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
        });
        
    }
}

