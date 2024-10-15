// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Add accessToken property
  }

  interface JWT {
    accessToken?: string; // Add accessToken property
    refreshToken?: string; // Add refreshToken property
    expires?: number; // Add expiration time property
  }
}
