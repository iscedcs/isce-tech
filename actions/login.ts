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
        return { error: 'Invalid Fields! Try again'};
    }

    const {email, password} = validatedFields.data;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      return {
        success: "Successfully Signed in!",
        redirectUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
   };
    }  catch (error) {
        if (error instanceof AuthError) {
             switch (error.type) {
                  case "CredentialsSignin":
                       return { error: "Invalid credentials" };
                  default:
                       return { error: "Something went wrong!" };
             }
        }

        throw error;
   }
  };