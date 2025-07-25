import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import * as roleModels from "./roleModels";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";

export const createRole = async (req: Request, res: Response) => {
  try {
    const validatedData = roleModels.createRoleSchema.parse(req.body);

    const role = await prisma.role.create({
      data: validatedData,
    });

    res.status(httpStatus.CREATED).json({
      message: "Role created successfully",
      data: role,
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

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const data = await prisma.role.findMany();

    if (data.length === 0) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "No roles found",
        data: null,
      });
    }

    res.status(httpStatus.OK).json({
      message: "Roles retrieved successfully",
      data: data,
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
