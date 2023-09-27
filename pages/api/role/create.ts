import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connection";
import { Role } from "@/models/Role";

connectToDatabase();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, menuId } = req.body;

      // Create a new role
      const role = new Role({ name, menus: menuId });
      await role.save();

      res.status(201).json({ message: "role created successfully.", role });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the role." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
