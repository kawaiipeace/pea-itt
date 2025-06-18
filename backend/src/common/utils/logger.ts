import prisma from "../config/prismaClient";

interface LogActionParams {
  admin_id: number;
  action: string;
}

export const logAction = async ({ admin_id, action }: LogActionParams) => {
  try {
    await prisma.admin_log.create({
      data: {
        admin_id,
        action,
      },
    });
  } catch (error) {
    console.error("Failed to log action:", error);
  }
};
