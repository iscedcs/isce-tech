import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

// Initialize authentication with the provided configuration
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  // Check if the user is logged in by verifying if the auth object exists in the request
  const isLoggedIn = !!req.auth;

  // Check if the route is related to API authentication
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);

  // Check if the route is a public route
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  // Check if the route is an authentication route (e.g., login or signup pages)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Check if the current route is the blog page (for public access)
  const isBlogPage = publicRoutes.includes("/blog");

  // Check if the current route is related to courses
  const isStoreRoutes = nextUrl.pathname.startsWith("/store");

  // If the route is related to API authentication, allow it to proceed
  if (isApiAuthRoutes) {
    return;
  }

  // If the user is already logged in and tries to access an auth route, redirect to the default page
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  // If the user is not logged in and tries to access a protected route (not public, not courses, not blog)
  if (!isLoggedIn && !isPublicRoutes && !isStoreRoutes && !isBlogPage) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    // Encode the callback URL and redirect to the login page with the callback URL as a query parameter
    const encodedcallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedcallbackUrl}`, nextUrl)
    );
  }

  // Create response with additional security headers
  const response = NextResponse.next();

  // Additional security headers (complementing next.config.js headers)
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Download-Options", "noopen");

  // Allow the request to proceed if no conditions above were met
  return response;
});

// Configuration for the middleware to match all routes except static files and Next.js internals
export const config = {
  matcher: [
    "/blog/:path*",
    "/store/:path*",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
