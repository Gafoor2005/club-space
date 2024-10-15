import NextAuth, { NextAuthResult } from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix,authRoutes,pubicRoutes,DEFAULT_LOGIN_REDIRECT } from "./routes";










const { auth } = NextAuth(authConfig)

export default auth( (req)=> {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = pubicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute){
        return;
    }
    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
        }
        return;
    }

    // utilizing portected routes without logging in.
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL(`/api/auth/signin?callbackUrl=${nextUrl}`,nextUrl));
    }
    return;
})

export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
}