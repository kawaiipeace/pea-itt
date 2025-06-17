// middleware/authorizeRoles.ts
import { Request, Response, NextFunction } from "express";
import prisma from "../config/prismaClient";
import StatusCodes from "http-status-codes";

// Role ID mapping
export const ROLE_IDS = {
  STUDENT: 1,
  MENTOR: 2,
  ADMIN: 3,
} as const;

export const authorizeRoles = (...allowedRoleIds: number[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user as { id: string; role: number };

      if (!user || !allowedRoleIds.includes(user.role)) {
        res.status(StatusCodes.FORBIDDEN).json({
          message: "Forbidden: insufficient role",
        });
      }

      const role = await prisma.role.findUnique({
        where: { id: user.role },
      });

      if (!role) {
        res.status(StatusCodes.FORBIDDEN).json({
          message: "Invalid role",
        });
      }

      next();
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error checking role authorization",
      });
    }
  };
};
