import { compare } from "bcryptjs";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/../db/connection";
import { User, UserModel } from "@/../models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "me@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        await connectToDatabase().catch((err) => {
          throw new Error(err);
        });

        // const user = await User.findOne({
        //   email: credentials?.email,
        // }).select("+password");

        // console.log(user);

        // if (!user) {
        //   throw new Error("Invalid credentials");
        // }

        // const isPasswordCorrect = await compare(
        //   credentials!.password,
        //   user.password
        // );

        // if (!isPasswordCorrect) {
        //   throw new Error("Invalid credentials");
        // }

        return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    // session: async ({ session, token }) => {
    //   const user = token.user as User;
    //   session.user = user;

    //   return session;
    // },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
