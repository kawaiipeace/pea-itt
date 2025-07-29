import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import { number, ZodError } from "zod";
import httpStatus from "http-status-codes";
import * as notiModels from "./notiModels";

export const creatNotification = async (req: Request, res: Response) => {
    try {
        const validatedData = notiModels.createNotificationSchema.parse(req.body);
        const notification = await prisma.notification.create({
            data: validatedData,
        });
        res.status(httpStatus.CREATED).json({
            message: "Notification created successfully",
            data: notification,
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

export const getNotification = async (req: Request, res: Response) => {
  try {
    const { user_id, is_read }: notiModels.GetNotificationQuery = req.query;

    const userID = user_id ? Number(user_id) : undefined;
    const isRead =
      typeof is_read === "string"
        ? is_read === "true"
        : typeof is_read === "boolean"
        ? is_read
        : undefined;

    const mynoti = await prisma.notification.findMany({
      where: {
        ...(userID !== undefined && { user_id: userID }),
        ...(isRead !== undefined && { is_read: isRead }),
      },
    });

    if (mynoti.length === 0) {
      res.status(httpStatus.NOT_FOUND).json({
        message: "No notifications found",
        data: [],
      });
      return;
    }

    res.status(httpStatus.OK).json({
      message: "Notifications fetched successfully",
      data: mynoti,
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

export const readNotification = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const notification = await prisma.notification.update({
            where: {
                id: Number(id),
            },
            data: {
                is_read: true,
            },
        });

        res.status(httpStatus.OK).json({
            message: "Notification marked as read",
            data: notification
        })


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
}