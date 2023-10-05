import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../db/connection";
import { Role } from "../../../../models/Role";
import { getServerSession } from 'next-auth/next';
import { options } from "../auth/[...nextauth]/route";

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req,res,options);

  if (!session) {
    return res.status(403).json({ error: 'Not authenticated' });
  }
  if (req.method === "POST") {
    try {
      const { name } = req.body;

      // Create a new role
      if (!name) {
        return res.status(400).json({ error: 'Missing or invalid input data.' });
      }

      const role = new Role({ name,menus:[] });
      await role.save();

      res.status(201).json({ message: "role created successfully.", role });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the role." });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch all roles
      const roles = await Role.find().sort({ createdAt: -1 });

      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching roles.' });
    }
  }else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
