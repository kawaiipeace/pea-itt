import { z } from "zod";

export const updateUserSchema = z
  .object({
    fname: z.string().min(2, "First name must be at least 2 characters"),
    lname: z.string().min(2, "Last name must be at least 2 characters"),
    phone_number: z.coerce
      .string()
      .min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email format"),
    picture: z
      .instanceof(Buffer, { message: "Input not instance of Buffer" })
      .optional(),
    university: z
      .string()
      .min(2, "University name must be at least 2 characters"),
    start_date: z.coerce.date(),
    end_date: z.coerce.date(),
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "End date must be after start date",
  });

export const updateDeptMentSchema = z.object({
  department_id: z.coerce
    .number()
    .min(1, "Department ID must be greater than 0"),
  mentor_id: z.coerce.number().optional(),
});
