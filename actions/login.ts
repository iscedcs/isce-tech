"use server";
import { signIn } from "@/auth";
import { loginFormSchema } from "@/lib/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (
values: z.infer<typeof loginFormSchema>,
callbackUrl?: string | null,
) => {
    const validatedFields = loginFormSchema.safeParse(values);

    if(!validatedFields.success){
        return { success: 'Invalid Fields! Try again'};
    }

    const {email, password} = validatedFields.data;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
      return { success: false, error: res.error || "Authentication failed" };
    }

      console.log(res);
      return {
          success: true,
        message: "Successfully Signed in!",
        redirectUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
   };
    }  catch (error) {
         console.error("Login error:", error);
        if (error instanceof AuthError) {
             switch (error.type) {
                  case "CredentialsSignin":
          return { success: false, error: "Invalid credentials" };
                  default:
          return { success: false, error: "Something went wrong!" };
             }
        }

    return { success: false, error: "An unexpected error occurred" };
   }
  };