import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../../../db/connection";
import { User } from "../../../../../models/User";
import { compare } from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        await connectToDatabase().catch((err) => {
          throw new Error(err);
        });

        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
