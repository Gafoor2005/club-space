import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Instagram from "next-auth/providers/instagram"

/**
 * Define the credential authentication provider.
 * This will allow users to login using their username and password.
 */
const credentialsProvider = Credentials({
  // The name to display on the sign in form (e.g. 'Username/Password')
  name: "Credentials",
  // The credentials validation function
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    // Add your logic here to validate the user credentials
    // For example, you can query your database to check if the user exists
    const { username, password } = credentials;

    // Example using a fictional database query
    // const user = await fetchYourDatabase(username, password);
    const user = {"user":"noob","email":"new@bee.comp","password":"1345648765","username":"theIndiDev"};
    if (user) {
      // User found, return the user object
      return user;
    } else {
      // User not found or invalid password, return null
      return null;
    }
  },
});

export default {
    providers: [
        credentialsProvider,
        Instagram,
        MicrosoftEntraID({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
            authorization: {
                params: {
                    scope: "openid profile email offline_access User.Read Files.Read Files.Read.All Files.ReadWrite Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All",
                },
            },
            token: {
                url: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
            },
        },),    
    ],

} satisfies NextAuthConfig