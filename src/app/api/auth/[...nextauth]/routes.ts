import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '../../../../../db/connection' 
import { User,UserModel } from '../../../../../models/User'


const options: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" , placeholder:"me@gmail.com"},
                password: { label: "Password", type: "password" }
            },
            // @ts-ignore
            async authorize(credentials, req) {
                await connectToDatabase().catch(err => { throw new Error(err) })

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordCorrect = await compare(credentials!.password, user.password)

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }

                return user
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as UserModel
            session.user = user

            return session
        }
    }
}

export default NextAuth(options)

