// middleware/authenticateJWT.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import StatusCodes from "http-status-codes";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      role: string;
    };

    req.user = decoded;
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid token" });
  }
};
