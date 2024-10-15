import NextAuth, { Session, }  from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import authConfig from "@/auth.config";



export const { handlers, signIn, signOut, auth } = NextAuth({  
  callbacks: {

    async jwt({ token, account }) {
      if(account?.type === "credentials")
        return token;

      // console.log('Account:', account); // Log account details
      if (account) {
        token.accessToken = account.access_token; 
        token.refreshToken = account.refresh_token; // Save refresh token
        token.expires = Date.now() + account.expires_in! * 1000; // Set expiration time
      }
    
      // Check if the access token is expired
      if(token.expires != undefined){
        if (Date.now() < (token.expires as number)) {
          return token; // Token is still valid
        }
      }
    
      // If expired, attempt to refresh it
      if (token.refreshToken) {
        console.log("####### token expired");
        
        const refreshedTokens = await refreshAccessToken(token.refreshToken as string); // Your function to refresh the token
        token.accessToken = refreshedTokens.access_token;
        token.expires = Date.now() + refreshedTokens.expires_in * 1000; // Update expiration time
        token.refreshToken = refreshedTokens.refresh_token || token.refreshToken; // Update refresh token if available
      }
    
      return token;
    },
    
    async session({ session, token }): Promise<Session> {
      // console.log("----------------------");
      
      // console.log("AT  : ",(token.accessToken as string));
      // console.log("RT  : ",(token.refreshToken as string).length);
      // console.log("expires  : ",(token.expires as number));
      
      if (token) {
        session.accessToken = token.accessToken as string; // Include the access token in the session
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET, // Add a secret for encryption
  ...authConfig,
})

async function refreshAccessToken(refreshToken: string) {
  const url = `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID!}/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('client_id', process.env.AZURE_AD_CLIENT_ID!);
  params.append('client_secret', process.env.AZURE_AD_CLIENT_SECRET!);
  params.append('refresh_token', refreshToken);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error);

  return data; // Should include access_token, expires_in, etc.
}
