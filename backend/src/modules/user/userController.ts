import { Request, Response } from "express";
import prisma from "../../common/config/prismaClient";
import httpStatus from "http-status-codes";
export const getAllUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
};

export const updateUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.json({ id: userId, ...updatedData });
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
