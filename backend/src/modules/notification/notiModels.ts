import { z } from "zod";

export const createNotificationSchema = z.object({
    user_id: z.number({
        required_error: "User ID is required",
        invalid_type_error: "User ID must be a number",
    }),
    title: z.string({
        required_error: "Title is required",
    }).max(255, "Title must be 255 characters or less"),
    message: z.string({
        required_error: "Message is required",
    }),
});

export interface GetNotificationQuery {
    user_id?: number;
    is_read?: boolean
}