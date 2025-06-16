import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as authModels from "./authModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerStu = async (req: Request, res: Response) => {
  try {
    const validatedData = authModels.RegisterStuSchema.parse({
      ...req.body,
      picture: req.file?.buffer,
    });

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password_hash, salt);

    const userData = {
      role_id: 1, // role_id : 1 => นักเรียน
      department_id: validatedData.department_id,
      fname: validatedData.fname,
      lname: validatedData.lname,
      phone_number: validatedData.phone_number,
      email: validatedData.email,
      password_hash: hashedPassword,
    };

    const user = await prisma.user.create({
      data: userData,
    });

    const stuData = {
      user_id: user?.id,
      student_id: validatedData.student_id,
      mentor_id: validatedData.mentor_id,
      picture: validatedData.picture,
      university: validatedData.university,
      start_date: validatedData.start_date,
      end_date: validatedData.end_date,
    };

    await prisma.student_profile.create({
      data: stuData,
    });

    res.status(httpStatus.CREATED).json({
      message: "Student registered successfully",
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
