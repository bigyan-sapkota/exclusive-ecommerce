import { z } from "zod";

export const UpdateProfileSchema = z.object({
  name: z.string().optional(),
  phone: z
    .preprocess(
      (val) => Number(val),
      z
        .number()
        .refine(
          (val) => String(val).length === 10,
          "Phone number must be 10 digits",
        ),
    )
    .optional(),
  password: z
    .string()
    .or(z.literal("")) // Allows an empty string as a valid input
    .optional(),
  profileImage: z
    .custom((file) => file instanceof FileList || typeof file === "string", {
      message: "Invalid file upload",
    })
    .optional(),
});
