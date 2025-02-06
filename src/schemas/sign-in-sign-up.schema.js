import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

export const RegisterUserSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .preprocess(
        (val) => Number(val),
        z
          .number()
          .refine(
            (val) => String(val).length === 10,
            "Phone number must be of 10 digits",
          ),
      )
      .optional(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    profileImage: z.instanceof(FileList).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const LoginUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});
