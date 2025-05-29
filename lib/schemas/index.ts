import { z } from "zod";


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character");

  
export const loginFormSchema = z.object({
    email: z.string().email({
      message: "Email address is not valid.",
    }),
    password: z.string().min(2, { message: "Please enter a valid password" }),
  });
  export const signUpFormSchema = z.object({
    firstname: z
      .string({
        required_error: "This field cannot be empty",
      })
      .min(2, {
        message: "First name must be greater than 2 characters.",
      }),
    lastname: z
      .string({
        required_error: "This field cannot be empty",
      })
      .min(2, {
        message: "Last name must be greater than 2 characters.",
      }),
  
    email: z.string().email({
      message: "Email address is not valid.",
    }),
    phonenumber: z
    .string({
      required_error: "Please enter phone number.",
    })
    .regex(/^\+234[789][01]\d{8}$/, "Phone format (+2348012345678)"),
    
    termsCheck: z.optional(z.boolean().default(false)),
    password: z
      .object({
        password: passwordSchema,
        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // This ensures the error appears under confirmPassword
      }),
  });
  