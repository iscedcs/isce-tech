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

    address: z
    .string({
      required_error: "This field cannot be empty",
    })
    .min(2, {
      message: "Address must be at least 2 characters.",
    })
    .max(100, {
      message: "Address must not be longer than 100 characters.",
    }),

     dob: z
    .string()
    .min(2, { message: "Please enter a valid event date and time" }),
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
        path: ["confirmPassword"],
      }),
  });
  

export const checkoutFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  deliveryMethod: z.enum(["pickup", "lagos-delivery", "nationwide-delivery"]),
  pickupLocation: z.string().optional(),
  paymentMethod: z.enum(["paystack"]),
}).refine(
    (data) => {
      if (data.deliveryMethod === "pickup" && !data.pickupLocation) {
        return false;
      }
      return true;
    },
    {message: "Pickup location is required for store pickup",
      path:["pickupLocation"],
    }
  );