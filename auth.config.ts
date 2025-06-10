import axios from "axios";
import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AUTH_API, URLS } from "./lib/const";
import { loginFormSchema } from "./lib/schemas";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginFormSchema.safeParse(credentials);
        const url = `${AUTH_API}${URLS.auth.sign_in}`;

        if (!validatedFields.success) {
          console.error("Validation failed:", validatedFields.error);
          return null;
        }

        const { email, password } = validatedFields.data;

        try {
          const res = await axios.post(
            url,
            { email, password },
            { timeout: 10000 } 
          );

          console.log("Sign-in response:", res.data);

          const userData = res.data.data || res.data.user; 
          const accessToken = userData?.accessToken || res.data.accessToken;

          if (userData && userData.id && userData.email) {
            return {
              id: userData.id,
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              userType: userData.userType || "USER",
              accessToken: accessToken || null,
            };
          }

          console.error("No valid user data in response:", res.data);
          return null;
        } catch (error: any) {
          console.error("Authorize error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;