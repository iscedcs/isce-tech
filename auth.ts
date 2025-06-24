import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  pages: {
		signIn: '/login',
		error: '/error',
	},
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.firstName,
        token.name = user.lastName,
        token.userType = user.userType;
        token.accessToken = user.accessToken;
      }
      // console.log("JWT Callback - User:", user, "Token:", token);
      return token;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.firstName = token.name as string;
        session.user.lastName = token.name as string;
        session.user.userType = token.userType as string;
        session.user.accessToken = token.accessToken as string;
      }
      // console.log("Session Callback - Session:", session);
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
