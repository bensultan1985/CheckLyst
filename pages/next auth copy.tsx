import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma, sessionService } from "../middleware/services";
import { v4 as uuidv4 } from "uuid";
import Cookies from "cookies";
import { encode, decode } from "next-auth/jwt";

export default NextAuth({
  //set to "jwt" because credentials login with db session is not supported by NextAuth - Ben
  //https://stackoverflow.com/questions/72090328/next-auth-credentials-not-returning-session-and-not-storing-session-and-account
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  secret: process.env.NEXTAUTH_URL,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/Login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "jsmith@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email: string = req?.body?.username;
        const password = req?.body?.password;
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        // await prisma.$disconnect();

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
  // debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (credentials) {
        if (user) {
          const sessionToken = uuidv4(); // Implement a function to generate the session token (you can use randomUUID as an example)
          const sessionExpiry = new Date(
            new Date().getTime() + 30 * 24 * 60 * 60 * 1000
          );

          await sessionService.createSession({
            sessionToken: sessionToken,
            userId: user.id,
            expires: sessionExpiry,
          });

          const cookies = new Cookies(req, res);

          cookies.set("next-auth.session-token", sessionToken, {
            expires: sessionExpiry,
          });
        }
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.user.id = token.id;

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      token.userId = user?.id;
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
