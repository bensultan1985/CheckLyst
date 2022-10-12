import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials, "cred");
        const user = { id: 1, name: "John Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        return profile.email_verified;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) {
      /* on signout */
    },
    async createUser(message) {
      /* user created */
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
    },
    async session(message) {
      /* session is active */
    },
  },
});
