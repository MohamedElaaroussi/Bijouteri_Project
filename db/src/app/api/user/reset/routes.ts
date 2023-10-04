import { User } from '../../../../../models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../db/connection';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"

connectToDatabase()

export default async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    if (req.method === "PUT") {

      const { password } = req.body

      if (password.length < 6) {
        return res
          .status(400)
          .json({ error: "Password needs to be at least 6 characters" })
      }

      if (token) {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
      }

      const user = await User.findById(req.user._id)

      if (user) {
        user.password = await bcrypt.hash(password, 12)

        user.resetToken = undefined
        await user.save()

        return res.status(200).json({ message: "success in updating user" })
      }
    }
  } catch (error) {
    console.log(error)
  }
}
