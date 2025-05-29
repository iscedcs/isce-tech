import axios from "axios";
import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AUTH_API, URLS } from "./lib/const";
import { loginFormSchema } from "./lib/schemas";





export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginFormSchema.safeParse(credentials);
        const url = `${AUTH_API}${URLS.auth.sign_in}`;

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          try {
            const res = await axios.post<IAuthResponse>(url, {
              email,
              password,
            });
            const accessToken = res.data.data.accessToken;
            // const user = jwtDecode<UserProps>(access_token);
            const user = res.data.data;
            console.log(user);
            if (user) {
              return {
                id: user.id,
                email: user.email,
                userType: user.userType,
                accessToken: accessToken,
              };
            }
            return null;
          } catch (error: any) {
            console.error("Login error:", error.message);
            return null;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
