import { handlers } from "@/auth" // Referring to the auth.ts we just created


// app/api/auth/[...nextauth]/route.ts

import { type NextRequest, NextResponse } from "next/server";

import {
  auth,
  instagramFetchInterceptor,
} from "@/auth";

const originalFetch = fetch;

export async function POST(req: NextRequest) {
  const { GET, POST } = handlers
  return await POST(req);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  if (url.pathname === "/api/auth/callback/instagram") {
    const session = await auth();
    if (!session?.user) {
      /* Prevent user creation for instagram access token */
      const signInUrl = new URL("/?modal=sign-in", req.url);
      return NextResponse.redirect(signInUrl);
    }

     /* Intercept the fetch request to patch access_token request to be oauth compliant */
    global.fetch = instagramFetchInterceptor(originalFetch);
    const { GET, POST } = handlers
    const response = await GET(req);
    global.fetch = originalFetch;
    return response;
  }
  const { GET, POST } = handlers
  return await GET(req);
}