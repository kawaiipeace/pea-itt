import { z } from "zod";

export const leaveRequestSchema = z.object({
  reason: z.string().min(1, "leave name is required"),
  file: z.instanceof(Buffer, { message: "Input not instance of Buffer" }).optional()
});

export const approvLeaveRequestSchema = z.object({
  status: z.enum(["pending", "approved", "rejected"])
});