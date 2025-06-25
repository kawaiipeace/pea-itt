import { z } from "zod";

export const checkTimeschema = z.object({
  type_check: z.enum(["in", "out"], {
    required_error: "Type of check is required",
    invalid_type_error: "Type of check must be 'in' or 'out'",
  }),
  location: z.string().optional(),
  // ip: z.string().min(1, "IP address is required"),
  latitude: z.coerce.number({
    required_error: "Latitude is required",
    invalid_type_error: "Latitude must be a number",
  }),
  longitude: z.coerce.number({
    required_error: "Longitude is required",
    invalid_type_error: "Longitude must be a number",
  }),
});
