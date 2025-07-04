import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as authModels from "./authModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { logAction } from "../../common/utils/logger";
import fs from "fs";
import path from "path";


dotenv.config();

export const registerStu = async (req: Request, res: Response) => {
  try {

    const defaultImagePath = path.join(__dirname, "../../common/assets/watt-de.jpeg");
    const pictureBuffer = req.file?.buffer || fs.readFileSync(defaultImagePath);

    const validatedData = authModels.RegisterStuSchema.parse({
      ...req.body,
      picture: pictureBuffer,
    });

    const existingUser = await prisma.user.findUnique({
      where: {
        email: validatedData.email,
      },
    });

    if (existingUser) {
      res.status(httpStatus.CONFLICT).json({
        message: "Email already exists",
      });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password_hash, salt);

    await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          role_id: 1,
          department_id: validatedData.department_id,
          fname: validatedData.fname,
          lname: validatedData.lname,
          phone_number: validatedData.phone_number,
          email: validatedData.email,
          password_hash: hashedPassword,
        },
      });

      await tx.student_profile.create({
        data: {
          user_id: user.id,
          mentor_id: validatedData.mentor_id,
          picture: validatedData.picture,
          university: validatedData.university,
          start_date: validatedData.start_date,
          end_date: validatedData.end_date,
        },
      });
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
        errors: error.message,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  }
};

export const registerMentor = async (req: Request, res: Response) => {
  try {
    const validateData = authModels.createMentorSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: validateData.email,
      },
    });

    if (existingUser) {
      res.status(httpStatus.CONFLICT).json({
        message: "Email already exists",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validateData.password_hash, salt);

    const userData = {
      role_id: 2, // role_id : 2 => พี่เลี้ยง
      department_id: validateData.department_id,
      fname: validateData.fname,
      lname: validateData.lname,
      phone_number: validateData.phone_number,
      email: validateData.email,
      password_hash: hashedPassword,
    };

    const user = await prisma.user.create({
      data: userData,
    });

    await prisma.mentor_profile.create({
      data: {
        user_id: user?.id,
      },
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
      action: `Registered mentor: ${validateData.fname} ${validateData.lname} (email: ${validateData.email})`,
    });

    res.status(httpStatus.CREATED).json({
      message: "Mentor registered successfully",
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

export const login = async (req: Request, res: Response) => {
  try {
    const validateData = authModels.loginSchema.parse(req.body);

    let user;

    if (validateData.email) {
      user = await prisma.user.findUnique({
        where: { email: validateData.email },
      });
    } else if (validateData.phone_number) {
      user = await prisma.user.findUnique({
        where: { phone_number: validateData.phone_number },
      });
    }

    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "Invalid email or password",
      });
      return;
    }

    if (!user.password_hash) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "User has no password set",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      validateData.password_hash,
      user.password_hash
    );

    if (!isPasswordValid) {
      res.status(httpStatus.UNAUTHORIZED).json({
        message: "Invalid email or password",
      });
      return;
    }

    const payloadUser = {
      id: user.id,
      role: user.role_id,
    };

    //Create JWT token
    const token = jwt.sign(payloadUser, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "strict",
    });

    res.status(httpStatus.OK).json({
      message: `Login successful. Welcome back, ${user.fname}!`,
      token: token,
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

export const me = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error:
          "Oops! We couldn't find your user info. Please log in again to continue.",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        role_id: true,
        department_id: true,
        fname: true,
        lname: true,
        phone_number: true,
        email: true,
        student_profile: {
          select: {
            id: true,
            mentor_id: true,
            university: true,
            start_date: true,
            end_date: true,
          },
        },
        mentor_profile: {
          select: {
            id: true,
          }
        }
      },
    });

    res.status(httpStatus.OK).json({
      message: "Hello ,World",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong!",
      });
    }
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(httpStatus.OK).json({
      message: "Logout successful",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
      });
    }
  }
};
