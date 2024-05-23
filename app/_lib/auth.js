import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const providersAuth = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_AUTH_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return auth?.user ? true : false;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(providersAuth);
